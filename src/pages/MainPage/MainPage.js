import ProjectCard from "../../components/ProjetCard/ProjectCard";
import Skills from "../../components/Skills/Skills";
import Form from "../../components/Form/Form";
import kasaImg from "../../images/LOGO_Kase.png";
import ohmyfood from "../../images/ohmyfood.png";
import ninna from "../../images/ninna_prev_ui.png";

function MainPage() {
  return (
    <>
      <section className="presentation-container" id="Presentation">
        <h1>Présentation</h1>
        <div className="presentation-text">
          <p>
            Passioné d'informatique et de programmation, j'ai suivi un BTS SNIR, et une formation Intégrateur Web sur OpenClassrooms. Je
            vous laisse parcourir ce site démontrant certains projets réalisés ainsi que mon CV, n'hésitez pas à me contacter.
          </p>
        </div>
      </section>
      <section id="Projet">
        <h1 className="line">Projet</h1>
        <section className="project-cards-container">
          <ProjectCard
            src={kasaImg}
            alt={"Logo du site kasa"}
            title={"Kasa"}
            frontText={"Création d'un site web de location immobilière à l'aide de Javascript et react."}
            backText={["Utilisation de React", "Utilisation de JavaScript", "Utilisation de plusieurs composants"]}
            color={"#ff6060"}
            hrefGit={"https://github.com/geronimo3tr/Kasa"}
            hrefWeb={"https://geronimo3tr.github.io/Kasa/"}
            experiences={["HTML", "CSS", "JS", "React"]}
          />
          <ProjectCard
            src={ohmyfood}
            alt={"Logo du site Oh my food"}
            title={"OhMyFood"}
            frontText={"Création d'un site web comportant différents restaurants et menus."}
            backText={["Utilisation de SASS", "Utilisation d'animation", "Site réaliser en mobile First"]}
            hrefGit={"https://github.com/geronimo3tr/OhMyFood"}
            hrefWeb={"https://geronimo3tr.github.io"}
            color={"#9356DC"}
            experiences={["HTML", "SASS"]}
          />
          <ProjectCard
            src={ninna}
            title={"Nina Carducci"}
            frontText={"Optimisation du site et du référencement de Ninna Carducci à l'aide de lighthouse."}
            backText={["Optimisation du référencement du site", "Optimisation du code du site", "Création d'un Rich Snippet"]}
            hrefGit={"https://github.com/geronimo3tr/Nina_Carducci"}
            hrefWeb={"https://geronimo3tr.github.io/Nina_Carducci/"}
            color={"#1c6474"}
            experiences={["HTML", "SASS", "React"]}
          />
        </section>
      </section>
      <section id="Competence">
        <h1>Compétence</h1>
        <article className="skills-container">
          <Skills progressLenght={90} color={"#FF5733"} icon={<i className="fab fa-html5" />} text={"90%"} />
          <Skills progressLenght={80} color={"#264de4"} icon={<i className="fab fa-css3-alt" />} text={"80%"} />
          <Skills progressLenght={70} color={"#F0DB4F"} icon={<i className="fab fa-js" />} text={"70%"} />
          <Skills progressLenght={75} color={"#61DBFB"} icon={<i className=" fab fa-brands fa-react"></i>} text={"75%"} />
        </article>
      </section>
      <section id="Contact">
        <h1>Contact</h1>
        <div>
          <Form />
        </div>
      </section>
    </>
  );
}

export default MainPage;
