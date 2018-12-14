import React, { useState } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { actions } from "../redux";

import { QuestionAnswer } from "./QuestionAnswer";
import { Outcome } from "./Outcome";

const QuizView = props => {
  const [answerKey, setAnswerKey] = useState(0);
  const [view, setView] = useState("ShoppingQuestion");

  //variables
  let { currentQuizId, step } = props.match.params;
  const stepMinusOne = parseInt(step) - 1;
  const quizData = props.quiz_data;
  // const { history } = props;
  let { questionId, answerIds, outcomeIds } = quizData[currentQuizId][
    stepMinusOne
  ];

  // useEffect(() => {
  //   if (!quizData[currentQuizId][stepMinusOne]) {
  //     console.log("right here");
  //     history.push(`/${currentQuizId}/summary`);
  //   }
  // });

  return (
    <div>
      {view === "ShoppingQuestion" && (
        <QuestionAnswer
          view={view}
          questionId={questionId}
          answerIds={answerIds}
          quizData={quizData}
          setView={setView}
          stepMinusOne={stepMinusOne}
          setAnswerKey={setAnswerKey}
          currentQuizId={currentQuizId}
          {...props}
        />
      )}
      {view === "ShoppingOutcome" && (
        <Outcome
          currentQuizId={currentQuizId}
          outcomeId={outcomeIds[answerKey]}
          setView={setView}
          stepMinusOne={stepMinusOne}
          quizData={quizData}
          {...props}
        />
      )}
    </div>
  );
};

QuizView.propTypes = {
  currentQuizId: PropTypes.string,
  step: PropTypes.string,
  quizData: PropTypes.shape({
    quiz_data: PropTypes.object
  }),
  history: PropTypes.shape({
    action: PropTypes.string
  }),
  questionId: PropTypes.string,
  answerIds: PropTypes.array,
  outcomeIds: PropTypes.array
};

const mapStateToProps = state => {
  return { quiz_data: state.quizReducer.quiz_data };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizView);

//state declarations
// const [currentQuizId, setCurrentQuizId] = useState("shopping_quiz");
// const [step, setStep] = useState(0);
// const [questionId, setQuestionId] = useState("need_question");
// const [answerIds, setAnswerIds] = useState(["yes_answer", "no_answer"]);
// const [outcomeIds, setOutcomeIds] = useState();

// const nextQuestion = () => {
//   setQuestionId(quizData[currentQuizId][step].question);
//   setAnswerIds(quizData[currentQuizId][step].answers);
//   setOutcomeIds(quizData[currentQuizId][step].outcomes);
// };

// useEffect(
//   () => {
//     if (
//       currentQuizId === "wise_quiz" &&
//       quizData[currentQuizId][step] === undefined
//     ) {
//       console.log("time to go to another summary");
//       return;
//     }

//     if (
//       currentQuizId === "shopping_quiz" &&
//       quizData[currentQuizId][step] === undefined
//     ) {
//       console.log("switching to shopping summary");
//       setView("ShoppingSummary");
//       setStep(0);
//       return;
//     }

//     console.log("next question");
//     nextQuestion();
//     return;
//   },
//   [step]
// );
