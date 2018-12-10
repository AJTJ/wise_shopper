import { answer_ids } from "./answers";

export const questions = {
  need_question: {
    title: "",
    body: "Do I need it?",
    answer_ids: answer_ids
  },
  afford_question: {
    title: "",
    body: "Can I afford it?",
    answer_ids: answer_ids
  },
  value_question: {
    title: "",
    body: "Does it add value to my life?",
    answer_ids: answer_ids
  },
  wise_shopper_quiz: {
    title: "",
    body: "Next step: take our Wise Shopper Quiz",
    answer_ids: answer_ids
  }
};

export const question_ids = Object.keys(questions);
