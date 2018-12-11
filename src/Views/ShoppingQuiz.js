import React, { useState } from "react";

import { connect } from "react-redux";

import { actions } from "../redux";

const QuestionDisplay = props => {
  const body = props.body;
  return <p>{body}</p>;
};

const AnswerDisplay = props => {
  const body = props.body;
  console.log(body);
  return <button>{body}</button>;
};

const ShoppingView = props => {
  const view = props.view;
  const question = props.question;
  const quizData = props.quizData;
  const QuestionDisplay = props.QuestionDisplay;
  const AnswerDisplay = props.AnswerDisplay;
  const questionId = props.questionId;
  if (view === "Question") {
    return (
      <React.Fragment>
        <QuestionDisplay body={question.body} />
        {question.answer_ids.map((current_id, key) => {
          return (
            <AnswerDisplay
              key={key}
              body={quizData.answers_by_id[current_id].body}
            />
          );
        })}
      </React.Fragment>
    );
  } else if (view === "Outcome") {
    return "Outcome";
  }
};

const ShoppingQuiz = props => {
  const quizData = props.quiz;
  const [questionId, setQuestionId] = useState("need_question");
  const [view, setView] = useState("Question");
  return (
    <div>
      <p>Shopping Quiz</p>
      <ShoppingView
        view={view}
        questionId={questionId}
        question={quizData.questions_by_id[questionId]}
        quizData={quizData}
        QuestionDisplay={QuestionDisplay}
        AnswerDisplay={AnswerDisplay}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { quiz: state.quizReducer.quiz };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingQuiz);
