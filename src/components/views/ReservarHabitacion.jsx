import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { es } from "date-fns/locale";
import "./styles/ReservarHabitacion.css";
import { roomData } from "../commons/roomData";
import { useParams, Link } from "react-router-dom";
import { FaBed, FaUser, FaSun } from "react-icons/fa";
import { BsEggFried } from "react-icons/bs";
import Swal from "sweetalert2";

const ReservarHabitacion = () => {
  const { roomType } = useParams();
  const room = roomData[roomType];

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleVerifyAvailability = () => {
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;

    // Se simula la verificación (después se cambiara por una consulta al backend)
    const isAvailable = 1;

    if (isAvailable) {
      // Modal para disponibilidad
      Swal.fire({
        icon: "success",
        title: "Habitación disponible",
        text: `Tenemos disponibles las mejores "${room.category} ${
          room.name
        }"  desde el: ${startDate.toLocaleDateString()} al ${endDate.toLocaleDateString()}.`,
        confirmButtonText: "Confirmar Reserva",
        confirmButtonColor: "#89bbad",
        customClass: {
          popup: "custom-swal-popup", // Clase personalizada
          confirmButton: "custom-swal-button", // Clase para el botón
        },
      });
    } else {
      // Modal para no disponibilidad
      Swal.fire({
        icon: "error",
        title: "Sin disponibilidad",
        text: `No hay habitaciones disponibles desde del ${startDate.toLocaleDateString()} al ${endDate.toLocaleDateString()}.`,
        confirmButtonText: "Intentar otra fecha",
        confirmButtonColor: "#d33",
        customClass: {
          popup: "custom-swal-popup", // Clase personalizada
          confirmButton: "custom-swal-button", // Clase para el botón
        },
      });
    }
  };

  return (
    <section className="mainSection background-img-identificarse  d-flex align-items-center">
      <article className="container py-4">
        <div className="row">
          {/* Sección del selector de fechas */}
          <div className="col-12 col-md-8 mb-4 mb-md-0">
            <div className="p-3 border rounded-4 shadow d-flex flex-column bg-light">
              <h5 className="text-center mb-4 fs-2 color-cristalina text-poppins pt-2">
                Seleccionar Fecha
              </h5>
              <div className="d-flex justify-content-around text-poppins fw-medium fs-5 ">
                <p className="mb-0 pb-0">Check in:</p>
                <p className="mb-0 pb-0">Check out:</p>
              </div>

              <DateRange
                editableDateInputs={false}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={new Date()} // Bloquea fechas anteriores al día actual
                rangeColors={["#3ecf8e"]}
                months={window.innerWidth >= 992 ? 2 : 1} // Mostrar 2 meses en escritorio
                direction={window.innerWidth >= 992 ? "horizontal" : "vertical"} // Cambiar orientación
                locale={es} // Cambiar el idioma a español
                className="mb-4 d-flex text-nunito"
              />
              <div className="w-100 text-center">
                <button
                  className="btn bg-cristalina text-poppins fw-medium text-light py-2 rounded-4"
                  onClick={handleVerifyAvailability}
                >
                  Verificar Disponibilidad
                </button>
              </div>
            </div>
          </div>

          {/* Sección de información de la habitación */}
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow h-100 rounded-4 bg-light">
              <img
                src={room.image}
                alt="Habitación superior"
                className="card-img-top"
              />
              <div className="card-body px-4">
                <h5 className="card-title color-arena text-poppins text-center">
                  {room.category} {room.name}
                </h5>
                <p className="text-secondary fw-bold text-nunito mb-1 fs-5 text-center">
                  Tarifa: USD {room.price}
                </p>
                {/* Aspectos destacados */}
                <div className="">
                  <p className="text-secondary my-3 text-poppins text-center">
                    Aspectos Destacados
                  </p>
                  <div className="row g-4 text-center text-muted text-nunito">
                    <div className="col-6">
                      <FaUser className="fs-3 mb-2 color-arena" />
                      <p>{room.capacity} personas</p>
                    </div>
                    <div className="col-6">
                      <FaBed className="fs-3 mb-2 color-arena" />
                      <p>{room.bedType}</p>
                    </div>

                    <div className="col-6">
                      <FaSun className="fs-3 mb-2 color-arena" />
                      <p>Solarium</p>
                    </div>

                    <div className="col-6">
                      <BsEggFried className="fs-3 mb-2 color-arena" />
                      <p>Breakfast </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ReservarHabitacion;
