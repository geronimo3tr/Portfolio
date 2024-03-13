function Skills(props) {
  return (
    <>
      <div className="skill-bar ">
        <div className="progress-bar " style={{ width: props.progressLenght + "%" }}>
          <div className="progress-bar-color" style={{ backgroundColor: props.color + "" }}>
            {props.icon}
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
