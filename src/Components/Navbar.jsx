import React, { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Navbar.css";
import { Link } from "react-scroll";
import logoimg from "./violin logo.png";
import mailIcon from './Mail-icon.png'
import locationIcon from './pin.png'
import linkedInIcon from './linkedin.png'
import phoneIcon from './phone.png'
import contactImage from './Contactimage.png'

function Navbar() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHighlightBD, setisHighlightBD] = useState(false);
  const [isHighlightDS, setisHighlightDS] = useState(false);
  const [isHighlightCC, setisHighlightCC] = useState(false);
  const [isHighlightMI, setisHighlightMI] = useState(false);
  const [isHighlightCNS, setisHighlightCNS] = useState(false);
  const [isHighlightWeb, setisHighlightWeb] = useState(false);

  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    interests: [],
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(name,value)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const formattedData = { ...formData, interests: formData.interests.join(', ') };
    emailjs
      .send('service_5af4kv8', 'template_ef4meo1', formattedData, {
        publicKey: 'DOULq4smGDrYjoGko',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    console.log(formattedData);
    console.log(form.current);
  };

  const handleDivClick = () => {
    setPopupVisible(true);
  };
  const handleCloseClick = () => {
    setPopupVisible(false);
  };
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeMenu = () => {
    setIsNavOpen(false);
  };
  const handleHighlightBD =() =>{
    setisHighlightBD(!isHighlightBD);
    setFormData(prevState => {
      const newInterests = prevState.interests.includes("Big Data")
        ? prevState.interests.filter(i => i !== "Big Data")
        : [...prevState.interests, "Big Data"];
      return { ...prevState, interests: newInterests };
    });
  }
  const handleHighlightDS =() =>{
    setisHighlightDS(!isHighlightDS);
    setFormData(prevState => {
      const newInterests = prevState.interests.includes("Distributed Systems")
        ? prevState.interests.filter(i => i !== "Distributed Systems")
        : [...prevState.interests, "Distributed Systems"];
      return { ...prevState, interests: newInterests };
    });
  }
  const handleHighlightCC =() =>{
    setisHighlightCC(!isHighlightCC);
    setFormData(prevState => {
      const newInterests = prevState.interests.includes("Cloud Computing")
        ? prevState.interests.filter(i => i !== "Cloud Computing")
        : [...prevState.interests, "Cloud Computing"];
      return { ...prevState, interests: newInterests };
    });
  }
  const handleHighlightMI =() =>{
    setisHighlightMI(!isHighlightMI);
    setFormData(prevState => {
      const newInterests = prevState.interests.includes("Machine Learning")
        ? prevState.interests.filter(i => i !== "Machine Learning")
        : [...prevState.interests, "Machine Learning"];
      return { ...prevState, interests: newInterests };
    });
  }
  const handleHighlightCNS =() =>{
    setisHighlightCNS(!isHighlightCNS);
    setFormData(prevState => {
      const newInterests = prevState.interests.includes("Cyber Security")
        ? prevState.interests.filter(i => i !== "Cyber Security")
        : [...prevState.interests, "Cyber Security"];
        return { ...prevState, interests: newInterests };
      });
    }
    const handleHighlightWeb =() =>{
      setisHighlightWeb(!isHighlightWeb);
      setFormData(prevState => {
        const newInterests = prevState.interests.includes("Web/App Development")
        ? prevState.interests.filter(i => i !== "Web/App Development")
        : [...prevState.interests, "Web/App Development"];
        return { ...prevState, interests: newInterests };
      });
  }

  return (
    <nav className="navbar">
      <div className="innernav">
      <img src={logoimg} alt="" className="logo" />
        
       

      <div className={`menu ${isNavOpen ? "showMenu" : ""}`}>
        <Link className="menulist" onClick={closeMenu} smooth to="section1">
          Home
        </Link>
        <Link className="menulist" onClick={closeMenu} smooth to="section2">
          Skills
        </Link>
        <Link className="menulist" onClick={closeMenu} smooth to="section3">
          Projects
        </Link>
        <Link className="menulist" onClick={closeMenu} smooth to="section4">
          Achievments
        </Link>
        <Link className="menulist" onClick={closeMenu} smooth to="section5">
          About Me
        </Link>
      </div>
      <div className="connect">
        <div className="contact-btn" onClick={handleDivClick}>
          Contact Me
        </div>
      </div>

      <div className="menuIcon" onClick={toggleMenu}>
      {isNavOpen ? <div className="cross">&times;</div> : <div className="icon"><div></div><div></div><div></div></div>}
        </div>


        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <div className="connect-form-container">
              <span className="close" onClick={handleCloseClick}>
                &times;
              </span>
                <div className="form-section">
                  <h1>Let's connect!</h1>
                  <p>Together for a better solution</p>
                  <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">Name</label>
                    <input type="text" id="user_name" name="user_name"  onChange={handleInputChange} placeholder="Insert your name"/>

                    <label htmlFor="user_email">Email</label>
                    <input type="email" id="user_email" name="user_email" onChange={handleInputChange}  placeholder="Insert your email"/>  

                    <label>Interests</label>
                    <div className="interests">
                      <button className={isHighlightBD ? "highlight" : "btn-interest"} onClick = {handleHighlightBD}type="button">Big Data</button>
                      <button className={isHighlightDS ? "highlight" : "btn-interest"} onClick = {handleHighlightDS}type="button">Distributed Systems</button>
                      <button className={isHighlightCC ? "highlight" : "btn-interest"} onClick = {handleHighlightCC}type="button">Cloud Computing </button>
                      <button className={isHighlightMI ? "highlight" : "btn-interest"} onClick = {handleHighlightMI}type="button">AI/ML/DL/NLP</button>
                      <button className={isHighlightCNS ? "highlight" : "btn-interest"} onClick = {handleHighlightCNS}type="button">Cyber Security</button>
                      <button className={isHighlightWeb ? "highlight" : "btn-interest"} onClick = {handleHighlightWeb}type="button">Web/App Dev</button>
                    </div>
                    
                    <label htmlFor="message" >Message</label>
                    <textarea id="message" name="message" onChange={handleInputChange} placeholder="Tell me, I'm all ears"/>

                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                </div>

                <div className="contacts-section">
                  <h2>Contacts</h2>
                  <p>
                    <img className="icon" src={mailIcon} alt="email icon" />{" "}
                    balajiagmohan@gmail.com
                  </p>
                  <p>
                    <img className="icon" src={locationIcon} alt="location icon" /> Bangalore, India
                  </p>
                  <p>
                    <img className="icon" src={phoneIcon} alt="location icon" /> (+91)8123378598
                  </p>
                  <p>
                    <img className="icon" src={linkedInIcon} alt="location icon" /> <a href="https://www.linkedin.com/in/balaji-m-26ab76242/">LinkedIn</a>
                  </p>
                  <div className="ContactImg">
                  <img src={contactImage} alt="bottle in water" className="bottle-image"/>

                </div>
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
