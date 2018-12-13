import { answer_ids } from "./answers";

export const questions = {
  need_question: {
    title: "",
    body: "Do I need it?",
    answer_ids: answer_ids
  },
  afford_question: {
    title: "",
    body: "Can I afford it?",
    answer_ids: answer_ids
  },
  value_question: {
    title: "",
    body: "Does it add value to my life?",
    answer_ids: answer_ids
  },
  company_research_question: {
    title: "",
    body:
      "Before making a major purchase, I research the product, the company that makes it, and find reviews from people who’ve purchased it.",
    answer_ids: answer_ids
  },
  grocery_list_question: {
    title: "",
    body:
      "I bring a list grocery shopping, so I won’t be tempted to buy things I do not need. ",
    answer_ids: answer_ids
  },
  return_refund_question: {
    title: "",
    body:
      "I ask about a store’s/ online retailers return and refund policy before I buy things to make sure I can get a replacement or refund if I’m not satisfied with my purchase.",
    answer_ids: answer_ids
  },
  coupons_comparison_question: {
    title: "",
    body:
      "I use coupons, look for sales and compare products at different stores before I buy. ",
    answer_ids: answer_ids
  },
  food_comparison_question: {
    title: "",
    body:
      "When I shop for food, I compare the size, price and brand to try and find the best deal. ",
    answer_ids: answer_ids
  }
};

export const question_ids = Object.keys(questions);
