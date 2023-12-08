// import {Link} from 'react-router-dom';
//*importaciones
import "./NavBar.css";
import perfilAnimado from "../../images/perfilAnimado.jpg";
const NavBar = () => {
  return (
    <div className="colorBarra">
      <h2>FULL STACK DEVELOPER</h2>
      <h2>EFRÉN MARíN </h2>
      <div className="perfilAnimado" alt="perfil animado">
        <img src={perfilAnimado}></img>
      </div>
      <nav>
      
      <div className="buttonNav">
        
            <button href="#acerca-de-mi">ACERCA DE MI</button>
          
        
            <button href="#proyectos">PROYECTOS</button>
          
        
            <button href="#educacion">EDUCACIÓN</button>
          
        
            <button href="#habilidades">HABILIDADES</button>
          
        
            <button href="#curriculum">CURRICULUM</button>
          
        
            <button href="#contacto">CONTACTO</button>
      </div>
          


      </nav>
    </div>
  );
};

export default NavBar;
