import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

//quiz components
import { QuestionAnswer } from "./QuestionAnswer";
import { Outcome } from "./Outcome";

//other components
import Menu from "../components/Menu";

//MUI
import { Grid } from "@material-ui/core";

const QuizView = props => {
  const [answerKey, setAnswerKey] = useState(0);
  const [view, setView] = useState("ShoppingQuestion");

  //variables
  let { currentQuizId, step } = props.match.params;
  const stepMinusOne = parseInt(step) - 1;
  const { quizData } = props;
  let { questionId, answerIds, outcomeIds } = quizData[currentQuizId][
    stepMinusOne
  ];

  useEffect(() => {
    // console.log(props.wiseQuizScore);
  });

  return (
    <React.Fragment>
      <Menu />
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{
          height: "100vh",
          paddingBottom: "200px",
          maxWidth: "500px",
          margin: "0 auto"
        }}
      >
        {view === "ShoppingQuestion" && (
          <React.Fragment>
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
          </React.Fragment>
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
      </Grid>
    </React.Fragment>
  );
};

QuizView.propTypes = {
  currentQuizId: PropTypes.string,
  step: PropTypes.string,
  quizData: PropTypes.shape({
    quizData: PropTypes.object
  }),
  history: PropTypes.shape({
    action: PropTypes.string
  }),
  questionId: PropTypes.string,
  answerIds: PropTypes.array,
  outcomeIds: PropTypes.array
};

const mapStateToProps = state => {
  return {
    quizData: state.quizReducer.quizData,
    wiseQuizScore: state.scoreReducer.wiseQuizScore
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizView);
