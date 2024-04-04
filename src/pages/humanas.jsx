import React from "react";
import { useNavigate } from "react-router-dom";

function humanas() {
    const irPara = useNavigate()
    const handleClick = () => {
        irPara('/');
      };
      return (
        <div>
          <h1 id="title">Ciências Humanas</h1>      
          <button onClick={handleClick} className="nav">Ir para Home</button>
        </div>
      );
    }
    export default humanas;