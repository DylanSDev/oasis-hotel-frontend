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
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center ps-2 mx-3 ps-lg-5 ms-lg-5 text-poppins">
            <p className="text-light fw-medium">Bienvenidos a</p>
            <h2 className="text-white display-4 mb-4 fw-bold">
              OASIS HOTEL <br /> Playa del Carmen
            </h2>
            <p className="color-arena col-md-8 col-lg-6 fw-medium">
              "Un rincón de paraíso, solo para tí."
            </p>
            <p className="text-light pe-3 pe-md-0 col-11 col-md-8 col-lg-6">
              Escápate al corazón de Playa del Carmen y sumérgete en una
              experiencia única de lujo, confort y naturaleza.
            </p>
            <div>
              <Link
                className="btn btn-primary bg-arena border-0 py-2 px-4 mt-2 fw-medium rounded-5"
                to={"/habitaciones"}
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Segunda Pantalla: Un poco de nosotros*/}
      <article className="d-flex min-vh-100 container-fluid px-4 px-lg-5">
        <div className="row align-items-center  px-lg-2">
          <div className="col-12 col-md-6 px-4 px-lg-5 my-5 my-lg-0 text-poppins">
            <p className="color-arena fw-medium">---- Sobre Nosotros ----</p>
            <h2 className="mb-4 fw-bold">Bienvenidos a OASIS HOTEL</h2>
            <p className="text-justify">
              En Oasis Hotel, cada detalle ha sido diseñado para brindarte el
              descanso que mereces, rodeado de belleza tropical y un servicio
              excepcional. Ya sea que busques relajarte frente al mar, disfrutar
              de nuestras exclusivas habitaciones o explorar los rincones más
              hermosos de la Riviera Maya, tu estancia será inolvidable.
            </p>
            <p className="text-justify text-secondary">
              Inspirado en la rica historia y cultura de la Riviera Maya, Oasis
              Hotel nació con la idea de ofrecer un refugio de lujo donde se
              fusionan el esplendor de la selva tropical y la serenidad del mar
              Caribe.
            </p>
            <Link
              className="btn btn-primary bg-arena border-0 py-2 mt-2 fw-medium px-4 rounded-5"
              to={"/nosotros"}
            >
              Conocer Más
            </Link>
          </div>

          {/* Imagenes */}
          <div className="container-fluid  col-md-5 px-4 px-md-0 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-6 ps-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903173/s2-1_wbnjef.png"
                  alt="Recepcion hotel"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-6 pe-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903171/s2-3_oadksx.jpg"
                  alt="Campo de golf"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-6 mt-4 ps-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903171/s2-2_c1zym4.jpg"
                  alt="Playa del hotel"
                  className="img-fluid rounded-3"
                />
              </div>
              <div className="col-6 mt-4 pe-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903171/s2-4_iim6u2.jpg"
                  alt="Familia en la playa"
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Principal;
