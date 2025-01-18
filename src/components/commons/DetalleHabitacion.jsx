import React from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaTv, FaBed, FaUser, FaSun, FaWater } from "react-icons/fa";
import { BsStarFill, BsEggFried } from "react-icons/bs";
import "./styles/DetalleHabitacion.css";
import { Row, Col, Carousel } from "react-bootstrap";

export default function DetalleHabitacion() {
  return (
    <section className="room-detail mainSection">
      {/* Sección Hero */}
      <article className="hero-section-room-detail position-relative d-flex align-items-center justify-content-center text-center text-white py-5">
        <div className="overlay position-absolute w-100 h-100 top-0 start-0 title-room-detail"></div>
        <div className="position-relative text-poppins">
          <div className="mb-3">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="fs-5 text-warning mx-1">
                <BsStarFill className="me-2" />
              </span>
            ))}
          </div>
          <h1 className="mb-2 fs-2">Habitación</h1>
          <h2 className="display-4 fw-medium">Superior</h2>
        </div>
      </article>

      {/* Sección de contenido */}
      <article className="container py-5 px-4 px-md-0 text-center text-md-start text-poppins">
        <div className="row g-5 pt-md-3 ">
          <div className="col-lg-6">
            <p className="text-secondary fw-medium fs-5 mb-1">
              - Lo mejor de Riviera Maya -
            </p>
            <h2 className="display-5 mb-4 color-arena fw-medium">
              Habitación Superior
            </h2>
            <p className="mb-1 text-justify">
              Con vista frontal al mar, esta suite cuenta con terraza privada,
              sala de estar, piscina climatizada y acceso directo a la playa de
              color blanca.
            </p>
            <p className="mb-3 text-justify">
              Con vista frontal al mar, esta suite cuenta con terraza privada,
              sala de estar, piscina climatizada y acceso directo a la playa de
              color blanca.
            </p>
            <Row>
              <Col sm={12} md={6}>
                <Link
                  to="/reservar"
                  className="btn bg-arena  text-white py-2 w-100 mb-3"
                >
                  Reservar Ahora
                </Link>
              </Col>
              <Col sm={12} md={6}>
                <p className="py-2 w-100 text-center bg-secondary text-light rounded-2">
                  Tarifa: U$D 1.050
                </p>
              </Col>
            </Row>
          </div>
          <div className="col-lg-6 d-flex align-items-center mt-3">
            <div>
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737170232/Superior_dpdxpv.webp"
                alt="Habitación Superior"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>

        {/* Sección de aspectos destacados */}
        <div className="mt-5">
          <p className="text-secondary mb-4 fs-4 text-center">
            - Aspectos Destacados -
          </p>
          <div className="row g-4 text-center text-muted">
            <div className="col-6 col-md-2">
              <FaUser className="fs-3 mb-2" />
              <p>2 personas</p>
            </div>
            <div className="col-6 col-md-2">
              <FaBed className="fs-3 mb-2" />
              <p>Cama King</p>
            </div>
            <div className="col-6 col-md-2">
              <FaWifi className="fs-3 mb-2 " />
              <p>Wifi 1gb/s</p>
            </div>
            <div className="col-6 col-md-2">
              <FaSun className="fs-3 mb-2 " />
              <p>Solarium</p>
            </div>
            <div className="col-6 col-md-2">
              <FaTv className="fs-3 mb-2 " />
              <p>SmartTV</p>
            </div>
            <div className="col-6 col-md-2">
              <BsEggFried className="fs-3 mb-2 " />
              <p>Breakfast </p>
            </div>
          </div>
        </div>
      </article>

      {/* Sección de slider */}
      <article className="container p-0 mb-3">
        <Carousel indicators={false} className="text-nunito">
          <Carousel.Item>
            <img
              className="d-block w-100 img-slider-room-detail"
              src="https://res.cloudinary.com/dylansdev/image/upload/v1737038310/Slider-1_ubqqhg.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-slider-room-detail"
              src="https://images.pexels.com/photos/11434425/pexels-photo-11434425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-slider-room-detail"
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </article>
    </section>
  );
}
