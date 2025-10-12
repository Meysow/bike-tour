import { render, screen } from "@/__tests__/utils/test-utils";
import { WhatsAppFloatButton } from "@/components/shared/whatsapp-float-button";
import userEvent from "@testing-library/user-event";

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, "open", {
  value: mockOpen,
  writable: true,
});

// Mock siteConfig
jest.mock("@/config/site", () => ({
  siteConfig: {
    company: {
      whatsapp: "+33695964747",
    },
  },
}));

describe("WhatsAppFloatButton Component", () => {
  const defaultProps = {
    tooltip: "Contact us on WhatsApp",
    ariaLabel: "Contact RentaBikeParis on WhatsApp",
    defaultMessage: "Hello! I'm interested in your services.",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("should render the WhatsApp button", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      expect(button).toBeInTheDocument();
    });

    it("should have correct button classes", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      expect(button).toHaveClass("bg-green-500");
      expect(button).toHaveClass("rounded-full");
      expect(button).toHaveClass("w-14");
      expect(button).toHaveClass("h-14");
    });

    it("should render WhatsApp SVG icon", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const svg = screen.getByRole("button").querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass("w-8");
      expect(svg).toHaveClass("h-8");
      expect(svg).toHaveClass("text-white");
    });

    it("should be positioned fixed at bottom-right", () => {
      const { container } = render(<WhatsAppFloatButton {...defaultProps} />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass("fixed");
      expect(wrapper).toHaveClass("bottom-6");
      expect(wrapper).toHaveClass("right-6");
      expect(wrapper).toHaveClass("z-50");
    });

    it("should have pulsing animation element", () => {
      const { container } = render(<WhatsAppFloatButton {...defaultProps} />);
      const pulsingElement = container.querySelector(".animate-ping");
      expect(pulsingElement).toBeInTheDocument();
      expect(pulsingElement).toHaveClass("opacity-20");
      expect(pulsingElement).toHaveClass("bg-green-500");
      expect(pulsingElement).toHaveClass("pointer-events-none");
    });
  });

  describe("Tooltip Behavior", () => {
    it("should not show tooltip by default", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const tooltip = screen.getByText(defaultProps.tooltip);
      expect(tooltip.parentElement).toHaveClass("opacity-0");
    });

    it("should show tooltip on hover", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.hover(button);

      const tooltip = screen.getByText(defaultProps.tooltip);
      expect(tooltip.parentElement).toHaveClass("opacity-100");
    });

    it("should hide tooltip on mouse leave", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });

      await user.hover(button);
      await user.unhover(button);

      const tooltip = screen.getByText(defaultProps.tooltip);
      expect(tooltip.parentElement).toHaveClass("opacity-0");
    });

    it("should render tooltip with correct text", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      expect(screen.getByText(defaultProps.tooltip)).toBeInTheDocument();
    });

    it("should have tooltip arrow", () => {
      const { container } = render(<WhatsAppFloatButton {...defaultProps} />);
      const arrow = container.querySelector(".border-t-4");
      expect(arrow).toBeInTheDocument();
    });
  });

  describe("Button Interaction", () => {
    it("should open WhatsApp URL when clicked", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.click(button);

      expect(mockOpen).toHaveBeenCalledTimes(1);
      expect(mockOpen).toHaveBeenCalledWith(
        expect.stringContaining("https://wa.me/"),
        "_blank"
      );
    });

    it("should format WhatsApp URL correctly", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain("wa.me/33695964747");
      expect(callArgs).toContain("text=");
    });

    it("should encode message in URL", async () => {
      const user = userEvent.setup();
      const messageWithSpaces = "Hello World! How are you?";
      render(
        <WhatsAppFloatButton
          {...defaultProps}
          defaultMessage={messageWithSpaces}
        />
      );

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain("Hello%20World");
    });

    it("should remove non-numeric characters from phone number", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain("33695964747");
      expect(callArgs).not.toContain("+");
    });

    it("should scale up on hover", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      const buttonWrapper = button.parentElement as HTMLElement;

      expect(buttonWrapper).toHaveClass("scale-100");

      await user.hover(button);
      expect(buttonWrapper).toHaveClass("scale-110");
    });
  });

  describe("Accessibility", () => {
    it("should have proper aria-label", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      expect(button).toHaveAttribute("aria-label", defaultProps.ariaLabel);
    });

    it("should be keyboard accessible", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButton {...defaultProps} />);

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });

      button.focus();
      expect(button).toHaveFocus();

      await user.keyboard("{Enter}");
      expect(mockOpen).toHaveBeenCalled();
    });

    it("should have proper z-index stacking", () => {
      const { container } = render(<WhatsAppFloatButton {...defaultProps} />);
      const wrapper = container.firstChild as HTMLElement;
      const button = screen.getByRole("button");
      const pulse = container.querySelector(".animate-ping") as HTMLElement;

      expect(wrapper).toHaveClass("z-50");
      expect(button).toHaveClass("z-10");
      expect(pulse).toHaveClass("-z-10");
    });
  });

  describe("Props Handling", () => {
    it("should handle different tooltip texts", () => {
      const customTooltip = "Nous contacter sur WhatsApp";
      render(<WhatsAppFloatButton {...defaultProps} tooltip={customTooltip} />);
      expect(screen.getByText(customTooltip)).toBeInTheDocument();
    });

    it("should handle different aria labels", () => {
      const customAriaLabel = "Custom aria label";
      render(
        <WhatsAppFloatButton {...defaultProps} ariaLabel={customAriaLabel} />
      );
      expect(
        screen.getByRole("button", { name: customAriaLabel })
      ).toBeInTheDocument();
    });

    it("should handle different default messages", async () => {
      const user = userEvent.setup();
      const customMessage = "Custom message for WhatsApp";
      render(
        <WhatsAppFloatButton {...defaultProps} defaultMessage={customMessage} />
      );

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain(encodeURIComponent(customMessage));
    });

    it("should handle special characters in messages", async () => {
      const user = userEvent.setup();
      const messageWithSpecialChars = "Hello! 🚴‍♂️ I'm interested & ready.";
      render(
        <WhatsAppFloatButton
          {...defaultProps}
          defaultMessage={messageWithSpecialChars}
        />
      );

      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      await user.click(button);

      expect(mockOpen).toHaveBeenCalled();
      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain("text=");
    });
  });

  describe("Dark Mode Support", () => {
    it("should have dark mode classes for tooltip", () => {
      const { container } = render(<WhatsAppFloatButton {...defaultProps} />);
      const tooltip = container.querySelector(".bg-gray-900");
      expect(tooltip).toHaveClass("dark:bg-gray-800");
    });

    it("should have dark mode classes for tooltip arrow", () => {
      const { container } = render(<WhatsAppFloatButton {...defaultProps} />);
      const arrow = container.querySelector(".border-t-gray-900");
      expect(arrow).toHaveClass("dark:border-t-gray-800");
    });
  });

  describe("Visual States", () => {
    it("should have hover state styles", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      expect(button).toHaveClass("hover:bg-green-600");
      expect(button).toHaveClass("hover:shadow-xl");
    });

    it("should have transition classes", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      expect(button).toHaveClass("transition-all");
      expect(button).toHaveClass("duration-300");
      expect(button).toHaveClass("ease-in-out");
    });

    it("should have shadow classes", () => {
      render(<WhatsAppFloatButton {...defaultProps} />);
      const button = screen.getByRole("button", {
        name: defaultProps.ariaLabel,
      });
      expect(button).toHaveClass("shadow-lg");
    });
  });
});
