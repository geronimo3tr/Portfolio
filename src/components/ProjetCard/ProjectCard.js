import React, { useState } from "react";
import web from "../../images/web.png";

function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-top" style={{ backgroundColor: props.color + "" }}>
              <div className="card-logo" style={{ backgroundColor: props.color + "" }}>
                <img src={props.src} alt={props.alt} />
              </div>
            </div>
            <div className="card-content">
              <h2>{props.title}</h2>
              <p>{props.frontText}</p>
              <div className="experiences-cards">
                {props.experiences &&
                  props.experiences.map((experience, index) => (
                    <div className="experience" key={index}>
                      <p>{experience}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-top" style={{ backgroundColor: props.color + "" }}>
              <div className="card-logo" style={{ backgroundColor: props.color + "" }}>
                <img src={props.src} alt={props.alt} />
              </div>
            </div>
            <div className="card-content">
              <h2>{props.title}</h2>
              <div className="backText-container">
                {Array.isArray(props.backText) && props.backText.map((backText, index) => <p key={index}>{backText}</p>)}
              </div>
              <div className="icon-link">
                <a href={props.hrefGit} target="_blank" onClick={handleLinkClick}>
                  <i className="fab fa-brands fa-github"></i>
                </a>
                <a href={props.hrefWeb} target="_blank" onClick={handleLinkClick}>
                  <img src={web} alt="icone web"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
