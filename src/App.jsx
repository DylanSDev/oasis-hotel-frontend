import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/commons/Menu";
import Footer from "./components/commons/Footer";
import Principal from "./components/views/Principal";

function App() {
  return (
    <>
      <Menu></Menu>
      <Principal></Principal>
      <Footer></Footer>
    </>
  );
}

export default App;
