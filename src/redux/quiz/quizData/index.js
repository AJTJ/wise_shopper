import { question_ids, questions } from "./questions";
import { answer_ids, answers } from "./answers";
import { outcome_ids, outcomes } from "./outcomes";
import { shopping_quiz } from "./shopping";

const defaultState = {
  quiz_data: {
    shopping_quiz: shopping_quiz,
    question_ids: question_ids,
    answer_ids: answer_ids,
    outcome_ids: outcome_ids,

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
