import { outcomeIds } from "./outcomes";

export const answers = {
  yesAnswer: {
    label: "",
    body: "Yes",
    altBody: "Need",
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
    altBody: "Want",
    outcomeIds: outcomeIds
  }
};

export const answerIds = Object.keys(answers);
