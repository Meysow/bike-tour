import { SafeHtmlRenderer } from "@/components/shared/safe-html-renderer";
import { render, screen } from "../../utils/test-utils";

describe("SafeHtmlRenderer", () => {
  describe("Plain Text Rendering", () => {
    it("should render plain text without links", () => {
      const content = "This is plain text without any links.";
      render(<SafeHtmlRenderer content={content} />);

      expect(screen.getByText(content)).toBeInTheDocument();
    });

    it("should render text with emojis", () => {
      const content =
        "We are open from 10am - 7pm everyday from Monday to Sunday. 😉";
      render(<SafeHtmlRenderer content={content} />);

      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  describe("Internal Links", () => {
    it("should render internal links as Next.js Link components", () => {
      const content =
        'Check out our <a href="/rent">bike rental prices</a> to find the best deal.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "bike rental prices" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/rent");
    });

    it("should render anchor links for page sections", () => {
      const content =
        '<a href="#contact-section">Contact us</a> through our email.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "Contact us" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#contact-section");
      expect(screen.getByText("through our email.")).toBeInTheDocument();
    });

    it("should apply orange styling to internal links", () => {
      const content = 'Visit our <a href="/">home page</a> for more info.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "home page" });
      expect(link).toHaveClass("text-orange-500");
      expect(link).toHaveClass("font-semibold");
      expect(link).toHaveClass("underline-offset-4");
      expect(link).toHaveClass("transition-all");
      expect(link).toHaveClass("hover:underline");
    });
  });

  describe("External Links", () => {
    it("should render external links with target and rel attributes", () => {
      const content =
        'Find routes on <a href="https://geovelo.app/fr/" target="_blank" rel="noopener noreferrer">Geovelo</a>.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "Geovelo" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://geovelo.app/fr/");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("should apply orange styling to external links", () => {
      const content =
        'Visit <a href="https://parisjetaime.com/eng/" target="_blank" rel="noopener noreferrer">Paris Info</a>.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "Paris Info" });
      expect(link).toHaveClass("text-orange-500");
      expect(link).toHaveClass("font-semibold");
    });
  });

  describe("Mixed Content", () => {
    it("should render text with multiple links", () => {
      const content =
        'Check our <a href="/rent">prices</a> and <a href="/tours">tours</a> for more details.';
      render(<SafeHtmlRenderer content={content} />);

      expect(screen.getByText(/Check our/)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "prices" })).toHaveAttribute(
        "href",
        "/rent"
      );
      expect(screen.getByText(/and/)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "tours" })).toHaveAttribute(
        "href",
        "/tours"
      );
      expect(screen.getByText(/for more details\./)).toBeInTheDocument();
    });

    it("should render internal and external links together", () => {
      const content =
        'Visit <a href="/">home</a> or <a href="https://example.com" target="_blank" rel="noopener noreferrer">external site</a>.';
      render(<SafeHtmlRenderer content={content} />);

      const internalLink = screen.getByRole("link", { name: "home" });
      const externalLink = screen.getByRole("link", { name: "external site" });

      expect(internalLink).toHaveAttribute("href", "/");
      expect(internalLink).not.toHaveAttribute("target");

      expect(externalLink).toHaveAttribute("href", "https://example.com");
      expect(externalLink).toHaveAttribute("target", "_blank");
    });
  });

  describe("Security", () => {
    it("should not render arbitrary HTML tags", () => {
      const content =
        'Safe text <script>alert("xss")</script> with script tag.';
      render(<SafeHtmlRenderer content={content} />);

      // Script tag should be rendered as text, not executed
      expect(
        screen.getByText(/Safe text.*with script tag\./)
      ).toBeInTheDocument();
      // Should not find a script element
      expect(document.querySelector("script")).not.toBeInTheDocument();
    });

    it("should not render onclick or other event handlers", () => {
      const content =
        'Click <a href="/test" onclick="alert(\'xss\')">here</a> safely.';
      render(<SafeHtmlRenderer content={content} />);

      // The component should render the malformed link as plain text since onclick is not supported
      expect(screen.getByText(/Click/)).toBeInTheDocument();
      // Should not create any link element since onclick attributes are ignored
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("should handle malformed HTML gracefully", () => {
      const content = 'Text with <a href="/test">unclosed link and more text.';
      render(<SafeHtmlRenderer content={content} />);

      // Should render the entire content as text since the link is malformed
      expect(
        screen.getByText(/Text with.*unclosed link and more text\./)
      ).toBeInTheDocument();
    });
  });

  describe("Custom ClassName", () => {
    it("should apply custom className to wrapper div", () => {
      const content = "Test content";
      const { container } = render(
        <SafeHtmlRenderer content={content} className="custom-class" />
      );

      const wrapper = container.querySelector("div");
      expect(wrapper).toHaveClass("custom-class");
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty content", () => {
      const { container } = render(<SafeHtmlRenderer content="" />);

      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("should handle content with only whitespace", () => {
      const content = "   ";
      const { container } = render(<SafeHtmlRenderer content={content} />);

      // Whitespace is rendered but normalized by React/DOM
      expect(container.querySelector("div")).toBeInTheDocument();
      expect(container.textContent).toMatch(/\s+/);
    });

    it("should handle links at the start of content", () => {
      const content = '<a href="/test">Link first</a> then text.';
      render(<SafeHtmlRenderer content={content} />);

      expect(
        screen.getByRole("link", { name: "Link first" })
      ).toBeInTheDocument();
      expect(screen.getByText("then text.")).toBeInTheDocument();
    });

    it("should handle links at the end of content", () => {
      const content = 'Text first then <a href="/test">link last</a>';
      render(<SafeHtmlRenderer content={content} />);

      expect(screen.getByText("Text first then")).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "link last" })
      ).toBeInTheDocument();
    });

    it("should handle consecutive links", () => {
      const content = '<a href="/first">First</a><a href="/second">Second</a>';
      render(<SafeHtmlRenderer content={content} />);

      expect(screen.getByRole("link", { name: "First" })).toHaveAttribute(
        "href",
        "/first"
      );
      expect(screen.getByRole("link", { name: "Second" })).toHaveAttribute(
        "href",
        "/second"
      );
    });
  });

  describe("Real-world FAQ Examples", () => {
    it("should render bike rental prices FAQ answer", () => {
      const content =
        'Check out our <a href="/rent">bike rental prices</a> to find the best deal for your trip.';
      render(<SafeHtmlRenderer content={content} />);

      expect(screen.getByText(/Check out our/)).toBeInTheDocument();
      const link = screen.getByRole("link", { name: "bike rental prices" });
      expect(link).toHaveAttribute("href", "/rent");
      expect(link).toHaveClass("text-orange-500");
      expect(
        screen.getByText(/to find the best deal for your trip\./)
      ).toBeInTheDocument();
    });

    it("should render contact FAQ answer", () => {
      const content =
        '<a href="#contact-section">Contact us</a> through our email.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "Contact us" });
      expect(link).toHaveAttribute("href", "#contact-section");
      expect(screen.getByText("through our email.")).toBeInTheDocument();
    });

    it("should render Geovelo FAQ answer", () => {
      const content =
        'Find the best routes on <a href="https://geovelo.app/fr/" target="_blank" rel="noopener noreferrer">Geovelo</a>.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "Geovelo" });
      expect(link).toHaveAttribute("href", "https://geovelo.app/fr/");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("should render Paris Info FAQ answer", () => {
      const content =
        'Discover more about cycling in Paris on <a href="https://parisjetaime.com/eng/" target="_blank" rel="noopener noreferrer">Paris Info</a>.';
      render(<SafeHtmlRenderer content={content} />);

      const link = screen.getByRole("link", { name: "Paris Info" });
      expect(link).toHaveAttribute("href", "https://parisjetaime.com/eng/");
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
