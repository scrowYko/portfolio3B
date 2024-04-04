import React from "react";
import { useNavigate } from "react-router-dom";

function natureza() {
    const irPara = useNavigate()
    const handleClick = () => {
        irPara('/');
      };
      return (
        <div>
          <h1>Natureza</h1>      
          <button onClick={handleClick}>Ir para Home</button>
        </div>
      );
    }
    export default natureza;