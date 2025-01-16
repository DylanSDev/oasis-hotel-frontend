import { Container, Row, Col } from "react-bootstrap";
import "./styles/Galeria.css";

const Galeria = () => {
  return (
    <section className="mainSection containerGaleria">
      `{/* Primera Pantalla */}
      <article className="container px-2 text-center text-md-start min-vh-86 d-flex align-items-center ">
        <Container className="bgTexto rounded-4">
          <Row>
            {/* Segunda Fila */}
            <Col md={6} className="pb-4 ">
              <h2 className="mb-4 text-poppins fs-3">
                Descubre la belleza del
                <span className="color-arena "> Oasis Hotel</span>
              </h2>
              <p className="text-justify py-2 my-2 text-nunito fw-medium text-muted">
                Sumérgete en la belleza y el lujo de Oasis Hotel a través de
                nuestra exclusiva galería de imágenes. Desde la elegancia de
                nuestras suites hasta los rincones paradisíacos de la Riviera
                Maya, cada fotografía captura la esencia de una experiencia
                inolvidable.
              </p>
            </Col>
            <Col md={3} className="pb-4 pe-0 ">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058708/2-VistaRio_ltis88.webp"
                alt="Balcón vista al rio"
                className="img-fluid rounded-start-4"
              />
            </Col>
            <Col md={3} className="pb-4 ps-0">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058705/3-Habitacion_r1lorf.webp"
                alt="Habitación Superior del hotel"
                className="img-fluid rounded-end-4"
              />
            </Col>
            {/* Tercera Fila */}
            <Col md={3} className="pb-4 pe-0">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058707/8-RivieraMaya_zna6kw.jpg"
                alt="Plaza Riviera Maya"
                className="img-fluid rounded-start-4"
              />
            </Col>{" "}
            <Col md={3} className="pb-4 ps-0">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058706/5-Villa_wejtkz.webp"
                alt="Patio de la Suite Presidencial"
                className="img-fluid rounded-end-4"
              />
            </Col>
            <Col md={3} className="pb-4 pe-0">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058705/6-Ba%C3%B1o_o35ugm.webp"
                alt="Baño de un habitación"
                className="img-fluid rounded-start-4"
              />
            </Col>
            <Col md={3} className="pb-4 ps-0">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058706/7-Ducha_ltmase.webp"
                alt="Ducha de una habitación"
                className="img-fluid rounded-end-4"
              />
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Galeria;
