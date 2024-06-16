import React from "react";
import "./Skill.css";
import pythonImg from './python.png';
import Cprogramming from './C-programming.png';
import java from './Java.png';
import js from './Js.png';
import flask from './Flask.png';
import react from './ReactJs.png';
import Kafka from './Kafka.png';
import FastAPI from './fastapi.svg';
import pytroch from './Pytroch.png';
import tensorflow from './tensorflow.png';
import mysql from './mysql.svg';
import nodeJs from './NodeJs.png';
import HTML from './HTML.png';
import CSS from './CSS.png';
import git from './Git.png';
import github from './Github.png';
import canva from './Canva.png';
import mongoDB from './MongoDB.svg';
import docker from './docker.Default';
import kubernetes from './Kubernetes.png';
import AWS from './AWS.png';

const skills = [
  { src: pythonImg, alt: 'Python' },
  { src: Cprogramming, alt: 'C Programming' },
  { src: java, alt: 'Java' },
  { src: js, alt: 'JavaScript' },
  { src: flask, alt: 'Flask' },
  { src: Kafka, alt: 'Kafka' },
  { src: FastAPI, alt: 'Fast API' },
  { src: mysql, alt: 'MySQL' },
  { src: react, alt: 'React' },
  { src: docker, alt: 'Docker' },
  { src: kubernetes, alt: 'Kubernetes' },
  { src: AWS, alt: 'AWS' },
  { src: nodeJs, alt: 'Node.js' },
  { src: mongoDB, alt: 'MongoDB' },
  { src: HTML, alt: 'HTML' },
  { src: CSS, alt: 'CSS' },
  { src: pytroch, alt: 'PyTorch' },
  { src: tensorflow, alt: 'TensorFlow' },
  { src: git, alt: 'Git' },
  { src: github, alt: 'GitHub' },
  { src: canva, alt: 'Canva' },
];

function Skills() {
  return (
    <div id="skills" className="Skills-layout">
      <h1>Skills</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="imageSkill">
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
