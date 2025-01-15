import "./styles/Principal.css";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import {
  School,
  TreePalm,
  Utensils,
  LandPlot,
  PartyPopper,
  Dumbbell,
  Gem,
  HandPlatter,
  HeartHandshake,
  Laugh,
} from "lucide-react";
import { BsStarFill } from "react-icons/bs";

const Principal = () => {
  return (
    <section className="mainSection containerPrincipal">
      {/* Primera Pantalla: Hero Section */}
      <article className="vh-100 position-relative overflow-hidden">
        <div className="h-100">
          <img
            src="https://res.cloudinary.com/dylansdev/image/upload/v1736892619/landing-1_ed96sh.jpg"
            alt="Foto del Lobby del hotel"
            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0 imgHeroSection"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center ps-3 mx-3 ps-lg-5 ms-lg-5 text-poppins pb-5 pb-md-0">
            <p className="text-light fw-medium">Bienvenidos a</p>
            <h2 className="text-white display-4 mb-4 fw-bold">
              OASIS HOTEL <br /> Playa del Carmen
            </h2>
            <p className="color-arena col-md-8 col-lg-6 fw-medium">
              "Un rincón de paraíso, solo para tí."
            </p>
            <p className="text-light pe-3 pe-md-0 col-11 col-md-8 col-lg-6 mb-4 mb-md-3">
              Escápate al corazón de Playa del Carmen y sumérgete en una
              experiencia única de lujo, confort y naturaleza.
            </p>
            <div>
              <Link
                className="btn btn-primary bg-arena border-0 py-2 px-4 mt-2 fw-medium rounded-5 btnPrincipal"
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
            <h2 className="mb-4 fw-bold">
              Bienvenidos a <br className="d-block d-md-none" />{" "}
              <span className="color-arena">OASIS HOTEL</span>
            </h2>
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
              className="btn btn-primary bg-arena border-0 py-2 mt-2 fw-medium px-4 rounded-5 btnPrincipal"
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
                  className="img-fluid rounded-3 imgPrincipal"
                />
              </div>
              <div className="col-6 pe-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903171/s2-3_oadksx.jpg"
                  alt="Campo de golf"
                  className="img-fluid rounded-3 imgPrincipal"
                />
              </div>
              <div className="col-6 mt-4 ps-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903171/s2-2_c1zym4.jpg"
                  alt="Playa del hotel"
                  className="img-fluid rounded-3 imgPrincipal"
                />
              </div>
              <div className="col-6 mt-4 pe-0">
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736903171/s2-4_iim6u2.jpg"
                  alt="Familia en la playa"
                  className="img-fluid rounded-3 imgPrincipal"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Tercera Pantalla:  Servicios*/}
      <article className="d-flex min-vh-100 container-fluid px-4 px-lg-5 justify-content-center align-items-center mb-5 mb-md-0">
        <div className="d-flex flex-column align-items-center text-poppins">
          <div>
            <p className="text-center color-arena fw-medium">
              ---- Nuestros Servicios ----
            </p>
            <h2 className="text-center p-1">
              Explora nuestros{" "}
              <span className="color-arena p-1">beneficios</span>
            </h2>
          </div>
          <div className="container mt-2">
            <Row>
              <Col sm={12} md={4} className="mt-4 mt-md-0">
                <Card className="rounded-5 h-100 py-1 box tarjetaAnimada">
                  <Card.Body className="text-center">
                    <School size={50} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Habitaciones de lujo
                    </Card.Title>
                    <Card.Text>
                      Diseñadas para ofrecerte comodidad y elegancia.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className="mt-4 mt-md-0">
                <Card className="rounded-5 h-100 py-1 bg-arena border-0 tarjetaAnimada">
                  <Card.Body className="text-center">
                    <TreePalm
                      size={50}
                      className="color-arena my-3 text-light"
                    />
                    <Card.Title className="fs-6 fw-bold">
                      Divertimentos
                    </Card.Title>
                    <Card.Text className="text-light">
                      Vive la emoción de actividades llenas de diversión.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className="mt-4 mt-md-0">
                <Card className="rounded-5 h-100 py-1 tarjetaAnimada">
                  <Card.Body className="text-center">
                    <Utensils size={50} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Comida & Restaurantes
                    </Card.Title>
                    <Card.Text>
                      Lo mejor de la gastronomía local e internacional.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4} className="mt-4">
                <Card className="rounded-5 py-1 tarjetaAnimada h-100">
                  <Card.Body className="text-center">
                    <LandPlot size={50} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Campos de Golf
                    </Card.Title>
                    <Card.Text>
                      Los mejores campos de toda Riviera Maya.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className="mt-4">
                <Card className="rounded-5 py-1 bg-arena border-0 tarjetaAnimada h-100 ">
                  <Card.Body className="text-center">
                    <PartyPopper size={50} className="text-light my-3" />
                    <Card.Title className="fs-6 fw-bold">
                      Eventos & Fiestas
                    </Card.Title>
                    <Card.Text className="text-light ">
                      Celebra momentos inolvidables con nosotros.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={4} className="mt-4">
                <Card className="rounded-5  py-1 tarjetaAnimada  h-100">
                  <Card.Body className="text-center">
                    <Dumbbell size={50} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">Gym & Yoga</Card.Title>
                    <Card.Text>
                      Todo lo que necesitas para tu bienestar físico y mental.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </article>

      {/* Cuarta Pantalla: Trip Advisor */}
      <article className="d-flex min-vh-100 container-fluid px-4 px-lg-5 justify-content-center justify-content-md-between fondoTripAdvisor py-5 py-md-0">
        {/* Contenido */}
        <div className="d-flex min-vh-100 justify-content-center align-items-center container px-4 ps-lg-5 mx-2">
          <Row className="w-100 container justify-content-between px-0">
            <Col
              sm={12}
              md={5}
              className="text-light text-poppins d-flex flex-column justify-content-center px-0"
            >
              <a
                href="https://www.tripadvisor.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736969675/LogoTripAdvisor_pa4ctm.svg"
                  alt="Logo Tripadvisor"
                  className="my-4  tarjetaAnimada"
                  width={270}
                />
              </a>
              <h3 className="fs-4 fw-medium">
                Excelentes vistas y habitaciones
              </h3>
              <div className="fs-3 mb-3 estrellas">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="text-light">+4000 reviews de 5 estrellas</p>
              <div>
                <img
                  src="https://res.cloudinary.com/dylansdev/image/upload/v1736970159/trip-2_mki3oz.png"
                  alt="Usuarios trip advisor"
                  width={200}
                  className="mb-4  tarjetaAnimada"
                />
                <p className="text-light">Personas que nos recomiendan</p>
              </div>
            </Col>
            {/* Columna de cards */}
            <Col sm={12} md={7} className="row px-0">
              <h3 className="py-3 d-md-none text-light">Principales Reseñas</h3>
              <Col sm={12} md={6} className="mb-3 px-0 px-md-3">
                <Card className="rounded-4  py-1 tarjetaAnimada h-100 ">
                  <Card.Body>
                    <HandPlatter size={35} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Excelentes restaurantes.
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      Nuestros clientes señalaron que aman nuestros
                      restaurantes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} className=" mb-md-3 px-0 px-md-3">
                <Card className="rounded-4  py-1 tarjetaAnimada  h-100">
                  <Card.Body>
                    <HeartHandshake size={35} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Mejores SPA's.
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      Nuestros spa's son los más elegidos en toda Riviera Maya.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} className="mt-3 px-0 px-md-3">
                <Card className="rounded-4  py-1 tarjetaAnimada  h-100">
                  <Card.Body>
                    <Gem size={35} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Las mejores habitaciones.
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      Lujosas, cómodas y con una vista perfecta al mar.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} className="mt-3 px-0 px-md-3">
                <Card className="rounded-4  py-1 tarjetaAnimada  h-100">
                  <Card.Body>
                    <Laugh size={35} className="color-arena my-3" />
                    <Card.Title className="fw-bold fs-6">
                      Servicio increíble.
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      Atención unica y dedicada para cada visitante.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
        </div>
      </article>
    </section>
  );
};

export default Principal;
