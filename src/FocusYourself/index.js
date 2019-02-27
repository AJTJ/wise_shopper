import React, { useState, useEffect } from "react";
import TextTrail from "./TextTrail";

//MUI and styles
import { Fade, Grid, ButtonBase } from "@material-ui/core";
import { QuizGrid } from "../styles/layout";

//components
import Menu from "../components/Menu";

//other
import { randomColor } from "../tools/randomColor";

const FocusYourself = props => {
  //STATE
  const [purchase, setPurchase] = useState(false);
  const [pause, setPause] = useState(false);
  const [breath, setBreath] = useState(false);
  const [choose, setChoose] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [fadeTime, setFadeTime] = useState(false);
  const [menuIndicator, setMenuIndicator] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  //TEXT FOR SEQUENCE
  const purchaseText = "Making a purchase?".split(" ");
  const pauseText = "Pause...".split(" ");
  const breathText = "Take a breath...".split(" ");
  const chooseText = "Ask yourself".split(" ");

  //PROPS
  const history = props.history;

  useEffect(() => {
    let dismounted = false;

    const wait = delay => {
      return new Promise(resolve => {
        setTimeout(resolve, delay);
      });
    };

    const trans = (finish, start) => {
      setFadeTime(true);
      finish(false);
      start(true);
    };

    async function createSequence() {
      dismounted = false;
      setPurchase(true);
      setFadeTime(true);
      //start
      await wait(2000);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //reset
      trans(setPurchase, setPause);
      await wait(1000);
      setMenuIndicator(true);
      await wait(250);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //reset
      trans(setPause, setBreath);
      await wait(1000);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //finish
      trans(setBreath, setChoose);
      setMenuDisplay(true);
      setMenuIndicator(false);
      await wait(1500);
      if (dismounted === false) {
        history.push(`/shoppingQuiz/1/question`);
      }
    }
    createSequence();
    return function cleanup() {
      dismounted = true;
    };
  }, []);

  useEffect(() => {
    setBgColor(randomColor(0.1));
  }, [purchase, menuDisplay]);

  return (
    <Grid
      style={{
        background: bgColor,
        transition: "all 2s",
        minHeight: "100vh"
      }}
    >
      <Fade in={menuDisplay} timeout={3000}>
        <Menu style={{ visibility: menuDisplay ? null : "hidden" }} />
      </Fade>
      <QuizGrid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {purchase && <TextTrail items={purchaseText} fadeProp={fadeTime} />}
          {pause && <TextTrail items={pauseText} fadeProp={fadeTime} />}
          {breath && <TextTrail items={breathText} fadeProp={fadeTime} />}
          {choose && <TextTrail items={chooseText} fadeProp={fadeTime} />}
        </div>
      </QuizGrid>
      <Fade in={menuIndicator}>
        <ButtonBase
          style={{
            position: "absolute",
            bottom: "20px",
            right: "50%",
            left: "calc(50% - 50px)",
            width: "100px"
          }}
          onClick={() => {
            setMenuDisplay(true);
            setMenuIndicator(false);
          }}
        >
          <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "10px" }}>
            (show the menu)
          </p>
        </ButtonBase>
      </Fade>
    </Grid>
  );
};

export default FocusYourself;
