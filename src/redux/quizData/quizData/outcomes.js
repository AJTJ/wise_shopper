import { questionIds } from "./questions";

export const outcomes = {
  needDefinition: {
    label: "",
    body:
      "e.g. You live in the north, in the winter it can be-45! You NEED a parka, warm boots, a hat and mitts.",
    questionIds: questionIds
  },
  wantDefinition: {
    label: "",
    // pre: "Then you must want it.",
    body:
      "e.g. You live in the north  the winters are long and dark. This winter you WANT to buy a ticket to go somewhere warm.",
    questionIds: questionIds
  },
  yesAfford: {
    label: "",
    body:
      "Excellent!. You have enough money to buy new warm boots and to take a trip somewhere warm. Have fun!",
    questionIds: questionIds
  },
  noAfford: {
    label: "",
    body:
      "It’s okay, you can find second hand boots this year and save to take a trip somewhere warm next year. Save by using our budgeting tool: ",
    link: "http://ylcbudget.com/",
    questionIds: questionIds
  },
  yesValue: {
    label: "",
    body:
      "You can enjoy being on the land this winter in your new warm winter gear and buying a ticket to go somewhere warm helps you get through the winter. You decide what makes you happy.",
    questionIds: questionIds
  },
  noValue: {
    label: "",
    body:
      "If it doesn’t make your life better, it’s not worth buying. Don’t buy unless you can use it and/or it brings you joy. You decide what makes you happy.",
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
    body: "You are missing out on great savings. Read the tip.",
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
