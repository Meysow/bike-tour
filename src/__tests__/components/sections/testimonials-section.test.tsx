import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("swiper/css", () => ({}));
jest.mock("swiper/css/navigation", () => ({}));
jest.mock("swiper/css/pagination", () => ({}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock Swiper components
jest.mock("swiper/react", () => ({
  Swiper: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <div data-testid="swiper" {...props}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <div data-testid="swiper-slide" {...props}>
      {children}
    </div>
  ),
}));

// Mock Swiper modules
jest.mock("swiper/modules", () => ({
  Navigation: "Navigation",
  Pagination: "Pagination",
  Autoplay: "Autoplay",
}));

// Mock react-wrap-balancer
jest.mock("react-wrap-balancer", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("TestimonialsSection", () => {
  it("renders the testimonials section with title and subtitle", () => {
    render(<TestimonialsSection />);

    expect(screen.getByText("Join our thriving community of")).toBeInTheDocument();
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
    expect(screen.getByText(/This bike rental service made our trip unforgettable/)).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<TestimonialsSection />);

    expect(screen.getByLabelText("Previous testimonial")).toBeInTheDocument();
    expect(screen.getByLabelText("Next testimonial")).toBeInTheDocument();
  });

  it("renders swiper component", () => {
    render(<TestimonialsSection />);

    expect(screen.getByTestId("swiper")).toBeInTheDocument();
    expect(screen.getAllByTestId("swiper-slide")).toHaveLength(9); // 9 testimonials
  });
});
