import React from "react";
import { useNavigate } from "react-router-dom";
import "../categorias/categoria.css";


//importando os icones
import iconlanche from "../../assets/icons/icons8-hambúrguer-48.png";
import iconoutros from "../../assets/icons/icons8-mais-64.png";
import iconsalgado from "../../assets/icons/icons8-pão-64.png";
import iconbebidas from "../../assets/icons/icons8-refrigerante-50.png";

const CategoriasLog = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="categoria-container">
        <h1>Categorias:</h1>
        <div className="categoria-itens">
          <button className="categoriaBtn"
          onClick={()=> nav("/lanche")}>
            <img src={iconlanche} alt="lanche" className="icon-categoria" />
            <h4>Lanches</h4>
          </button>
          <button className="categoriaBtn"
          onClick={()=> nav("/salgado")}>
            <img src={iconsalgado} alt="lanche" className="icon-categoria" />
            <h4>Salgados</h4>
          </button>
          <button className="categoriaBtn"
          onClick={()=> nav("/bebida")}>
            <img src={iconbebidas} alt="lanche" className="icon-categoria" />
            <h4>Bebidas</h4>
          </button>
          <button className="categoriaBtn"
          onClick={()=> nav("/outro")}>
            <img src={iconoutros} alt="lanche" className="icon-categoria" />
            <h4>Outros</h4>
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoriasLog;
