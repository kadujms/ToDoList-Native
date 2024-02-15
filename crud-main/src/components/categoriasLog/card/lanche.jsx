import React, { useState, useEffect } from "react";
import axios from "axios";
import editar from "../../../assets/icons/edit.png";
import excluir from "../../../assets/icons/delete.png";
import CategoriasLog from "../categoriasLog";
import HeaderLog from "../../headerLog/headerLog";
import BtnAdicionar from "../../btnAdicionar/btnAdicionar";
import Btns from "../../btnCrud/btns";
import BtnDeletar from "../../btnCrud/btnDelete";
import BtnEditar from "../../btnCrud/btnEditar";

const Lanches = () => {
  const [lanches, setLanches] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios
      .get("https://funny-handkerchief-newt.cyclic.app/buscar/lanches")
      .then((response) => {
        setLanches(response.data);
      })
      .catch((error) => {
        console.error(
          'Erro ao buscar itens da categoria "bebidas" da API:',
          error
        );
      });
  }, []);

  const handleEdit = (id) => {
    setSelectedId(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://funny-handkerchief-newt.cyclic.app/deletar/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setLanches((prevLanches) =>
            prevLanches.filter((item) => item.id !== id)
          );
          setSelectedId(null);
        } else {
          console.error("Erro ao deletar o item. Revise as informações.");
        }
      })
      .catch((error) => {
        console.error("Erro ao deletar o item:", error);
      });
  };

  const getSelectedProduct = () => {
    return lanches.find((item) => item.id === selectedId);
  };

  return (
    <>
      <HeaderLog />
      <BtnAdicionar />
      <CategoriasLog />
      <div className="container-lanche">
        <h1>Lanches</h1>
        {lanches.map((item) => (
          <div key={item.id} className="card">
            <div className="lanche-txt">
              <h3 id="nome">{item.nome}</h3>
              <h4 id="descricao">{item.descricao}</h4>
              <h3 id="preco">{`R$${item.preco}`}</h3>
            </div>
            <Btns
              onEdit={() => handleEdit(item.id)}
              onDelete={() => handleDelete(item.id)}
            />
          </div>
        ))}
      </div>
      {selectedId && (
        <BtnDeletar
          onDeletar={() => {
            console.log("Deletar clicado");
            // Handle deletion completion if needed
          }}
          onCancelar={() => {
            console.log("Cancelar clicado");
            setSelectedId(null);
          }}
          categoria="lanches"
          id={selectedId}
        />
      )}
      {selectedId && (
        <BtnEditar
          idProduto={selectedId}
          produto={getSelectedProduct()} // Pass the selected product data
        />
      )}
    </>
  );
};

export default Lanches;
