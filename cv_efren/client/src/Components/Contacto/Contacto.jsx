//*importaciones
import "./Contacto.css";
//importacion de imagenes de contacto:
import logoGmail from "../../images/logoGmail.png";
import logoLinkedin from "../../images/logoLinkedin.png";
import logoWhatssap from "../../images/logoWhatssap.png";
// import logo from '../../images/logo.png';

const Contacto = () => {
  return (
    <>
      <div className="capa_uno">
        {/* <h2>AQUI VAN A IR LOS DATOS PARA CONTACTARME</h2> */}
        <div>
          <h3>GMAIL</h3>
        <img src={logoGmail} alt="logo Gmail"></img>
          <h3>LINKEDIN</h3>
        <img src={logoLinkedin} alt="logo Linkedin"></img>
          <h3># DE TELEFONO</h3>
        <img src={logoWhatssap} alt="logo Whatssap"></img>
        </div>
      </div>
      <div className="logoContactos">
        {/* <img src={} alt=""></img>
     <img src={} alt=""></img>
     <img src={} alt=""></img>
     <img src={} alt=""></img> */}
      </div>
    </>
  );
};

export default Contacto;
