import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import bglight from "../../assets/section1/bg-light.svg";
import bgdark from "../../assets/section1/bg-dark.svg";
import bgmobiledark from "../../assets/section1/bg-mobile-dark.png";
import bgmobile from "../../assets/section1/bg-mobile.png";
import peopledark from "../../assets/section1/people-dark.svg";
import peoplelight from "../../assets/section1/people.svg";
import machinelight from "../../assets/section1/machine.svg";
import machinedark from "../../assets/section1/machine-dark.svg";
import machineMobileDark from "../../assets/section1/machine-mobile-dark.svg";
import machineMobile from "../../assets/section1/machine-mobile.svg";
import "./section1.css";
import { ThemeModeContext } from '../../contexts/ThemeModeContext';
import Lottie from "react-lottie";
import animation from '../../assets/section1/magic.json';




function Section1() {

  const { isDarkModeOn } = useContext(ThemeModeContext);
  const [bgImage, setbgImage] = useState(bglight);
  const [machineImage, setMachineImage] = useState(machinelight);
  const isMobile = window.innerWidth < 640;
  const defaultOptions = {
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (window.innerWidth < 640) {
      setbgImage((isDarkModeOn) ? bgmobiledark : bgmobile)
      setMachineImage((isDarkModeOn) ? machineMobileDark : machineMobile)
    } else {
      setbgImage((isDarkModeOn) ? bgdark : bglight)
      setMachineImage((isDarkModeOn) ? machinedark : machinelight)
    }
  }, []);

  return (
    <div className='hero-section' id="one">
      <div className='heroTitle-content'>
        <Typography className='heroTitle'>Hatom Token</Typography>
        <Typography className='heroSubtitle'>
          lorem ipsum dolor sit amet consectetuer adipiscing elit
        </Typography>
      </div>
      <div>
        {!isMobile &&
          <Lottie options={defaultOptions} style={{ position: 'absolute', left: 0 }} />
        }
        <div>
          <img src={bgImage} className='loading-resource' alt='Lab Background' />
        </div>
        <div id="machine" className='mobile-machine'>
          <img src={machineImage} className='loading-resource machine-img' alt='Lab machine' />
        </div>
        {!isMobile &&
          <div>
            <img src={(isDarkModeOn) ? peopledark : peoplelight} className='loading-resource people-img' alt='Lab people' />
          </div>
        }
      </div>
    </div>
  )
}
export default Section1;