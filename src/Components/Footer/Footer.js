import React from 'react'
import './Footer.css'
import GithubImg from './github.png'
import LeetCodeImg from './leetcode.png'
import LinkedInImg from './linkedin.png'
import InstaImg from './instagram.jpeg'
import XImg from './X.jpeg'
import THMImg from './THM.webp'


function Footer() {
  return (
    <footer className='footerMain'>

            <div class="footer-header">
                <div >
                    Balaji Rock's Portfolio
                </div>
                <div>
                    &#169; CopyRights 2024
                </div>
                <div>
                    All rights Reserved
                </div>
            </div>
            <div class="footer-contents">
                <ul>
                    <li><strong>Dev Profiles</strong> </li>
                    <li> <img src={GithubImg} alt="" /><a href="https://github.com/BalajiRock" rel="noreferrer" target="_blank">GitHub</a> </li>
                    <li> <img src={LeetCodeImg} alt="" /><a href="https://leetcode.com/BalajiRock/" rel="noreferrer" target="_blank">LeetCode</a> </li>
                    <li> <img src={THMImg} alt="" /><a href="https://tryhackme.com/p/BalajiRock" rel="noreferrer" target="_blank">Try Hack Me</a> </li>

                </ul>
            </div>
            <div class="footer-contents">

                <ul>
                <li><strong>Social Links</strong></li>
                <li> <img src={LinkedInImg} alt="" /><a href="https://www.linkedin.com/in/balaji-m-26ab76242/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                <li> <img src={InstaImg} alt="" /><a href="https://www.instagram.com/_balaji_m_/" rel="noreferrer" target="_blank">Instagram</a></li>
                <li> <img src={XImg} alt="" /><a href="https://twitter.com/BalajiRock5566" rel="noreferrer" target="_blank">X (Twitter) </a></li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer

