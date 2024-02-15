import "../header/header.css";
import icone from "../../assets/icons/leave.png";
import { useNavigate} from "react-router-dom";


const HeaderLog = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <h1>Cantina Senai</h1>
          {/* botao de sair da parte logada e voltar para o usuario */}
          <button onClick={() => nav("/")} className="header-btn">
            <img src={icone} alt="icon" id="icon-user" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderLog;
