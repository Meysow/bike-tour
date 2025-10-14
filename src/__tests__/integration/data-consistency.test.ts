import { routes } from "@/config/routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { pricingPlans } from "@/data/pricing-plans";
import { testimonials } from "@/data/testimonials";
import { Locale } from "@/config/i18n";

// Get FAQ data from i18n for testing (using English as default)
const faqData = getSectionTranslations("en" as Locale, "faq");
const frequentlyAskedQuestions = faqData.questions || [];

describe("Data Consistency Integration Tests", () => {
  describe("Cross-Data Validation", () => {
    it("should have consistent data structures across all data files", () => {
      // All pricing plans should have images
      expect(pricingPlans.every((plan) => plan.image)).toBe(true);

      // All testimonials should have avatars
      expect(testimonials.every((t) => t.avatar)).toBe(true);

      // All FAQs should have questions and answers
      expect(
        frequentlyAskedQuestions.every((faq) => faq.question && faq.answer)
      ).toBe(true);
    });

    it("should have no conflicting IDs across pricing plans", () => {
      const ids = pricingPlans.map((plan) => plan.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it("should have consistent pricing ranges", () => {
      const rates = pricingPlans.map((plan) => plan.dailyRate);
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

    it("should have complete pricing plan details", () => {
      pricingPlans.forEach((plan) => {
        expect(plan.features.length).toBeGreaterThan(0);
        expect(plan.description.length).toBeGreaterThan(20);
      });
    });
  });

  describe("Asset References", () => {
    it("should have valid image paths in pricing plans", () => {
      pricingPlans.forEach((plan) => {
        expect(plan.image).toBeTruthy();
        // Image objects from Next.js imports have a 'src' property
        expect(plan.image).toHaveProperty("src");
      });
    });

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
      const sortedPlans = [...pricingPlans].sort(
        (a, b) => a.dailyRate - b.dailyRate
      );

      // Verify pricing is progressive
      for (let i = 1; i < sortedPlans.length; i++) {
        expect(sortedPlans[i].dailyRate).toBeGreaterThanOrEqual(
          sortedPlans[i - 1].dailyRate
        );
      }
    });

    it("should have features matching plan types", () => {
      const ebikePlan = pricingPlans.find((p) => p.id === "ebike");
      const deluxePlan = pricingPlans.find((p) => p.id === "deluxe7");

      // E-bike should mention electric features
      const ebikeFeatures = ebikePlan?.features.join(" ").toLowerCase() || "";
      expect(ebikeFeatures).toContain("electric");

      // Deluxe should mention gear system
      const deluxeFeatures = deluxePlan?.features.join(" ").toLowerCase() || "";
      expect(deluxeFeatures).toContain("gear");
    });

    it("should have appropriate limitations for each plan", () => {
      pricingPlans.forEach((plan) => {
        expect(Array.isArray(plan.limitations)).toBe(true);
        // Each plan should acknowledge some limitation
        expect(plan.limitations.length).toBeGreaterThan(0);
      });
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
      expect(pricingPlans.length).toBeGreaterThanOrEqual(2);
    });

    it("should have diverse testimonial authors", () => {
      const uniqueCompanies = new Set(
        testimonials.map((t) => t.role.split(" at ")[1]).filter(Boolean)
      );
      expect(uniqueCompanies.size).toBeGreaterThanOrEqual(5);
    });
  });
});
