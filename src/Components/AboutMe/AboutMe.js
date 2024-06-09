import React from 'react'
import './AboutMe.css'
function AboutMe() {
  return (
    <div className='AboutMe'>
      <h1>About Me</h1> 
      <div className="AboutMeDescription">
      Hi, I'm Balaji 👋🏻
      In my three year of Computer Science Engineering 💻 at PES University 🏫, I've immersed myself in Machine Learning 🤖, Deep Learning, Natural Language Processing, Distributed Systems 🖥️, Big Data 📊, Backend, Frontend, DataBase Management system, Data Analytics 📈 , and Computer Networks 🌐. I Have participated in Hackathons, CTFs and Competitive programming reflects my commitment to new technology and innovation.
      </div>
      <div className="hobbies">
      <h4>Hobbies</h4>
        <ul>
            <li>&#8226; Sketching - Expressing through lines and shapes ✏️, capturing moments and ideas visually 🎨. Checkout some of my works  <a href='https://drive.google.com/drive/folders/1Vj7GIlxdhVRI-WHPljExLvcycasF18lt?usp=sharing' target="_blank" rel="noreferrer">here! </a></li>
            <li>&#8226; Playing Flute - Bringing melodies to life 🪈, crafting music with flute 🎵. Listen to  <a href='https://drive.google.com/file/d/1H0bjkpaf3rpaJvXXztUyI76lVY0icEpL/view?usp=sharing' target="_blank" rel="noreferrer">this! </a></li>
            <li>&#8226; Chess - Strategizing moves, mastering the board ♟. <a href='https://www.chess.com/member/balajirock5566' target="_blank" rel="noreferrer">Challenge me! </a></li>
            <li>&#8226; Jogging - Embracing the rhythm of the run 🏃‍♂️.Let's connect through  <a href='https://www.strava.com/athletes/97966914' target="_blank" rel="noreferrer">Strava! </a></li>
        </ul>
      </div>
      <div className="Languages">
      <h4>Languages</h4>
        <ul>
            <li>&#8226; English</li>
            <li>&#8226; Tamil</li>
            <li>&#8226; Kannada</li>
            <li>&#8226; Hindi</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
