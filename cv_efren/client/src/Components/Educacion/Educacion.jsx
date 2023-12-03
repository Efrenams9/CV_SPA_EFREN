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

const Educacion = () => {
  return (
    <>
      <h2>Educacion</h2>
      <div className="styloEducacion">
        <div className="manejoImagenes">
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
    </>
  );
};

export default Educacion;
