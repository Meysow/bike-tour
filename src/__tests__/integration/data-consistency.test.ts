import { Locale } from "@/config/i18n";
import { BIKE_PRICING, getBikeTypes } from "@/config/pricing";
import { routes } from "@/config/routes";
import { testimonials } from "@/data/testimonials";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";

// Get FAQ data from i18n for testing (using English as default)
const faqData = getSectionTranslations("en" as Locale, "faq");
const frequentlyAskedQuestions = faqData.questions || [];

describe("Data Consistency Integration Tests", () => {
  describe("Cross-Data Validation", () => {
    it("should have consistent data structures across all data files", () => {
      // All bike types should have daily rates and names
      const bikeTypes = getBikeTypes();
      expect(bikeTypes.every((type) => BIKE_PRICING[type].dailyRate)).toBe(
        true
      );
      expect(bikeTypes.every((type) => BIKE_PRICING[type].name)).toBe(true);

      // All testimonials should have avatars
      expect(testimonials.every((t) => t.avatar)).toBe(true);

      // All FAQs should have questions and answers
      expect(
        frequentlyAskedQuestions.every((faq) => faq.question && faq.answer)
      ).toBe(true);
    });

    it("should have no conflicting bike types", () => {
      const bikeTypes = getBikeTypes();
      const uniqueTypes = new Set(bikeTypes);
      expect(uniqueTypes.size).toBe(bikeTypes.length);
    });

    it("should have consistent pricing ranges", () => {
      const rates = Object.values(BIKE_PRICING).map((bike) => bike.dailyRate);
      const minRate = Math.min(...rates);
      const maxRate = Math.max(...rates);

      // Verify rates are within reasonable range
      expect(minRate).toBeGreaterThan(0);
      expect(maxRate).toBeLessThan(100);
      expect(maxRate).toBeGreaterThan(minRate);
    });
  });

  describe("Route and Navigation Consistency", () => {
    it("should have all expected routes defined", () => {
      const expectedRoutes = [
        "home",
        "tours",
        "rent",
        "blog",
        "about",
        "terms",
      ];
      expectedRoutes.forEach((routeKey) => {
        expect(routes).toHaveProperty(routeKey);
      });
    });

    it("should have consistent file paths", () => {
      Object.values(routes).forEach((route) => {
        expect(route.filePath).toBeTruthy();
        expect(route.filePath.startsWith("/")).toBe(true);
      });
    });

    it("should have all locales defined for each route", () => {
      const requiredLocales = ["en", "fr", "de", "nl", "es"];

      Object.values(routes).forEach((route) => {
        requiredLocales.forEach((locale) => {
          expect(route).toHaveProperty(locale);
          expect(typeof route[locale as keyof typeof route]).toBe("string");
        });
      });
    });
  });

  describe("Content Quality", () => {
    it("should have substantial testimonials", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.body.length).toBeGreaterThan(50);
        expect(testimonial.title.length).toBeGreaterThan(10);
      });
    });

    it("should have detailed FAQ answers", () => {
      frequentlyAskedQuestions.forEach((faq) => {
        expect(faq.answer.length).toBeGreaterThan(30);
      });
    });

    it("should have complete bike pricing details", () => {
      Object.values(BIKE_PRICING).forEach((bike) => {
        expect(bike.name.length).toBeGreaterThan(10);
        expect(bike.dailyRate).toBeGreaterThan(0);
      });
    });
  });

  describe("Asset References", () => {
    it("should have valid avatar paths in testimonials", () => {
      testimonials.forEach((testimonial) => {
        expect(testimonial.avatar).toMatch(
          /^\/images\/avatars\/.*\.(jpeg|jpg|png)$/
        );
      });
    });
  });

  describe("Business Logic Consistency", () => {
    it("should have reasonable pricing tiers", () => {
      const sortedBikes = Object.entries(BIKE_PRICING).sort(
        ([, a], [, b]) => a.dailyRate - b.dailyRate
      );

      // Verify pricing is progressive
      for (let i = 1; i < sortedBikes.length; i++) {
        expect(sortedBikes[i][1].dailyRate).toBeGreaterThanOrEqual(
          sortedBikes[i - 1][1].dailyRate
        );
      }
    });

    it("should have names matching bike types", () => {
      // E-bike should mention electric
      expect(BIKE_PRICING.ebike.name.toLowerCase()).toContain("electric");

      // Deluxe should mention normal bike or similar
      expect(BIKE_PRICING.deluxe7.name.toLowerCase()).toMatch(
        /(normal|deluxe)/
      );

      // Children should mention children or kids
      expect(BIKE_PRICING.children.name.toLowerCase()).toContain("children");
    });

    it("should have appropriate pricing for each bike type", () => {
      // Electric bike should be most expensive
      expect(BIKE_PRICING.ebike.dailyRate).toBeGreaterThan(
        BIKE_PRICING.deluxe7.dailyRate
      );
      expect(BIKE_PRICING.ebike.dailyRate).toBeGreaterThan(
        BIKE_PRICING.children.dailyRate
      );

      // Basic bikes should be similarly priced
      expect(BIKE_PRICING.deluxe7.dailyRate).toBe(
        BIKE_PRICING.children.dailyRate
      );
    });
  });

  describe("Data Completeness", () => {
    it("should have sufficient testimonials for display", () => {
      expect(testimonials.length).toBeGreaterThanOrEqual(6);
    });

    it("should have comprehensive FAQs", () => {
      expect(frequentlyAskedQuestions.length).toBeGreaterThanOrEqual(5);
    });

    it("should have multiple pricing options", () => {
      expect(getBikeTypes().length).toBeGreaterThanOrEqual(2);
    });

    it("should have diverse testimonial authors", () => {
      const uniqueCompanies = new Set(
        testimonials.map((t) => t.role.split(" at ")[1]).filter(Boolean)
      );
      expect(uniqueCompanies.size).toBeGreaterThanOrEqual(5);
    });
  });
});
