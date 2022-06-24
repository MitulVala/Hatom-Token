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

$(window).on("scroll touchmove", function () {
  console.log("$(document).scrollTop()", $(document).scrollTop());
  let scrollTop = $(document).scrollTop();
  let newScrollTop = 0;
  console.log("#one", $('#one').scrollTop());
  if (scrollTop <= 600) {
    $('#coin-image').css('background-position-y', '200%');
    // $('.rotatedCoinTop').css('position', 'absolute');
  } else if (scrollTop > 500) {
    if (scrollTop >= 1100) {
      $('#coin-image').css('background-position-y', '2200%');
      // transform: 'translate(0px, 0px)',
    } else {
      $('.rotatedCoinTop').css('position', 'fixed');
      console.log("scrollTop", scrollTop, newScrollTop);
      debugger
      newScrollTop = scrollTop - 400;
      debugger
      let per = Math.floor(newScrollTop / 10);
      debugger
      console.log("per", per);
      per = Math.floor((per * 10) / 100) * 300;
      debugger
      console.log("perperper", per);
      $('#coin-image').css('background-position-y', per + '%')
    }

  }
  // else if($(document).scrollTop() > 500 && $(document).scrollTop() <= 600) {
  //   $('#coin-image').css('background-position-y', '800%')
  // } else if($(document).scrollTop() > 700 && $(document).scrollTop() <= 800) {
  //   $('#coin-image').css('background-position-y', '1000%')
  // } else if($(document).scrollTop() > 800 && $(document).scrollTop() <= 900) {
  //   $('#coin-image').css('background-position-y', '1400%')
  // }else if($(document).scrollTop() > 900 && $(document).scrollTop() <= 1000) {
  //   $('#coin-image').css('background-position-y', '2000%')
  // }
  // if ($(document).scrollTop() >= $("#one").position().top && $(document).scrollTop() < $("#two").position().top) {
  //   $('#coin-image').css('background-position-y', '800%')
  // };
  // if ($(document).scrollTop() >= $("#two").position().top && $(document).scrollTop() < $("#three").position().top) {
  //   $('#coin-image').css('background-position-y', '400%')
  // };
  // if ($(document).scrollTop() >= $("#three").position().top && $(document).scrollTop() < $("#four").position().top) {
  //   $('#coin-image').css('background-image', `url(${coin})`).css('background-position-y', '800%')
  // };
  // if ($(document).scrollTop() >= $("#four").position().top) {
  //   $('#coin-image').css('background-image', `url(${coin})`).css('background-position-y', '1200%')
  // };

});

function App() {
  return (
    <div className="App">
      <Header sticky={true} />
      <div style={{ 'position': 'relative' }}>
        <Section1></Section1>
        <div className='inset-x-0 z-10 rotatedCoinTop'>
          <div className='pin-spacer' style={{
            order: 0,
            placeSelf: 'auto',
            gridArea: 'auto/auto/auto/auto',
            zIndex: 'auto',
            float: 'none',
            flexShrink: 1,
            display: 'block',
            margin: '0px',
            inset: 'auto',
            position: 'relative',
            flexBasis: 'auto',
            overflow: 'visible',
            boxSizing: 'border-box',
            width: '1833px',
            height: '1453px',
            padding: '0px 0px 1183px'
          }}>

            <div id="trigger" style={{
              transform: 'translate(0px, 0px)',
              inset: '0px auto auto 0px',
              margin: '0px',
              maxWidth: '1833px',
              width: '1833px',
              maxHeight: '270px',
              height: '270px',
              padding: '0px'
            }}>
              <div className='flex justify-center' id="coin-wrapper">
                <div id="coin-image" className='w-[31vw] h-[31vw] -translate-x-1 sm:translate-x-0 sm:w-[18.51vw] sm:h-[18.51vw] aspect-square max-h-[270px] max-w-[270px]' style={{
                  backgroundSize: '100%', backgroundImage: `url(${coin})`, marginRight: '-6.61376vw',
                  backgroundPositionY: '0%'
                }}>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Section2></Section2>
      </div>

      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </div >
  );
}

export default App;
