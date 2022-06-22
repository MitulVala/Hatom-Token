import React, { useContext, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import bglight from "../../assets/section1/bg-light.svg";
import bgdark from "../../assets/section1/bg-dark.svg";
import peopledark from "../../assets/section1/people-dark.svg";
import peoplelight from "../../assets/section1/people.svg";
import machinelight from "../../assets/section1/machine.svg";
import machinedark from "../../assets/section1/machine-dark.svg";
import "./section1.css";
import { ThemeModeContext } from '../../contexts/ThemeModeContext';
import Lottie from "react-lottie";
import animation from '../../assets/section1/magic.json';




function Section1() {
  const { isDarkModeOn } = useContext(ThemeModeContext);
  
  const defaultOptions = {
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='hero-section'>
      <div className='heroTitle-content'>
        <Typography className='heroTitle'>Hatom Token</Typography>
        <Typography className='heroSubtitle'>
          lorem ipsum dolor sit amet consectetuer adipiscing elit
        </Typography>
      </div>
      <div>
        <Lottie options={defaultOptions} style={{ position: 'absolute', left: 0 }} />
        <div >
          <img src={(isDarkModeOn) ? bgdark : bglight} className='loading-resource' alt='Lab Background' />
        </div>
        <div id="machine">
          <img src={(isDarkModeOn) ? machinedark : machinelight} className='loading-resource machine-img' alt='Lab machine' />
        </div>
        <div>
          <img src={(isDarkModeOn) ? peopledark : peoplelight} className='loading-resource people-img' alt='Lab people' />
        </div>
      </div>
    </div>
  )
}
export default Section1;