// import {Link} from 'react-router-dom';
//*importaciones
import "./NavBar.css";
import perfilAnimado from "../../images/perfilAnimado.jpg";
const NavBar = () => {
  return (
    <div className="colorBarra">
      <h2>EFRÉN MARíN </h2>
      <div className="perfilAnimado" alt="perfil animado">
        <img src={perfilAnimado}></img>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#acerca-de-mi">ACERCA DE MI</a>
          </li>
          <li>
            <a href="#proyectos">PROYECTOS</a>
          </li>
          <li>
            <a href="#educacion">EDUCACIÓN</a>
          </li>
          <li>
            <a href="#habilidades">HABILIDADES</a>
          </li>
          <li>
            <a href="#curriculum">CURRICULUM</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
