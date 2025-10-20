import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { render, screen } from "@testing-library/react";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock carousel components
jest.mock("@/components/ui/carousel", () => ({
  Carousel: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid="carousel" {...props}>
      {children}
    </div>
  ),
  CarouselContent: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid="carousel-content" {...props}>
      {children}
    </div>
  ),
  CarouselItem: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid="carousel-item" {...props}>
      {children}
    </div>
  ),
  CarouselPrevious: (props: { [key: string]: unknown }) => (
    <button
      data-testid="carousel-previous"
      aria-label="Previous slide"
      {...props}
    >
      Previous
    </button>
  ),
  CarouselNext: (props: { [key: string]: unknown }) => (
    <button data-testid="carousel-next" aria-label="Next slide" {...props}>
      Next
    </button>
  ),
}));

// Mock react-wrap-balancer
jest.mock("react-wrap-balancer", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("TestimonialsSection", () => {
  it("renders the testimonials section with title and subtitle", () => {
    render(<TestimonialsSection />);

    expect(
      screen.getByText("Join our thriving community of")
    ).toBeInTheDocument();
    expect(screen.getByText("Satisfied Riders")).toBeInTheDocument();
    expect(
      screen.getByText(/Discover how our customers have made their rides/)
    ).toBeInTheDocument();
  });

  it("renders testimonials data", () => {
    render(<TestimonialsSection />);

    // Check for first testimonial content
    expect(screen.getByText("Derrick Bowman")).toBeInTheDocument();
    expect(screen.getByText("CEO at PixelCraft Studios")).toBeInTheDocument();
    expect(
      screen.getByText(/This bike rental service made our trip unforgettable/)
    ).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<TestimonialsSection />);

    expect(screen.getByTestId("carousel-previous")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-next")).toBeInTheDocument();
  });

  it("renders carousel component", () => {
    render(<TestimonialsSection />);

    expect(screen.getByTestId("carousel")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-content")).toBeInTheDocument();
    expect(screen.getAllByTestId("carousel-item")).toHaveLength(9); // 9 testimonials

    // Check that testimonials are rendered
    expect(screen.getByText("Derrick Bowman")).toBeInTheDocument();
    expect(screen.getByText("Beth Craig")).toBeInTheDocument();
    expect(screen.getByText("Alfredo Bradley")).toBeInTheDocument();
  });
});
