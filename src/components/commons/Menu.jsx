import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../../public/Isotipo-Oasis.svg";
import { Link, NavLink } from "react-router-dom";

const menu = () => {
  return (
    <Navbar expand="lg" className="py-4 text-nunito">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={logo}
            alt="logo oasis hotel"
            className="img-fluid ms-4 ms-lg-0"
            width={30}
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="d-lg-none text-nunito">
          Oasis Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className="me-4" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-end">
          <Nav className="mx-lg-auto mt-3 mt-lg-0">
            <Nav.Link href="#home" className="ms-3  pe-4">
              Inicio
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3  pe-4">
              Habitaciones
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3  pe-4">
              Galería
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3  pe-4">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3 pe-4">
              Contacto
            </Nav.Link>
          </Nav>
          <Nav className="align-items-end">
            <Nav.Link
              href="#link"
              className="py-2 px-4 color-arena boton-Identificarse text-end text-center"
            >
              Identificarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default menu;
