import {
  extractLocaleFromPath,
  getLocalizedPath,
  useLocale,
} from "@/lib/utils/locale";
import { renderHook } from "@testing-library/react";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mockUsePathname = require("next/navigation").usePathname;

describe("Locale Utilities", () => {
  describe("useLocale", () => {
    it("should return locale from pathname", () => {
      mockUsePathname.mockReturnValue("/en/tours");
      const { result } = renderHook(() => useLocale());
      expect(result.current).toBe("en");
    });

    it("should return fr as default when no locale in path", () => {
      mockUsePathname.mockReturnValue("/");
      const { result } = renderHook(() => useLocale());
      expect(result.current).toBe("fr");
    });

    it("should extract fr locale correctly", () => {
      mockUsePathname.mockReturnValue("/fr/about");
      const { result } = renderHook(() => useLocale());
      expect(result.current).toBe("fr");
    });

    it("should extract de locale correctly", () => {
      mockUsePathname.mockReturnValue("/de/blog");
      const { result } = renderHook(() => useLocale());
      expect(result.current).toBe("de");
    });

    it("should extract nl locale correctly", () => {
      mockUsePathname.mockReturnValue("/nl/rent");
      const { result } = renderHook(() => useLocale());
      expect(result.current).toBe("nl");
    });

    it("should extract es locale correctly", () => {
      mockUsePathname.mockReturnValue("/es/tours");
      const { result } = renderHook(() => useLocale());
      expect(result.current).toBe("es");
    });
  });

  describe("getLocalizedPath", () => {
    it("should return path unchanged if already localized with en", () => {
      expect(getLocalizedPath("/en/tours", "en")).toBe("/en/tours");
    });

    it("should return path unchanged if already localized with fr", () => {
      expect(getLocalizedPath("/fr/tours", "fr")).toBe("/fr/tours");
    });

    it("should return path unchanged if already localized with de", () => {
      expect(getLocalizedPath("/de/tours", "de")).toBe("/de/tours");
    });

    it("should return path unchanged if already localized with nl", () => {
      expect(getLocalizedPath("/nl/tours", "nl")).toBe("/nl/tours");
    });

    it("should return path unchanged if already localized with es", () => {
      expect(getLocalizedPath("/es/tours", "es")).toBe("/es/tours");
    });

    it("should add locale prefix to root path", () => {
      expect(getLocalizedPath("/", "en")).toBe("/en");
    });

    it("should add locale prefix to path without locale", () => {
      expect(getLocalizedPath("/tours", "fr")).toBe("/fr/tours");
    });

    it("should use fr as default locale", () => {
      expect(getLocalizedPath("/about")).toBe("/fr/about");
    });
  });

  describe("extractLocaleFromPath", () => {
    it("should extract en locale from pathname", () => {
      expect(extractLocaleFromPath("/en/tours")).toBe("en");
    });

    it("should extract fr locale from pathname", () => {
      expect(extractLocaleFromPath("/fr/tours")).toBe("fr");
    });

    it("should extract de locale from pathname", () => {
      expect(extractLocaleFromPath("/de/tours")).toBe("de");
    });

    it("should extract nl locale from pathname", () => {
      expect(extractLocaleFromPath("/nl/tours")).toBe("nl");
    });

    it("should extract es locale from pathname", () => {
      expect(extractLocaleFromPath("/es/tours")).toBe("es");
    });

    it("should return fr as default for invalid locale", () => {
      expect(extractLocaleFromPath("/invalid/path")).toBe("fr");
    });

    it("should return fr as default for root path", () => {
      expect(extractLocaleFromPath("/")).toBe("fr");
    });

    it("should return fr as default for non-localized path", () => {
      expect(extractLocaleFromPath("/some/path")).toBe("fr");
    });
  });
});
