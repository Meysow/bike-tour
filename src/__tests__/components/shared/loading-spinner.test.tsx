import { render } from "@/__tests__/utils/test-utils";
import { LoadingSpinner } from "@/components/shared/loading-spinner";

describe("LoadingSpinner Component", () => {
  it("should render loading spinner", () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector(".animate-spin");
    expect(spinner).toBeInTheDocument();
  });

  it("should have correct styling classes", () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector(".animate-spin");
    expect(spinner).toHaveClass("rounded-full");
    expect(spinner).toHaveClass("border-4");
    expect(spinner).toHaveClass("border-primary");
  });

  it("should render within a flex container", () => {
    const { container } = render(<LoadingSpinner />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("flex");
    expect(wrapper).toHaveClass("items-center");
    expect(wrapper).toHaveClass("justify-center");
  });

  it("should have appropriate height", () => {
    const { container } = render(<LoadingSpinner />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("h-[450px]");
  });

  it("should be centered", () => {
    const { container } = render(<LoadingSpinner />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("justify-center");
    expect(wrapper).toHaveClass("items-center");
  });
});
