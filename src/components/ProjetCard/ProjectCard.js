import kasa from "../../images/LOGO_Kase.png";

function ProjectCard() {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <div className="front-card">
              <div className="card-top">
                <h2 className="card-title">top title</h2>
                <div className="card-logo-container">
                  <img src={kasa} />
                </div>
              </div>
              <div className="card-bottom">
                <h2>title bottom</h2>
                <p>description</p>
                <p>sass</p>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="back-card">
              <div className="card-top">
                <h2 className="card-title">top title</h2>
                <div className="card-logo-container">
                  <img src={kasa} />
                </div>
              </div>
              <div className="card-bottom">
                <h2>title bottom</h2>
                <p>description</p>
                <p>sass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
