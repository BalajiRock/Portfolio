import React from 'react'
import './AC.css'
import { Link } from 'react-scroll'
function AC() {
  return (
    <div className='AC-layout'>
    <h1>Acievement and Certificates</h1>
      <div className="outerAC">
        <div className="ACcards">
        &#8226; Solved 350+ question in <Link className="link" to=''>leetcode</Link>
        </div>
        <div className="ACcards">
        &#8226; Password cracking virtual <Link className="link" to=''>internship</Link> (Goldman Sachs)
        </div>
        <div className="ACcards">
        &#8226; Top 10% in <Link className="link" to=''>TryHackMe</Link>
        </div>
        <div className="ACcards">
        &#8226; Top 10 in Kalpana 2024 (Hack for Humanity)
        </div>
        <div className="ACcards">
        &#8226; Top 20 in Hashcode 12.0 among 160+ teams
        </div>
        <div className="ACcards">
        &#8226; 5 badges in <Link className="link" to=''>leetcode</Link>
        </div>
        <div className="ACcards">
        &#8226;Nexus Elites CTF - Ranked 69th in All India <Link className= "link" to=''>Certification</Link>
        </div>
        <div className="ACcards">
        &#8226; <Link className="link" to=''>Hackerrank</Link> intermediate problem-solving
        </div>
        <div className="ACcards">
        &#8226; Kaggle <Link className= "link" to=''>Certificate</Link> on Pandas
        </div>
        <div className="ACcards">
        &#8226; Kaggle <Link className= "link" to=''>Certificate</Link> on Introduction to Machine Learning
        </div>
        <div className="ACcards">
        &#8226; Java udemy course completion <Link className= "link" to=''>Certificate</Link> 
        </div>
        <div className="ACcards">
        &#8226; Kaggle <Link className= "link" to=''>Certificate</Link> on Python
        </div>
        <div className="ACcards">
        &#8226; <Link className= "link" to=''>Certification</Link> of participation in Digital Forensics-workshop and CTF by PESU ISFCR
        </div>
        <div className="ACcards">
        &#8226; <Link className= "link" to=''>Certification</Link> of participation in CTF by PESU ISFCR
        </div>
        <div className="ACcards">
        &#8226; <Link className= "link" to=''>Certification</Link> of participation in hack for humanity by Kalpana 2023 PESU
        </div>
        <div className="ACcards">
        &#8226; Kaggle <Link className= "link" to=''>Certificate</Link> on Intro to Programming
        </div>
        <div className="ACcards">
        &#8226; <Link className= "link" to=''>Certification</Link> of participation in Graph theory and its Application workshop by MCC.
        </div>

      </div>
    </div>
  )
}
export default AC
