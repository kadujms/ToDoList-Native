import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../btnAdicionar/btnAdicionar.css";
import HomeLog from "../../pages/homeLog";

const BtnEditar = ({ idProduto }) => {
  const nav = useNavigate();

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  async function handleSalvar() {
    if (nome === "" || valor === "" || descricao === "") {
      toast.warning("Preencha todos os campos!");
    } else {
      try {
        const response = await fetch(`https://funny-handkerchief-newt.cyclic.app/atualizar/${idProduto}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://funny-handkerchief-newt.cyclic.app', // Adicione este cabeçalho
          },
          body: JSON.stringify({
            nome,
            preco: valor,
            descricao,
            categoria,
          }),
        });

        if (response.ok) {
          
        } else {
        }
      } catch (error) {
        console.error("Erro ao salvar o item:", error);
      }
    }
    nav("/logado")
  }


  return (
    <>
      <HomeLog />
      <div className="popup">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <div className="container-add">
          <div className="top">
            <h1>Editar Item</h1>
            <button onClick={() => nav("/logado")} className="add-sair">
              {" "}
              ✕
            </button>
          </div>
          <div className="add-form">
            <div className="form-item">
              <h3>Nome do Item:</h3>
              <input
                type="text"
                placeholder="Ex: X-Tudo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-item">
              <h3>Valor:</h3>
              <input
                type="text"
                placeholder="R$"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
            <div className="form-item">
              <h3>Descrição:</h3>
              <input
                type="text"
                className="descricao"
                placeholder="Ex: Pão, Hamburguer, etc."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div className="form-item">
              <h3>Categoria: </h3>
              <select
                name={categoria}
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="categoria"
              >
                <option value="null">Escolha uma Opção: </option>
                <option value="lanches">Lanches</option>
                <option value="salgados">Salgados</option>
                <option value="bebidas">Bebidas</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>
          <div className="botoes-add">
            <button onClick={() => handleSalvar()}>Salvar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnEditar;