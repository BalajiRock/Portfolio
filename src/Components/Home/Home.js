import React from 'react'
import Intro from "../Intro/Intro.js";
import "./Home.css"
import Navbar from "../Navbar.jsx";
import Projects from "../Projects/Projects.js";
import Footer from "../Footer/Footer.js";
import Skills from "../Skills/Skills.js";
import AboutMe from "../AboutMe/AboutMe.js";
import AC from "../AchievementAndCertificates/AC.js";
import { Element } from 'react-scroll';


function Home() {
  return (
    <div>
        <div className="header">
            <div className="navMain">
                <Navbar/>
            </div>
        <Element name="section1" className="element">
            <div className="introMain">
                <Intro/>
            </div>
        </Element>
        </div>
        <div className="body">
        <Element name="section2" className="element">
            <Skills/>
        </Element>
        <Element name="section3" className="element">
            <Projects/>
        </Element>
        <Element name="section4" className="element">
            <AC/>
        </Element>
        <Element name="section5" className="element">
            <AboutMe/>
        </Element>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Home
