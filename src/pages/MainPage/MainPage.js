import ProjectCard from "../../components/ProjetCard/ProjectCard";
import Skills from "../../components/Skills/Skills";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import kasaImg from "../../images/LOGO_Kase.png";
import ohmyfood from "../../images/ohmyfood.png";
import ninna from "../../images/ninna_prev_ui.png";

function MainPage() {
  return (
    <>
      <section id="Presentation">
        <h1>Présentation</h1>
        <div className="presentation-text">
          <p>test de presentation</p>
        </div>
      </section>
      <section id="Projet">
        <h1 className="line">Projet</h1>
        <section className="project-cards-container">
          <ProjectCard
            src={kasaImg}
            alt={"Logo du site kasa"}
            title={"Kasa"}
            frontText={"Création d'un site web de location immobiliere à l'aide de javascript et react."}
            backText={["Utilisation de React", "Utilisation de JavaScript", "Utilisation de plusieurs composant"]}
            color={"#ff6060"}
            hrefGit={"https://github.com/geronimo3tr/Kasa"}
            hrefWeb={"https://geronimo3tr.github.io/Kasa/"}
            experiences={["HTML", "CSS", "JS", "React"]}
          />
          <ProjectCard
            src={ohmyfood}
            alt={"Logo du site Oh my food"}
            title={"OhMyFood"}
            frontText={"Création d'un site web comportant different restaurants et menus."}
            backText={["Utilisation de SASS", "Utilisation d'animation", "Site réaliser en mobile First"]}
            hrefGit={"https://github.com/geronimo3tr/OhMyFood"}
            hrefWeb={"https://geronimo3tr.github.io"}
            color={"#9356DC"}
            experiences={["HTML", "SASS"]}
          />
          <ProjectCard
            src={ninna}
            title={"Nina Carducci"}
            frontText={"Optimisation du site et du réferencement de Ninna Carducci à l'aide de lighthouse."}
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
        </article>
      </section>
      <section id="Contact">
        <h1>Contact</h1>
        <div>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MainPage;
