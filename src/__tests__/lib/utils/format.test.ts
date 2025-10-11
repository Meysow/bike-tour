import {
  formatCurrency,
  formatDate,
  formatDistance,
  formatDuration,
} from "@/lib/utils/format";

describe("Format Utilities", () => {
  describe("formatCurrency", () => {
    it("should format number as EUR currency", () => {
      expect(formatCurrency(100)).toBe("100,00 €");
    });

    it("should format string number as EUR currency", () => {
      expect(formatCurrency("50.5")).toBe("50,50 €");
    });

    it("should handle zero", () => {
      expect(formatCurrency(0)).toBe("0,00 €");
    });

    it("should handle large numbers", () => {
      expect(formatCurrency(1234567.89)).toBe("1 234 567,89 €");
    });

    it("should handle negative numbers", () => {
      expect(formatCurrency(-50)).toBe("-50,00 €");
    });
  });

  describe("formatDate", () => {
    it("should format Date object", () => {
      const date = new Date("2024-03-15T10:30:00");
      const formatted = formatDate(date);
      // The format depends on the locale, just check it's a non-empty string
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe("string");
    });

    it("should format date string", () => {
      const dateString = "2024-03-15T10:30:00";
      const formatted = formatDate(dateString);
      expect(formatted).toBeTruthy();
      expect(typeof formatted).toBe("string");
    });

    it("should handle ISO date strings", () => {
      const isoDate = "2024-12-25T00:00:00.000Z";
      const formatted = formatDate(isoDate);
      expect(formatted).toBeTruthy();
    });
  });

  describe("formatDuration", () => {
    it("should format minutes only when less than 60", () => {
      expect(formatDuration(30)).toBe("30min");
    });

    it("should format hours only when no remaining minutes", () => {
      expect(formatDuration(120)).toBe("2h");
    });

    it("should format hours and minutes", () => {
      expect(formatDuration(90)).toBe("1h 30min");
    });

    it("should handle zero minutes", () => {
      expect(formatDuration(0)).toBe("0min");
    });

    it("should handle large durations", () => {
      expect(formatDuration(365)).toBe("6h 5min");
    });

    it("should format 1 hour correctly", () => {
      expect(formatDuration(60)).toBe("1h");
    });
  });

  describe("formatDistance", () => {
    it("should convert meters to kilometers with one decimal", () => {
      expect(formatDistance(5000)).toBe("5.0km");
    });

    it("should handle decimal values", () => {
      expect(formatDistance(2500)).toBe("2.5km");
    });

    it("should round to one decimal place", () => {
      expect(formatDistance(1234)).toBe("1.2km");
    });

    it("should handle zero", () => {
      expect(formatDistance(0)).toBe("0.0km");
    });

    it("should handle small distances", () => {
      expect(formatDistance(100)).toBe("0.1km");
    });

    it("should handle large distances", () => {
      expect(formatDistance(50000)).toBe("50.0km");
    });
  });
});
