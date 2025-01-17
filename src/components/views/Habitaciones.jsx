import { Link } from "react-router-dom";

export default function RoomSection() {
  // Array de datos para cada habitación
  const rooms = [
    {
      id: 1,
      roomRoute: "superior",
      image:
        "https://res.cloudinary.com/dylansdev/image/upload/v1736985377/Superior_oire21.webp",
      title: "Habitación superior",
      description:
        "Con vista frontal al mar, esta suite cuenta con terraza privada, sala de estar, piscina climatizada y acceso directo a la playa de color blanca.",
      details: {
        people: "2 personas",
        bed: "Cama king size",
        size: "222 m2 / 2,385 ft2",
        view: "Vista al mar",
      },
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dylansdev/image/upload/v1736990748/Deluxe_fwh0g3.webp",
      title: "Habitación Deluxe",
      description:
        "Elegante suite con vistas panorámicas al océano, jacuzzi privado y terraza amueblada para disfrutar del atardecer.",
      details: {
        people: "3 personas",
        bed: "Cama king size + sofá cama",
        size: "275 m2 / 2,960 ft2",
        view: "Vista panorámica al mar",
      },
    },
  ];

  const RoomCard = ({ room }) => (
    <div className="card p-4 h-100 shadow-sm rounded-5">
      <div className="row g-0 h-100">
        <div className="col-md-6">
          <img
            src={room.image}
            alt={room.title}
            className="img-fluid rounded-5"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column text-nunito">
          <div className="card-body text-muted">
            <h3 className="card-title h4 color-arena text-poppins">
              {room.title}
            </h3>
            <p className="small text-justify">{room.description}</p>
            <div className="mt-2">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-person me-2"></i>
                <span className="small">{room.details.people}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-house-door me-2"></i>
                <span className="small">{room.details.bed}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-arrows-angle-expand me-2"></i>
                <span className="small">{room.details.size}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-eye me-2"></i>
                <span className="small">{room.details.view}</span>
              </div>
            </div>
          </div>
          <div className="card-footer bg-transparent border-0 mt-auto">
            <Link
              to={`/habitaciones/${room.roomRoute}`}
              className="btn btn-light boton-card-habitaciones w-100 mb-2 fw-bold"
            >
              Explorar
            </Link>
            <Link
              to={`/reservar`}
              className="btn bg-arena boton-card-habitaciones w-100 fw-bold"
            >
              Reservar Ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mainSection containerGaleria">
      <article className="container py-4">
        <h2 className="mb-2 text-poppins">
          {" "}
          Lo mejor de <span className="color-arena">Riviera Maya</span>
        </h2>
        <p className="text-poppins">
          Descubre el lujo y la comodidad en Oasis Hotel.
        </p>
        <div className="row g-4">
          {rooms.map((room) => (
            <div key={room.id} className="col-12 col-lg-6">
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
