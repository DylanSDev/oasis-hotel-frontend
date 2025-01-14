import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/commons/Menu";
import Footer from "./components/commons/Footer";
import Principal from "./components/views/Principal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/views/Error404";
import Contacto from "./components/views/Contacto";
import Habitaciones from "./components/views/Habitaciones";
import Galeria from "./components/views/Galeria";
import Nosotros from "./components/views/Nosotros";
import Identificarse from "./components/views/Identificarse";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Principal />}></Route>
        <Route exact path="/habitaciones" element={<Habitaciones />}></Route>
        <Route exact path="/galeria" element={<Galeria />}></Route>
        <Route exact path="/nosotros" element={<Nosotros />}></Route>
        <Route exact path="/contacto" element={<Contacto />}></Route>
        <Route exact path="/identificarse" element={<Identificarse />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
