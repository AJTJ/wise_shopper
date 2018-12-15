import { outcomeIds } from "./outcomes";

export const answers = {
  yesAnswer: {
    label: "",
    body: "Yes",
    outcomeIds: outcomeIds
  },
  sometimesAnswer: {
    label: "",
    body: "Sometimes",
    outcomeIds: outcomeIds
  },
  noAnswer: {
    label: "",
    body: "No",
    outcomeIds: outcomeIds
  }
};

export const answerIds = Object.keys(answers);
