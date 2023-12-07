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
        <img src={logoGmail} alt="logo Gmail"></img>
        <img src={logoLinkedin} alt="logo Linkedin"></img>
        <img src={logoWhatssap} alt="logo Whatssap"></img>
        </div>
      </div>
    </>
  );
};

export default Contacto;
