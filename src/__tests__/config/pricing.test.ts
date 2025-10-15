import { BIKE_PRICING, getBikeTypes, getDailyRate } from "@/config/pricing";

describe("Centralized Pricing Configuration", () => {
  it("should have three bike types", () => {
    const bikeTypes = getBikeTypes();
    expect(bikeTypes).toHaveLength(3);
    expect(bikeTypes).toContain("deluxe7");
    expect(bikeTypes).toContain("ebike");
    expect(bikeTypes).toContain("children");
  });

  it("should have correct pricing for each bike type", () => {
    expect(getDailyRate("deluxe7")).toBe(15);
    expect(getDailyRate("ebike")).toBe(30);
    expect(getDailyRate("children")).toBe(15);
  });

  it("should have valid daily rates", () => {
    const bikeTypes = getBikeTypes();
    bikeTypes.forEach((bikeType) => {
      const rate = getDailyRate(bikeType);
      expect(rate).toBeGreaterThan(0);
      expect(typeof rate).toBe("number");
    });
  });

  describe("BIKE_PRICING object", () => {
    it("should have all required bike types", () => {
      expect(BIKE_PRICING).toHaveProperty("deluxe7");
      expect(BIKE_PRICING).toHaveProperty("ebike");
      expect(BIKE_PRICING).toHaveProperty("children");
    });

    it("should have dailyRate and name for each bike type", () => {
      Object.values(BIKE_PRICING).forEach((bike) => {
        expect(bike).toHaveProperty("dailyRate");
        expect(bike).toHaveProperty("name");
        expect(typeof bike.dailyRate).toBe("number");
        expect(typeof bike.name).toBe("string");
      });
    });

    it("should have correct names", () => {
      expect(BIKE_PRICING.deluxe7.name).toBe("Deluxe 7 - Normal Bike");
      expect(BIKE_PRICING.ebike.name).toBe("Electric Bike - Power 1");
      expect(BIKE_PRICING.children.name).toBe('Children\'s Bike 20" or 24"');
    });
  });

  describe("Pricing Logic", () => {
    it("should have reasonable pricing ranges", () => {
      const rates = Object.values(BIKE_PRICING).map((bike) => bike.dailyRate);
      const minRate = Math.min(...rates);
      const maxRate = Math.max(...rates);

      expect(minRate).toBeGreaterThan(0);
      expect(maxRate).toBeLessThan(100);
      expect(maxRate).toBeGreaterThan(minRate);
    });

    it("should have electric bike as most expensive", () => {
      expect(getDailyRate("ebike")).toBeGreaterThan(getDailyRate("deluxe7"));
      expect(getDailyRate("ebike")).toBeGreaterThan(getDailyRate("children"));
    });

    it("should have deluxe and children bikes at same price", () => {
      expect(getDailyRate("deluxe7")).toBe(getDailyRate("children"));
    });
  });
});
