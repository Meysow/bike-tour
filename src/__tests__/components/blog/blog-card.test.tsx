import { render, screen } from "@/__tests__/utils/test-utils";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogPost } from "@/types/blog";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/en/blog",
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock Icons
jest.mock("@/components/shared/icons", () => ({
  Icons: {
    calendar: ({ className }: { className?: string }) => (
      <span className={className} data-testid="calendar-icon">
        📅
      </span>
    ),
    clock: ({ className }: { className?: string }) => (
      <span className={className} data-testid="clock-icon">
        🕐
      </span>
    ),
    user: ({ className }: { className?: string }) => (
      <span className={className} data-testid="user-icon">
        👤
      </span>
    ),
  },
}));

const mockBlogPost: BlogPost = {
  slug: "test-post",
  title: "Test Blog Post",
  description: "This is a test blog post description",
  date: "2024-03-15",
  author: "John Doe",
  tags: ["cycling", "paris", "tourism"],
  content: "<p>Test content</p>",
  readingTime: 5,
  image: "/images/test.jpg",
};

describe("BlogCard Component", () => {
  it("should render blog card with post title", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
  });

  it("should render post description", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(
      screen.getByText("This is a test blog post description")
    ).toBeInTheDocument();
  });

  it("should render post author", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });

  it("should render all post tags", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByText("cycling")).toBeInTheDocument();
    expect(screen.getByText("paris")).toBeInTheDocument();
    expect(screen.getByText("tourism")).toBeInTheDocument();
  });

  it("should render reading time", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByText(/5 min de lecture/)).toBeInTheDocument();
  });

  it("should render formatted date", () => {
    render(<BlogCard post={mockBlogPost} />);
    const date = new Date("2024-03-15").toLocaleDateString("fr-FR");
    expect(screen.getByText(date)).toBeInTheDocument();
  });

  it("should render image when provided", () => {
    render(<BlogCard post={mockBlogPost} />);
    const image = screen.getByAltText("Test Blog Post");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/test.jpg");
  });

  it("should not render image when not provided", () => {
    const postWithoutImage = { ...mockBlogPost, image: "" };
    render(<BlogCard post={postWithoutImage} />);
    const image = screen.queryByAltText("Test Blog Post");
    expect(image).not.toBeInTheDocument();
  });

  it("should render link to blog post", () => {
    render(<BlogCard post={mockBlogPost} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/en/blog/test-post");
  });

  it("should render calendar icon", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByTestId("calendar-icon")).toBeInTheDocument();
  });

  it("should render clock icon", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByTestId("clock-icon")).toBeInTheDocument();
  });

  it("should render user icon", () => {
    render(<BlogCard post={mockBlogPost} />);
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

  it("should have hover effects", () => {
    const { container } = render(<BlogCard post={mockBlogPost} />);
    const card = container.querySelector(".group");
    expect(card).toHaveClass("hover:shadow-lg");
    expect(card).toHaveClass("transition-all");
  });

  it("should truncate description with line-clamp", () => {
    render(<BlogCard post={mockBlogPost} />);
    const description = screen.getByText(
      "This is a test blog post description"
    );
    expect(description).toHaveClass("line-clamp-2");
  });
});
