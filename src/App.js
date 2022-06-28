import React, { useEffect } from 'react';
import './App.css';
import '../src/assets/css/custom.css';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Section1 from './pages/Section 1/Section1';
import Section2 from './pages/section 2/Section2';
import Section3 from './pages/Section 3/section3';
import Section4 from './pages/Section 4/section4';
import Section5 from './pages/Section 5/section5';
import Section6 from './pages/Section 6/section6';
import $ from "jquery";
import coin from "./assets/section1/coin.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const screenWidth = () => {
    return window.innerWidth < 640 ? .8 * window.innerWidth :
      window.innerWidth < 1024 ? .55 * window.innerWidth
        : window.innerWidth < 1110 ? .77 * window.innerWidth
          : window.innerWidth < 1220 ? .72 * window.innerWidth
            : window.innerWidth < 1300 ? .7 * window.innerWidth
              : window.innerWidth < 1400 ? .68 * window.innerWidth
                : window.innerWidth <= 1512 ? .66 * window.innerWidth
                  : .64 * window.innerWidth
  }
  useEffect(() => {
    ScrollTrigger.create({
      target: "coin-wrapper",
      pin: "#trigger",
      start: function () {
        var e = .2 * window.innerWidth;
        return "top ".concat(e, "px")
      },
      end: function () {
        return "+=" + (screenWidth() + 50);
      },
      onUpdate: function (e) {
        var coin_image = document.getElementById("coin-image");
        var progress = e.progress;
        var newPosition = Math.ceil((progress / 22).toFixed(3) * 1000);
        var position = 100 * (progress < .35 ? 0 : newPosition);
        try {
          coin_image.style.backgroundPositionY = "".concat(position, "%")
        } catch (s) {
          console.error(s)
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <Header sticky={true} />
      <Section1></Section1>
      <div className='absolute inset-x-0 z-10 rotatedCoinTop'>
        <div id="trigger">
          <div className='flex justify-center' id="coin-wrapper">
            <div id="coin-image" className='w-[31vw] h-[31vw] -translate-x-1 sm:translate-x-0 sm:w-[18.51vw] sm:h-[18.51vw] aspect-square max-h-[270px] max-w-[270px]'
              style={{
                backgroundSize: '100%', backgroundImage: `url(${coin})`, marginRight: '-6.61376vw',
                backgroundPositionY: '0%'
              }}
            >
            </div>
          </div>
        </div>
      </div>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </div >
  );
}

export default App;
