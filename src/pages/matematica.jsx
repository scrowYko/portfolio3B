import React from "react";
import { useNavigate } from "react-router-dom";

function matematica() {
    const irPara = useNavigate()
    const handleClick = () => {
        irPara('/');
      };
      return (
        <div>
          <h1>Matemática</h1>      
          <button onClick={handleClick}>Ir para Home</button>
        </div>
      );
    }
    export default matematica;