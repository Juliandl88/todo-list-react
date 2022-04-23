import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const aregarTarea = (tarea) => {
    console.log("tarea agregada", tarea);
  };

  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea texto={tarea.texto} />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
