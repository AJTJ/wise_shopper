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
import { Grid, Fade } from "@material-ui/core";

const QuizView = props => {
  const [answerKey, setAnswerKey] = useState(0);
  const [questionTrans, setQuestionTrans] = useState(false);
  const [answerTrans, setAnswerTrans] = useState(false);
  const [stepTrans, setStepTrans] = useState(false);
  // const [mount, setMount] = useState(false);

  //variables
  let { currentQuizId, step, view } = props.match.params;
  const stepMinusOne = parseInt(step) - 1;
  const { quizData } = props;
  let { questionId, answerIds, outcomeIds } = quizData[currentQuizId][
    stepMinusOne
  ];
  const quizLength = quizData[currentQuizId].length;

  useEffect(
    () => {
      if (view === "question") {
        setQuestionTrans(true);
      } else {
        setQuestionTrans(false);
      }
      if (view === "answer") {
        setAnswerTrans(true);
      } else {
        setAnswerTrans(false);
      }
      setStepTrans(false);
      setStepTrans(true);
    },
    [view, step]
  );

  return (
    <React.Fragment>
      <Menu />

      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{
          position: "relative",
          paddingBottom: "200px",
          maxWidth: "500px",
          margin: "0 auto",
          paddingRight: "20px",
          paddingLeft: "20px",
          height: "100vh"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 40
          }}
        >
          <Fade in={stepTrans} timeout={2000}>
            <h2>{step}</h2>
          </Fade>
        </div>
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 30
          }}
        >
          <Fade in={!!step} timeout={1000}>
            <h3>/</h3>
          </Fade>
        </div>
        <div
          style={{
            position: "absolute",
            top: 35,
            right: 20
          }}
        >
          <Fade in={!!step} timeout={1000}>
            <h3>{quizLength}</h3>
          </Fade>
        </div>

        {view === "question" && (
          <Fade in={questionTrans} timeout={1000}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <QuestionAnswer
                view={view}
                questionId={questionId}
                answerIds={answerIds}
                quizData={quizData}
                stepMinusOne={stepMinusOne}
                setAnswerKey={setAnswerKey}
                currentQuizId={currentQuizId}
                {...props}
              />
            </Grid>
          </Fade>
        )}
        {view === "answer" && (
          <Fade in={answerTrans} timeout={1000}>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Outcome
                currentQuizId={currentQuizId}
                outcomeId={outcomeIds[answerKey]}
                stepMinusOne={stepMinusOne}
                quizData={quizData}
                {...props}
              />
            </Grid>
          </Fade>
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
