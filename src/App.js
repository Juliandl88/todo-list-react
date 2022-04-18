import Titulo from "./componentes/Titulo";
import "./App.css";
import logo from "./imagenes/logo.png";

function App() {
  return (
    <div className="aplicacion-tareas">
      < Titulo 
        titulo="To-Do List "
        logo={logo}
        alt="logo"
      />
    </div>
    
  );
}

export default App;
