import "./Projects.css";
import BattleFantasyImg from "./BattleFantasy.jpg";
import IDSImg from "./IDS.jpeg"
import KeyboardPlayerImg from "./KeyBoard.jpg";
import TrafficOptimizationImf from "./TrafficOptimization.jpeg"
import MusicGeneratorImg from "./MusicGenerator.png";
import ChatImg from "./ChatApplication.png";
import PortfolioImg from "./Portfolio.png";
import kafkaImg from "./kafka.jpg";
import DSDNImg from "./DSDN.png"
import SocialMediaImg from "./socialmedia.jpg";
import DeceptionDetectorImg from "./DeceptionDetector.jpg";
import memeGeneratorImg from "./meme.jpg";
import React, { useState } from 'react';

const Projects = () => {

  const [YAKRaftHovered, setYAKRaftHovered] = useState(false);
  const handleMouseEnter = () => {
    setYAKRaftHovered(true);
  };
  const handleMouseLeave = () => {
    setYAKRaftHovered(false);
  };

  const [DSDNHovered, setDSDNHovered] = useState(false);
  const DSDNhandleMouseEnter = () => {
    setDSDNHovered(true);
  };
  const DSDNhandleMouseLeave = () => {
    setDSDNHovered(false);
  };

  const [TrafficHovered, setTrafficHovered] = useState(false);
  const TraffichandleMouseEnter = () => {
    setTrafficHovered(true);
  };
  const TraffichandleMouseLeave = () => {
    setTrafficHovered(false);
  };

  const [DDHovered, setDDHovered] = useState(false);
  const DDhandleMouseEnter = () => {
    setDDHovered(true);
  };
  const DDhandleMouseLeave = () => {
    setDDHovered(false);
  };

  const [memeHovered, setmemeHovered] = useState(false);
  const memehandleMouseEnter = () => {
    setmemeHovered(true);
  };
  const memehandleMouseLeave = () => {
    setmemeHovered(false);
  };


  const [IDSHovered, setIDSHovered] = useState(false);
  const IDShandleMouseEnter = () => {
    setIDSHovered(true);
  };
  const IDShandleMouseLeave = () => {
    setIDSHovered(false);
  };

  const [musicGenHovered, setmusicGenHovered] = useState(false);
  const musicGenhandleMouseEnter = () => {
    setmusicGenHovered(true);
  };
  const musicGenhandleMouseLeave = () => {
    setmusicGenHovered(false);
  };

  const [BattleFantasyHovered, setBattleFantasyHovered] = useState(false);
  const BattleFantasyhandleMouseEnter = () => {
    setBattleFantasyHovered(true);
  };
  const BattleFantasyhandleMouseLeave = () => {
    setBattleFantasyHovered(false);
  };

  const [socialMediaHovered, setsocialMediaHovered] = useState(false);
  const socialMediahandleMouseEnter = () => {
    setsocialMediaHovered(true);
  };
  const socialMediahandleMouseLeave = () => {
    setsocialMediaHovered(false);
  };

  const [chatAppHovered, setchatAppHovered] = useState(false);
  const chatApphandleMouseEnter = () => {
    setchatAppHovered(true);
  };
  const chatApphandleMouseLeave = () => {
    setchatAppHovered(false);
  };

  const [portfolioHovered, setportfolioHovered] = useState(false);
  const portfoliohandleMouseEnter = () => {
    setportfolioHovered(true);
  };
  const portfoliohandleMouseLeave = () => {
    setportfolioHovered(false);
  };

  const [keyboardHovered, setkeyboardHovered] = useState(false);
  const keyboardhandleMouseEnter = () => {
    setkeyboardHovered(true);
  };
  const keyboardhandleMouseLeave = () => {
    setkeyboardHovered(false);
  };

  return (
    
    <div className="projectsMain">
      <div className="layout">
        <div className="heading">Projects</div>
        <div className="projects">

          <div className="project "  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {YAKRaftHovered ? <div> 
            <h1 className="projectTitle">Yet Another KRaft</h1>
            <div className="descriptionOfProject">
            Kafka Raft (KRaft) is the consensus protocol that was introduced to remove Kafka’s dependency on ZooKeeper for metadata management.
            This greatly simplifies Kafka’s architecture by consolidating responsibility for metadata into Kafka itself, rather than splitting it between two different systems: ZooKeeper and Kafka.
            This project replicates the features of KRaft. Uses HTTP to communicate between the nodes and eventual consistency is achieved.By Implementing this, I have a strong understaning of distributed systems, consensus algorithms, fault tolerance, scalability etc 
            </div>
            <div className="linksToProject">
              <input type="button" value="View Project" />
              <a href="https://github.com/BalajiRock/YAKraft" target="_blank" rel="noreferrer">
              <input type="button" value="Project link" /></a>
            </div>
          </div>: <div>
            <img src={kafkaImg} alt="" />
            <h1 className="projectTitle">YAKRaft</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Big Data</div>
              <div className="tag">Flask</div>
              <div className="tag">Pyraft</div>
              <div className="tag">Kafka</div>
              
            </div>
          </div>
          }
          </div>

          <div className="project "  onMouseEnter={DSDNhandleMouseEnter} onMouseLeave={DSDNhandleMouseLeave}>
          {DSDNHovered ? <div> 
            <h1 className="projectTitle">Distributed Software Defined Network</h1>
            <div className="descriptionOfProject">
            A Distributed Software Defined Network (SDN) decentralizes the control plane, for enhanced scalability, reliability, and performance. By separating the control and data planes, network devices focus on forwarding packets while controllers manage decision-making. Controllers communicate to maintain a coherent network view, optimizing traffic flows and improving fault tolerance.
            We Implemented a distributes cluster manager, end points for network configuration, MFA for admin to configure the network.

            </div>
            <div className="linksToProject">
              <input type="button" value="View Project" />
              <a href="https://github.com/BalajiRock/YAKraft" target="_blank" rel="noreferrer">
              <input type="button" value="Project link" /></a>
            </div>
          </div>: <div>
            <img src={DSDNImg} alt="" />
            <h1 className="projectTitle">Distributed Software Defined network</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Flask</div>
              <div className="tag">Pyraft</div>
            </div>
            </div>
            }
          </div>
          <div className="project "  onMouseEnter={TraffichandleMouseEnter} onMouseLeave={TraffichandleMouseLeave}>
          {TrafficHovered ? <div> TrafficHovered</div>: <div>
            <img src={TrafficOptimizationImf} alt="" />
            <h1 className="projectTitle">Traffic optimization</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Distributed Systems</div>
              <div className="tag">Pygame</div>
              <div className="tag">Flask</div>
            </div>
            </div>
            }
          </div>

          <div className="project "  onMouseEnter={DDhandleMouseEnter} onMouseLeave={DDhandleMouseLeave}>
          {DDHovered ? <div> DDHovered</div>: <div>
            <img src={DeceptionDetectorImg} alt="" />
            <h1 className="projectTitle">Deception Detector</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">NLP</div>
              <div className="tag">BERT</div>
              <div className="tag">OPENAI API</div>
              <div className="tag">Explainable AI</div>
              <div className="tag">Machine Learning</div>
            </div>
            </div>
            }
          </div>

          <div className="project "  onMouseEnter={memehandleMouseEnter} onMouseLeave={memehandleMouseLeave}>
          {memeHovered ? <div> memeHovered</div>: <div>
            <img src={memeGeneratorImg} alt="" />
            <h1 className="projectTitle">Meme Generator</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Transfer Learning</div>
              <div className="tag">Few-shot learning</div>
              <div className="tag">OPENAI API</div>
            </div>
            </div>
            }
          </div>


          <div className="project "  onMouseEnter={IDShandleMouseEnter} onMouseLeave={IDShandleMouseLeave}>
          {IDSHovered ? <div> IDSHovered</div>: <div>
            <img src={IDSImg} alt="" />
            <h1 className="projectTitle">Intrusion Detection System</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Kafka</div>
              <div className="tag">Python</div>
              <div className="tag">Kali-Linux</div>
            </div>
            </div>
            }
          </div>


          <div className="project "  onMouseEnter={musicGenhandleMouseEnter} onMouseLeave={musicGenhandleMouseLeave}>
          {musicGenHovered ? <div> musicGenHovered</div>: <div>
            <img src={MusicGeneratorImg} alt="" />
            <h1 className="projectTitle">Music Generator</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
              <div className="tag">JavaScript</div>
              <div className="tag">OPENAI API</div>
            </div>
            </div>
            }
          </div>


          <div className="project "  onMouseEnter={BattleFantasyhandleMouseEnter} onMouseLeave={BattleFantasyhandleMouseLeave}>
          {BattleFantasyHovered ? <div> BattleFantasyHovered</div>: <div>
            <img src={BattleFantasyImg} alt="" />
            <h1 className="projectTitle">Battle Fantasy</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Pygame</div>
              <div className="tag">Canva</div>
              <div className="tag">Game Development</div>
            </div>
            </div>
            }
          </div>

          <div className="project "  onMouseEnter={socialMediahandleMouseEnter} onMouseLeave={socialMediahandleMouseLeave}>
          {socialMediaHovered ? <div> socialMediaHovered</div>: <div>
            <img src={SocialMediaImg} alt="" />
            <h1 className="projectTitle">Social Media</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">JavaScript</div>
              <div className="tag">React JS</div>
              <div className="tag">Node JS</div>
              <div className="tag">MySQL</div>
              <div className="tag">Express JS</div>
            </div>
            </div>
            }
          </div>

          <div className="project "  onMouseEnter={chatApphandleMouseEnter} onMouseLeave={chatApphandleMouseLeave}>
          {chatAppHovered ? <div> chatAppHovered</div>: <div>
            <img src={ChatImg} alt="" srcset="" />
            <h1 className="projectTitle">Chat Application</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Hill Cipher</div>
              <div className="tag">Socket Programming</div>
              <div className="tag">Asymmetric Key</div>
            </div>
            </div>
            }
          </div>

          <div className="project "  onMouseEnter={portfoliohandleMouseEnter} onMouseLeave={portfoliohandleMouseLeave}>
          {portfolioHovered ? <div> portfolioHovered</div>: <div>
            <img src={PortfolioImg} alt="" />
            <h1 className="projectTitle">My Portfolio</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Pygame</div>
              <div className="tag">Threads</div>
            </div>
            </div>
            }
            </div>

            <div className="project "  onMouseEnter={keyboardhandleMouseEnter} onMouseLeave={keyboardhandleMouseLeave}>
          {keyboardHovered ? <div> keyboardHovered</div>: <div>
            <img src={KeyboardPlayerImg} alt="" />
            <h1 className="projectTitle">Keyboard Player</h1>
            <div className="tags">
            <div>
              Technologies :
            </div>
              <div className="tag">Python</div>
              <div className="tag">Pygame</div>
              <div className="tag">Threads</div>
            </div>
            </div>
            }
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Projects;
