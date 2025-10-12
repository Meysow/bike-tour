import { siteConfig } from "@/config/site";
import { FrequentlyAskedQuestion } from "@/types";

export const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    question: `What is ${siteConfig.name}?`,
    answer: `${siteConfig.name} is a premium bike rental and tour service, designed to help you explore Paris with ease. We offer a selection of high-quality bikes, curated tour routes, and a user-friendly booking experience.`,
  },
  {
    question: `What’s included in the rental?`,
    answer: `Your rental includes a well-maintained bike, a helmet for safety, and optional add-ons like baskets or child seats. If you book a guided tour, you'll also get a knowledgeable guide to show you the best sights and hidden gems of the city.`,
  },
  {
    question: `Why should I choose ${siteConfig.name}?`,
    answer: `With ${siteConfig.name}, you get more than just a bike rental. Our service is designed to provide a memorable experience, from carefully planned routes to top-notch customer support. We’re passionate about helping you make the most of your time in the city.`,
  },
  {
    question: `How does pricing work?`,
    answer: `Our pricing is transparent and competitive. You can choose from hourly rentals, day passes, or guided tours. Add-ons like child seats and baskets come at a small additional fee. Please refer to the Pricing section for full details.`,
  },
  {
    question: `Is it easy to get started?`,
    answer: `Absolutely! Simply select your preferred bike and rental option on our website, make a reservation, and you’re all set. You’ll receive a confirmation with all the details you need for a smooth experience.`,
  },
  {
    question: `What if I need help or support?`,
    answer: `We’re here to assist! Our support team is available via email and phone to answer any questions. Whether you need help selecting a bike or have a question about your rental, don’t hesitate to reach out.`,
  },
];
