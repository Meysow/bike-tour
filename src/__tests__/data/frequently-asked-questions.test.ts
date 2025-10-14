import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { Locale } from "@/config/i18n";

// Get FAQ data from i18n for testing (using English as default)
const faqData = getSectionTranslations("en" as Locale, "faq");
const frequentlyAskedQuestions = faqData.questions || [];

describe("Frequently Asked Questions Data", () => {
  it("should have FAQ items", () => {
    expect(frequentlyAskedQuestions.length).toBeGreaterThan(0);
  });

  it("should have FAQ items", () => {
    expect(frequentlyAskedQuestions.length).toBeGreaterThan(10);
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

  it("should have most questions ending with question marks", () => {
    const questionsWithMarks = frequentlyAskedQuestions.filter((faq) =>
      faq.question.endsWith("?")
    );
    // Most questions should end with "?" but some informational items might not
    expect(questionsWithMarks.length).toBeGreaterThan(
      frequentlyAskedQuestions.length * 0.5
    );
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
        faq.question.toLowerCase().includes("price")
      );
      expect(hasPricingQuestion).toBe(true);
    });

    it("should include rental-related questions", () => {
      const hasRentalQuestion = frequentlyAskedQuestions.some(
        (faq) =>
          faq.question.toLowerCase().includes("rental") ||
          faq.question.toLowerCase().includes("rent")
      );
      expect(hasRentalQuestion).toBe(true);
    });

    it("should include location question", () => {
      const hasLocationQuestion = frequentlyAskedQuestions.some((faq) =>
        faq.question.toLowerCase().includes("where")
      );
      expect(hasLocationQuestion).toBe(true);
    });

    it("should include contact/support question", () => {
      const hasSupportQuestion = frequentlyAskedQuestions.some(
        (faq) =>
          faq.question.toLowerCase().includes("info") ||
          faq.question.toLowerCase().includes("contact") ||
          faq.question.toLowerCase().includes("help")
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
