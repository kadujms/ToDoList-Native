import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://funny-handkerchief-newt.cyclic.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
              "https://funny-handkerchief-newt.cyclic.app", // Adicione este cabeçalho
          },
          body: JSON.stringify({ usuario: username, senha: password }),
        }
      );

      if (response.ok) {
        // Se o login for bem-sucedido  
        setUsername("");
        setPassword("");
        setTimeout(() => props.setTrigger(false), 1000);
        nav("/logado");
      } else {
        // Se o login falhar
        toast.error("Dados Incorretos!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error(
        "Erro ao fazer login. Consulte o console para obter mais informações."
      );
    }
  };

  const handleClick = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const nav = useNavigate();

  const onLoginSuccess = () => {};

  return props.trigger ? (
    <div className="popup">
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />

      <div className="container-login">
        <div className="login-top">
          <h1>Login</h1>
          <button
            onClick={() => props.setTrigger(false)}
            className="login-sair"
          >
            ✕
          </button>
        </div>
        <div className="form">
          <div className="usuario">
            <h3>Usuário: </h3>
            <input
              type="text"
              value={username}
              onKeyPress={handleClick}
              onChange={(e) => setUsername(e.target.value)}
              id="input-usuario"
            />
          </div>
          <div className="usuario">
            <h3>Senha:</h3>
            <input
              type="password"
              value={password}
              onKeyPress={handleClick}
              onChange={(e) => setPassword(e.target.value)}
              id="input-senha"
            />
          </div>
        </div>
        <button className="botao" onClick={handleLogin}>
          Entrar
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
};

export default Login;
