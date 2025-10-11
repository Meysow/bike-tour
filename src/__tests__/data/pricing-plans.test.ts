import { pricingPlans } from "@/data/pricing-plans";

describe("Pricing Plans Data", () => {
  it("should have three pricing plans", () => {
    expect(pricingPlans).toHaveLength(3);
  });

  it("should have required properties for each plan", () => {
    pricingPlans.forEach((plan) => {
      expect(plan).toHaveProperty("id");
      expect(plan).toHaveProperty("name");
      expect(plan).toHaveProperty("description");
      expect(plan).toHaveProperty("dailyRate");
      expect(plan).toHaveProperty("features");
      expect(plan).toHaveProperty("limitations");
      expect(plan).toHaveProperty("stripePriceId");
      expect(plan).toHaveProperty("stripeIds");
      expect(plan).toHaveProperty("image");
    });
  });

  it("should have unique IDs", () => {
    const ids = pricingPlans.map((plan) => plan.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(pricingPlans.length);
  });

  it("should have valid daily rates", () => {
    pricingPlans.forEach((plan) => {
      expect(plan.dailyRate).toBeGreaterThan(0);
      expect(typeof plan.dailyRate).toBe("number");
    });
  });

  it("should have features array", () => {
    pricingPlans.forEach((plan) => {
      expect(Array.isArray(plan.features)).toBe(true);
      expect(plan.features.length).toBeGreaterThan(0);
    });
  });

  it("should have limitations array", () => {
    pricingPlans.forEach((plan) => {
      expect(Array.isArray(plan.limitations)).toBe(true);
    });
  });

  describe("Deluxe 7 Plan", () => {
    const deluxePlan = pricingPlans.find((p) => p.id === "deluxe7");

    it("should exist", () => {
      expect(deluxePlan).toBeDefined();
    });

    it("should have correct name", () => {
      expect(deluxePlan?.name).toBe("Deluxe 7 - Normal Bike");
    });

    it("should have daily rate of 15", () => {
      expect(deluxePlan?.dailyRate).toBe(15);
    });

    it("should have 7-speed gear system feature", () => {
      expect(deluxePlan?.features).toContain("7-speed gear system");
    });
  });

  describe("Electric Bike Plan", () => {
    const ebikePlan = pricingPlans.find((p) => p.id === "ebike");

    it("should exist", () => {
      expect(ebikePlan).toBeDefined();
    });

    it("should have correct name", () => {
      expect(ebikePlan?.name).toBe("Electric Bike - Power 1");
    });

    it("should have daily rate of 25", () => {
      expect(ebikePlan?.dailyRate).toBe(25);
    });

    it("should have electric pedal-assist feature", () => {
      expect(ebikePlan?.features).toContain("Electric pedal-assist");
    });
  });

  describe("Children Bike Plan", () => {
    const childrenPlan = pricingPlans.find((p) => p.id === "children");

    it("should exist", () => {
      expect(childrenPlan).toBeDefined();
    });

    it("should have correct name", () => {
      expect(childrenPlan?.name).toBe('Children\'s Bike 20" or 24"');
    });

    it("should have daily rate of 13", () => {
      expect(childrenPlan?.dailyRate).toBe(13);
    });

    it("should have lightweight frame feature", () => {
      expect(childrenPlan?.features).toContain("Lightweight frame");
    });
  });

  it("should order plans by price (cheapest to most expensive)", () => {
    const childrenPlan = pricingPlans.find((p) => p.id === "children");
    const deluxePlan = pricingPlans.find((p) => p.id === "deluxe7");
    const ebikePlan = pricingPlans.find((p) => p.id === "ebike");

    expect(childrenPlan?.dailyRate).toBeLessThan(deluxePlan?.dailyRate || 0);
    expect(deluxePlan?.dailyRate).toBeLessThan(ebikePlan?.dailyRate || 0);
  });
});
