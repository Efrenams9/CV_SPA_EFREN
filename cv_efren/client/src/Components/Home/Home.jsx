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
      <AboutMe></AboutMe>
      <Proyectos></Proyectos>
      <Educacion></Educacion>
      <Curriculum></Curriculum>
      <Contacto></Contacto>
    </div>
  );
};

export default Home;
