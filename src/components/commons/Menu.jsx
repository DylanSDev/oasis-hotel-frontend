import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../../public/Isotipo-Oasis.svg";
import { Link, NavLink } from "react-router-dom";

const menu = () => {
  return (
    <Navbar expand="lg" className="py-4 text-nunito sticky-top bg-body">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {" "}
          <img
            src={logo}
            alt="logo oasis hotel"
            className="img-fluid ms-4 ms-lg-0"
            width={30}
          />
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-lg-none text-poppins fs-medium text-secondary ps-3 ps-md-4"
        >
          OASIS HOTEL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className="me-4" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-end">
          <Nav className="mx-lg-auto mt-3 mt-lg-0">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active ms-4  me-4" : "nav-link ms-4  me-4"
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active ms-4  me-4" : "nav-link ms-4  me-4"
              }
              to="/habitaciones"
            >
              Habitaciones
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active ms-4  me-4" : "nav-link ms-4  me-4"
              }
              to="/galeria"
            >
              Galeria
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active ms-4  me-4" : "nav-link ms-4  me-4"
              }
              to="/nosotros"
            >
              Nosotros
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active ms-4  me-4" : "nav-link ms-4  me-4"
              }
              to="/contacto"
            >
              Contacto
            </NavLink>
          </Nav>
          <Nav className="align-items-end">
            <NavLink
              end
              className="py-2 px-4 color-arena boton-Identificarse text-end text-center text-decoration-none m-3 m-lg-0"
              to="/identificarse"
            >
              Identificarse
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default menu;
