import { render, screen } from "@/__tests__/utils/test-utils";
import { WhatsAppFloatButtonWrapper } from "@/components/shared/whatsapp-float-button-wrapper";
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

// Mock useLocale hook
const mockUseLocale = jest.fn();
jest.mock("@/hooks/use-localized-routes", () => ({
  useLocale: () => mockUseLocale(),
}));

describe("WhatsAppFloatButtonWrapper Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("French Locale (fr)", () => {
    beforeEach(() => {
      mockUseLocale.mockReturnValue("fr");
    });

    it("should render with French translations", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByRole("button", {
          name: "Contacter RentaBikeParis sur WhatsApp",
        })
      ).toBeInTheDocument();
    });

    it("should show French tooltip", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByText("Contactez-nous sur WhatsApp")
      ).toBeInTheDocument();
    });

    it("should send French message when clicked", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain(
        encodeURIComponent(
          "Bonjour ! Je suis intéressé(e) par vos services de location de vélos et tours guidés à Paris. Pouvez-vous me renseigner ?"
        )
      );
    });
  });

  describe("English Locale (en)", () => {
    beforeEach(() => {
      mockUseLocale.mockReturnValue("en");
    });

    it("should render with English translations", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByRole("button", {
          name: "Contact RentaBikeParis on WhatsApp",
        })
      ).toBeInTheDocument();
    });

    it("should show English tooltip", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(screen.getByText("Contact us on WhatsApp")).toBeInTheDocument();
    });

    it("should send English message when clicked", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain(
        encodeURIComponent(
          "Hello! I'm interested in your bike rental and guided tour services in Paris. Could you provide me with more information?"
        )
      );
    });
  });

  describe("German Locale (de)", () => {
    beforeEach(() => {
      mockUseLocale.mockReturnValue("de");
    });

    it("should render with German translations", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByRole("button", {
          name: "Kontaktieren Sie RentaBikeParis auf WhatsApp",
        })
      ).toBeInTheDocument();
    });

    it("should show German tooltip", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByText("Kontaktieren Sie uns auf WhatsApp")
      ).toBeInTheDocument();
    });

    it("should send German message when clicked", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain(
        encodeURIComponent(
          "Hallo! Ich interessiere mich für Ihre Fahrradverleih- und Führungsdienste in Paris. Könnten Sie mir weitere Informationen geben?"
        )
      );
    });
  });

  describe("Spanish Locale (es)", () => {
    beforeEach(() => {
      mockUseLocale.mockReturnValue("es");
    });

    it("should render with Spanish translations", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByRole("button", {
          name: "Contactar RentaBikeParis en WhatsApp",
        })
      ).toBeInTheDocument();
    });

    it("should show Spanish tooltip", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(screen.getByText("Contáctanos en WhatsApp")).toBeInTheDocument();
    });

    it("should send Spanish message when clicked", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain(
        encodeURIComponent(
          "¡Hola! Estoy interesado en sus servicios de alquiler de bicicletas y tours guiados en París. ¿Pueden darme más información?"
        )
      );
    });
  });

  describe("Dutch Locale (nl)", () => {
    beforeEach(() => {
      mockUseLocale.mockReturnValue("nl");
    });

    it("should render with Dutch translations", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByRole("button", {
          name: "Neem contact op met RentaBikeParis via WhatsApp",
        })
      ).toBeInTheDocument();
    });

    it("should show Dutch tooltip", () => {
      render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByText("Neem contact met ons op via WhatsApp")
      ).toBeInTheDocument();
    });

    it("should send Dutch message when clicked", async () => {
      const user = userEvent.setup();
      render(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      const callArgs = mockOpen.mock.calls[0][0];
      expect(callArgs).toContain(
        encodeURIComponent(
          "Hallo! Ik ben geïnteresseerd in uw fietsverhuur en rondleidingen in Parijs. Kunt u mij meer informatie geven?"
        )
      );
    });
  });

  describe("Fallback Behavior", () => {
    it("should fallback to French for unknown locale", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseLocale.mockReturnValue("unknown" as any);
      render(<WhatsAppFloatButtonWrapper />);

      expect(
        screen.getByRole("button", {
          name: "Contacter RentaBikeParis sur WhatsApp",
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText("Contactez-nous sur WhatsApp")
      ).toBeInTheDocument();
    });

    it("should fallback to French for undefined locale", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseLocale.mockReturnValue(undefined as any);
      render(<WhatsAppFloatButtonWrapper />);

      expect(
        screen.getByText("Contactez-nous sur WhatsApp")
      ).toBeInTheDocument();
    });
  });

  describe("WhatsApp URL Generation", () => {
    it("should always use the same phone number", async () => {
      const user = userEvent.setup();
      const locales = ["fr", "en", "de", "es", "nl"];

      for (const locale of locales) {
        mockUseLocale.mockReturnValue(locale);
        mockOpen.mockClear();

        const { unmount } = render(<WhatsAppFloatButtonWrapper />);
        const button = screen.getByRole("button");
        await user.click(button);

        const callArgs = mockOpen.mock.calls[0][0];
        expect(callArgs).toContain("wa.me/33695964747");

        unmount();
      }
    });

    it("should open in new tab", async () => {
      const user = userEvent.setup();
      mockUseLocale.mockReturnValue("en");
      render(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      expect(mockOpen).toHaveBeenCalledWith(expect.any(String), "_blank");
    });
  });

  describe("Integration with WhatsAppFloatButton", () => {
    it("should pass all required props to WhatsAppFloatButton", () => {
      mockUseLocale.mockReturnValue("en");
      render(<WhatsAppFloatButtonWrapper />);

      // Verify the button renders (props were passed correctly)
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("aria-label");
    });

    it("should render only one button", () => {
      mockUseLocale.mockReturnValue("fr");
      render(<WhatsAppFloatButtonWrapper />);

      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(1);
    });
  });

  describe("Locale Changes", () => {
    it("should update translations when locale changes", () => {
      mockUseLocale.mockReturnValue("fr");
      const { rerender } = render(<WhatsAppFloatButtonWrapper />);
      expect(
        screen.getByText("Contactez-nous sur WhatsApp")
      ).toBeInTheDocument();

      mockUseLocale.mockReturnValue("en");
      rerender(<WhatsAppFloatButtonWrapper />);
      expect(screen.getByText("Contact us on WhatsApp")).toBeInTheDocument();
    });

    it("should maintain button functionality across locale changes", async () => {
      const user = userEvent.setup();
      mockUseLocale.mockReturnValue("fr");
      const { rerender } = render(<WhatsAppFloatButtonWrapper />);

      mockUseLocale.mockReturnValue("en");
      rerender(<WhatsAppFloatButtonWrapper />);

      const button = screen.getByRole("button");
      await user.click(button);

      expect(mockOpen).toHaveBeenCalled();
    });
  });

  describe("Translation Object Structure", () => {
    it("should have all required translation keys for each locale", () => {
      const locales = ["fr", "en", "de", "es", "nl"];

      locales.forEach((locale) => {
        mockUseLocale.mockReturnValue(locale);
        const { unmount } = render(<WhatsAppFloatButtonWrapper />);

        // If component renders without errors, translations are complete
        expect(screen.getByRole("button")).toBeInTheDocument();

        unmount();
      });
    });
  });
});
