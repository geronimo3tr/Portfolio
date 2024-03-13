import ProjectCard from "../../components/ProjetCard/ProjectCard";
import Skills from "../../components/Skills/Skills";

function MainPage() {
  return (
    <>
      <section>
        <h1>Présentation</h1>
        <div className="presentation-text">
          <a>test de presentation</a>
        </div>
      </section>
      <section>
        <h1>Projet</h1>
        <ProjectCard />
      </section>
      <section>
        <h1>Compétence</h1>
        <article className="skills-container">
          <Skills />
        </article>
      </section>
    </>
  );
}

export default MainPage;
