import React from "react";
import { useNavigate } from "react-router-dom";

function home(){
    const irPara = useNavigate()
    const handleClick = (route) => {
        irPara(route);
      };
      return (
        <div>
          <h1>Portfólio 3º ano do ensino médio</h1>      
          <button onClick={() => handleClick('/sobre')}>Ir para Sobre Mim</button>
          <button onClick={() => handleClick('/linguagens')}>Linguagens</button>
        </div>
      );
    }
    export default home;
