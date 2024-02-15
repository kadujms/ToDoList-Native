import { Outlet } from "react-router";
import Home from "./pages/home";
import HomeLog from "./pages/homeLog";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/header";

function App() {
  return (
    <div className="app">
      <Outlet/>
    </div>
  );
}

export default App;
