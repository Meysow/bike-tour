import { frequentlyAskedQuestions } from "@/data/frequently-asked-questions";

describe("Frequently Asked Questions Data", () => {
  it("should have FAQ items", () => {
    expect(frequentlyAskedQuestions.length).toBeGreaterThan(0);
  });

  it("should have six FAQ items", () => {
    expect(frequentlyAskedQuestions).toHaveLength(6);
  });

  it("should have required properties for each FAQ", () => {
    frequentlyAskedQuestions.forEach((faq) => {
      expect(faq).toHaveProperty("question");
      expect(faq).toHaveProperty("answer");
    });
  });

  it("should have non-empty questions", () => {
    frequentlyAskedQuestions.forEach((faq) => {
      expect(faq.question.length).toBeGreaterThan(0);
      expect(typeof faq.question).toBe("string");
    });
  });

  it("should have non-empty answers", () => {
    frequentlyAskedQuestions.forEach((faq) => {
      expect(faq.answer.length).toBeGreaterThan(0);
      expect(typeof faq.answer).toBe("string");
    });
  });

  it("should have questions ending with question marks", () => {
    frequentlyAskedQuestions.forEach((faq) => {
      expect(faq.question).toMatch(/\?$/);
    });
  });

  it("should have substantial answers", () => {
    frequentlyAskedQuestions.forEach((faq) => {
      expect(faq.answer.length).toBeGreaterThan(30);
    });
  });

  describe("Specific FAQ Items", () => {
    it('should include "What is" question', () => {
      const hasWhatIsQuestion = frequentlyAskedQuestions.some((faq) =>
        faq.question.toLowerCase().includes("what is")
      );
      expect(hasWhatIsQuestion).toBe(true);
    });

    it("should include pricing question", () => {
      const hasPricingQuestion = frequentlyAskedQuestions.some((faq) =>
        faq.question.toLowerCase().includes("pricing")
      );
      expect(hasPricingQuestion).toBe(true);
    });

    it("should include rental inclusion question", () => {
      const hasRentalQuestion = frequentlyAskedQuestions.some((faq) =>
        faq.question.toLowerCase().includes("included")
      );
      expect(hasRentalQuestion).toBe(true);
    });

    it("should include getting started question", () => {
      const hasGettingStartedQuestion = frequentlyAskedQuestions.some(
        (faq) =>
          faq.question.toLowerCase().includes("get started") ||
          faq.question.toLowerCase().includes("easy")
      );
      expect(hasGettingStartedQuestion).toBe(true);
    });

    it("should include support question", () => {
      const hasSupportQuestion = frequentlyAskedQuestions.some(
        (faq) =>
          faq.question.toLowerCase().includes("help") ||
          faq.question.toLowerCase().includes("support")
      );
      expect(hasSupportQuestion).toBe(true);
    });
  });

  it("should have descriptive answers mentioning key features", () => {
    const allAnswers = frequentlyAskedQuestions
      .map((faq) => faq.answer)
      .join(" ");

    expect(allAnswers.toLowerCase()).toContain("bike");
    expect(allAnswers.toLowerCase()).toContain("rental");
  });

  it("should not have duplicate questions", () => {
    const questions = frequentlyAskedQuestions.map((faq) => faq.question);
    const uniqueQuestions = new Set(questions);
    expect(uniqueQuestions.size).toBe(questions.length);
  });
});
