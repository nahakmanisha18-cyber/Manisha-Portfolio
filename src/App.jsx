import './App.css'
import AboutMe from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; 

function App() {

  useEffect(() => {
          AOS.init({
              duration: 1200,
              once: false,
          });
      }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <AboutMe />
      <Skills />
      <Projects/>
      <Education/>
      <Certificates/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
