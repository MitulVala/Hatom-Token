import React from "react";
import Typography from "@mui/material/Typography";
import "./section5.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function Section5(props) {
  return (
    <>
      <div className="subscribe-section">
        <Container>
          <Grid lg={12}>
            <Typography varient="h5" component="h5" className="Subscribe-title">
              Subscribe to Hatom newsletter
            </Typography>
            <Typography className="text-subscribe">
              Subscribe to our newsletter and stay updated on the latest
              developments.
            </Typography>
            <FormControl
              variant="standard"
              className="subscribe-input"
            >
              <Input className="inputField" placeholder="Enter your email" variant="outlined"
 />
              <Button
                variant="contained"
                className="gradientBtn primaryButton subscribe-Btn"
                type="submit"
              >
                Subscribe
              </Button>
            </FormControl>
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default Section5;
