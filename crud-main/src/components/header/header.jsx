//importando
import "./header.css";
import { useState } from "react";
import icone from "../../assets/icons/icon-user.png";
import Login from "./login/login";

export default function Header() {

  //func para fechar o login depois de realizado:
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setShowLogin(false);
    setLoggedIn(true);
  };

  

  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <h1>Cantina Senai</h1>
          <button
            onClick={() => setShowLogin(true)}
            className={`header-btn ${loggedIn ? ".header-btn-off" : ""}`}
          >
            <img src={icone} alt="icon" id="icon-user" />
          </button>
        </div>
        <div className="pesquisa">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input type="text" placeholder="O que procura?" id="pesquisa" disabled/>
        </div>
      </div>
      {/* Chamando o componente login e setando o trigger */}
      <Login
        trigger={showLogin}
        setTrigger={setShowLogin}
      />
    </>
  );
}
