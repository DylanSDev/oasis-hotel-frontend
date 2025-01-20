import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Error404Main = () => {
  return (
    <section className="mainSection contenedor-404 ">
      <article className="min-vh-86 min-vh-md-60 py-3 py-md-0 d-flex align-items-center">
        <Container className="px-4">
          <Row className="justify-content-center">
            <Col
              xs={12}
              lg={7}
              className="d-flex flex-column justify-content-center"
            >
              <DotLottieReact
                src="https://lottie.host/66217cd0-71bb-433a-a8cc-2a6cbacbaad3/yAW55H18gi.lottie"
                loop
                autoplay
                className="w-100"
              />
            </Col>
            <Col
              xs={12}
              lg={5}
              className="text-poppins text-center text-lg-start"
            >
              <h1 className="display-1 fw-bold">Error 404</h1>
              <h2 className="fs-1 fw-bold mt-3">
                ¡Ups! Te perdiste en el paraíso.
              </h2>
              <p className="mt-2 text-muted fs-5">
                Lo sentimos, no podemos encontrar la página que buscas.
              </p>
              <Button
                as={Link}
                to="/"
                variant="info"
                size="lg"
                className="mt-2 rounded-4 px-5 py-3 text-white"
              >
                Volver a la página de inicio
              </Button>
              <div className="mt-4">
                <Link to="/contacto" className="text-dark">
                  ¿Necesitas ayuda? Contáctanos
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Error404Main;
