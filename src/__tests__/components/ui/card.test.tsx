import { render, screen } from "@/__tests__/utils/test-utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

describe("Card Components", () => {
  describe("Card", () => {
    it("should render card with content", () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("should apply custom className", () => {
      render(
        <Card className="custom-card" data-testid="card">
          Content
        </Card>
      );
      const card = screen.getByTestId("card");
      expect(card).toHaveClass("custom-card");
    });

    it("should have default card styles", () => {
      render(<Card data-testid="card">Content</Card>);
      const card = screen.getByTestId("card");
      expect(card).toHaveClass("rounded-xl");
      expect(card).toHaveClass("border");
    });
  });

  describe("CardHeader", () => {
    it("should render card header", () => {
      render(<CardHeader>Header content</CardHeader>);
      expect(screen.getByText("Header content")).toBeInTheDocument();
    });

    it("should have default header styles", () => {
      render(<CardHeader>Header</CardHeader>);
      const header = screen.getByText("Header");
      expect(header).toHaveClass("flex");
      expect(header).toHaveClass("flex-col");
    });

    it("should apply custom className", () => {
      render(<CardHeader className="custom-header">Header</CardHeader>);
      const header = screen.getByText("Header");
      expect(header).toHaveClass("custom-header");
    });
  });

  describe("CardTitle", () => {
    it("should render card title as h3", () => {
      render(<CardTitle>Card Title</CardTitle>);
      const title = screen.getByText("Card Title");
      expect(title.tagName).toBe("H3");
    });

    it("should have default title styles", () => {
      render(<CardTitle>Title</CardTitle>);
      const title = screen.getByText("Title");
      expect(title).toHaveClass("font-semibold");
    });

    it("should apply custom className", () => {
      render(<CardTitle className="custom-title">Title</CardTitle>);
      const title = screen.getByText("Title");
      expect(title).toHaveClass("custom-title");
    });
  });

  describe("CardDescription", () => {
    it("should render card description", () => {
      render(<CardDescription>Description text</CardDescription>);
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("should have default description styles", () => {
      render(<CardDescription>Description</CardDescription>);
      const description = screen.getByText("Description");
      expect(description).toHaveClass("text-sm");
      expect(description).toHaveClass("text-muted-foreground");
    });

    it("should apply custom className", () => {
      render(<CardDescription className="custom-desc">Desc</CardDescription>);
      const description = screen.getByText("Desc");
      expect(description).toHaveClass("custom-desc");
    });
  });

  describe("CardContent", () => {
    it("should render card content", () => {
      render(<CardContent>Content area</CardContent>);
      expect(screen.getByText("Content area")).toBeInTheDocument();
    });

    it("should have default content styles", () => {
      render(<CardContent>Content</CardContent>);
      const content = screen.getByText("Content");
      expect(content).toHaveClass("p-6");
      expect(content).toHaveClass("pt-0");
    });

    it("should apply custom className", () => {
      render(<CardContent className="custom-content">Content</CardContent>);
      const content = screen.getByText("Content");
      expect(content).toHaveClass("custom-content");
    });
  });

  describe("CardFooter", () => {
    it("should render card footer", () => {
      render(<CardFooter>Footer content</CardFooter>);
      expect(screen.getByText("Footer content")).toBeInTheDocument();
    });

    it("should have default footer styles", () => {
      render(<CardFooter>Footer</CardFooter>);
      const footer = screen.getByText("Footer");
      expect(footer).toHaveClass("flex");
      expect(footer).toHaveClass("items-center");
    });

    it("should apply custom className", () => {
      render(<CardFooter className="custom-footer">Footer</CardFooter>);
      const footer = screen.getByText("Footer");
      expect(footer).toHaveClass("custom-footer");
    });
  });

  describe("Complete Card", () => {
    it("should render a complete card with all parts", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      );

      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
      expect(screen.getByText("Footer")).toBeInTheDocument();
    });
  });
});
