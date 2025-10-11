import {
  createPathToLocaleMap,
  getLocaleFromPath,
  getLocalizedPath,
  getRouteKeyFromPath,
  routes,
} from "@/config/routes";

describe("Routes Configuration", () => {
  describe("routes structure", () => {
    it("should have all required routes", () => {
      expect(routes).toHaveProperty("home");
      expect(routes).toHaveProperty("tours");
      expect(routes).toHaveProperty("rent");
      expect(routes).toHaveProperty("blog");
      expect(routes).toHaveProperty("about");
      expect(routes).toHaveProperty("terms");
    });

    it("should have all locales for each route", () => {
      Object.values(routes).forEach((route) => {
        expect(route).toHaveProperty("en");
        expect(route).toHaveProperty("fr");
        expect(route).toHaveProperty("de");
        expect(route).toHaveProperty("nl");
        expect(route).toHaveProperty("es");
        expect(route).toHaveProperty("filePath");
      });
    });
  });

  describe("getLocalizedPath", () => {
    it("should return correct path for home in English", () => {
      expect(getLocalizedPath("home", "en")).toBe("/");
    });

    it("should return correct path for tours in French", () => {
      expect(getLocalizedPath("tours", "fr")).toBe(
        "/visite-guidee-de-paris-a-velo"
      );
    });

    it("should return correct path for rent in German", () => {
      expect(getLocalizedPath("rent", "de")).toBe("/fahrradverleih-paris");
    });

    it("should return correct path for about in Dutch", () => {
      expect(getLocalizedPath("about", "nl")).toBe("/over-ons");
    });

    it("should return correct path for blog in Spanish", () => {
      expect(getLocalizedPath("blog", "es")).toBe("/blog");
    });

    it("should use default locale when not specified", () => {
      const path = getLocalizedPath("tours");
      expect(path).toBeTruthy();
    });
  });

  describe("getRouteKeyFromPath", () => {
    it("should return home for root path", () => {
      expect(getRouteKeyFromPath("/")).toBe("home");
    });

    it("should return tours for English tours path", () => {
      expect(getRouteKeyFromPath("/guided-bike-tour-paris")).toBe("tours");
    });

    it("should return tours for French tours path", () => {
      expect(getRouteKeyFromPath("/visite-guidee-de-paris-a-velo")).toBe(
        "tours"
      );
    });

    it("should return rent for German rent path", () => {
      expect(getRouteKeyFromPath("/fahrradverleih-paris")).toBe("rent");
    });

    it("should return about for Dutch about path", () => {
      expect(getRouteKeyFromPath("/over-ons")).toBe("about");
    });

    it("should return terms for Spanish terms path", () => {
      expect(getRouteKeyFromPath("/terminos-y-condiciones")).toBe("terms");
    });

    it("should return null for unknown path", () => {
      expect(getRouteKeyFromPath("/unknown-path")).toBeNull();
    });

    it("should handle paths without leading slash", () => {
      expect(getRouteKeyFromPath("blog")).toBe("blog");
    });
  });

  describe("createPathToLocaleMap", () => {
    it("should create a map with all routes", () => {
      const pathMap = createPathToLocaleMap();
      expect(pathMap.size).toBeGreaterThan(0);
    });

    it("should map English paths correctly", () => {
      const pathMap = createPathToLocaleMap();
      const result = pathMap.get("/guided-bike-tour-paris");
      expect(result).toEqual({ key: "tours", locale: "en" });
    });

    it("should map French paths correctly", () => {
      const pathMap = createPathToLocaleMap();
      const result = pathMap.get("/location-velo-paris");
      expect(result).toEqual({ key: "rent", locale: "fr" });
    });

    it("should map German paths correctly", () => {
      const pathMap = createPathToLocaleMap();
      const result = pathMap.get("/uber-uns");
      expect(result).toEqual({ key: "about", locale: "de" });
    });

    it("should map Dutch paths correctly", () => {
      const pathMap = createPathToLocaleMap();
      const result = pathMap.get("/algemene-voorwaarden");
      expect(result).toEqual({ key: "terms", locale: "nl" });
    });

    it("should map Spanish paths correctly", () => {
      const pathMap = createPathToLocaleMap();
      const result = pathMap.get("/tour-guiado-bicicleta-paris");
      expect(result).toEqual({ key: "tours", locale: "es" });
    });
  });

  describe("getLocaleFromPath", () => {
    it("should return correct locale and route for English tours", () => {
      const result = getLocaleFromPath("/guided-bike-tour-paris");
      expect(result).toEqual({
        locale: "en",
        routeKey: "tours",
        filePath: "/tours",
      });
    });

    it("should return correct locale and route for French rent", () => {
      const result = getLocaleFromPath("/location-velo-paris");
      expect(result).toEqual({
        locale: "fr",
        routeKey: "rent",
        filePath: "/rent",
      });
    });

    it("should return correct locale and route for German about", () => {
      const result = getLocaleFromPath("/uber-uns");
      expect(result).toEqual({
        locale: "de",
        routeKey: "about",
        filePath: "/about",
      });
    });

    it("should return default locale for unknown path", () => {
      const result = getLocaleFromPath("/unknown");
      expect(result.locale).toBe("fr");
      expect(result.routeKey).toBeNull();
      expect(result.filePath).toBeNull();
    });

    it("should handle root path", () => {
      const result = getLocaleFromPath("/");
      expect(result.locale).toBeDefined();
      expect(result.routeKey).toBe("home");
    });
  });
});
