import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import img1 from "../../assets/section4/img1.svg";
import img2 from "../../assets/section4/img2.svg";
import img3 from "../../assets/section4/img3.svg";
import "./section4.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeModeContext } from '../../contexts/ThemeModeContext';
import Lottie from "react-lottie";
import electronics from "../../assets/section4/electronics.json";

function Section4() {
    const { isDarkModeOn } = useContext(ThemeModeContext);

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        rows: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    rows: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    rows: 2,
                }
            }
            
        ]
    };
    return (
        <>
            <div className={(isDarkModeOn) ? "partners-section darkbg" : "partners-section lightbg"}   id="four">
                <Lottie
                    options={{
                        animationData: electronics,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                        },

                    }}
                    style={{ float: "right", width: "auto", height: "auto" }} />
                <Container className="">
                    <Typography varient="h2" component="h2" className='partnersTitle'>
                        Partners
                    </Typography>
                 
                    <Slider {...settings}>
                        <div className='div-slider'>
                            <Card className={(isDarkModeOn) ? 'card darkCard' : 'card lightCard'}>
                                <div className='imageContainer'>
                                    <img src={img1} alt='img' />
                                </div>
                                <div className='cardDetail'>
                                    <Typography varient="h5" component="h3">
                                        Elrond
                                    </Typography>
                                    <Typography varient="p">
                                        Elrond Network is a highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy.
                                    </Typography>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <a href='#' className='learn_moreBtn'>
                                        Learn more <img src="data:image/svg+xml,%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8 5.50195H1.2C0.88174 5.50195 0.576516 5.3966 0.351472 5.20906C0.126428 5.02152 0 4.76717 0 4.50195C0 4.23674 0.126428 3.98238 0.351472 3.79485C0.576516 3.60731 0.88174 3.50195 1.2 3.50195H15.8C16.1183 3.50195 16.4235 3.60731 16.6485 3.79485C16.8736 3.98238 17 4.23674 17 4.50195C17 4.76717 16.8736 5.02152 16.6485 5.20906C16.4235 5.3966 16.1183 5.50195 15.8 5.50195Z' fill='%233555F7'/%3E%3Cpath d='M12.9999 8.50214C12.8683 8.5029 12.7379 8.47767 12.616 8.42791C12.4942 8.37815 12.3834 8.30482 12.2899 8.21214C12.1962 8.11918 12.1218 8.00857 12.071 7.88672C12.0203 7.76486 11.9941 7.63415 11.9941 7.50214C11.9941 7.37013 12.0203 7.23942 12.071 7.11756C12.1218 6.9957 12.1962 6.8851 12.2899 6.79214L14.5899 4.50214L12.2899 2.21214C12.1967 2.1189 12.1227 2.00821 12.0723 1.88639C12.0218 1.76457 11.9958 1.634 11.9958 1.50214C11.9958 1.23584 12.1016 0.980442 12.2899 0.792138C12.4782 0.603835 12.7336 0.498047 12.9999 0.498047C13.1318 0.498047 13.2624 0.524018 13.3842 0.574479C13.506 0.624939 13.6167 0.6989 13.7099 0.792138L16.7099 3.79214C16.8037 3.8851 16.8781 3.9957 16.9288 4.11756C16.9796 4.23942 17.0057 4.37013 17.0057 4.50214C17.0057 4.63415 16.9796 4.76486 16.9288 4.88672C16.8781 5.00857 16.8037 5.11918 16.7099 5.21214L13.7099 8.21214C13.6165 8.30482 13.5057 8.37815 13.3838 8.42791C13.262 8.47767 13.1315 8.5029 12.9999 8.50214Z' fill='%233555F7'/%3E%3C/svg%3E%0A" />
                                    </a>
                                </div>
                            </Card>
                        </div>
                           
                      <div>
                            <Card className='card'>
                                <div className='imageContainer'>
                                    <img src={img2} alt='img' />
                                </div>
                                <div className='cardDetail'>
                                    <Typography varient="h5" component="h3">
                                        Rather Labs
                                    </Typography>
                                    <Typography varient="p">
                                        Rather Labs are blockchain technical partners who provide the blockchain expertise along with the partner intensity founders need.
                                    </Typography>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <a href='#' className='learn_moreBtn'>
                                        Learn more <img src="data:image/svg+xml,%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8 5.50195H1.2C0.88174 5.50195 0.576516 5.3966 0.351472 5.20906C0.126428 5.02152 0 4.76717 0 4.50195C0 4.23674 0.126428 3.98238 0.351472 3.79485C0.576516 3.60731 0.88174 3.50195 1.2 3.50195H15.8C16.1183 3.50195 16.4235 3.60731 16.6485 3.79485C16.8736 3.98238 17 4.23674 17 4.50195C17 4.76717 16.8736 5.02152 16.6485 5.20906C16.4235 5.3966 16.1183 5.50195 15.8 5.50195Z' fill='%233555F7'/%3E%3Cpath d='M12.9999 8.50214C12.8683 8.5029 12.7379 8.47767 12.616 8.42791C12.4942 8.37815 12.3834 8.30482 12.2899 8.21214C12.1962 8.11918 12.1218 8.00857 12.071 7.88672C12.0203 7.76486 11.9941 7.63415 11.9941 7.50214C11.9941 7.37013 12.0203 7.23942 12.071 7.11756C12.1218 6.9957 12.1962 6.8851 12.2899 6.79214L14.5899 4.50214L12.2899 2.21214C12.1967 2.1189 12.1227 2.00821 12.0723 1.88639C12.0218 1.76457 11.9958 1.634 11.9958 1.50214C11.9958 1.23584 12.1016 0.980442 12.2899 0.792138C12.4782 0.603835 12.7336 0.498047 12.9999 0.498047C13.1318 0.498047 13.2624 0.524018 13.3842 0.574479C13.506 0.624939 13.6167 0.6989 13.7099 0.792138L16.7099 3.79214C16.8037 3.8851 16.8781 3.9957 16.9288 4.11756C16.9796 4.23942 17.0057 4.37013 17.0057 4.50214C17.0057 4.63415 16.9796 4.76486 16.9288 4.88672C16.8781 5.00857 16.8037 5.11918 16.7099 5.21214L13.7099 8.21214C13.6165 8.30482 13.5057 8.37815 13.3838 8.42791C13.262 8.47767 13.1315 8.5029 12.9999 8.50214Z' fill='%233555F7'/%3E%3C/svg%3E%0A" />
                                    </a>
                                </div>
                            </Card>
                        </div>
                        
                        <div>
                            <Card className='card'>
                                <div className='imageContainer'>
                                    <img src={img3} alt='img' />
                                </div>
                                <div className='cardDetail'>
                                    <Typography varient="h5" component="h3">
                                        Maiar
                                    </Typography>
                                    <Typography varient="p">
                                        Maiar is powered by the amazing technology of the Elrond blockchain, and is going to radically change the way we interact with money.
                                    </Typography>
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <a href='#' className='learn_moreBtn'>
                                        Learn more <img src="data:image/svg+xml,%3Csvg width='18' height='9' viewBox='0 0 18 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8 5.50195H1.2C0.88174 5.50195 0.576516 5.3966 0.351472 5.20906C0.126428 5.02152 0 4.76717 0 4.50195C0 4.23674 0.126428 3.98238 0.351472 3.79485C0.576516 3.60731 0.88174 3.50195 1.2 3.50195H15.8C16.1183 3.50195 16.4235 3.60731 16.6485 3.79485C16.8736 3.98238 17 4.23674 17 4.50195C17 4.76717 16.8736 5.02152 16.6485 5.20906C16.4235 5.3966 16.1183 5.50195 15.8 5.50195Z' fill='%233555F7'/%3E%3Cpath d='M12.9999 8.50214C12.8683 8.5029 12.7379 8.47767 12.616 8.42791C12.4942 8.37815 12.3834 8.30482 12.2899 8.21214C12.1962 8.11918 12.1218 8.00857 12.071 7.88672C12.0203 7.76486 11.9941 7.63415 11.9941 7.50214C11.9941 7.37013 12.0203 7.23942 12.071 7.11756C12.1218 6.9957 12.1962 6.8851 12.2899 6.79214L14.5899 4.50214L12.2899 2.21214C12.1967 2.1189 12.1227 2.00821 12.0723 1.88639C12.0218 1.76457 11.9958 1.634 11.9958 1.50214C11.9958 1.23584 12.1016 0.980442 12.2899 0.792138C12.4782 0.603835 12.7336 0.498047 12.9999 0.498047C13.1318 0.498047 13.2624 0.524018 13.3842 0.574479C13.506 0.624939 13.6167 0.6989 13.7099 0.792138L16.7099 3.79214C16.8037 3.8851 16.8781 3.9957 16.9288 4.11756C16.9796 4.23942 17.0057 4.37013 17.0057 4.50214C17.0057 4.63415 16.9796 4.76486 16.9288 4.88672C16.8781 5.00857 16.8037 5.11918 16.7099 5.21214L13.7099 8.21214C13.6165 8.30482 13.5057 8.37815 13.3838 8.42791C13.262 8.47767 13.1315 8.5029 12.9999 8.50214Z' fill='%233555F7'/%3E%3C/svg%3E%0A" />
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </Slider>
                    
                    
                </Container>
                <Container>
                    <div className='testimonial-container'>
                        <div className='testimonial-inner'>
                            <blockquote>
                                “holoride is leading a new innovation front that has the potential to be transformational for the automotive industry and bring Elrond technology into the hyperconnected cars of the future.”
                            </blockquote>
                            <Typography className='writtenBy'>
                                Federico Caccia,  CEO Rather Labs
                            </Typography>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Section4;