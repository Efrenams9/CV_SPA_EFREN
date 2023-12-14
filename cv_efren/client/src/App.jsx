//*dependencias:
// import {Routes,Router,Switch,Route} from 'react-router-dom';

//*componentes
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div>
      <div className="contenedorGeneral">
        <div className="ladoIzquierdo">
          <NavBar></NavBar>
        </div>
        <div className="ladoDerecho">
          <Home></Home>
        </div>
      </div>
    </div>
  );
}

export default App;
