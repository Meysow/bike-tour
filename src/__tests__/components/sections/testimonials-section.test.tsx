import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { render, screen } from "@testing-library/react";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock Swiper components
jest.mock("swiper/react", () => ({
  Swiper: ({ children, ...props }: any) => (
    <div data-testid="swiper" {...props}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children, ...props }: any) => (
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

    expect(screen.getByText("What our")).toBeInTheDocument();
    expect(screen.getByText("Customers")).toBeInTheDocument();
    expect(screen.getByText("say")).toBeInTheDocument();
    expect(
      screen.getByText(/Discover the experiences of our happy customers/)
    ).toBeInTheDocument();
  });

  it("renders testimonials data", () => {
    render(<TestimonialsSection />);

    // Check for first testimonial
    expect(
      screen.getByText("Effortlessly Enhanced Our Paris Experience")
    ).toBeInTheDocument();
    expect(screen.getByText("Derrick Bowman")).toBeInTheDocument();
    expect(screen.getByText("CEO at PixelCraft Studios")).toBeInTheDocument();
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
