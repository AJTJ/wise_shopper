import { questionIds } from "./questions";

export const outcomes = {
  needDefinition: {
    label: "",
    body:
      'Definition of "Need": To require (something) because it is essential or very important.',
    questionIds: questionIds
  },
  wantDefinition: {
    label: "",
    pre: "Then you must want it.",
    body:
      'Definition of "Want": To have a desire to possess or do (something).',
    questionIds: questionIds
  },
  yesAfford: {
    label: "",
    body: "Excellent!",
    questionIds: questionIds
  },
  noAfford: {
    label: "",
    body: `Good work! Use our budgeting tool to save for the future`,
    link: "http://aaronjanke.com/ylcBudget/Form/income",
    questionIds: questionIds
  },
  yesValue: {
    label: "",
    body:
      "You have taken the time to assess what is important to you and are purchasing an item that adds value to your life.",
    questionIds: questionIds
  },
  noValue: {
    label: "",
    body: "If it doesn’t add value to your life, it’s not worth it.",
    questionIds: questionIds
  },
  yesCompanyResearch: {
    label: "",
    body:
      "Great work! Informing yourself about a product before buying it will ensure your product is exactly what you are looking for.",
    questionIds: questionIds
  },
  sometimesCompanyResearch: {
    label: "",
    body:
      "You may want to learn more about your product before purchasing it to make sure it fits your need.",
    questionIds: questionIds
  },
  noCompanyResearch: {
    label: "",
    body:
      "Without doing the research ahead of time and reading product reviews, you may end up purchasing a product that does not last as long as you had hoped or does not have all the features you were looking for.",
    questionIds: questionIds
  },
  yesGroceryList: {
    label: "",
    body:
      "Excellent! Planning your shopping will help you avoid purchases you do not need.",
    questionIds: questionIds
  },
  sometimesGroceryList: {
    label: "",
    body:
      "Try to bring a list more often to help you avoid purchases you do not need.",
    questionIds: questionIds
  },
  noGroceryList: {
    label: "",
    body:
      "Not having a shopping list may leave you purchasing things you do not need, and you may forget the things you do need.",
    questionIds: questionIds
  },
  yesReturnRefund: {
    label: "",
    body:
      "Awesome! Knowing the store's return and refund policy ensures you will not be left with a product that does not meet your needs.",
    questionIds: questionIds
  },
  sometimesReturnRefund: {
    label: "",
    body:
      "You may want to learn more about the stores return and refund policy to ensure you are not left with a product that does not meet your needs.",
    questionIds: questionIds
  },
  noReturnRefund: {
    label: "",
    body:
      "Checking a store’s return and refund policy will ensure you are not left with a product that does not meet your needs.",
    questionIds: questionIds
  },
  yesCouponsComparison: {
    label: "",
    body: "Excellent! This is a great way to save money.",
    questionIds: questionIds
  },
  sometimesCouponsComparison: {
    label: "",
    body: "The more you do this the more you’ll save.",
    questionIds: questionIds
  },
  noCouponsComparison: {
    label: "",
    body: "Sales, coupons, and comparing products can save you dollars.",
    questionIds: questionIds
  },
  yesFoodComparison: {
    label: "",
    body:
      "Great! If you’re choosing the larger product, make sure you can use all of it before it expires.",
    questionIds: questionIds
  },
  sometimesFoodComparison: {
    label: "",
    body:
      "Good work! Paying a bit more attention to how you are spending your money could help you save more.",
    questionIds: questionIds
  },
  noFoodComparison: {
    label: "",
    body: "Comparing unit sizes, prices and brands can help to save you money.",
    questionIds: questionIds
  }
};

export const outcomeIds = Object.keys(outcomes);
