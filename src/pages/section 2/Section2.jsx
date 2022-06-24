import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import "./section2.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import { ThemeModeContext } from '../../contexts/ThemeModeContext';

function Section2(props) {
    const { isDarkModeOn } = useContext(ThemeModeContext);

  return (
    <>
        <div className={ (isDarkModeOn) ? "middle-section darkbg" : "middle-section lightbg"}  id="two">
            <Container>
                <div className='mobile-reverse'>
                    <div className='mobile-image'>
                        <img src={require("../../assets/images/section-2.png")} />
                    </div>
                <Grid container className='buyToken-container'>
                    <Grid items lg={6} xs={12}>
                        <div className='buyToken-content'>
                        <Typography variant='h4'>
                            $9,449,627.26 
                            <span> Dividends</span>
                        </Typography>
                        <Typography>
                        Paid out to Hatom Token Holders over 3 years
                        </Typography>
                        </div>
                    </Grid>
                    <Grid items lg={6} xs={12}>
                        <div className='buyToken-button center'>
                            <Button variant="contained" className='gradientBtn primaryButton'>Buy Hatom Tokens</Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className='feature-container'>
                    <Typography variant='h2' className='featureTitle'>
                        <span class="text-blue">Features </span>
                        of Hatom Token
                    </Typography>
                    <Grid items lg={4} md={4} xs={12}>
                        <div className='feature feature1'>
                            <Typography variant='h2'>
                                Earn
                            </Typography>
                            <Typography>
                            Stake your Hatom tokens to earn a share of the protocol's revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.
                            </Typography>
                        </div>
                        <div className='feature feature2'>
                            <Typography variant='h2'>
                            Vote
                            </Typography>
                            <Typography>
                            Decide which token should be listed next, and what upgrade or feature should be integrated into the protocol.
                            </Typography>
                        </div>

                    </Grid>
                    <Grid items lg={4} md={4} xs={12}>
                        
                    </Grid>
                    <Grid items lg={4} md={4} xs={12}>
                        <div className='feature feature3'>
                            <Typography variant='h2'>
                            Supply & Borrow
                            </Typography>
                            <Typography>
                            Hatom token holders can use the HTM Money Market to :
                            </Typography>
                            <List className='feature-subpoints'>
                                <ListItem>
                                    <ListItemText>
                                    Supply HTM and earn interest on their deposit.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                    Use HTM as collateral and take a loan of any available crypto asset.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
                </div>
               
            </Container>
        </div>
    </>
  )
}
export default Section2;