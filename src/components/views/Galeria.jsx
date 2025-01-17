import { Container, Row, Col } from "react-bootstrap";
import "./styles/Galeria.css";
import CarouselGaleria from "../extras/CarouselGaleria";

const Galeria = () => {
  return (
    <section className="mainSection containerGaleria">
      `{/* Primera Pantalla */}
      <article className="container min-vh-86 min-vh-md-60 px-2 text-center text-md-start min-vh-86 d-flex align-items-center px-4 px-md-0">
        <Container>
          <Row>
            {/* Primera*/}
            <Col lg={6} className="pb-4 ">
              <h2 className="mb-4 text-poppins fs-3 py-3 py-md-0">
                Descubre la belleza del
                <span className="color-arena ">
                  <br className="d-md-none" /> Oasis Hotel
                </span>
              </h2>
              <p className="text-justify py-2 my-2 text-nunito fw-medium text-muted">
                Sumérgete en la belleza y el lujo de Oasis Hotel a través de
                nuestra exclusiva galería de imágenes. Desde la elegancia de
                nuestras suites hasta los rincones paradisíacos de la Riviera
                Maya, cada fotografía captura la esencia de una experiencia
                inolvidable.
              </p>
            </Col>
            <Col md={6} lg={3} className="pb-4 pe-0 ">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058708/2-VistaRio_ltis88.webp"
                alt="Balcón vista al rio"
                className="img-fluid rounded-start-4 pe-3 pe-md-0"
              />
            </Col>
            <Col md={6} lg={3} className="pb-4 ps-0">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058705/3-Habitacion_r1lorf.webp"
                alt="Habitación Superior del hotel"
                className="img-fluid rounded-end-4 ps-3 ps-md-0"
              />
            </Col>
            {/* Segunda Fila*/}
            <span></span>
            <Col md={3} className="pb-4 pe-0 d-none d-md-block">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058707/8-RivieraMaya_zna6kw.jpg"
                alt="Plaza Riviera Maya"
                className="img-fluid rounded-start-4"
              />
            </Col>{" "}
            <Col md={3} className="pb-4 ps-0 d-none d-md-block">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058706/5-Villa_wejtkz.webp"
                alt="Patio de la Suite Presidencial"
                className="img-fluid rounded-end-4"
              />
            </Col>
            <Col md={3} className="pb-4 pe-0 d-none d-md-block">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058705/6-Ba%C3%B1o_o35ugm.webp"
                alt="Baño de un habitación"
                className="img-fluid rounded-start-4"
              />
            </Col>
            <Col md={3} className="pb-4 ps-0 d-none d-md-block">
              <img
                src="https://res.cloudinary.com/dylansdev/image/upload/v1737058706/7-Ducha_ltmase.webp"
                alt="Ducha de una habitación"
                className="img-fluid rounded-end-4"
              />
            </Col>
          </Row>
        </Container>
      </article>
      {/* Segunda Pantalla */}
      <article className="container min-vh-86 min-vh-md-60 px-2 text-center text-md-start min-vh-86 align-items-center px-4 px-md-0 my-5 my-md-0">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center text-poppins mb-4">
            Nuestras <span className="color-arena">aventuras</span>
          </h2>
          <CarouselGaleria images={imgAventuras}></CarouselGaleria>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center pb-5">
          <h2 className="text-center text-poppins mt-5 mb-4">
            Nuestra gastronomia{" "}
            <span className="color-arena"> de primer nivel</span>
          </h2>
          <CarouselGaleria images={imgGastronomia}></CarouselGaleria>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center pb-5">
          <h2 className="text-center text-poppins mt-4 mb-4">
            El paisaje de <span className="color-arena"> Riviera Maya</span>
          </h2>
          <CarouselGaleria images={imgPaisajes}></CarouselGaleria>
        </div>
      </article>
    </section>
  );
};

const imgAventuras = [
  "https://cdn.sanity.io/images/atvntylo/production/5182ccf371b9bc6eff9c285da20e39c220c9719d-5611x3741.jpg?w=3840&q=65&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/4c86c2c0efef04d3cf77de7cdc91b631fba21de0-1080x1630.webp?w=384&q=70&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/d78e17fc5cb1ae9956ca94933a303b25d8a861ff-1080x1630.webp?w=384&q=70&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/24048272316369f8e1842425d4e0cab296f3c6b3-1080x1630.webp?w=384&q=70&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/6ac2dc6c57c7ab544efe779595e5a7d5bd28ed08-1080x1630.webp?w=384&q=70&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/775b73e34bfe6ea5006f5ec033b0bf286307a8a4-1080x1630.webp?w=640&q=70&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/9d175f694cbd4a908cf2c76c80ad6f06b6d90a6f-1080x1630.webp?w=384&q=70&fit=clip&auto=format",
  "https://cdn.sanity.io/images/atvntylo/production/763b5fe8802c614d0f8c3f949916265aa6dff5fb-1080x1630.webp?w=384&q=70&fit=clip&auto=format",
];

const imgGastronomia = [
  "https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/24877173/pexels-photo-24877173/free-photo-of-comida-plato-vegetales-verduras.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/11213749/pexels-photo-11213749.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/4253318/pexels-photo-4253318.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/5490142/pexels-photo-5490142.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/4946442/pexels-photo-4946442.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/28435314/pexels-photo-28435314/free-photo-of-platos-gourmet-de-alta-cocina-en-presentacion-plana.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/11118539/pexels-photo-11118539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4916142/pexels-photo-4916142.jpeg?auto=compress&cs=tinysrgb&w=400",
];

const imgPaisajes = [
  "https://images.pexels.com/photos/3822155/pexels-photo-3822155.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/13878151/pexels-photo-13878151.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3822133/pexels-photo-3822133.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/16741473/pexels-photo-16741473/free-photo-of-mar-playa-arena-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=400",

  "https://images.pexels.com/photos/16147203/pexels-photo-16147203/free-photo-of-mar-ciudad-playa-edificios.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/29174332/pexels-photo-29174332/free-photo-of-representacion-tradicional-de-guerreros-mayas-en-playa-tropical.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/11434418/pexels-photo-11434418.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/18021507/pexels-photo-18021507/free-photo-of-mar-cielo-puesta-de-sol-playa.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/20822534/pexels-photo-20822534/free-photo-of-mar-amanecer-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=400",
];
export default Galeria;
