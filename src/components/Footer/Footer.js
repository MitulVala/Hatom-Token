import React from "react";
import Typography from "@mui/material/Typography";
import "./footer.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import logofooter from "../../assets/images/footer-logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';

function Footer() {
  return (
    <>
      <div className="footer-section">
        <Container>
          <Grid container>
            <Grid  lg={10} md={12} xs={12} sm={10}>
              <Grid container>
                <Grid  lg={2.6}  md={3} sm={3}  xs={12}>
                  <div className="footer-logo">
                    <img src={logofooter} />
                  </div>
                </Grid>
                <Grid  lg={3.4}  md={3} sm={3} xs={6}>
                  <Typography
                    varient="h3"
                    component="h5"
                    className="footer-title"
                  >
                    Protocol
                  </Typography>
                  <Typography className="text-subscribe">
                    <Link>Markets</Link>
                    <Link>Prices</Link>
                    <Link>Prices</Link>
                  </Typography>
                </Grid>

                <Grid  lg={3}  md={3} sm={3} xs={6}>
                  <Typography
                    varient="h3"
                    component="h5"
                    className="footer-title"
                  >
                    Governance
                  </Typography>
                  <Typography className="text-subscribe">
                    <Link>Overview</Link>
                    <Link>Hatom token</Link>
                  </Typography>
                </Grid>

                <Grid  lg={3} md={3} sm={3} xs={12}>
                  <Typography
                    varient="h3"
                    component="h5"
                    className="footer-title"
                  >
                    Security
                  </Typography>
                  <Typography className="text-subscribe">
                    <Link>Audits</Link>
                    <Link>Formal Verifications</Link>
                    <Link>Bug Bounty</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid  lg={2}  md={12} sm={2} xs={1}>
              <div className="btn-div">
                   
            <Button
                variant="contained"
                className="gradientBtn primaryButton app-Btn"
                type="submit">
                App
            </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid lg={12} xs={12}  sm={12}>
              <div className="footerbottom">
              <Typography>© 2022 Hatom ,LLC.</Typography>
                <ul>
                <li>
                    <a href="#"><RedditIcon /></a>
                  </li>
                  <li>
                    <a href="#"><GitHubIcon /></a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.4735 1.73143H14.8865C14.6686 1.73143 14.3605 2.04581 14.3605 2.24703V9.54135C14.3605 9.7428 14.6686 10.0175 14.8865 10.0175H15.4735V11.7489H10.1556V10.0175H11.2687V2.34976H11.2141L8.6149 11.7489H6.6026L4.0369 2.34976H3.97197V10.0175H5.08502V11.7489H0.632812V10.0175H1.20296C1.43769 10.0175 1.74586 9.7428 1.74586 9.54135V2.24697C1.74586 2.04575 1.43769 1.73138 1.20296 1.73138H0.632812V0H6.20004L8.02788 6.80196H8.07832L9.92291 0H15.4735V1.73143Z" fill="#8493B5"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#"><TwitterIcon /></a>
                  </li>
                </ul>
              </div>
            </Grid>
            </Grid>
        </Container>
        <Typography className="blockslot">Latest Block: 14296113</Typography>
      </div>
    </>
  );
}
export default Footer;
