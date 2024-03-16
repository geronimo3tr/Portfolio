import ProjectCard from "../../components/ProjetCard/ProjectCard";
import Skills from "../../components/Skills/Skills";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import kasaImg from "../../images/LOGO_Kase.png";

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
        <h1 className="line">Projet</h1>
        <section className="project-cards-container">
          <ProjectCard
            src={kasaImg}
            title={"kasa"}
            frontText={"This is the front of the card."}
            backText={"This is the back of the card."}
          />
          <ProjectCard
            src={kasaImg}
            title={"kasa"}
            frontText={"This is the front of the card."}
            backText={"This is the back of the card."}
          />
          <ProjectCard
            src={kasaImg}
            title={"kasa"}
            frontText={"This is the front of the card."}
            backText={"This is the back of the card."}
          />
        </section>
      </section>
      <section>
        <h1>Compétence</h1>
        <article className="skills-container">
          <Skills progressLenght={90} color={"#FF5733"} icon={<i className="fab fa-html5" />} text={"90%"} />
          <Skills progressLenght={80} color={"#264de4"} icon={<i className="fab fa-css3-alt" />} text={"80%"} />
          <Skills progressLenght={70} color={"#F0DB4F"} icon={<i className="fab fa-js" />} text={"70%"} />
        </article>
      </section>
      <section>
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
