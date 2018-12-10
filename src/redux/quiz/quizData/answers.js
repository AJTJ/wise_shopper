import { outcome_ids } from "./outcomes";

export const answers = {
  yes_answer: {
    label: "",
    body: "Yes",
    outcome_ids: outcome_ids
  },
  no_answer: {
    label: "",
    body: "No",
    outcome_ids: outcome_ids
  }
};

export const answer_ids = Object.keys(answers);
