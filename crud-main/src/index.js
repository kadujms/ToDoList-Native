import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//css
import "./index.css";

//importando os componentes
import Home from "./pages/home";
import HomeLog from "./pages/homeLog";
import Lanche from "./components/categoriasLog/card/lanche";
import App from "./App";
import Salgado from "./components/categoriasLog/card/salgado";
import Bebidas from "./components/categoriasLog/card/bebida";
import Outros from "./components/categoriasLog/card/outros";
import BtnEditar from "./components/btnCrud/btnEditar";
import BtnDeletar from "./components/btnCrud/btnDelete";

//criando rotas
const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logado",
        element: <HomeLog />,
      },
      {
        path: "/lanche",
        element: <Lanche />,
      },
      {
        path: "/salgado",
        element: <Salgado />,
      },
      {
        path: "/bebida",
        element: <Bebidas />,
      },
      {
        path: "/outro",
        element: <Outros />,
      },
      {
        path: "/BtnEditar",
        element: <BtnEditar/>
      },
      {
        path: "/BtnDeletar",
        element: <BtnDeletar/>
      }
      
    ],
  },
]);

//renderizando o router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
