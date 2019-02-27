import { questionIds } from "./questions";

export const outcomes = {
  needDefinition: {
    label: "",
    body:
      "A need is something you have to have in order to survive. Food, water and shelter are all needs.",
    questionIds: questionIds
  },
  wantDefinition: {
    label: "",
    // pre: "Then you must want it.",
    body:
      "A want is something we would like to have but can survive without it. Holidays, eating at restaurants, or getting a tattoo are all wants.",
    questionIds: questionIds
  },
  yesValue: {
    label: "",
    body: "Awesome! This purchase makes your life better.",
    questionIds: questionIds
  },
  noValue: {
    label: "",
    body:
      "If it doesn’t make your life better, it’s not worth buying. Don’t buy it unless you can use it and/or it brings you joy.",
    questionIds: questionIds
  },
  yesAfford: {
    label: "",
    body: "Excellent! It’s important to live within your budget.",
    questionIds: questionIds
  },
  noAfford: {
    label: "",
    body:
      "Don’t buy it! Try saving to buy it at a later date. Try our budgeting tool for help managing your money ",
    link: "http://ylcbudget.com/",
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
      "You may be disappointed and in the future you will want to learn more about your product before purchasing it to make sure it fits your need.",
    questionIds: questionIds
  },
  noCompanyResearch: {
    label: "",
    body:
      "Shopping Alert! You are at High Risk of being very disappointed with your purchase.",
    questionIds: questionIds
  },
  yesGroceryList: {
    label: "",
    body: "Excellent! Having a list will help you buy only what you need.",
    questionIds: questionIds
  },
  sometimesGroceryList: {
    label: "",
    body:
      "You might end up buying more than you want. Try to bring a list to help you avoid buying what you do not need.",
    questionIds: questionIds
  },
  noGroceryList: {
    label: "",
    body:
      "Without a list you will likely buy things you do not need, AND forget the things you do need.",
    questionIds: questionIds
  },
  yesReturnRefund: {
    label: "",
    body:
      "Awesome! You will always be able to return a product that does not meet your needs.",
    questionIds: questionIds
  },
  sometimesReturnRefund: {
    label: "",
    body:
      "There is a chance you may end up with a product that does not meet your needs. You may want to learn more about the stores return and refund policy.",
    questionIds: questionIds
  },
  noReturnRefund: {
    label: "",
    body:
      "You are at high risk of paying for, and  having to keep a product that is broken or defective. Checking a store’s return and refund policy will ensure you are not left with a product that does not meet your needs.",
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
    body: "You are missing out on great savings.",
    questionIds: questionIds
  },
  yesFoodComparison: {
    label: "",
    body: "Great! You're getting the best deal in town!",
    questionIds: questionIds
  },
  sometimesFoodComparison: {
    label: "",
    body:
      "Good work! Comparing unit sizes, prices and brands can help to save you money.",
    questionIds: questionIds
  },
  noFoodComparison: {
    label: "",
    body: "Try it! You will save money!",
    questionIds: questionIds
  }
};

export const outcomeIds = Object.keys(outcomes);
