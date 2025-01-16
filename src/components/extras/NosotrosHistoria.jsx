import { Container, Row, Col, Nav } from "react-bootstrap";
import { useState } from "react";

const NosotrosHistoria = () => {
  const sections = {
    presencia: {
      title: "Presencia Global",
      image:
        "https://mayakoba.com/wp-content/uploads/2024/03/andaz-editada-NEW-copy.jpg",
      text: "El Oasis Hotel es parte de una red exclusiva de destinos turísticos de lujo, ofreciendo una experiencia única en la Riviera Maya. Con presencia internacional, nos destacamos por brindar un servicio personalizado en un ambiente idóneo para el descanso y la diversión. Desde el momento en que llegas, te acompañamos en cada paso de tu viaje, garantizando una estancia excepcional.",
    },
    playa: {
      title: "La Playa",
      image:
        "https://mayakoba.com/wp-content/uploads/2021/05/BTMXMY-Aerial-View-Banyan-Tree-Mayakoba-Beach-LowRes-e1621636047560.jpg",
      text: "Ubicado frente a la hermosa costa de la Riviera Maya, el Oasis Hotel ofrece acceso directo a una playa de aguas cristalinas y arena blanca. Aquí podrás disfrutar de un paisaje paradisíaco mientras te relajas bajo el sol, practicas deportes acuáticos o simplemente saboreas un cóctel junto al mar. Un entorno ideal para escapar del estrés y reconectar con la paz única de la naturaleza.",
    },
    instalaciones: {
      title: "Nuestras Instalaciones",
      image:
        "https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.com%2Fassets%2F2022-05%2FFloating--BANYAN-TREE-MAYAKOBA-villas.jpg&w=1080&q=75",
      text: "En el Oasis Hotel, cada rincón está diseñado para ofrecer comodidad y elegancia. Contamos con instalaciones de primer nivel, incluyendo espacios modernos para reuniones, gimnasio, spa y áreas recreativas. Las habitaciones están cuidadosamente decoradas, fusionando el lujo con el confort, y nuestras zonas comunes brindan un ambiente relajante, ideal para disfrutar de tu estadía.",
    },
  };

  const [activeSection, setActiveSection] = useState("instalaciones");

  return (
    <Container fluid className="py-5 text-poppins">
      <Row className="justify-content-between">
        {/* Imagen */}
        <Col md={6}>
          <div className="mb-4">
            <img
              src={sections[activeSection].image || "/placeholder.svg"}
              alt={sections[activeSection].title}
              className="img-fluid rounded shadow-lg rounded-5"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
          </div>
        </Col>
        {/* Texto */}
        <Col md={5} className="d-flex align-items-center">
          <Row>
            <Col md={12}>
              <Nav className="d-flex flex-column">
                {Object.entries(sections).map(([key, section]) => (
                  <Nav.Link
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`py-2 text-decoration-none px-0 ${
                      activeSection === key
                        ? "color-arena fw-medium fs-2"
                        : "text-secondary text-decoration-underline"
                    }`}
                  >
                    {section.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
            <Col md={12}>
              <p className="lead text-justify fs-6">
                {sections[activeSection].text}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NosotrosHistoria;
