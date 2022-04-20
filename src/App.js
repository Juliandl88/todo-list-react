import TareaFormulario from "./componentes/TareaFormulario";
import Titulo from "./componentes/Titulo";
import Tarea from "./componentes/Tarea";
import logo from "./imagenes/logo.png";
import "./App.css";
import "./hojas-de-estilo/Tarea.css";
import React from 'react'


function App() {
  return (
    <div>
      <Titulo titulo="To-Do List " logo={logo} alt="logo" />
      <div className="aplicacion-tareas">
        <div className="tareas-lista-principal">
          <h1 className="titulo-contenedor-tarea">Mis tareas</h1>
          <TareaFormulario />
          <Tarea texto="Aprender React" />
        </div>
      </div>
    </div>
  );
}

export default App;
