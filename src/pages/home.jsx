import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function home() {
  const irPara = useNavigate();
  const handleClick = (route) => {
    irPara(route);
  };
  return (
    <div>
      <h1 id="title">Portfólio 3º ano do ensino médio</h1>
      <div className="navConteiner"> <div className="navLine">
        <button onClick={() => handleClick("/sobre")} className="nav">
          Ir para Sobre Mim
        </button>
        <button onClick={() => handleClick("/linguagens")} className="nav">
          Linguagens
        </button>
        <button onClick={() => handleClick("/matematica")} className="nav">
          Matemática
        </button>
      </div>
        <div className="navLine">
          <button onClick={() => handleClick("/humanas")} className="nav">
          Ciências Humanas
        </button>
        <button onClick={() => handleClick("/natureza")} className="nav">
          Ciências da Natureza
        </button>
        </div>
      </div>
    </div>
  );
}
export default home;
