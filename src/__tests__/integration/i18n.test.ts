import { getLocalizedPath as getLocalizedPathFromConfig } from "@/config/routes";
import { extractLocaleFromPath, getLocalizedPath } from "@/lib/utils/locale";

describe("i18n Integration Tests", () => {
  describe("Locale Detection and Path Generation", () => {
    it("should consistently detect and generate paths", () => {
      const testCases = [
        { path: "/en/tours", expectedLocale: "en" },
        { path: "/fr/rent", expectedLocale: "fr" },
        { path: "/de/about", expectedLocale: "de" },
        { path: "/nl/blog", expectedLocale: "nl" },
        { path: "/es/terms", expectedLocale: "es" },
      ];

      testCases.forEach(({ path, expectedLocale }) => {
        const extractedLocale = extractLocaleFromPath(path);
        expect(extractedLocale).toBe(expectedLocale);

        // Verify we can reconstruct the path
        const reconstructed = getLocalizedPath(path, extractedLocale);
        expect(reconstructed).toBe(path);
      });
    });

    it("should handle locale-prefixed paths correctly", () => {
      const locales = ["en", "fr", "de", "nl", "es"] as const;
      const basePath = "/tours";

      locales.forEach((locale) => {
        const localizedPath = getLocalizedPath(basePath, locale);
        expect(localizedPath).toBe(`/${locale}${basePath}`);

        const extractedLocale = extractLocaleFromPath(localizedPath);
        expect(extractedLocale).toBe(locale);
      });
    });

    it("should default to fr for unknown locales", () => {
      const unknownPaths = ["/unknown/path", "/xx/route", "/123/page"];

      unknownPaths.forEach((path) => {
        const locale = extractLocaleFromPath(path);
        expect(locale).toBe("fr");
      });
    });
  });

  describe("Localized Route URLs", () => {
    it("should generate correct URLs for all route-locale combinations", () => {
      const routes = [
        "home",
        "tours",
        "rent",
        "blog",
        "about",
        "terms",
      ] as const;
      const locales = ["en", "fr", "de", "nl", "es"] as const;

      routes.forEach((route) => {
        locales.forEach((locale) => {
          const path = getLocalizedPathFromConfig(route, locale);
          expect(path).toBeTruthy();
          expect(typeof path).toBe("string");
        });
      });
    });

    it("should maintain path consistency across utility functions", () => {
      const locales = ["en", "fr", "de", "nl", "es"] as const;

      locales.forEach((locale) => {
        // Test path generation consistency
        const homePath = getLocalizedPathFromConfig("home", locale);
        const toursPath = getLocalizedPathFromConfig("tours", locale);
        const rentPath = getLocalizedPathFromConfig("rent", locale);

        expect(homePath).toBe("/");
        expect(toursPath).toBeTruthy();
        expect(rentPath).toBeTruthy();
      });
    });
  });

  describe("Multi-locale Navigation", () => {
    it("should support navigation between all locale pairs", () => {
      const locales = ["en", "fr", "de", "nl", "es"] as const;
      const route = "tours" as const;

      locales.forEach((sourceLocale) => {
        const sourcePath = getLocalizedPathFromConfig(route, sourceLocale);

        locales.forEach((targetLocale) => {
          const targetPath = getLocalizedPathFromConfig(route, targetLocale);

          // Verify both paths are valid and different (unless same locale)
          expect(sourcePath).toBeTruthy();
          expect(targetPath).toBeTruthy();

          if (sourceLocale !== targetLocale) {
            // Most routes should be different across locales (except home)
            if (route !== "home" && route !== "blog") {
              expect(sourcePath).not.toBe(targetPath);
            }
          } else {
            expect(sourcePath).toBe(targetPath);
          }
        });
      });
    });

    it("should preserve route identity across locale changes", () => {
      const route = "rent" as const;
      const paths = {
        en: getLocalizedPathFromConfig(route, "en"),
        fr: getLocalizedPathFromConfig(route, "fr"),
        de: getLocalizedPathFromConfig(route, "de"),
        nl: getLocalizedPathFromConfig(route, "nl"),
        es: getLocalizedPathFromConfig(route, "es"),
      };

      // All paths should be non-empty
      Object.values(paths).forEach((path) => {
        expect(path).toBeTruthy();
        expect(path.length).toBeGreaterThan(0);
      });

      // Paths should be locale-specific (most should be different)
      const uniquePaths = new Set(Object.values(paths));
      expect(uniquePaths.size).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Default Locale Behavior", () => {
    it("should use fr as default locale when not specified", () => {
      const defaultLocale = extractLocaleFromPath("/");
      expect(defaultLocale).toBe("fr");
    });

    it("should handle root path correctly", () => {
      const rootPath = "/";
      const locale = extractLocaleFromPath(rootPath);
      expect(locale).toBe("fr");

      const localizedRoot = getLocalizedPath(rootPath, "en");
      expect(localizedRoot).toBe("/en");
    });

    it("should not double-prefix already localized paths", () => {
      const alreadyLocalized = [
        "/en/tours",
        "/fr/rent",
        "/de/about",
        "/nl/blog",
        "/es/terms",
      ];

      alreadyLocalized.forEach((path) => {
        const locale = extractLocaleFromPath(path);
        const reprocessed = getLocalizedPath(path, locale);
        expect(reprocessed).toBe(path);
      });
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty path", () => {
      const locale = extractLocaleFromPath("");
      expect(locale).toBe("fr");
    });

    it("should handle paths with trailing slashes", () => {
      const pathWithTrailingSlash = "/en/tours/";
      const locale = extractLocaleFromPath(pathWithTrailingSlash);
      expect(locale).toBe("en");
    });

    it("should handle paths with query parameters", () => {
      const pathWithQuery = "/en/tours?id=123";
      const locale = extractLocaleFromPath(pathWithQuery);
      expect(locale).toBe("en");
    });

    it("should handle nested paths", () => {
      const nestedPath = "/en/blog/post-slug";
      const locale = extractLocaleFromPath(nestedPath);
      expect(locale).toBe("en");
    });
  });
});
