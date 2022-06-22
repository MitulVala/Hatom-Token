import React from "react";
import Typography from "@mui/material/Typography";
import "./section6.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Lottie from "react-lottie";
import animation from '../../assets/section6/loop.json';


function Section6() {

  const defaultOptions = {
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: "div-animation"
    },
  };
  return (
    <>
      <div className="diclaimer-section">
        <Lottie options={defaultOptions} style={{ position: 'absolute', right: 0, top: 0, width: "auto", height: "auto" }} />
        <Container>
          <Grid >
            <Typography varient="h5" component="h5" className="diclaimer-title">
              Disclaimer
            </Typography>

            <Button
              variant="contained"
              className="gradientBtn primaryButton leagal-Btn"
              type="submit">
              Legal information
            </Button>

          </Grid>
        </Container>
      </div>
    </>
  );
}
export default Section6;
