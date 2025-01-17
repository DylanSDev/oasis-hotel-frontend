import { useForm } from "react-hook-form";
import { Phone, Mail } from "lucide-react";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <section className="mainSection">
      <article className="min-vh-86 container px-4 px-0 py-2 text-nunito">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 className="color-arena mb-3 text-poppins fs-2 fw-medium">
              Contáctanos
            </h1>
            <p className="lead fs-6">
              ¿Tienes alguna duda? ¿Necesitas atención personalizada? No dudes
              en comunicarte, siempre habrá un asesor a tu servicio.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    errors.nombre ? "is-invalid" : ""
                  }`}
                  placeholder="Nombre"
                  autoComplete="name"
                  {...register("nombre", {
                    required: "Este campo es requerido",
                  })}
                />
                {errors.nombre && (
                  <div className="invalid-feedback">
                    {errors.nombre.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  className={`form-control ${
                    errors.asunto ? "is-invalid" : ""
                  }`}
                  placeholder="Asunto"
                  rows={3}
                  autoComplete="off"
                  {...register("asunto", {
                    required: "Este campo es requerido",
                    minLength: {
                      value: 3,
                      message: "El asunto debe tener al menos 3 caracteres",
                    },
                  })}
                ></textarea>
                {errors.asunto && (
                  <div className="invalid-feedback">
                    {errors.asunto.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className={`form-control ${
                    errors.telefono ? "is-invalid" : ""
                  }`}
                  placeholder="Número de teléfono"
                  autoComplete="tel"
                  {...register("telefono", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[0-9]{9,}$/,
                      message: "Número de teléfono inválido",
                    },
                  })}
                />
                {errors.telefono && (
                  <div className="invalid-feedback">
                    {errors.telefono.message}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <select
                  className={`form-select ${
                    errors.encontraste ? "is-invalid" : ""
                  }`}
                  autoComplete="off"
                  {...register("encontraste", {
                    required: "Por favor seleccione una opción",
                  })}
                >
                  <option value="">¿Cómo nos encontraste?</option>
                  <option value="google">Google</option>
                  <option value="redes">Redes Sociales</option>
                  <option value="amigo">Recomendación de un amigo</option>
                  <option value="otros">Otros</option>
                </select>
                {errors.encontraste && (
                  <div className="invalid-feedback">
                    {errors.encontraste.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn bg-arena text-light w-100 py-2 fw-bold"
              >
                Enviar
              </button>
            </form>

            <div className="contact-info d-flex justify-content-around">
              <div className="d-flex mb-3 align-items-center">
                <Phone size={30} className="color-arena me-2" />
                <div className="d-flex flex-column">
                  <small className="text-muted fs-6 fw-bold">Teléfono</small>
                  <small className="text-muted">+52385451</small>
                </div>
              </div>

              <div className="d-flex mb-3 align-items-center">
                <Mail size={30} className="color-arena me-2" />
                <div className="d-flex flex-column">
                  <small className="text-muted fs-6 fw-bold">E-mail</small>
                  <small className="text-muted">info@oasis.com</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="h-100 min-vh-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3732.672188783666!2d-87.0294142!3d20.6829115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fef5d24ee257%3A0xd4d3962b28fbee68!2sBanyan%20Tree%20Mayakoba!5e0!3m2!1ses-419!2sar!4v1737054511165!5m2!1ses-419!2sar"
                width="100%"
                height="550"
                loading="lazy"
                className=""
              ></iframe>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contacto;
