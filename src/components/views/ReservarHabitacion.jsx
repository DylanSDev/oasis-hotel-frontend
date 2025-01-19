import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { es } from "date-fns/locale";
import "./styles/ReservarHabitacion.css";

const ReservarHabitacion = () => {
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

  return (
    <div className="container py-4">
      <div className="row">
        {/* Sección de información de la habitación */}
        <div className="col-12 col-md-4 mb-4">
          <div className="card border-0 shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Habitación superior"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Habitación superior</h5>
              <p className="card-text">
                Con vista frontal al mar, esta suite cuenta con terraza privada,
                sala de estar, piscina climatizada y acceso directo a la playa
                de color blanca.
              </p>
              <ul className="list-unstyled mb-3">
                <li>👥 2 personas</li>
                <li>🛏️ Cama King</li>
                <li>📺 SmartTV</li>
                <li>☀️ Solarium</li>
                <li>🌐 Wifi 1gb/s</li>
                <li>🌊 Vista al mar</li>
              </ul>
              <p className="text-warning fw-bold">Tarifa: USD 1050</p>
            </div>
          </div>
        </div>

        {/* Sección del selector de fechas */}
        <div className="col-12 col-md-8">
          <div className="p-3 border rounded-4 shadow d-flex flex-column">
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
              <button className="btn bg-cristalina text-poppins fw-medium text-light py-2 rounded-4">
                Verificar Disponibilidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservarHabitacion;
