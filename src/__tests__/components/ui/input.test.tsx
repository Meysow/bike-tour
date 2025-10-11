import { render, screen } from "@/__tests__/utils/test-utils";
import { Input } from "@/components/ui/input";
import userEvent from "@testing-library/user-event";

describe("Input Component", () => {
  it("should render input element", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("should render with default type", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "text");
  });

  it("should render with specified type", () => {
    render(<Input type="email" data-testid="email-input" />);
    const input = screen.getByTestId("email-input");
    expect(input).toHaveAttribute("type", "email");
  });

  it("should handle text input", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);

    const input = screen.getByPlaceholderText("Type here");
    await user.type(input, "Hello World");

    expect(input).toHaveValue("Hello World");
  });

  it("should handle onChange event", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Input onChange={handleChange} placeholder="Input" />);
    const input = screen.getByPlaceholderText("Input");

    await user.type(input, "test");

    expect(handleChange).toHaveBeenCalled();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Input disabled data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toBeDisabled();
  });

  it("should not allow input when disabled", async () => {
    const user = userEvent.setup();
    render(<Input disabled placeholder="Disabled" />);

    const input = screen.getByPlaceholderText("Disabled");
    await user.type(input, "test");

    expect(input).toHaveValue("");
  });

  it("should apply custom className", () => {
    render(<Input className="custom-input" data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toHaveClass("custom-input");
  });

  it("should have default styling classes", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toHaveClass("rounded-md");
    expect(input).toHaveClass("border");
  });

  it("should render with placeholder", () => {
    render(<Input placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("should render with value", () => {
    render(<Input value="Initial value" readOnly />);
    expect(screen.getByDisplayValue("Initial value")).toBeInTheDocument();
  });

  it("should forward ref correctly", () => {
    const ref = jest.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it("should handle password type", () => {
    render(<Input type="password" data-testid="password" />);
    const input = screen.getByTestId("password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("should handle number type", () => {
    render(<Input type="number" data-testid="number" />);
    const input = screen.getByTestId("number");
    expect(input).toHaveAttribute("type", "number");
  });

  it("should accept additional HTML attributes", () => {
    render(<Input data-testid="input" aria-label="Test input" required />);
    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("aria-label", "Test input");
    expect(input).toBeRequired();
  });
});
