import React, { useState, useEffect } from "react";
import TextTrail from "./TextTrail";
// import { BasicTransition } from "../reactTransitions/transitions";

//MUI
import { Fade, Grid, ButtonBase } from "@material-ui/core";

//components
import Menu from "../components/Menu";

//other
import { randomColor } from "../tools/randomColor";

const FocusYourself = () => {
  const [purchase, setPurchase] = useState(false);
  const [pause, setPause] = useState(false);
  const [rest, setRest] = useState(false);
  const [breath, setBreath] = useState(false);
  const [choose, setChoose] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [smile, setSmile] = useState(false);
  const [fadeTime, setFadeTime] = useState(false);
  const [menuIndicator, setMenuIndicator] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const purchaseText = "About to make a purchase?".split(" ");
  const pauseText = "Pause...".split(" ");
  const restText = "Rest...".split(" ");
  const breathText = "Take a Breath...".split(" ");
  const chooseText = "Choose a Quiz.".split(" ");
  const smileText = ":)".split(" ");

  useEffect(() => {
    // console.log(fadeTime);
  });

  useEffect(() => {
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
      setPurchase(true);
      setFadeTime(true);
      //start
      await wait(3000);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //reset
      trans(setPurchase, setPause);
      await wait(500);
      setMenuIndicator(true);
      await wait(1500);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //reset
      trans(setPause, setRest);
      await wait(2000);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //reset
      trans(setRest, setBreath);
      await wait(2000);
      //fadeout
      setFadeTime(false);
      await wait(500);
      //finish
      trans(setBreath, setChoose);
      setMenuDisplay(true);
      setMenuIndicator(false);
      await wait(2000);
      setSmile(true);
    }

    createSequence();
  }, []);

  useEffect(
    () => {
      setBgColor(randomColor());
    },
    [purchase, menuDisplay]
  );

  return (
    <Grid
      style={{
        background: bgColor,
        transition: "all 2s",
        height: "100vh"
      }}
    >
      <Fade in={menuDisplay} timeout={3000}>
        <Menu style={{ visibility: menuDisplay ? null : "hidden" }} />
      </Fade>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          position: "relative",
          maxWidth: "500px",
          margin: "0 auto",
          paddingTop: "75px",
          paddingBottom: "75px",
          paddingRight: "20px",
          paddingLeft: "20px",
          maxHeight: "800px"
        }}
        direction="column"
      >
        <div>
          {purchase && (
            <TextTrail
              items={purchaseText}
              Component={"h1"}
              fadeProp={fadeTime}
            />
          )}

          {pause && (
            <TextTrail items={pauseText} Component={"h1"} fadeProp={fadeTime} />
          )}
          {rest && (
            <TextTrail items={restText} Component={"h1"} fadeProp={fadeTime} />
          )}
          {breath && (
            <TextTrail
              items={breathText}
              Component={"h1"}
              fadeProp={fadeTime}
            />
          )}
          {choose && (
            <TextTrail
              items={chooseText}
              Component={"h1"}
              fadeProp={fadeTime}
            />
          )}
        </div>
        <div>
          <TextTrail items={smileText} Component={"h1"} fadeProp={smile} />
        </div>
        <Fade in={menuIndicator}>
          <ButtonBase
            onClick={() => {
              setMenuDisplay(true);
              setMenuIndicator(false);
            }}
          >
            <p style={{ color: "rgba(0,0,0,0.5)" }}>(show the menu)</p>
          </ButtonBase>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default FocusYourself;
