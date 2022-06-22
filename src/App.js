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


function App() {
  return (
    <div className="App">
      <Header sticky={true} />
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </div>
  );
}

export default App;
