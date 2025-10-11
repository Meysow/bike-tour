import { render, screen } from "@/__tests__/utils/test-utils";
import { Button } from "@/components/ui/button";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  it("should render button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByText("Click me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply default variant styles", () => {
    render(<Button>Default</Button>);
    const button = screen.getByText("Default");
    expect(button).toHaveClass("bg-primary");
  });

  it("should apply destructive variant styles", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByText("Delete");
    expect(button).toHaveClass("bg-destructive");
  });

  it("should apply outline variant styles", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText("Outline");
    expect(button).toHaveClass("border");
  });

  it("should apply secondary variant styles", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button).toHaveClass("bg-secondary");
  });

  it("should apply ghost variant styles", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByText("Ghost");
    expect(button).toHaveClass("hover:bg-accent");
  });

  it("should apply link variant styles", () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByText("Link");
    expect(button).toHaveClass("underline-offset-4");
  });

  it("should apply small size styles", () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByText("Small");
    expect(button).toHaveClass("h-8");
  });

  it("should apply large size styles", () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByText("Large");
    expect(button).toHaveClass("h-10");
  });

  it("should apply icon size styles", () => {
    render(<Button size="icon">+</Button>);
    const button = screen.getByText("+");
    expect(button).toHaveClass("size-9");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });

  it("should not trigger click when disabled", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    await user.click(screen.getByText("Disabled"));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should accept custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByText("Custom");
    expect(button).toHaveClass("custom-class");
  });

  it("should render as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByText("Link Button");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("should forward ref correctly", () => {
    const ref = jest.fn();
    render(<Button ref={ref}>With Ref</Button>);
    expect(ref).toHaveBeenCalled();
  });
});
