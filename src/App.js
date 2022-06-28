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


let startPoint = 500;
let scrollStart = 500;
let scrollEnd = 1200;
// if(window.innerWidth <= 640){
//   startPoint = 0;
//   scrollStart = 100;
//   scrollEnd = 350;
// }



$(window).on("scroll touchmove", function () {
  let scrollTop = $(document).scrollTop();
  let newScrollTop = 0;
  if (scrollTop <= startPoint) {
    $('#coin-image').css('background-position-y', '200%');
    $('#trigger').css('transform', 'translate(0px, 0px)');
  } else if (scrollTop > scrollStart) {
    if (scrollTop >= scrollEnd) {
      $('#coin-image').css('background-position-y', '2200%');
      $(".pin-spacer").addClass("sticky-conin");
      $('.rotatedCoinTop').css('position', 'unset');
    } else {
      $('#trigger').css('transform', 'translate(0px, 0px)');
      $('.rotatedCoinTop').css('position', 'fixed');
      $(".pin-spacer").removeClass("sticky-conin");
      newScrollTop = scrollTop - 400;
      let per = Math.floor(newScrollTop / 10);
      per = Math.floor((per * 10) / 100) * 300;
      $('#coin-image').css('background-position-y', per + '%')
    }
  }

});

if($(window).width() <= 767){
  let startPoint = 300;
  let scrollStart = 150;
  let scrollEnd = 450;

  $(window).on("scroll touchmove", function () {
    let scrollTop = $(document).scrollTop();
    let newScrollTop = 0;
    if (scrollTop <= startPoint) {
      $('#coin-image').css('background-position-y', '0%');
      $('#trigger').css('transform', 'translate(0px, 0px)');
      $('.rotatedCoinTop').css('position', 'fixed');
    } else if (scrollTop > scrollStart) {
      if (scrollTop >= scrollEnd) {
        $('#coin-image').css('background-position-y', '35%');
        $(".pin-spacer").addClass("sticky-conin");
        $('.rotatedCoinTop').css('position', 'absolute');
      } else {
        $('#trigger').css('transform', 'translate(0px, 0px)');
        $('.rotatedCoinTop').css('position', 'fixed');
        $(".pin-spacer").removeClass("sticky-conin");
        newScrollTop = scrollTop - 180;
        let per = Math.floor(newScrollTop / 10);
        per = Math.floor((per * 10) / 100) * 700;
        $('#coin-image').css('background-position-y', per + '%')
      }
    }
  
  });

  
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 280) {
        $('.rotatedCoinTop').addClass('fixedconin');
        $('.rotatedCoinTop').css('position', 'absolute');
      } else {
        $('.rotatedCoinTop').removeClass('fixedconin');
      }
    });

}

function App() {
  return (
    <div className="App">
      <Header sticky={true} />
      <div style={{ 'position': 'relative' }}>
        <Section1></Section1>
        <div className='inset-x-0 z-10 rotatedCoinTop'>
          <div className='pin-spacer pinSpacer' >

            <div id="trigger" className='trigger' style={{

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
