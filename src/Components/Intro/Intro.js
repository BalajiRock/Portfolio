import React from 'react'
import "./Intro.css"
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    <div className="intro-img">
    <div className='texts'>
    Hi, I'm&nbsp;
    <div className="coloredText">

    <ReactTyped
      strings={[
        "Balaji M.",
        "a Passionate Developer.",
        "a Problem Solver.",
        "",
      ]}
      typeSpeed={70}
      backSpeed={50}
      loop
    >
    </ReactTyped>
    </div>

    </div>
    <div className="info-text">
    In my three year of Computer Science Engineering 💻 at PES University 🏫, I've immersed myself in Machine Learning 🤖, Deep Learning, Natural Language Processing, Distributed Systems 🖥️,Big Data 📊, Backend ,Frontend ,DataBase Management system, Data Analytics 📈 , and Computer Networks 🌐. I Have participated in Hackathons, CTFs and Competitive programming reflects my commitment to new technology and innovation.

    </div>
    <div className="resume">
      <input type="button" className='resume-btn' value="Resume" />
    </div>
    </div>
  )
}

export default Intro