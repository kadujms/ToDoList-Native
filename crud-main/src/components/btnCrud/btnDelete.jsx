import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeLog from "../../pages/homeLog";
import axios from "axios";

const BtnDeletar = ({ onDeletar, onCancelar, categoria, id }) => {

  const nav = useNavigate()

  const handleDeletar = async (id) => {
    try {
      console.log("Iniciando a exclusão para o item com ID:", id);
      if (!id) {
        return;
      }

      // Substitua a URL abaixo pela sua rota de exclusão real
      const response = await axios.delete(`https://funny-handkerchief-newt.cyclic.app/deletar/${id}`);

      // Verifica o status da resposta
      if (response.status === 200) {
        onDeletar(id);
      } else {
      }
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  };

  const handleCancelar = () => {
    nav("/logado")
  };

  return (
    <>
      {/* <HomeLog /> */}
      <div className="popup">
        <div className="container-add">
          <h1>Tem certeza?</h1>
          <div className="btns">
            <button className="BtnCancelar" onClick={handleCancelar}>
              Cancelar
            </button>
            <button className="BtnDeletar" onClick={handleDeletar}>
              Deletar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnDeletar;