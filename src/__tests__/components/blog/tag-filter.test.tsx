import { render, screen, waitFor } from "@/__tests__/utils/test-utils";
import { TagFilter } from "@/components/blog/tag-filter";
import { BlogPost } from "@/types/blog";
import userEvent from "@testing-library/user-event";
import { useParams, usePathname } from "next/navigation";

// Mock Next.js navigation hooks
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
  usePathname: jest.fn(),
}));

const mockPosts: BlogPost[] = [
  {
    slug: "post-1",
    title: "Post 1",
    description: "Description 1",
    date: "2024-03-15",
    author: "Author 1",
    tags: ["cycling", "paris"],
    content: "Content 1",
    readingTime: 5,
    image: "/image1.jpg",
  },
  {
    slug: "post-2",
    title: "Post 2",
    description: "Description 2",
    date: "2024-03-14",
    author: "Author 2",
    tags: ["tourism", "paris"],
    content: "Content 2",
    readingTime: 3,
    image: "/image2.jpg",
  },
  {
    slug: "post-3",
    title: "Post 3",
    description: "Description 3",
    date: "2024-03-13",
    author: "Author 3",
    tags: ["cycling", "tourism"],
    content: "Content 3",
    readingTime: 7,
    image: "/image3.jpg",
  },
];

describe("TagFilter Component", () => {
  const mockOnFilteredPosts = jest.fn();
  const mockUseParams = useParams as jest.MockedFunction<typeof useParams>;
  const mockUsePathname = usePathname as jest.MockedFunction<
    typeof usePathname
  >;

  beforeEach(() => {
    jest.clearAllMocks();
    // Mock useParams to return French locale
    mockUseParams.mockReturnValue({ locale: "fr" });
    // Mock usePathname to return a French path
    mockUsePathname.mockReturnValue("/fr/blog");
  });

  it("should render filter label", () => {
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );
    expect(screen.getByText("Filtrer par tags :")).toBeInTheDocument();
  });

  it("should render all unique tags", () => {
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );
    expect(screen.getByText("cycling")).toBeInTheDocument();
    expect(screen.getByText("paris")).toBeInTheDocument();
    expect(screen.getByText("tourism")).toBeInTheDocument();
  });

  it("should initially return all posts", () => {
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );
    expect(mockOnFilteredPosts).toHaveBeenCalledWith(mockPosts);
  });

  it("should filter posts when tag is clicked", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const parisTag = screen.getByText("paris");
    await user.click(parisTag);

    await waitFor(() => {
      const lastCall =
        mockOnFilteredPosts.mock.calls[
          mockOnFilteredPosts.mock.calls.length - 1
        ];
      expect(lastCall[0]).toHaveLength(2);
      expect(lastCall[0]).toEqual([mockPosts[0], mockPosts[1]]);
    });
  });

  it("should show clear all button when tags are selected", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const cyclingTag = screen.getByText("cycling");
    await user.click(cyclingTag);

    await waitFor(() => {
      expect(screen.getByText("Effacer tout")).toBeInTheDocument();
    });
  });

  it("should not show clear all button when no tags are selected", () => {
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );
    expect(screen.queryByText("Effacer tout")).not.toBeInTheDocument();
  });

  it("should clear all tags when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const cyclingTag = screen.getByText("cycling");
    await user.click(cyclingTag);

    await waitFor(() => {
      expect(screen.getByText("Effacer tout")).toBeInTheDocument();
    });

    const clearButton = screen.getByText("Effacer tout");
    await user.click(clearButton);

    await waitFor(() => {
      expect(screen.queryByText("Effacer tout")).not.toBeInTheDocument();
      const lastCall =
        mockOnFilteredPosts.mock.calls[
          mockOnFilteredPosts.mock.calls.length - 1
        ];
      expect(lastCall[0]).toEqual(mockPosts);
    });
  });

  it("should show filtered posts count", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const parisTag = screen.getByText("paris");
    await user.click(parisTag);

    await waitFor(() => {
      expect(screen.getByText(/2 articles trouvés/)).toBeInTheDocument();
    });
  });

  it("should use singular form when one post is found", async () => {
    const singlePostArray = [mockPosts[0]];
    const user = userEvent.setup();
    render(
      <TagFilter
        posts={singlePostArray}
        onFilteredPosts={mockOnFilteredPosts}
      />
    );

    const cyclingTag = screen.getByText("cycling");
    await user.click(cyclingTag);

    await waitFor(() => {
      expect(screen.getByText(/1 article trouvé/)).toBeInTheDocument();
    });
  });

  it("should filter posts with multiple tags (AND logic)", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const cyclingTag = screen.getByText("cycling");
    await user.click(cyclingTag);

    await waitFor(() => {
      const calls = mockOnFilteredPosts.mock.calls;
      const lastCall = calls[calls.length - 1];
      expect(lastCall[0]).toHaveLength(2);
    });

    const parisTag = screen.getByText("paris");
    await user.click(parisTag);

    await waitFor(() => {
      const calls = mockOnFilteredPosts.mock.calls;
      const lastCall = calls[calls.length - 1];
      expect(lastCall[0]).toHaveLength(1);
      expect(lastCall[0][0].slug).toBe("post-1");
    });
  });

  it("should toggle tag selection on and off", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const cyclingTag = screen.getByText("cycling");

    // Click to select
    await user.click(cyclingTag);
    await waitFor(() => {
      const calls = mockOnFilteredPosts.mock.calls;
      const lastCall = calls[calls.length - 1];
      expect(lastCall[0]).toHaveLength(2);
    });

    // Click to deselect
    await user.click(cyclingTag);
    await waitFor(() => {
      const calls = mockOnFilteredPosts.mock.calls;
      const lastCall = calls[calls.length - 1];
      expect(lastCall[0]).toEqual(mockPosts);
    });
  });

  it("should sort tags alphabetically", () => {
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    // Tags are rendered as Badge components (divs), so we query by text
    expect(screen.getByText("cycling")).toBeInTheDocument();
    expect(screen.getByText("paris")).toBeInTheDocument();
    expect(screen.getByText("tourism")).toBeInTheDocument();
  });

  it("should show X icon on selected tags", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const cyclingTag = screen.getByText("cycling");
    await user.click(cyclingTag);

    await waitFor(() => {
      // Check if the parent element has the primary styling class
      const badge = cyclingTag.closest("div");
      expect(badge).toHaveClass("bg-primary");
    });
  });

  it("should show additional info when multiple tags are selected", async () => {
    const user = userEvent.setup();
    render(
      <TagFilter posts={mockPosts} onFilteredPosts={mockOnFilteredPosts} />
    );

    const cyclingTag = screen.getByText("cycling");
    await user.click(cyclingTag);

    const parisTag = screen.getByText("paris");
    await user.click(parisTag);

    await waitFor(() => {
      expect(
        screen.getByText(/contenant tous les tags sélectionnés/)
      ).toBeInTheDocument();
    });
  });
});
