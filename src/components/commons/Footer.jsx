import logo from "../../../public/Isotipo-Oasis.svg";

const Footer = () => {
  return (
    <footer className="container-fluid px-0 pt-4">
      <section>
        <div className="text-center">
          <img src={logo} alt="logo oasis hotel" width={60} />
          <p className="mt-3 text-poppins fs-medium">OASIS HOTEL</p>
        </div>

        <article className="d-flex justify-content-evenly mx-4 my-3">
          <p>Contacto</p>
          <p>Nosotros</p>
          <p>Galeria</p>
          <p>Habitaciones</p>
          <p>Politicas</p>
          <p>FAQs</p>
        </article>

        <article className="d-flex justify-content-center mx-4 my-3">
          <div className="mx-4">
            <i className="bi bi-facebook fs-3"></i>
          </div>
          <div className="mx-4">
            <i className="bi bi-twitter-x fs-3"></i>
          </div>
          <div className="mx-4">
            <i className="bi bi-instagram fs-3"></i>
          </div>
        </article>

        <p className="text-center text-nunito fw-light bg-arena text-light m-0 py-1 fs-6">
          Dylan©Dev©2024. Un proyecto para Rolling Code School. Todos los
          derechos reservados
        </p>
      </section>
    </footer>
  );
};

export default Footer;
