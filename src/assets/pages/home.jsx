import React from "react";
import { useNavigate } from "react-router-dom";

function home(){
    const irPara = useNavigate()
    const handleClick = () => {
        irPara('/sobre');
      };
      return (
        <div>
          <h1>Portfólio 3º ano do ensino médio</h1>      
          <button onClick={handleClick}>Ir para Sobre Mim</button>
        </div>
      );
    }
    export default home;