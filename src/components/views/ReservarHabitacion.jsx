import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { es } from "date-fns/locale";
import "./styles/ReservarHabitacion.css";
import { roomData } from "../commons/roomData";
import { useParams, Link } from "react-router-dom";
import { FaWifi, FaTv, FaBed, FaUser, FaSun } from "react-icons/fa";
import { BsStarFill, BsEggFried } from "react-icons/bs";

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

  const handlePrintDates = () => {
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;

    console.log("Check-in:", startDate.toLocaleDateString());
    console.log("Check-out:", endDate.toLocaleDateString());
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
                  onClick={handlePrintDates}
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
