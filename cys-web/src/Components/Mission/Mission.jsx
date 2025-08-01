import React from 'react';
import './Mission.css';

const Mission = () => {
  const items = [
    { title: "Blogs", desc: "Explore writeups, insights, and cybersecurity content." },
    { title: "Events", desc: "Attend workshops, CTFs, and tech talks." },
    { title: "Open Source", desc: "Contribute to community-driven security tools." },
    { title: "Innovation", desc: "Experiment, break, and build cool tech!" },
  ];

  return (
    <div className="mission-section">
      <h1 className="mission-title">Our Mission</h1>
      <h3 className="mission-subtitle">
        The CyberSecurity Community CYSCOM VITCC aims to provide the best experience
      </h3>
      <div className="mission-grid">
        {items.map((item, index) => (
          <div className="mission-card" key={index}>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
