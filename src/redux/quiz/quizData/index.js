import { question_ids, questions } from "./questions";
import { answer_ids, answers } from "./answers";
import { outcome_ids, outcomes } from "./outcomes";
import { shopping_quiz } from "./shopping";
import { wise_quiz } from "./wise";
import { tips } from "./tips";

const defaultState = {
  quiz_data: {
    shopping_quiz: shopping_quiz,
    wise_quiz: wise_quiz,
    question_ids: question_ids,
    answer_ids: answer_ids,
    outcome_ids: outcome_ids,
    tips_by_id: {
      ...tips
    },
    questions_by_id: {
      ...questions
    },
    answers_by_id: {
      ...answers
    },
    outcomes_by_id: {
      ...outcomes
    }
  }
};

export default defaultState;
