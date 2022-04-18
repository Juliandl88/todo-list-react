import React from "react";

function Titulo({ titulo, logo }) {
  return (
    <div>
      <div className="logo-contenedor">
        <h1 className="titulo">{titulo}</h1>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>
  );
}

export default Titulo;
