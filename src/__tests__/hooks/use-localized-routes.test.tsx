import { routes } from "@/config/routes";
import { useLocale, useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { renderHook } from "@testing-library/react";

// Mock next/navigation
const mockUseParams = jest.fn();
const mockUsePathname = jest.fn();

// Override the global mock from jest.setup.js
jest.mock("next/navigation", () => ({
  useParams: () => mockUseParams(),
  usePathname: () => mockUsePathname(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}));

describe("useLocale Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset mocks to default values
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/");
  });

  it("should return locale from params", () => {
    mockUseParams.mockReturnValue({ locale: "en" });
    mockUsePathname.mockReturnValue("/en/tours");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("en");
  });

  it("should return fr from params", () => {
    mockUseParams.mockReturnValue({ locale: "fr" });
    mockUsePathname.mockReturnValue("/fr/tours");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("fr");
  });

  it("should return de from params", () => {
    mockUseParams.mockReturnValue({ locale: "de" });
    mockUsePathname.mockReturnValue("/de/tours");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("de");
  });

  it("should detect French from pathname when no params", () => {
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/location-velo-paris");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("fr");
  });

  it("should default to fr when no locale found", () => {
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/unknown-path");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("fr"); // Default locale is 'fr'
  });

  it("should handle root path", () => {
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("fr"); // Root path defaults to 'fr'
  });

  it("should handle paths starting with French route", () => {
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/visite-guidee-de-paris-a-velo");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("fr");
  });

  it("should handle paths starting with German route", () => {
    mockUseParams.mockReturnValue({});
    mockUsePathname.mockReturnValue("/gefuehrte-radtour-paris");

    const { result } = renderHook(() => useLocale());
    expect(result.current).toBe("de"); // German route is detected from pathname
  });
});

describe("useLocalizedRoutes Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createLink", () => {
    it("should create link for current locale (en)", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/guided-bike-tour-paris");

      const { result } = renderHook(() => useLocalizedRoutes());
      const link = result.current.createLink("rent");

      expect(link).toBe("/bike-rental-paris");
    });

    it("should create link for current locale (fr)", () => {
      mockUseParams.mockReturnValue({ locale: "fr" });
      mockUsePathname.mockReturnValue("/location-velo-paris");

      const { result } = renderHook(() => useLocalizedRoutes());
      const link = result.current.createLink("tours");

      expect(link).toBe("/visite-guidee-de-paris-a-velo");
    });

    it("should create link for home route", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/tours");

      const { result } = renderHook(() => useLocalizedRoutes());
      const link = result.current.createLink("home");

      expect(link).toBe("/");
    });

    it("should create link for blog route", () => {
      mockUseParams.mockReturnValue({ locale: "fr" });
      mockUsePathname.mockReturnValue("/");

      const { result } = renderHook(() => useLocalizedRoutes());
      const link = result.current.createLink("blog");

      expect(link).toBe("/blog");
    });

    it("should create link for about route", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/");

      const { result } = renderHook(() => useLocalizedRoutes());
      const link = result.current.createLink("about");

      expect(link).toBe("/about-us");
    });

    it("should create link for terms route", () => {
      mockUseParams.mockReturnValue({ locale: "fr" });
      mockUsePathname.mockReturnValue("/");

      const { result } = renderHook(() => useLocalizedRoutes());
      const link = result.current.createLink("terms");

      expect(link).toBe("/conditions-generales-utilisation");
    });
  });

  describe("getLanguageSwitchUrl", () => {
    it("should get French URL for English tours page", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/guided-bike-tour-paris");

      const { result } = renderHook(() => useLocalizedRoutes());
      const url = result.current.getLanguageSwitchUrl("fr");

      expect(url).toBe("/visite-guidee-de-paris-a-velo");
    });

    it("should get English URL for French rent page", () => {
      mockUseParams.mockReturnValue({ locale: "fr" });
      mockUsePathname.mockReturnValue("/location-velo-paris");

      const { result } = renderHook(() => useLocalizedRoutes());
      const url = result.current.getLanguageSwitchUrl("en");

      expect(url).toBe("/bike-rental-paris");
    });

    it("should get German URL for English about page", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/about-us");

      const { result } = renderHook(() => useLocalizedRoutes());
      const url = result.current.getLanguageSwitchUrl("de");

      expect(url).toBe("/uber-uns");
    });

    it("should get Dutch URL for French terms page", () => {
      mockUseParams.mockReturnValue({ locale: "fr" });
      mockUsePathname.mockReturnValue("/conditions-generales-utilisation");

      const { result } = renderHook(() => useLocalizedRoutes());
      const url = result.current.getLanguageSwitchUrl("nl");

      expect(url).toBe("/algemene-voorwaarden");
    });

    it("should return home page for unknown path", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/unknown-path");

      const { result } = renderHook(() => useLocalizedRoutes());
      const url = result.current.getLanguageSwitchUrl("fr");

      expect(url).toBe("/");
    });
  });

  describe("locale and routes", () => {
    it("should return current locale", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/tours");

      const { result } = renderHook(() => useLocalizedRoutes());
      expect(result.current.locale).toBe("en");
    });

    it("should return routes object", () => {
      mockUseParams.mockReturnValue({ locale: "fr" });
      mockUsePathname.mockReturnValue("/");

      const { result } = renderHook(() => useLocalizedRoutes());
      expect(result.current.routes).toBe(routes);
    });

    it("should have all route keys", () => {
      mockUseParams.mockReturnValue({ locale: "en" });
      mockUsePathname.mockReturnValue("/");

      const { result } = renderHook(() => useLocalizedRoutes());

      expect(result.current.routes).toHaveProperty("home");
      expect(result.current.routes).toHaveProperty("tours");
      expect(result.current.routes).toHaveProperty("rent");
      expect(result.current.routes).toHaveProperty("blog");
      expect(result.current.routes).toHaveProperty("about");
      expect(result.current.routes).toHaveProperty("terms");
    });
  });
});
