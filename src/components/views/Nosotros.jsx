import "./styles/Nosotros.css";
import Carousel from "react-bootstrap/Carousel";
import LogoOasis from "../commons/LogoOasis.jsx";
import {
  BsStarFill,
  BsBullseye,
  BsRocketTakeoff,
  BsTrophy,
} from "react-icons/bs";
import NosotrosHistoria from "../extras/NosotrosHistoria.jsx";
import { Container, Row, Col, Card } from "react-bootstrap";

const Nosotros = () => {
  return (
    <section className="mainSection containerNosotros">
      {/* Primera Pantalla */}
      <article>
        <Carousel indicators={false} className="text-nunito">
          <Carousel.Item>
            <img
              className="d-block w-100 imgSliderNosotros"
              src="https://res.cloudinary.com/dylansdev/image/upload/v1737038310/Slider-1_ubqqhg.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center">
                <LogoOasis width={85} height={85} fill="white" />
              </div>
              <h2 className="text-poppins mt-4 mb-0 fs-1">OASIS HOTEL</h2>
              <div className="color-arena fs-5 ">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="fs-5 fw-light mt-3">
                Un rincón de paraiso solo para tí.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSliderNosotros"
              src="https://images.pexels.com/photos/11434425/pexels-photo-11434425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center">
                <LogoOasis width={85} height={85} fill="white" />
              </div>
              <h2 className="text-poppins mt-4 mb-0 fs-1">OASIS HOTEL</h2>
              <div className="color-arena fs-5 ">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="fs-5 fw-light mt-3">
                Un rincón de paraiso solo para tí.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSliderNosotros"
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="text-center">
                <LogoOasis width={85} height={85} fill="white" />
              </div>
              <h2 className="text-poppins mt-4 mb-0 fs-1">OASIS HOTEL</h2>
              <div className="color-arena fs-5 ">
                <BsStarFill className="me-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="mx-2" />
                <BsStarFill className="ms-2" />
              </div>
              <p className="fs-5 fw-light mt-3">
                Un rincón de paraiso solo para tí.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </article>

      {/* Segunda Pantalla */}
      <article className="container min-vh-86  d-flex align-items-center">
        <NosotrosHistoria></NosotrosHistoria>
      </article>

      {/* Tercera Pantalla */}
      <article className="container min-vh-86  d-flex flex-column text-poppins">
        <p className="p-0 ps-3 my-1 text-muted">-Lo que nos hace únicos-</p>
        <h2 className="p-0 ps-3 mb-4">
          Nuestra <span className="color-arena">Filosofia</span>
        </h2>
        <Container>
          <Row>
            <Col md={6} className="px-md-3 mb-4">
              <Card className="rounded-4  py-1 tarjetasNuestraFilosofia  h-100 text-center rounded-5">
                <Card.Body>
                  <BsBullseye size={35} className="color-arena my-3" />
                  <Card.Title className="fw-bold fs-4">Misión</Card.Title>
                  <Card.Text className="text-secondary px-5 mx-3">
                    Brindar una experiencia única y personalizada a cada
                    huésped.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="px-md-3 mb-4">
              <Card className="rounded-4  py-1 tarjetasNuestraFilosofia   h-100 text-center rounded-5">
                <Card.Body>
                  <BsRocketTakeoff size={35} className="color-arena my-3" />
                  <Card.Title className="fw-bold fs-4">Visión</Card.Title>
                  <Card.Text className="text-secondary px-5 mx-3">
                    Ser el hotel de lujo más exclusivo y reconocido de la
                    Riviera Maya.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className="px-md-3">
              <Card className="rounded-4  py-1 tarjetasNuestraFilosofia   h-100 text-center rounded-5">
                <Card.Body>
                  <BsTrophy size={35} className="color-arena my-3 estrellas" />
                  <Card.Title className="fw-bold fs-4">Valores</Card.Title>
                  <Card.Text className="text-secondary px-l-5 mx-5 py-md-0 py-2">
                    Hospitalidad, Excelencia, Sostenibilidad, Privacidad,
                    Exclusividad, Calidez
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Nosotros;
