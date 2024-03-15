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
            <div className="card-top">
              <div className="card-logo">
                <img src={props.src} />
              </div>
            </div>
            <div className="card-content">
              <h2>{props.title}</h2>
              <p>{props.frontText}</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-top">
              <div className="card-logo">
                <img src={props.src} />
              </div>
            </div>
            <div className="card-content">
              <h2>{props.title}</h2>
              <p>{props.backText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
