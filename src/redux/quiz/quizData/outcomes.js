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
  }
};

export const outcome_ids = Object.keys(outcomes);
