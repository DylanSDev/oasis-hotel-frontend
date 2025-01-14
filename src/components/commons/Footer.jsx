import logo from "../../../public/Isotipo-Oasis.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid px-0 pt-4">
      <section>
        <div className="text-center">
          <img src={logo} alt="logo oasis hotel" width={60} />
          <p className="mt-3 text-poppins fs-medium text-secondary">
            OASIS HOTEL
          </p>
        </div>

        <article className="container mt-4">
          <div className="row row-cols-2 row-cols-md-6 g-2 g-md-3 text-center">
            <div className="col">
              <Link className="text-decoration-none text-dark" to={"/contacto"}>
                Contacto
              </Link>
            </div>
            <div className="col">
              <Link className="text-decoration-none text-dark" to={"/galeria"}>
                Galería
              </Link>
            </div>
            <div className="col">
              <Link className="text-decoration-none text-dark" to={"/nosotros"}>
                Sobre Nosotros
              </Link>
            </div>
            <div className="col">
              <Link
                className="text-decoration-none text-dark"
                to={"/habitaciones"}
              >
                Habitaciones
              </Link>
            </div>
            <div className="col">
              <Link
                className="text-decoration-none text-dark"
                to={"/politicas"}
              >
                Políticas
              </Link>
            </div>
            <div className="col">
              <Link className="text-decoration-none text-dark" to={"/faqs"}>
                FAQs
              </Link>
            </div>
          </div>
        </article>

        <article className="d-flex justify-content-center mx-4 my-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <i className="bi bi-facebook fs-3 linkFooter"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <i className="bi bi-twitter-x fs-3 linkFooter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <i className="bi bi-instagram fs-3 linkFooter"></i>
          </a>
        </article>

        <p className="text-center text-nunito fw-light bg-arena text-light m-0 py-1 fs-6">
          DylanSDev©2024. Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
