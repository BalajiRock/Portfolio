import React from "react";
import "./Skill.css";
import pythonImg from './python.png'
import Cprogramming from './C-programming.png'
import java from './Java.png'
import js from './Js.png'
import flask from './Flask.png'
import react from './ReactJs.png'
import Kafka from './Kafka.png'
import pytroch from './Pytroch.png'
import tensorflow from './tensorflow.png'
import mysql from './mysql.svg'
import nodeJs from './NodeJs.png'
import HTML from './HTML.png'
import CSS from './CSS.png'
import git from './Git.png'
import github from './Github.png'
import canva from './Canva.png'
import mongoDB from './MongoDB.svg'



function Skills() {
  return (
    <div>
      <div id="skills" className="Skills-layout">
        <h1>Skills</h1>
        <div className="skills">
          <div className="imageSkill">
            <img src={pythonImg} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={Cprogramming} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={java} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={js} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={flask} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={Kafka} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={mysql} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={react} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={nodeJs} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={mongoDB} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={HTML} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={CSS} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={pytroch} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={tensorflow} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={git} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={github} alt="" srcset="" />
          </div>
          <div className="imageSkill">
            <img src={canva} alt="" srcset="" />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Skills;
