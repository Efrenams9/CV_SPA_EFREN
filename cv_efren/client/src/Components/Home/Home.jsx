//*dependencias

//*importanciones
import Contacto from "../Contacto/Contacto";
import AboutMe from "../AboutMe/AbourMe";
import Educacion from "../Educacion/Educacion";
import Proyectos from "../Proyectos/Proyectos";
import Curriculum from "../Curriculum/Curriculum";

const Home = () => {
  return (
    <div>
      <h1>AQUI VA TODO EL HOME</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
        sit saepe, magni, corrupti facilis quod, at minus amet laborum tempore
        accusamus eius modi illum ab atque excepturi quidem totam! Vitae debitis
        id obcaecati quis earum neque. Aliquid voluptatem deserunt earum officia
        pariatur quas, aperiam corrupti veritatis, placeat sint consectetur
        sequi excepturi optio, illo totam iure minus et. 
      </p>
      <AboutMe></AboutMe>
      <Proyectos></Proyectos>
      <Educacion></Educacion>
      <Curriculum></Curriculum>
      <Contacto></Contacto>
    </div>
  );
};

export default Home;
