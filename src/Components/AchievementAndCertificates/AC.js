import React from 'react';
import './AC.css';

function AC() {
  const achievements = [
    {
      description: "Solved 400+ questions in ",
      link: "https://leetcode.com/u/BalajiRock/",
      linkText: "leetcode",
      extra: " with 6 badges."
    },
    {
      description: "Top 7% in ",
      link: "https://tryhackme.com/p/BalajiRock",
      linkText: "Try Hack Me",
      extra: " with 8 badges."
    },
    {
      description: "Password cracking virtual ",
      link: "https://drive.google.com/file/d/1hsggU8itN_mqqjidcFsHGieoSswFcpQG/view?usp=sharing",
      linkText: "internship",
      extra: " (Goldman Sachs)"
    },
    {
      description: "Top 10 in Kalpana 2024 (Hack for Humanity)"
    },
    {
      description: "Top 20 in Hashcode 12.0 among 160+ teams"
    },
    {
      description: "Nexus Elites CTF - Ranked 69th in All India ",
      link: "https://drive.google.com/file/d/1SFUEh4d8LR57rtDaDllDBgVJ1uDxQN3f/view?usp=sharing",
      linkText: "Certification"
    },
    {
      description: "Kaggle ",
      link: "https://drive.google.com/file/d/1FZTLaHVs6M4Ns6gY8jVDnS7IuZ1dMzgj/view?usp=sharing",
      linkText: "Certificate",
      extra: " on Pandas"
    },
    {
      description: "Kaggle ",
      link: "https://drive.google.com/file/d/1JkmKojgoegU8gHBvyqbu2J2Aq3-cf792/view?usp=sharing",
      linkText: "Certificate",
      extra: " on Introduction to Machine Learning"
    },
    {
      description: "Java udemy course completion ",
      link: "https://drive.google.com/file/d/1kdq6YuD68ygCXRxJe12l1NddN72jmKpC/view?usp=sharing",
      linkText: "Certificate"
    },
    {
      description: "Kaggle ",
      link: "https://drive.google.com/file/d/1dw-KSvIPDNQovODXY0a1bqg4LwMFsYk8/view?usp=sharing",
      linkText: "Certificate",
      extra: " on Python"
    },
    {
      description: "Certificate of participation in Digital Forensics-workshop and CTF by PESU ISFCR",
      link: "https://drive.google.com/file/d/16LDtjwZ5iqH6SmJSPeEZJcCXY3KjG6zS/view?usp=sharing",
      linkText: "Certificate"
    },
    {
      description: "Certificate of participation in CTF by PESU ISFCR",
      link: "https://drive.google.com/file/d/1WreBuKhoc7VOaf_T_lUy6TyYXdwyllUE/view?usp=sharing",
      linkText: "Certificate"
    },
    {
      description: "Certificate of participation in hack for humanity by Kalpana 2023 PESU",
      link: "https://drive.google.com/file/d/1wXxPn0zpihZnDE2NQu4zgBkxWxnIg-LS/view?usp=sharing",
      linkText: "Certificate"
    },
    {
      description: "Kaggle ",
      link: "https://drive.google.com/file/d/1qGFSuTUXw2BhFNEp4SMXQIWGin48TNPX/view?usp=sharing",
      linkText: "Certificate",
      extra: " on Intro to Programming"
    },
    {
      description: "Certificate of participation in Graph theory and its Application workshop by MCC.",
      link: "/",
      linkText: "Certificate"
    }
  ];

  return (
    <div className="AC-layout">
      <h1>Achievement and Certificates</h1>
      <div className="outerAC">
        {achievements.map((item, index) => (
          <div className="ACcards" key={index}>
            • {item.description}
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.linkText}
              </a>
            )}
            {item.extra}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AC;
