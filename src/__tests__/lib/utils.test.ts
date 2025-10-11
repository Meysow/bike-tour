import { cn } from "@/lib/utils";

describe("Utils", () => {
  describe("cn (className utility)", () => {
    it("should merge class names correctly", () => {
      const result = cn("px-2 py-1", "px-4");
      expect(result).toBe("py-1 px-4");
    });

    it("should handle undefined and null values", () => {
      const result = cn("px-2", undefined, null, "py-1");
      expect(result).toBe("px-2 py-1");
    });

    it("should handle conditional classes", () => {
      const isActive = true;
      const result = cn("base-class", isActive && "active-class");
      expect(result).toBe("base-class active-class");
    });

    it("should handle false conditional classes", () => {
      const isActive = false;
      const result = cn("base-class", isActive && "active-class");
      expect(result).toBe("base-class");
    });

    it("should merge conflicting Tailwind classes", () => {
      const result = cn("text-red-500", "text-blue-500");
      expect(result).toBe("text-blue-500");
    });

    it("should handle empty inputs", () => {
      const result = cn();
      expect(result).toBe("");
    });

    it("should handle arrays of classes", () => {
      const result = cn(["px-2", "py-1"], "rounded");
      expect(result).toBe("px-2 py-1 rounded");
    });
  });
});
