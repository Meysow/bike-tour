import NotFound from "@/app/not-found";
import { render, screen } from "@testing-library/react";

// Mock next/navigation
const mockUseParams = jest.fn();
const mockUsePathname = jest.fn();
const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useParams: () => mockUseParams(),
  usePathname: () => mockUsePathname(),
  useRouter: () => ({
    push: mockPush,
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}));

// Mock the header and footer components
jest.mock("@/components/nav/header", () => ({
  Header: () => <div data-testid="header">Header</div>,
}));

jest.mock("@/components/nav/footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock("@/components/shared/whatsapp-float-button-wrapper", () => ({
  WhatsAppFloatButtonWrapper: () => (
    <div data-testid="whatsapp-button">WhatsApp</div>
  ),
}));

describe("404 Not Found Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/non-existent-page");
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
    Object.defineProperty(navigator, "language", {
      writable: true,
      configurable: true,
      value: "en-US",
    });
  });

  describe("Layout and Structure", () => {
    it("should render without crashing", () => {
      render(<NotFound />);
      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    it("should include Header component", () => {
      render(<NotFound />);
      expect(screen.getByTestId("header")).toBeInTheDocument();
    });

    it("should include Footer component", () => {
      render(<NotFound />);
      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    it("should include WhatsApp button", () => {
      render(<NotFound />);
      expect(screen.getByTestId("whatsapp-button")).toBeInTheDocument();
    });

    it("should display 404 number", () => {
      render(<NotFound />);
      expect(screen.getByText("404")).toBeInTheDocument();
    });
  });

  describe("English Content", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=en",
      });
    });

    it("should display English title", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Oops! You took a wrong turn")
      ).toBeInTheDocument();
    });

    it("should display English error code", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Error 404 - Page not found")
      ).toBeInTheDocument();
    });

    it("should display English subtitle", () => {
      render(<NotFound />);
      expect(
        screen.getByText(
          /Don't worry! Even the best cyclists get lost in Paris sometimes/i
        )
      ).toBeInTheDocument();
    });

    it("should display English navigation buttons", () => {
      render(<NotFound />);
      expect(screen.getByText("Back to home")).toBeInTheDocument();
      expect(screen.getByText("Guided tours")).toBeInTheDocument();
      expect(screen.getByText("Bike rentals")).toBeInTheDocument();
    });

    it("should have correct English button links", () => {
      render(<NotFound />);
      const homeLink = screen.getByText("Back to home").closest("a");
      const toursLink = screen.getByText("Guided tours").closest("a");
      const rentLink = screen.getByText("Bike rentals").closest("a");

      expect(homeLink).toHaveAttribute("href", "/");
      expect(toursLink).toHaveAttribute("href", "/guided-bike-tour-paris");
      expect(rentLink).toHaveAttribute("href", "/bike-rental-paris");
    });
  });

  describe("French Content", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=fr",
      });
    });

    it("should display French title", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Oups ! Vous avez pris un mauvais virage")
      ).toBeInTheDocument();
    });

    it("should display French error code", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Erreur 404 - Page non trouvée")
      ).toBeInTheDocument();
    });

    it("should display French subtitle", () => {
      render(<NotFound />);
      expect(
        screen.getByText(
          /Ne vous inquiétez pas ! Même les meilleurs cyclistes/i
        )
      ).toBeInTheDocument();
    });

    it("should display French navigation buttons", () => {
      render(<NotFound />);
      expect(screen.getByText("Retour à l'accueil")).toBeInTheDocument();
      expect(screen.getByText("Visites guidées")).toBeInTheDocument();
      expect(screen.getByText("Location de vélos")).toBeInTheDocument();
    });

    it("should have correct French button links", () => {
      render(<NotFound />);
      const homeLink = screen.getByText("Retour à l'accueil").closest("a");
      const toursLink = screen.getByText("Visites guidées").closest("a");
      const rentLink = screen.getByText("Location de vélos").closest("a");

      expect(homeLink).toHaveAttribute("href", "/");
      expect(toursLink).toHaveAttribute(
        "href",
        "/visite-guidee-de-paris-a-velo"
      );
      expect(rentLink).toHaveAttribute("href", "/location-velo-paris");
    });
  });

  describe("German Content", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=de",
      });
    });

    it("should display German title", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Hoppla! Sie sind falsch abgebogen")
      ).toBeInTheDocument();
    });

    it("should display German error code", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Fehler 404 - Seite nicht gefunden")
      ).toBeInTheDocument();
    });

    it("should display German navigation buttons", () => {
      render(<NotFound />);
      expect(screen.getByText("Zurück zur Startseite")).toBeInTheDocument();
      expect(screen.getByText("Geführte Touren")).toBeInTheDocument();
      expect(screen.getByText("Fahrradverleih")).toBeInTheDocument();
    });
  });

  describe("Spanish Content", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=es",
      });
    });

    it("should display Spanish title", () => {
      render(<NotFound />);
      expect(
        screen.getByText("¡Vaya! Has tomado un giro equivocado")
      ).toBeInTheDocument();
    });

    it("should display Spanish navigation buttons", () => {
      render(<NotFound />);
      expect(screen.getByText("Volver al inicio")).toBeInTheDocument();
      expect(screen.getByText("Tours guiados")).toBeInTheDocument();
      expect(screen.getByText("Alquiler de bicicletas")).toBeInTheDocument();
    });
  });

  describe("Dutch Content", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=nl",
      });
    });

    it("should display Dutch title", () => {
      render(<NotFound />);
      expect(
        screen.getByText("Oeps! U heeft een verkeerde afslag genomen")
      ).toBeInTheDocument();
    });

    it("should display Dutch navigation buttons", () => {
      render(<NotFound />);
      expect(screen.getByText("Terug naar home")).toBeInTheDocument();
      expect(screen.getByText("Rondleidingen")).toBeInTheDocument();
      expect(screen.getByText("Fietsverhuur")).toBeInTheDocument();
    });
  });

  describe("Locale Detection Priority", () => {
    it("should use cookie locale when available", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=de",
      });
      Object.defineProperty(navigator, "language", {
        writable: true,
        configurable: true,
        value: "en-US",
      });

      render(<NotFound />);
      expect(
        screen.getByText("Hoppla! Sie sind falsch abgebogen")
      ).toBeInTheDocument();
    });

    it("should use browser language when no cookie", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "",
      });
      Object.defineProperty(navigator, "language", {
        writable: true,
        configurable: true,
        value: "es-ES",
      });

      render(<NotFound />);
      expect(
        screen.getByText("¡Vaya! Has tomado un giro equivocado")
      ).toBeInTheDocument();
    });

    it("should default to French when no locale detected", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "",
      });
      Object.defineProperty(navigator, "language", {
        writable: true,
        configurable: true,
        value: "ja-JP", // Unsupported language
      });

      render(<NotFound />);
      expect(
        screen.getByText("Oups ! Vous avez pris un mauvais virage")
      ).toBeInTheDocument();
    });
  });

  describe("Bike Theme Elements", () => {
    it("should include bike emojis in description", () => {
      render(<NotFound />);
      expect(screen.getByText(/🚴‍♂️/)).toBeInTheDocument();
    });

    it("should have bike-themed imagery", () => {
      const { container } = render(<NotFound />);
      // Check for BikeIcon components (rendered as svg)
      const svgElements = container.querySelectorAll("svg");
      expect(svgElements.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    it("should have proper heading hierarchy", () => {
      render(<NotFound />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it("should have navigation links", () => {
      render(<NotFound />);
      const links = screen.getAllByRole("link");
      expect(links.length).toBeGreaterThanOrEqual(3);
    });

    it("should have descriptive link text", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "NEXT_LOCALE=en",
      });
      render(<NotFound />);

      const homeLink = screen.getByText("Back to home");
      const toursLink = screen.getByText("Guided tours");
      const rentLink = screen.getByText("Bike rentals");

      expect(homeLink).toBeInTheDocument();
      expect(toursLink).toBeInTheDocument();
      expect(rentLink).toBeInTheDocument();
    });
  });
});
