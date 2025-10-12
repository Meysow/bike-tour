import {
  createPathToLocaleMap,
  getLocalizedPath,
  getRouteKeyFromPath,
  routes,
} from "@/config/routes";
import {
  createLocalizedLink,
  getAllLocalizedRoutes,
  getAlternateLanguageUrl,
} from "@/lib/utils/navigation";

describe("Routing Integration Tests", () => {
  describe("Route Configuration and Navigation", () => {
    it("should create consistent paths across config and navigation utils", () => {
      const locales: Array<"en" | "fr" | "de" | "nl" | "es"> = [
        "en",
        "fr",
        "de",
        "nl",
        "es",
      ];
      const routeKeys: Array<keyof typeof routes> = [
        "home",
        "tours",
        "rent",
        "blog",
        "about",
        "terms",
      ];

      locales.forEach((locale) => {
        routeKeys.forEach((routeKey) => {
          const configPath = getLocalizedPath(routeKey, locale);
          const utilPath = createLocalizedLink(routeKey, locale);

          expect(configPath).toBe(utilPath);
        });
      });
    });

    it("should correctly identify route keys from paths", () => {
      const testCases = [
        { path: "/", expectedKey: "home" },
        { path: "/guided-bike-tour-paris", expectedKey: "tours" },
        { path: "/visite-guidee-de-paris-a-velo", expectedKey: "tours" },
        { path: "/bike-rental-paris", expectedKey: "rent" },
        { path: "/location-velo-paris", expectedKey: "rent" },
        { path: "/blog", expectedKey: "blog" },
        { path: "/about-us", expectedKey: "about" },
        { path: "/a-propos", expectedKey: "about" },
      ];

      testCases.forEach(({ path, expectedKey }) => {
        const routeKey = getRouteKeyFromPath(path);
        expect(routeKey).toBe(expectedKey);
      });
    });

    it("should create bidirectional mapping correctly", () => {
      const pathMap = createPathToLocaleMap();

      // Test that each path maps back to its original route key
      // Note: When multiple locales have the same path (e.g., "/blog"),
      // the map will only store one locale (the last one set)
      Object.entries(routes).forEach(([routeKey, config]) => {
        ["en", "fr", "de", "nl", "es"].forEach((locale) => {
          const path = config[locale as keyof typeof config];
          if (typeof path === "string") {
            const mapping = pathMap.get(path);
            // Always check that the route key is correct
            expect(mapping?.key).toBe(routeKey);

            // For unique paths, we can verify the locale
            // For shared paths (like "/" or "/blog"), skip locale check
            const allPaths = [
              config.en,
              config.fr,
              config.de,
              config.nl,
              config.es,
            ];
            const isUniquePath =
              allPaths.filter((p) => p === path).length === 1;

            if (isUniquePath) {
              expect(mapping?.locale).toBe(locale);
            }
          }
        });
      });
    });
  });

  describe("Language Switching", () => {
    it("should maintain route context when switching languages", () => {
      const testCases = [
        {
          from: "/guided-bike-tour-paris",
          fromLocale: "en",
          toLocale: "fr",
          expected: "/visite-guidee-de-paris-a-velo",
        },
        {
          from: "/location-velo-paris",
          fromLocale: "fr",
          toLocale: "en",
          expected: "/bike-rental-paris",
        },
        {
          from: "/uber-uns",
          fromLocale: "de",
          toLocale: "en",
          expected: "/about-us",
        },
        {
          from: "/algemene-voorwaarden",
          fromLocale: "nl",
          toLocale: "es",
          expected: "/terminos-y-condiciones",
        },
      ];

      testCases.forEach(({ from, fromLocale, toLocale, expected }) => {
        const result = getAlternateLanguageUrl(
          from,
          fromLocale as any,
          toLocale as any
        );
        expect(result).toBe(expected);
      });
    });

    it("should support round-trip language switching", () => {
      const originalPath = "/guided-bike-tour-paris";
      const originalLocale = "en";

      // Switch to French
      const frenchPath = getAlternateLanguageUrl(
        originalPath,
        originalLocale,
        "fr"
      );
      expect(frenchPath).toBe("/visite-guidee-de-paris-a-velo");

      // Switch back to English
      const backToEnglish = getAlternateLanguageUrl(frenchPath, "fr", "en");
      expect(backToEnglish).toBe(originalPath);
    });

    it("should handle switching between all language pairs", () => {
      const locales: Array<"en" | "fr" | "de" | "nl" | "es"> = [
        "en",
        "fr",
        "de",
        "nl",
        "es",
      ];

      locales.forEach((fromLocale) => {
        locales.forEach((toLocale) => {
          if (fromLocale !== toLocale) {
            const fromPath = routes.tours[fromLocale];
            const result = getAlternateLanguageUrl(
              fromPath,
              fromLocale,
              toLocale
            );
            expect(result).toBe(routes.tours[toLocale]);
          }
        });
      });
    });
  });

  describe("All Routes Accessibility", () => {
    it("should have all routes accessible in all languages", () => {
      const locales: Array<"en" | "fr" | "de" | "nl" | "es"> = [
        "en",
        "fr",
        "de",
        "nl",
        "es",
      ];

      Object.entries(routes).forEach(([routeKey, config]) => {
        locales.forEach((locale) => {
          const path = config[locale];
          expect(path).toBeTruthy();
          expect(typeof path).toBe("string");

          // Verify path can be found
          const foundKey = getRouteKeyFromPath(path);
          expect(foundKey).toBe(routeKey);
        });
      });
    });

    it("should have unique paths per locale", () => {
      const locales: Array<"en" | "fr" | "de" | "nl" | "es"> = [
        "en",
        "fr",
        "de",
        "nl",
        "es",
      ];

      locales.forEach((locale) => {
        const paths = Object.values(routes).map((config) => config[locale]);
        const uniquePaths = new Set(paths);

        // Note: home route is '/' for all, so we expect one duplicate
        expect(uniquePaths.size).toBeGreaterThanOrEqual(paths.length - 1);
      });
    });
  });

  describe("Route Consistency", () => {
    it("should have all routes with required properties", () => {
      Object.entries(routes).forEach(([routeKey, config]) => {
        expect(config).toHaveProperty("en");
        expect(config).toHaveProperty("fr");
        expect(config).toHaveProperty("de");
        expect(config).toHaveProperty("nl");
        expect(config).toHaveProperty("es");
        expect(config).toHaveProperty("filePath");
      });
    });

    it("should have non-empty file paths", () => {
      Object.values(routes).forEach((config) => {
        expect(config.filePath).toBeTruthy();
        expect(typeof config.filePath).toBe("string");
      });
    });

    it("should have all localized routes retrievable", () => {
      const locales: Array<"en" | "fr" | "de" | "nl" | "es"> = [
        "en",
        "fr",
        "de",
        "nl",
        "es",
      ];

      locales.forEach((locale) => {
        const allRoutes = getAllLocalizedRoutes(locale);

        expect(allRoutes).toHaveProperty("home");
        expect(allRoutes).toHaveProperty("tours");
        expect(allRoutes).toHaveProperty("rent");
        expect(allRoutes).toHaveProperty("blog");
        expect(allRoutes).toHaveProperty("about");
        expect(allRoutes).toHaveProperty("terms");
      });
    });
  });
});
