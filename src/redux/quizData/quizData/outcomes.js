import { question_ids } from "./questions";

export const outcomes = {
  need_definition: {
    label: "",
    body: "Definition of 'need'.",
    question_ids: question_ids
  },
  want_definition: {
    label: "",
    body: "Definition of 'want'.",
    question_ids: question_ids
  },
  yes_afford: {
    label: "",
    body: "Excellent!",
    question_ids: question_ids
  },
  no_afford: {
    label: "",
    body:
      "Good work! Use our budgeting tool to save for the future (link to tool).",
    question_ids: question_ids
  },
  yes_value: {
    label: "",
    body:
      "You have taken the time to assess what is important to you and only purchase items that add value.",
    question_ids: question_ids
  },
  no_value: {
    label: "",
    body: "If it doesn’t add value to your life, it’s not worth it.",
    question_ids: question_ids
  },
  yes_company_research: {
    label: "",
    body:
      "Great work! Informing yourself about a product before buying it will ensure your product is exactly what you are looking for.",
    question_ids: question_ids
  },
  sometimes_company_research: {
    label: "",
    body:
      "You may want to learn more about your product before purchasing it to make sure it fits your need.",
    question_ids: question_ids
  },
  no_company_research: {
    label: "",
    body:
      "Without doing the research ahead of time and reading product reviews, you may end up purchasing a product that does not last as long as you had hoped or does not have all the features you were looking for.",
    question_ids: question_ids
  },
  yes_grocery_list: {
    label: "",
    body:
      "Excellent! Planning your shopping will help you avoid purchases you do not need.",
    question_ids: question_ids
  },
  sometimes_grocery_list: {
    label: "",
    body:
      "Try to bring a list more often to help you avoid purchases you do not need.",
    question_ids: question_ids
  },
  no_grocery_list: {
    label: "",
    body:
      "Not having a shopping list may leave you purchasing things you do not need, and you may forget the things you do need.",
    question_ids: question_ids
  },
  yes_return_refund: {
    label: "",
    body:
      "Awesome! Knowing the stores return and refund policy ensures you will not be left with a product that does not meet your needs.",
    question_ids: question_ids
  },
  sometimes_return_refund: {
    label: "",
    body:
      "You may want to learn more about the stores return and refund policy to ensure you are not left with a product that does not meet your needs.",
    question_ids: question_ids
  },
  no_return_refund: {
    label: "",
    body:
      "Checking a store’s return and refund policy will ensure you are not left with a product that does not meet your needs.",
    question_ids: question_ids
  },
  yes_coupons_comparison: {
    label: "",
    body: "Excellent! This is a great way to save money.",
    question_ids: question_ids
  },
  sometimes_coupons_comparison: {
    label: "",
    body: "The more you do this the more you’ll save.",
    question_ids: question_ids
  },
  no_coupons_comparison: {
    label: "",
    body: "Sales, coupons, and comparing products can save you dollars.",
    question_ids: question_ids
  },
  yes_food_comparison: {
    label: "",
    body:
      "Great! If you’re choosing the larger product, make sure you can use all of it before it expires.",
    question_ids: question_ids
  },
  sometimes_food_comparison: {
    label: "",
    body:
      "Good work! Paying a bit more attention to how you are spending your money could help you save more.",
    question_ids: question_ids
  },
  no_food_comparison: {
    label: "",
    body: "Comparing unit sizes, prices and brands can help to save you money.",
    question_ids: question_ids
  }
};

export const outcome_ids = Object.keys(outcomes);
