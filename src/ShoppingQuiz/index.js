import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { actions } from "../redux";

import { QuestionAnswer } from "./QuestionAnswer";
import { Outcome } from "./Outcome";

const ShoppingQuiz = props => {
  //state declarations
  const [step, setStep] = useState(0);
  const [currentQuizId, setCurrentQuizId] = useState("shopping_quiz");
  const [questionId, setQuestionId] = useState("need_question");
  const [answerIds, setAnswerIds] = useState(["yes_answer", "no_answer"]);
  const [answerKey, setAnswerKey] = useState(0);
  const [outcomeIds, setOutcomeIds] = useState("bad gas");
  const [view, setView] = useState("QuestionView");

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
      if (
        currentQuizId === "wise_quiz" &&
        quizData[currentQuizId][step] === undefined
      ) {
        console.log("switching to final outcome");
        setView("FinalOutcome");
        return;
      }

      if (
        currentQuizId === "shopping_quiz" &&
        quizData[currentQuizId][step] === undefined
      ) {
        console.log("switching to wise quiz");
        setCurrentQuizId(quizData.wise_quiz);
        nextQuestion();
        return;
      } else {
        console.log("next question");
        nextQuestion();
        return;
      }
    },
    [step]
  );

  return (
    <div>
      {view === "QuestionView" ? (
        <QuestionAnswer
          questionId={questionId}
          answerIds={answerIds}
          quizData={quizData}
          setView={setView}
          step={step}
          setAnswerKey={setAnswerKey}
        />
      ) : (
        <Outcome
          outcomeIds={outcomeIds}
          setView={setView}
          step={step}
          setStep={setStep}
          answerKey={answerKey}
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
