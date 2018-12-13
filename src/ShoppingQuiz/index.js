import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { actions } from "../redux";

import { QuestionAnswer } from "./QuestionAnswer";
import { Outcome } from "./Outcome";
import { ShoppingSummary } from "./ShoppingSummary";

const ShoppingQuiz = props => {
  //state declarations
  const [currentQuizId, setCurrentQuizId] = useState("shopping_quiz");
  const [step, setStep] = useState(0);
  const [questionId, setQuestionId] = useState("need_question");
  const [answerIds, setAnswerIds] = useState(["yes_answer", "no_answer"]);
  const [answerKey, setAnswerKey] = useState(0);
  const [outcomeIds, setOutcomeIds] = useState();
  const [view, setView] = useState("ShoppingQuestion");

  //variables
  const quizData = props.quiz_data;

  const nextQuestion = () => {
    console.log("nextQ hit");
    setQuestionId(quizData[currentQuizId][step].question);
    setAnswerIds(quizData[currentQuizId][step].answers);
    setOutcomeIds(quizData[currentQuizId][step].outcomes);
  };

  useEffect(
    () => {
      console.log([quizData].shopping_quiz);
      if (
        currentQuizId === "wise_quiz" &&
        quizData[currentQuizId][step] === undefined
      ) {
        console.log("time to go to another summary");
        return;
      }

      if (
        currentQuizId === "shopping_quiz" &&
        quizData[currentQuizId][step] === undefined
      ) {
        console.log("switching to shopping summary");
        setView("ShoppingSummary");
        setStep(0);
        return;
      }

      console.log("next question");
      nextQuestion();
      return;
    },
    [step]
  );

  return (
    <div>
      {view === "ShoppingQuestion" && (
        <QuestionAnswer
          view={view}
          questionId={questionId}
          answerIds={answerIds}
          quizData={quizData}
          setView={setView}
          step={step}
          setAnswerKey={setAnswerKey}
          currentQuizId={currentQuizId}
        />
      )}
      {view === "ShoppingOutcome" && (
        <Outcome
          outcomeIds={outcomeIds}
          setView={setView}
          step={step}
          setStep={setStep}
          answerKey={answerKey}
          quizData={quizData}
        />
      )}
      {view === "ShoppingSummary" && (
        <ShoppingSummary
          setCurrentQuizId={setCurrentQuizId}
          setView={setView}
          quizData={quizData}
        />
      )}
    </div>
  );
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
)(ShoppingQuiz);
