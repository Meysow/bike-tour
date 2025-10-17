import {
  createLocalizedLink,
  getAllLocalizedRoutes,
  getAlternateLanguageUrl,
} from "@/lib/utils/navigation";

describe("Navigation Utilities", () => {
  describe("createLocalizedLink", () => {
    it("should create English link for tours", () => {
      const link = createLocalizedLink("tours", "en");
      expect(link).toBe("/guided-bike-tour-paris");
    });

    it("should create French link for tours", () => {
      const link = createLocalizedLink("tours", "fr");
      expect(link).toBe("/visite-guidee-de-paris-a-velo");
    });

    it("should create German link for rent", () => {
      const link = createLocalizedLink("rent", "de");
      expect(link).toBe("/fahrradverleih-paris");
    });

    it("should create Dutch link for about", () => {
      const link = createLocalizedLink("about", "nl");
      expect(link).toBe("/over-ons");
    });

    it("should create Spanish link for blog", () => {
      const link = createLocalizedLink("blog", "es");
      expect(link).toBe("/blog");
    });

    it("should default to English locale", () => {
      const link = createLocalizedLink("home");
      expect(link).toBe("/");
    });

    it("should handle terms route", () => {
      const linkEn = createLocalizedLink("terms", "en");
      expect(linkEn).toBe("/terms-and-conditions");

      const linkFr = createLocalizedLink("terms", "fr");
      expect(linkFr).toBe("/conditions-generales-utilisation");
    });

    it("should handle FAQ route", () => {
      const linkEn = createLocalizedLink("faq", "en");
      expect(linkEn).toBe("/frequently-asked-questions");

      const linkFr = createLocalizedLink("faq", "fr");
      expect(linkFr).toBe("/questions-frequentes");

      const linkEs = createLocalizedLink("faq", "es");
      expect(linkEs).toBe("/preguntas-frecuentes");
    });
  });

  describe("getAllLocalizedRoutes", () => {
    it("should return all routes for English locale", () => {
      const allRoutes = getAllLocalizedRoutes("en");
      expect(allRoutes).toEqual({
        home: "/",
        tours: "/guided-bike-tour-paris",
        rent: "/bike-rental-paris",
        blog: "/blog",
        about: "/about-us",
        privacy: "/privacy-policy",
        terms: "/terms-and-conditions",
        faq: "/frequently-asked-questions",
      });
    });

    it("should return all routes for French locale", () => {
      const allRoutes = getAllLocalizedRoutes("fr");
      expect(allRoutes).toEqual({
        home: "/",
        tours: "/visite-guidee-de-paris-a-velo",
        rent: "/location-velo-paris",
        blog: "/blog",
        about: "/a-propos",
        privacy: "/politique-de-confidentialite",
        terms: "/conditions-generales-utilisation",
        faq: "/questions-frequentes",
      });
    });

    it("should return all routes for German locale", () => {
      const allRoutes = getAllLocalizedRoutes("de");
      expect(allRoutes.tours).toBe("/gefuehrte-radtour-paris");
      expect(allRoutes.rent).toBe("/fahrradverleih-paris");
      expect(allRoutes.faq).toBe("/haufige-fragen");
    });

    it("should return all routes for Dutch locale", () => {
      const allRoutes = getAllLocalizedRoutes("nl");
      expect(allRoutes.tours).toBe("/begeleide-fietstour-parijs");
      expect(allRoutes.rent).toBe("/fietsverhuur-parijs");
      expect(allRoutes.faq).toBe("/veelgestelde-vragen");
    });

    it("should return all routes for Spanish locale", () => {
      const allRoutes = getAllLocalizedRoutes("es");
      expect(allRoutes.tours).toBe("/tour-guiado-bicicleta-paris");
      expect(allRoutes.rent).toBe("/alquiler-bicicletas-paris");
      expect(allRoutes.faq).toBe("/preguntas-frecuentes");
    });
  });

  describe("getAlternateLanguageUrl", () => {
    it("should get French alternate for English tours page", () => {
      const altUrl = getAlternateLanguageUrl(
        "/guided-bike-tour-paris",
        "en",
        "fr"
      );
      expect(altUrl).toBe("/visite-guidee-de-paris-a-velo");
    });

    it("should get English alternate for French rent page", () => {
      const altUrl = getAlternateLanguageUrl(
        "/location-velo-paris",
        "fr",
        "en"
      );
      expect(altUrl).toBe("/bike-rental-paris");
    });

    it("should get German alternate for English about page", () => {
      const altUrl = getAlternateLanguageUrl("/about-us", "en", "de");
      expect(altUrl).toBe("/uber-uns");
    });

    it("should get Dutch alternate for French terms page", () => {
      const altUrl = getAlternateLanguageUrl(
        "/conditions-generales-utilisation",
        "fr",
        "nl"
      );
      expect(altUrl).toBe("/algemene-voorwaarden");
    });

    it("should return home page for unknown path", () => {
      const altUrl = getAlternateLanguageUrl("/unknown-path", "en", "fr");
      expect(altUrl).toBe("/");
    });

    it("should handle home page translation", () => {
      const altUrl = getAlternateLanguageUrl("/", "en", "fr");
      expect(altUrl).toBe("/");
    });

    it("should handle FAQ page translation", () => {
      const altUrlEnToFr = getAlternateLanguageUrl(
        "/frequently-asked-questions",
        "en",
        "fr"
      );
      expect(altUrlEnToFr).toBe("/questions-frequentes");

      const altUrlFrToEs = getAlternateLanguageUrl(
        "/questions-frequentes",
        "fr",
        "es"
      );
      expect(altUrlFrToEs).toBe("/preguntas-frecuentes");
    });
  });
});
