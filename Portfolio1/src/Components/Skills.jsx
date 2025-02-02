import React, { useEffect, useState } from "react";
import "../styles/Skills.css";

const skillsData = [
  { name: "JavaScript", logo: "/images/javascript.png", color: "rgba(255, 223, 0, 0.8)" },  
  { name: "React", logo: "/images/react.png", color: "rgba(173, 216, 230, 0.8)" },  
  { name: "CSS", logo: "/images/css.png", color: "rgba(0, 102, 204, 0.8)" },  
  { name: "Python", logo: "/images/python.png", color: "rgba(255, 140, 0, 0.8)" },  
  { name: "Git/GitHub", logo: "/images/git.png", color: "rgba(128, 0, 128, 0.8)" }  
];

function Skills() {
  const [visibleSkill, setVisibleSkill] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    if (hoveredSkill !== null) return; // Pause animation when hovered

    const interval = setInterval(() => {
      setVisibleSkill((prev) => (prev + 1) % skillsData.length);
    }, 1800); // Slightly faster transition

    return () => clearInterval(interval);
  }, [hoveredSkill]);

  return (
    <div className="skills" id="skills">
      <h2 className="skills-title">Coding Languages / Frameworks</h2>
      <div className="skill-list">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-item ${hoveredSkill === null ? (visibleSkill === index ? "visible" : "hidden") : (hoveredSkill === index ? "visible" : "hidden")}`}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="skill-logo" 
              style={{ "--glow-color": skill.color }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
