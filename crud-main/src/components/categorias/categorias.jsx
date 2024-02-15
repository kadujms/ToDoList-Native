import React, { useState, useEffect } from "react";
import axios from "axios";
import "./categoria.css";
import "./card.css";

import iconlanche from "../../assets/icons/icons8-hambúrguer-48.png";
import iconoutros from "../../assets/icons/icons8-mais-64.png";
import iconsalgado from "../../assets/icons/icons8-pão-64.png";
import iconbebidas from "../../assets/icons/icons8-refrigerante-50.png";
export default function Categorias() {
  const [categoria, setCategoria] = useState(null);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    // Chame a API para buscar os itens da categoria quando a categoria for selecionada
    if (categoria) {
      axios
        .get(`https://funny-handkerchief-newt.cyclic.app/buscar/${categoria}`)
        .then((response) => {
          setItens(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar itens da API:", error);
        });
    }
  }, [categoria]);

  const handleClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <>
      <div className="categoria-container">
        <h1>Categorias:</h1>
        <div className="categoria-itens">
          <button
            className="categoriaBtn"
            onClick={() => handleClick("lanches")}
          >
            <img src={iconlanche} alt="lanche" className="icon-categoria" />
            <h4>Lanches</h4>
          </button>
          <button
            className="categoriaBtn"
            onClick={() => handleClick("salgados")}
          >
            <img src={iconsalgado} alt="lanche" className="icon-categoria" />
            <h4>Salgados</h4>
          </button>
          <button
            className="categoriaBtn"
            onClick={() => handleClick("bebidas")}
          >
            <img src={iconbebidas} alt="lanche" className="icon-categoria" />
            <h4>Bebidas</h4>
          </button>
          <button
            className="categoriaBtn"
            onClick={() => handleClick("outros")}
          >
            <img src={iconoutros} alt="lanche" className="icon-categoria" />
            <h4>Outros</h4>
          </button>
        </div>
      </div>

      {itens.length > 0 && (
        <div className="container-lanche">
          <h1>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
          {itens.map((item) => (
            <div className="card" key={item.id}>
              <div className="lanche-txt">
                <h3 id="nome">{item.nome}</h3>
                <h4 id="descricao">{item.descricao}</h4>
                <h3 id="preco">{`R$${item.preco}`}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
