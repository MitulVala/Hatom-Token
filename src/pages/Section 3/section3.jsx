import React from 'react';
import Typography from '@mui/material/Typography';
import "./section3.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Lottie from "react-lottie";
import first from "../../assets/section2/1.json";
import second from "../../assets/section2/2.json";
import third from "../../assets/section2/3.json";

function Section3() {
    return (
        <>
            <div className='understanding-section'  id="three">
                <Container>
                    <Typography varient="h2" component="h2" className='understandingTitle'>
                        Understanding Hatom
                    </Typography>
                    <Grid container className='card-container'>
                        <Grid items lg={4}>
                            <Card className='card'>
                                <div className='imageContainer'>
                                    <Lottie
                                        options={{
                                            animationData: first,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid slice',
                                            },
                                        }} />
                                </div>
                                <div className='cardDetail'>
                                    <Typography varient="h3" component="h3">
                                        Benefits of Hatom token
                                    </Typography>
                                    <Typography varient="p">
                                        Take part in the development of the ecosystem and have access to a tremendous staking yield.
                                    </Typography>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <a href='#' className='learn_moreBtn'>
                                        Learn more <img src="data:image/svg+xml,%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8 5.50195H1.2C0.88174 5.50195 0.576516 5.3966 0.351472 5.20906C0.126428 5.02152 0 4.76717 0 4.50195C0 4.23674 0.126428 3.98238 0.351472 3.79485C0.576516 3.60731 0.88174 3.50195 1.2 3.50195H15.8C16.1183 3.50195 16.4235 3.60731 16.6485 3.79485C16.8736 3.98238 17 4.23674 17 4.50195C17 4.76717 16.8736 5.02152 16.6485 5.20906C16.4235 5.3966 16.1183 5.50195 15.8 5.50195Z' fill='%233555F7'/%3E%3Cpath d='M12.9999 8.50214C12.8683 8.5029 12.7379 8.47767 12.616 8.42791C12.4942 8.37815 12.3834 8.30482 12.2899 8.21214C12.1962 8.11918 12.1218 8.00857 12.071 7.88672C12.0203 7.76486 11.9941 7.63415 11.9941 7.50214C11.9941 7.37013 12.0203 7.23942 12.071 7.11756C12.1218 6.9957 12.1962 6.8851 12.2899 6.79214L14.5899 4.50214L12.2899 2.21214C12.1967 2.1189 12.1227 2.00821 12.0723 1.88639C12.0218 1.76457 11.9958 1.634 11.9958 1.50214C11.9958 1.23584 12.1016 0.980442 12.2899 0.792138C12.4782 0.603835 12.7336 0.498047 12.9999 0.498047C13.1318 0.498047 13.2624 0.524018 13.3842 0.574479C13.506 0.624939 13.6167 0.6989 13.7099 0.792138L16.7099 3.79214C16.8037 3.8851 16.8781 3.9957 16.9288 4.11756C16.9796 4.23942 17.0057 4.37013 17.0057 4.50214C17.0057 4.63415 16.9796 4.76486 16.9288 4.88672C16.8781 5.00857 16.8037 5.11918 16.7099 5.21214L13.7099 8.21214C13.6165 8.30482 13.5057 8.37815 13.3838 8.42791C13.262 8.47767 13.1315 8.5029 12.9999 8.50214Z' fill='%233555F7'/%3E%3C/svg%3E%0A" />

                                    </a>
                                </div>
                            </Card>
                        </Grid>
                        <Grid items lg={4}>
                            <Card className='card'>
                                <div className='imageContainer'>
                                    <Lottie
                                        options={{
                                            animationData: second,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid slice',
                                            },
                                        }} />
                                </div>
                                <div className='cardDetail'>
                                    <Typography varient="h3" component="h3">
                                        Benefits of Hatom token
                                    </Typography>
                                    <Typography varient="p">
                                        Take part in the development of the ecosystem and have access to a tremendous staking yield.
                                    </Typography>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <a href='#' className='learn_moreBtn'>
                                        Learn more <img src="data:image/svg+xml,%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8 5.50195H1.2C0.88174 5.50195 0.576516 5.3966 0.351472 5.20906C0.126428 5.02152 0 4.76717 0 4.50195C0 4.23674 0.126428 3.98238 0.351472 3.79485C0.576516 3.60731 0.88174 3.50195 1.2 3.50195H15.8C16.1183 3.50195 16.4235 3.60731 16.6485 3.79485C16.8736 3.98238 17 4.23674 17 4.50195C17 4.76717 16.8736 5.02152 16.6485 5.20906C16.4235 5.3966 16.1183 5.50195 15.8 5.50195Z' fill='%233555F7'/%3E%3Cpath d='M12.9999 8.50214C12.8683 8.5029 12.7379 8.47767 12.616 8.42791C12.4942 8.37815 12.3834 8.30482 12.2899 8.21214C12.1962 8.11918 12.1218 8.00857 12.071 7.88672C12.0203 7.76486 11.9941 7.63415 11.9941 7.50214C11.9941 7.37013 12.0203 7.23942 12.071 7.11756C12.1218 6.9957 12.1962 6.8851 12.2899 6.79214L14.5899 4.50214L12.2899 2.21214C12.1967 2.1189 12.1227 2.00821 12.0723 1.88639C12.0218 1.76457 11.9958 1.634 11.9958 1.50214C11.9958 1.23584 12.1016 0.980442 12.2899 0.792138C12.4782 0.603835 12.7336 0.498047 12.9999 0.498047C13.1318 0.498047 13.2624 0.524018 13.3842 0.574479C13.506 0.624939 13.6167 0.6989 13.7099 0.792138L16.7099 3.79214C16.8037 3.8851 16.8781 3.9957 16.9288 4.11756C16.9796 4.23942 17.0057 4.37013 17.0057 4.50214C17.0057 4.63415 16.9796 4.76486 16.9288 4.88672C16.8781 5.00857 16.8037 5.11918 16.7099 5.21214L13.7099 8.21214C13.6165 8.30482 13.5057 8.37815 13.3838 8.42791C13.262 8.47767 13.1315 8.5029 12.9999 8.50214Z' fill='%233555F7'/%3E%3C/svg%3E%0A" />

                                    </a>
                                </div>
                            </Card>
                        </Grid>
                        <Grid items lg={4}>
                            <Card className='card'>
                                <div className='imageContainer'>
                                    <Lottie
                                        options={{
                                            animationData: third,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid slice',
                                            },
                                        }} />
                                </div>
                                <div className='cardDetail'>
                                    <Typography varient="h3" component="h3">
                                        Benefits of Hatom token
                                    </Typography>
                                    <Typography varient="p">
                                        Take part in the development of the ecosystem and have access to a tremendous staking yield.
                                    </Typography>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <a href='#' className='learn_moreBtn'>
                                        Learn more <img src="data:image/svg+xml,%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8 5.50195H1.2C0.88174 5.50195 0.576516 5.3966 0.351472 5.20906C0.126428 5.02152 0 4.76717 0 4.50195C0 4.23674 0.126428 3.98238 0.351472 3.79485C0.576516 3.60731 0.88174 3.50195 1.2 3.50195H15.8C16.1183 3.50195 16.4235 3.60731 16.6485 3.79485C16.8736 3.98238 17 4.23674 17 4.50195C17 4.76717 16.8736 5.02152 16.6485 5.20906C16.4235 5.3966 16.1183 5.50195 15.8 5.50195Z' fill='%233555F7'/%3E%3Cpath d='M12.9999 8.50214C12.8683 8.5029 12.7379 8.47767 12.616 8.42791C12.4942 8.37815 12.3834 8.30482 12.2899 8.21214C12.1962 8.11918 12.1218 8.00857 12.071 7.88672C12.0203 7.76486 11.9941 7.63415 11.9941 7.50214C11.9941 7.37013 12.0203 7.23942 12.071 7.11756C12.1218 6.9957 12.1962 6.8851 12.2899 6.79214L14.5899 4.50214L12.2899 2.21214C12.1967 2.1189 12.1227 2.00821 12.0723 1.88639C12.0218 1.76457 11.9958 1.634 11.9958 1.50214C11.9958 1.23584 12.1016 0.980442 12.2899 0.792138C12.4782 0.603835 12.7336 0.498047 12.9999 0.498047C13.1318 0.498047 13.2624 0.524018 13.3842 0.574479C13.506 0.624939 13.6167 0.6989 13.7099 0.792138L16.7099 3.79214C16.8037 3.8851 16.8781 3.9957 16.9288 4.11756C16.9796 4.23942 17.0057 4.37013 17.0057 4.50214C17.0057 4.63415 16.9796 4.76486 16.9288 4.88672C16.8781 5.00857 16.8037 5.11918 16.7099 5.21214L13.7099 8.21214C13.6165 8.30482 13.5057 8.37815 13.3838 8.42791C13.262 8.47767 13.1315 8.5029 12.9999 8.50214Z' fill='%233555F7'/%3E%3C/svg%3E%0A" />

                                    </a>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default Section3;