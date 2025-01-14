import "./styles/Principal.css";
import { Link } from "react-router-dom";

const Principal = () => {
  return (
    <section className="mainSection">
      {/* Primera Pantalla: Hero Section */}
      <article className="vh-100 position-relative overflow-hidden">
        <div className="h-100">
          <img
            src="https://res.cloudinary.com/dylansdev/image/upload/v1736892619/landing-1_ed96sh.jpg"
            alt="Foto del Lobby del hotel"
            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0 imgHeroSection"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center ps-3 mx-3 ps-lg-5 ms-lg-5 text-poppins">
            <p className="text-light fw-medium">Bienvenidos a</p>
            <h2 className="text-white display-4 mb-4 fw-bold">
              OASIS HOTEL <br /> Playa del Carmen
            </h2>
            <p className="color-arena col-md-8 col-lg-6 fw-medium">
              "Un rincón de paraíso, solo para tí."
            </p>
            <p className="text-light pe-4 col-md-8 col-lg-6">
              Escápate al corazón de Playa del Carmen y sumérgete en una
              experiencia única de lujo, confort y naturaleza.
            </p>
            <div>
              <Link
                className="btn btn-primary bg-arena border-0 py-2 mt-2 fw-bold"
                to={"/habitaciones"}
              >
                RESERVAR AHORA
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Principal;
