import { render, screen } from "@/__tests__/utils/test-utils";
import { ErrorMessage } from "@/components/shared/error-message";

describe("ErrorMessage Component", () => {
  it("should render with default error message", () => {
    render(<ErrorMessage />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render with custom error message", () => {
    render(<ErrorMessage message="Custom error occurred" />);
    expect(screen.getByText("Custom error occurred")).toBeInTheDocument();
  });

  it("should always render the helper text", () => {
    render(<ErrorMessage />);
    expect(screen.getByText("Please try again later")).toBeInTheDocument();
  });

  it("should have correct styling for error text", () => {
    render(<ErrorMessage message="Test error" />);
    const heading = screen.getByText("Test error");
    expect(heading.tagName).toBe("H3");
    expect(heading).toHaveClass("text-destructive");
    expect(heading).toHaveClass("font-semibold");
  });

  it("should have correct styling for helper text", () => {
    render(<ErrorMessage />);
    const helperText = screen.getByText("Please try again later");
    expect(helperText).toHaveClass("text-sm");
    expect(helperText).toHaveClass("text-muted-foreground");
  });

  it("should render in a centered container", () => {
    const { container } = render(<ErrorMessage />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("flex");
    expect(wrapper).toHaveClass("items-center");
    expect(wrapper).toHaveClass("justify-center");
  });

  it("should have appropriate height", () => {
    const { container } = render(<ErrorMessage />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("h-[450px]");
  });

  it("should center the content", () => {
    render(<ErrorMessage />);
    const textCenter = screen.getByText("Please try again later").parentElement;
    expect(textCenter).toHaveClass("text-center");
  });
});
