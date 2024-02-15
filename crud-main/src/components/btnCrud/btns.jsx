import React from "react";
import { useNavigate } from "react-router-dom";
import editar from "../../assets/icons/edit.png";
import excluir from "../../assets/icons/delete.png";
import { useState } from "react";
import BtnDeletar from "./btnDelete";

const Btns = ({ onEdit, onDelete }) => {
  const nav = useNavigate();

  const [btnExcluir, setBtnExcluir] = useState(false)

  const handleEditClick = () => {
    if (onEdit) {
      onEdit();
    } else {
      nav("/BtnEditar");
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete();
      setBtnExcluir(false)
    }
  };

  return (
    <>
      <div className="botoes">
        <button onClick={(handleEditClick)}>
          <img src={editar} alt="" />
        </button>
        <button onClick={handleDeleteClick}>
          <img src={excluir} alt="" />
        </button>
      </div>

      {btnExcluir && <BtnDeletar/>}
    </>
  );
};
export default Btns;