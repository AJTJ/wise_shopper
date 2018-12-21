import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

//quiz components
import { QuestionAnswer } from "./QuestionAnswer";
import { Outcome } from "./Outcome";
import QuestionCount from "./QuestionCount";

//other components
import Menu from "../components/Menu";

//MUI and styles
import { Grid, Fade } from "@material-ui/core";
import { MyCard, QuizGrid, BackgroundGrid } from "../styles/layout";

//tools

const QuizView = props => {
  //state
  const [answerKey, setAnswerKey] = useState(0);
  const [questionTrans, setQuestionTrans] = useState(false);
  const [answerTrans, setAnswerTrans] = useState(false);
  const [stepTrans, setStepTrans] = useState(false);

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
    },
    [view, step]
  );

  useEffect(
    () => {
      setStepTrans(true);
    },
    [stepTrans]
  );

  return (
    <BackgroundGrid alpha={0.3}>
      <Menu />

      <QuizGrid>
        <QuestionCount
          stepTrans={stepTrans}
          step={step}
          quizLength={quizLength}
        />

        {view === "question" && (
          <MyCard opacity="0.8">
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
          </MyCard>
        )}
        {view === "answer" && (
          <MyCard opacity="0.8">
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
                  setStepTrans={setStepTrans}
                  {...props}
                />
              </Grid>
            </Fade>
          </MyCard>
        )}
      </QuizGrid>
    </BackgroundGrid>
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
