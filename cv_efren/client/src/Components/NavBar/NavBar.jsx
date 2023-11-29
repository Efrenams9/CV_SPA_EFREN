import {Link} from 'react-router-dom';

import  './NavBar.css';

const NavBar = () => {
  return (
    <div className="colorBarra">
      <h1> SOY EL NAVBAR</h1>
      <h2>Aqui van la lista de las opciones a pasearse xd</h2>
      <nav>
        <ul>
            <li><a href="#proyectos">PROYECTOS</a></li>
            <li><a href="#acerca-de-mi">ACERCA DE MI</a></li>
            <li><a href="#habilidades">HABILIDADES</a></li>
            <li><a href="#educacion">EDUCACIÓN</a></li>
        </ul>
    </nav>
    </div>
  );
};

export default NavBar;
