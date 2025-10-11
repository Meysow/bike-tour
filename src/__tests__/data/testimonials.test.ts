import { testimonials } from "@/data/testimonials";

describe("Testimonials Data", () => {
  it("should have testimonials", () => {
    expect(testimonials.length).toBeGreaterThan(0);
  });

  it("should have nine testimonials", () => {
    expect(testimonials).toHaveLength(9);
  });

  it("should have required properties for each testimonial", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial).toHaveProperty("title");
      expect(testimonial).toHaveProperty("body");
      expect(testimonial).toHaveProperty("name");
      expect(testimonial).toHaveProperty("role");
      expect(testimonial).toHaveProperty("avatar");
    });
  });

  it("should have non-empty titles", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.title.length).toBeGreaterThan(0);
      expect(typeof testimonial.title).toBe("string");
    });
  });

  it("should have non-empty bodies", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.body.length).toBeGreaterThan(0);
      expect(typeof testimonial.body).toBe("string");
    });
  });

  it("should have valid names", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.name.length).toBeGreaterThan(0);
      expect(typeof testimonial.name).toBe("string");
    });
  });

  it("should have valid roles", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.role.length).toBeGreaterThan(0);
      expect(typeof testimonial.role).toBe("string");
    });
  });

  it("should have valid avatar paths", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.avatar).toMatch(
        /^\/images\/avatars\/.*\.(jpeg|jpg|png)$/
      );
    });
  });

  it("should have unique names", () => {
    const names = testimonials.map((t) => t.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(testimonials.length);
  });

  it("should have unique avatar paths", () => {
    const avatars = testimonials.map((t) => t.avatar);
    const uniqueAvatars = new Set(avatars);
    expect(uniqueAvatars.size).toBe(testimonials.length);
  });

  describe("First Testimonial", () => {
    const firstTestimonial = testimonials[0];

    it('should have title "Effortlessly Enhanced Our Paris Experience"', () => {
      expect(firstTestimonial.title).toBe(
        "Effortlessly Enhanced Our Paris Experience"
      );
    });

    it("should be from Derrick Bowman", () => {
      expect(firstTestimonial.name).toBe("Derrick Bowman");
    });

    it("should have a CEO role", () => {
      expect(firstTestimonial.role).toContain("CEO");
    });
  });

  it("should have substantial body text for each testimonial", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.body.length).toBeGreaterThan(50);
    });
  });

  it("should include roles with company names", () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.role).toMatch(/at .+/);
    });
  });
});
