import ListaDeTareas from "./componentes/ListaDeTareas";
import Titulo from "./componentes/Titulo";
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
          <h1 className="titulo-contenedor-tarea">Lista de tareas</h1>
            <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
