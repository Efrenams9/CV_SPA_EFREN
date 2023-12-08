//*dependencias

//*imprtaciones
import "./Educacion.css";

import iconoJavaScript from "../../images/iconoJavaScript2.png";
import iconopostgreSQL from "../../images/iconoPostgreSQL2.png";
import logoCSS from "../../images/logoCSS.png";
import logoHTML from "../../images/logoHTML.png";
import logoNodejs from "../../images/logoNodejs.png";
import logoREACT from "../../images/logoREACT.png";
import logoREDUX from "../../images/logoREDUX2.png";
import logoSEQUELIZE from "../../images/logoSEQUELIZE.png";
//importacion de soft skills:
import comunicativo from "../../images/comunicativo.jpg";
import creatividad from "../../images/creatividad.avif";
import reflexivo from "../../images/reflexivo.jpg";
import resilencia from "../../images/resilencia.jpg";
import sistematicotrans from "../../images/sistematicotrans.png";
import optimismo from '../../images/optimismo.png';
import paciencia1 from '../../images/paciencia1.avif';
import iemocional from '../../images/iemocional.jpg';
import organizado from '../../images/organizado.avif';
import autodidacta from '../../images/autodidacta.png';
// import  from '../../images/.jpg';

const Educacion = () => {
  return (
    <>
      <h2>Educacion</h2>
      <h2>HARD SKILLS</h2>
      <div className="styloEducacion">
        <div className="manejoImagenesLenguajes">
          <img src={logoHTML} alt="icono logoHTML"></img>
          <img src={logoCSS} alt="icono logoCSS"></img>
          <img src={iconoJavaScript} alt="icono JavaScript"></img>
          <img src={logoREACT} alt="icono logoREACT"></img>
          <img src={logoNodejs} alt="icono logoNodejs"></img>
          <img src={logoREDUX} alt="icono logoREDUX"></img>
          <img src={iconopostgreSQL} alt="logo PostgreSQL "></img>
          <img src={logoSEQUELIZE} alt="logo PostgreSQL "></img>
        </div>
      </div>
      <h2>SOFT SKILLS</h2>
      {/*abajo se ponen las imagenes de las cualidades, actitudes y soft skills*/}
      <div className="styloEducacion">
        <div className="manejoImagenesLenguajes">
          <img src={comunicativo} alt="icono comunicativo"></img>
          <img src={creatividad} alt="icono creatividad"></img>
          <img src={reflexivo} alt="icono reflexivo"></img>
          <img src={resilencia} alt="icono resilencia"></img>
          <img src={sistematicotrans} alt="icono sistematicotrans"></img>
          <img src={optimismo} alt="icono optimismo"></img>
          <img src={paciencia1} alt="icono paciencia"></img>
          <img src={iemocional} alt="icono iemocional"></img>
          <img src={organizado} alt="icono organizado"></img>
          <img src={autodidacta} alt="icono autodidacta"></img>
        </div>
      </div>
    </>
  );
};

export default Educacion;
