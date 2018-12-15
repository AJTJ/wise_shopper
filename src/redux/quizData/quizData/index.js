import { questionIds, questions } from "./questions";
import { answerIds, answers } from "./answers";
import { outcomeIds, outcomes } from "./outcomes";
import { shoppingQuiz } from "./shoppingQuiz";
import { wiseQuiz } from "./wiseQuiz";
import { tips, tipIds } from "./tips";
import { summaries } from "./summaries";

const defaultState = {
  quizData: {
    shoppingQuiz: shoppingQuiz,
    wiseQuiz: wiseQuiz,
    questionIds: questionIds,
    answerIds: answerIds,
    outcomeIds: outcomeIds,
    tipIds: tipIds,
    summaries: summaries,
    tipsById: {
      ...tips
    },
    questionsById: {
      ...questions
    },
    answersById: {
      ...answers
    },
    outcomesById: {
      ...outcomes
    }
  }
};

export default defaultState;
