import { answerIds } from "./answers";

export const questions = {
  needQuestion: {
    title: "",
    body: "Do I need it? Do I want it?",
    explanations: [],
    answerIds: answerIds
  },
  valueQuestion: {
    title: "",
    body: "Does this purchase add value to your life?",
    explanations: ["You decide what makes you happy."],
    answerIds: answerIds
  },
  affordQuestion: {
    title: "",
    body: "Can I afford it?",
    explanations: [
      "This means you have enough money to pay for it without going into bad debt and/or not having the necessities of life."
    ],
    answerIds: answerIds
  },
  companyResearchQuestion: {
    title: "",
    body:
      "Before making a major purchase, I research the product, the company that makes it, and find reviews from people who’ve purchased it.",
    answerIds: answerIds
  },
  groceryListQuestion: {
    title: "",
    body:
      "I bring a list grocery shopping, so I won’t be tempted to buy things I do not need.",
    answerIds: answerIds
  },
  returnRefundQuestion: {
    title: "",
    body:
      "I ask about a store's or an online retailers return and refund policy before I buy things to make sure I can get a replacement or refund if I’m not satisfied with my purchase.",
    answerIds: answerIds
  },
  couponsComparisonQuestion: {
    title: "",
    body:
      "I use coupons, look for sales and compare products at different stores before I buy.",
    answerIds: answerIds
  },
  foodComparisonQuestion: {
    title: "",
    body:
      "When I shop for food, I compare the size, price and brand to try and find the best deal.",
    answerIds: answerIds
  }
};

export const questionIds = Object.keys(questions);
