import  React from 'react';
import "../hojas-de-estilo/TareaFormulario.css";


function TareaFormulario(props){
    return (
        <form className="Tarea-formulario">
            <input
            className="tarea-input"
            type="text"
            placeholder='Escribí una tarea'
            name="texto"
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    )
};

export default TareaFormulario;


