import ProjectCard from "../../components/ProjetCard/ProjectCard";
import Skills from "../../components/Skills/Skills";
import Form from "../../components/Form/Form";

function MainPage() {
  return (
    <>
      <section>
        <h1>Présentation</h1>
        <div className="presentation-text">
          <p>test de presentation</p>
        </div>
      </section>
      <section>
        <h1>Projet</h1>
        <ProjectCard />
      </section>
      <section>
        <h1>Compétence</h1>
        <article className="skills-container">
          <Skills progressLenght={90} color={"#FF5733"} icon={<i className="fab fa-html5" />} text={"90%"} />
          <Skills progressLenght={90} color={"#264de4"} icon={<i className="fab fa-css3-alt" />} text={"90%"} />
          <Skills progressLenght={90} color={"#F0DB4F"} icon={<i className="fab fa-js" />} text={"90%"} />
        </article>
      </section>
      <section>
        <h1>Contact</h1>
        <div>
          <Form />
        </div>
      </section>
    </>
  );
}

export default MainPage;
