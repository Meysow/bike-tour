import { type Locale } from "@/config/i18n";
import { getNavItems, navigationConfig } from "@/config/navigation";

describe("Navigation Configuration", () => {
  describe("navigationConfig", () => {
    it("should have all locales defined", () => {
      expect(navigationConfig).toHaveProperty("en");
      expect(navigationConfig).toHaveProperty("fr");
      expect(navigationConfig).toHaveProperty("de");
      expect(navigationConfig).toHaveProperty("nl");
      expect(navigationConfig).toHaveProperty("es");
    });

    it("should have all navigation labels for each locale", () => {
      const locales: Locale[] = ["en", "fr", "de", "nl", "es"];

      locales.forEach((locale) => {
        expect(navigationConfig[locale]).toHaveProperty("home");
        expect(navigationConfig[locale]).toHaveProperty("tours");
        expect(navigationConfig[locale]).toHaveProperty("rent");
        expect(navigationConfig[locale]).toHaveProperty("blog");
        expect(navigationConfig[locale]).toHaveProperty("about");
        expect(navigationConfig[locale]).toHaveProperty("faq");
      });
    });

    it("should have correct English labels", () => {
      expect(navigationConfig.en.home).toBe("Home");
      expect(navigationConfig.en.tours).toBe("Guided Tours");
      expect(navigationConfig.en.rent).toBe("Bike Rentals");
      expect(navigationConfig.en.blog).toBe("Blog");
      expect(navigationConfig.en.about).toBe("About Us");
      expect(navigationConfig.en.faq).toBe("FAQ");
    });

    it("should have correct French labels", () => {
      expect(navigationConfig.fr.home).toBe("Accueil");
      expect(navigationConfig.fr.tours).toBe("Visites Guidées");
      expect(navigationConfig.fr.rent).toBe("Location de Vélos");
      expect(navigationConfig.fr.blog).toBe("Blog");
      expect(navigationConfig.fr.about).toBe("À Propos");
      expect(navigationConfig.fr.faq).toBe("FAQ");
    });

    it("should have correct German labels", () => {
      expect(navigationConfig.de.home).toBe("Startseite");
      expect(navigationConfig.de.tours).toBe("Geführte Touren");
      expect(navigationConfig.de.rent).toBe("Fahrradverleih");
      expect(navigationConfig.de.blog).toBe("Blog");
      expect(navigationConfig.de.about).toBe("Über Uns");
      expect(navigationConfig.de.faq).toBe("FAQ");
    });
  });

  describe("getNavItems", () => {
    describe("Valid locales", () => {
      it("should return nav items for English", () => {
        const items = getNavItems("en");

        expect(items).toHaveLength(6);
        expect(items[0]).toEqual({
          title: "Home",
          href: "/",
        });
        expect(items[1]).toEqual({
          title: "Guided Tours",
          href: "/guided-bike-tour-paris",
        });
        expect(items[2]).toEqual({
          title: "Bike Rentals",
          href: "/bike-rental-paris",
        });
        expect(items[3]).toEqual({
          title: "Blog",
          href: "/blog",
        });
        expect(items[4]).toEqual({
          title: "About Us",
          href: "/about-us",
        });
        expect(items[5]).toEqual({
          title: "FAQ",
          href: "/frequently-asked-questions",
        });
      });

      it("should return nav items for French", () => {
        const items = getNavItems("fr");

        expect(items).toHaveLength(6);
        expect(items[0]).toEqual({
          title: "Accueil",
          href: "/",
        });
        expect(items[1]).toEqual({
          title: "Visites Guidées",
          href: "/visite-guidee-de-paris-a-velo",
        });
        expect(items[2]).toEqual({
          title: "Location de Vélos",
          href: "/location-velo-paris",
        });
        expect(items[3]).toEqual({
          title: "Blog",
          href: "/blog",
        });
        expect(items[4]).toEqual({
          title: "À Propos",
          href: "/a-propos",
        });
        expect(items[5]).toEqual({
          title: "FAQ",
          href: "/questions-frequentes",
        });
      });

      it("should return nav items for German", () => {
        const items = getNavItems("de");

        expect(items).toHaveLength(6);
        expect(items[0].title).toBe("Startseite");
        expect(items[1].title).toBe("Geführte Touren");
        expect(items[2].title).toBe("Fahrradverleih");
        expect(items[5].title).toBe("FAQ");
        expect(items[0].href).toBe("/");
        expect(items[1].href).toBe("/gefuehrte-radtour-paris");
        expect(items[2].href).toBe("/fahrradverleih-paris");
        expect(items[5].href).toBe("/haufige-fragen");
      });

      it("should return nav items for Dutch", () => {
        const items = getNavItems("nl");

        expect(items).toHaveLength(6);
        expect(items[0].title).toBe("Home");
        expect(items[1].title).toBe("Rondleidingen");
        expect(items[2].title).toBe("Fietsverhuur");
        expect(items[5].title).toBe("FAQ");
        expect(items[0].href).toBe("/");
        expect(items[1].href).toBe("/begeleide-fietstour-parijs");
        expect(items[2].href).toBe("/fietsverhuur-parijs");
        expect(items[5].href).toBe("/veelgestelde-vragen");
      });

      it("should return nav items for Spanish", () => {
        const items = getNavItems("es");

        expect(items).toHaveLength(6);
        expect(items[0].title).toBe("Inicio");
        expect(items[1].title).toBe("Visitas Guiadas");
        expect(items[2].title).toBe("Alquiler de Bicicletas");
        expect(items[5].title).toBe("FAQ");
        expect(items[0].href).toBe("/");
        expect(items[1].href).toBe("/tour-guiado-bicicleta-paris");
        expect(items[2].href).toBe("/alquiler-bicicletas-paris");
        expect(items[5].href).toBe("/preguntas-frecuentes");
      });
    });

    describe("Invalid locale fallback", () => {
      it("should fallback to French for invalid locale", () => {
        // @ts-expect-error - Testing invalid locale
        const items = getNavItems("invalid");

        expect(items).toHaveLength(6);
        expect(items[0]).toEqual({
          title: "Accueil",
          href: "/",
        });
        expect(items[1]).toEqual({
          title: "Visites Guidées",
          href: "/visite-guidee-de-paris-a-velo",
        });
        expect(items[2]).toEqual({
          title: "Location de Vélos",
          href: "/location-velo-paris",
        });
        expect(items[5]).toEqual({
          title: "FAQ",
          href: "/questions-frequentes",
        });
      });

      it("should fallback to French for undefined locale", () => {
        // @ts-expect-error - Testing undefined locale
        const items = getNavItems(undefined);

        expect(items).toHaveLength(6);
        expect(items[0].title).toBe("Accueil");
        expect(items[1].title).toBe("Visites Guidées");
        expect(items[2].title).toBe("Location de Vélos");
        expect(items[5].title).toBe("FAQ");
      });

      it("should fallback to French for null locale", () => {
        // @ts-expect-error - Testing null locale
        const items = getNavItems(null);

        expect(items).toHaveLength(6);
        expect(items[0].title).toBe("Accueil");
        expect(items[1].title).toBe("Visites Guidées");
        expect(items[2].title).toBe("Location de Vélos");
        expect(items[5].title).toBe("FAQ");
      });

      it("should not throw error for invalid locale", () => {
        // @ts-expect-error - Testing invalid locale
        expect(() => getNavItems("xyz")).not.toThrow();
      });
    });

    describe("Consistency checks", () => {
      it("should have same number of items for all locales", () => {
        const locales: Locale[] = ["en", "fr", "de", "nl", "es"];
        const lengths = locales.map((locale) => getNavItems(locale).length);

        expect(new Set(lengths).size).toBe(1); // All same length
      });

      it("should have href for all items", () => {
        const locales: Locale[] = ["en", "fr", "de", "nl", "es"];

        locales.forEach((locale) => {
          const items = getNavItems(locale);
          items.forEach((item) => {
            expect(item.href).toBeDefined();
            expect(typeof item.href).toBe("string");
            expect(item.href.length).toBeGreaterThan(0);
          });
        });
      });

      it("should have title for all items", () => {
        const locales: Locale[] = ["en", "fr", "de", "nl", "es"];

        locales.forEach((locale) => {
          const items = getNavItems(locale);
          items.forEach((item) => {
            expect(item.title).toBeDefined();
            expect(typeof item.title).toBe("string");
            expect(item.title.length).toBeGreaterThan(0);
          });
        });
      });
    });
  });
});
