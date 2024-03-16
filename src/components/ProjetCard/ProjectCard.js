import React, { useState } from "react";

function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
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
              <p>{props.backText}</p>
              <div className="icon-link-git">
                <a href={props.hrefGit}>
                  <i className="fab fa-brands fa-github"></i>
                </a>
                <a href={props.hrefWeb}>
                  <i class="fab fa-brands fa-github"></i>
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
