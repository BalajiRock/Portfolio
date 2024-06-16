import React, { useState } from 'react';
import './Projects.css';
import BattleFantasyImg from './BattleFantasy.jpg';
import IDSImg from './IDS.jpeg';
import KeyboardPlayerImg from './KeyBoard.jpg';
import TrafficOptimizationImg from './TrafficOptimization.jpeg';
import MusicGeneratorImg from './MusicGenerator.png';
import ChatImg from './ChatApplication.png';
import fileSharingImg from './SecureFileSharing.jpg';
import kafkaImg from './kafka.jpg';
import DSDNImg from './DSDN.png';
import SocialMediaImg from './socialmedia.jpg';
import DeceptionDetectorImg from './DeceptionDetector.jpg';
import memeGeneratorImg from './meme.jpg';

const projectData = [
  {
    id: 'YAKRaft',
    title: 'Yet Another KRaft',
    description: 'Kafka Raft (KRaft) is the consensus protocol that was introduced to remove Kafka’s dependency on ZooKeeper for metadata management. This greatly simplifies Kafka’s architecture by consolidating responsibility for metadata into Kafka itself, rather than splitting it between two different systems: ZooKeeper and Kafka. This project replicates the features of KRaft. Uses HTTP to communicate between the nodes and eventual consistency is achieved. By Implementing this, I have a strong understanding of distributed systems, consensus algorithms, fault tolerance, scalability, etc.',
    technologies: ['Python', 'Big Data', 'Flask', 'Pyraft', 'Kafka'],
    img: kafkaImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'DSDN',
    title: 'Distributed Software Defined Network',
    description: 'A Distributed Software Defined Network (SDN) decentralizes the control plane, for enhanced scalability, reliability, and performance. By separating the control and data planes, network devices focus on forwarding packets while controllers manage decision-making. Controllers communicate to maintain a coherent network view, optimizing traffic flows and improving fault tolerance. We implemented a distributed cluster manager, endpoints for network configuration, and MFA for admin to configure the network.',
    technologies: ['Python', 'Flask', 'Pyraft'],
    img: DSDNImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'TrafficOptimization',
    title: 'Traffic Optimization',
    description: 'Optimizes traffic flows and improves fault tolerance.',
    technologies: ['Python', 'Distributed Systems', 'Pygame', 'Flask'],
    img: TrafficOptimizationImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'DeceptionDetector',
    title: 'Deception Detector',
    description: 'Detects deception using NLP, BERT, and Explainable AI.',
    technologies: ['NLP', 'BERT', 'OPENAI API', 'Explainable AI', 'Machine Learning'],
    img: DeceptionDetectorImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'MemeGenerator',
    title: 'Meme Generator',
    description: 'Generates memes using transfer learning and few-shot learning.',
    technologies: ['Transfer Learning', 'Few-shot learning', 'OPENAI API'],
    img: memeGeneratorImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'IDS',
    title: 'Intrusion Detection System',
    description: 'Detects intrusions using Kafka and Kali-Linux.',
    technologies: ['Kafka', 'Python', 'Kali-Linux'],
    img: IDSImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'MusicGenerator',
    title: 'Music Generator',
    description: 'Generates music using HTML, CSS, JavaScript, and OPENAI API.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OPENAI API'],
    img: MusicGeneratorImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'Secure file sharing',
    title: 'Secure file sharing system',
    description: 'My personal portfolio developed using Python, Pygame, and Threads.',
    technologies: ['Python', 'Fast API', 'MySQL','Postman'],
    img: fileSharingImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'BattleFantasy',
    title: 'Battle Fantasy',
    description: 'A fantasy battle game developed using Python and Pygame.',
    technologies: ['Python', 'Pygame', 'Canva', 'Game Development'],
    img: BattleFantasyImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'SocialMedia',
    title: 'Social Media',
    description: 'A social media platform developed using JavaScript, React JS, Node JS, MySQL, and Express JS.',
    technologies: ['JavaScript', 'React JS', 'Node JS', 'MySQL', 'Express JS'],
    img: SocialMediaImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'ChatApplication',
    title: 'Chat Application',
    description: 'A chat application developed using Python, Hill Cipher, Socket Programming, and Asymmetric Key.',
    technologies: ['Python', 'Hill Cipher', 'Socket Programming', 'Asymmetric Key'],
    img: ChatImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
  {
    id: 'KeyboardPlayer',
    title: 'Keyboard Player',
    description: 'A keyboard player developed using Python, Pygame, and Threads.',
    technologies: ['Python', 'Pygame', 'Threads'],
    img: KeyboardPlayerImg,
    link: 'https://github.com/BalajiRock/YAKraft',
  },
];

const Project = ({ project, isActive, onClick, onMouseLeave }) => (
  <div
    className="project"
    onClick={() => onClick(project.id)}
  >
    {isActive ? (
      <div>
        <h1 className="projectTitle">{project.title}</h1>
        <div className="descriptionOfProject">{project.description}</div>
        <div className="linksToProject">
          <input type="button" value="View Project" />
          <a href={project.link} target="_blank" rel="noreferrer">
            <input type="button" value="Project link" />
          </a>
        </div>
      </div>
    ) : (
      <div>
        <img src={project.img} alt={project.title} />
        <h1 className="projectTitle">{project.title}</h1>
        <div className="tags">
          <div>Technologies:</div>
          {project.technologies.map((tech, index) => (
            <div key={index} className="tag">
              {tech}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState('');

  const handleMouseEnter = (val) => {
    if(projectDetails === val)
    setProjectDetails("");
  else
  setProjectDetails(val);
  };


  return (
    <div className="projectsMain">
      <div className="layout">
        <div className="heading">Projects</div>
        <div className="projects">
          {projectData.map((project) => (
            <Project
              key={project.id}
              project={project}
              isActive={projectDetails === project.id}
              onClick={handleMouseEnter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
