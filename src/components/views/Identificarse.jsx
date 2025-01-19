import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Identify from "./Identify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Identificarse = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
  const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);
  const [showSignUpSm, setShowSignUpSm] = useState(false);

  // Cambiar la visibilidad de la contraseña
  const togglePasswordVisibilitySignUp = () => {
    setShowPasswordSignUp(!showPasswordSignUp);
  };
  const togglePasswordVisibilitySignIn = () => {
    setShowPasswordSignIn(!showPasswordSignIn);
  };

  // Manejador para el formulario de registro
  const {
    handleSubmit: handleSubmitSignUp,
    control: controlSignUp,
    formState: { errors: errorsSignUp },
    reset: resetSignUp,
  } = useForm();

  const {
    handleSubmit: handleSubmitSignUpMobile,
    control: controlSignUpMobile,
    formState: { errors: errorsSignUpMobile },
    reset: resetSignUpMobile,
  } = useForm();

  // Manejador para el formulario de iniciar sesión
  const {
    handleSubmit: handleSubmitSignIn,
    control: controlSignIn,
    formState: { errors: errorsSignIn },
    reset: resetSignIn,
  } = useForm();

  const {
    handleSubmit: handleSubmitSignInMobile,
    control: controlSignInMobile,
    formState: { errors: errorsSignInMobile },
    reset: resetSignInMobile,
  } = useForm();

  const toggleSignIn = () => {
    setIsSigningIn(!isSigningIn);
  };

  const onSubmitSignUp = (data) => {
    console.log("Registro Desktop", data);
    resetSignUp();
  };

  const onSubmitSignIn = (data) => {
    console.log("Inicio de sesión Desktop", data);
    resetSignIn();
  };

  const onSubmitSignUpMobile = (data) => {
    console.log("Registro (Mobile)", data);
    resetSignUpMobile();
  };

  const onSubmitSignInMobile = (data) => {
    console.log("Inicio de sesión (Mobile)", data);
    resetSignInMobile();
  };

  return (
    <section className="mainSection background-img-identificarse ">
      {/* Login para tablets y computadoras  */}
      <article className="d-none d-md-flex justify-content-center py-5 min-vh-86 min-vh-md-60 text-poppins">
        {/* Crear Cuenta */}
        <Identify.Container>
          <Identify.SignUpContainer $signingIn={isSigningIn}>
            <Identify.Form
              onSubmit={handleSubmitSignUp(onSubmitSignUp)}
              className="fw-light"
            >
              <Identify.Title className="mb-3">Crear Cuenta</Identify.Title>

              <div className="form-group w-100 mb-3">
                <label htmlFor="username">Nombre Completo</label>
                <Controller
                  name="username"
                  control={controlSignUp}
                  rules={{
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 5,
                      message: "El nombre debe tener al menos 5 caracteres",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <Identify.Input
                      {...field}
                      id="username"
                      type="text"
                      placeholder="Ej: Oasis Hotel"
                      autoComplete="name"
                    />
                  )}
                />
                {errorsSignUp.username && (
                  <span className="text-danger">
                    {errorsSignUp.username.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group w-100 mb-3">
                <label htmlFor="emailSignUp">Correo Electrónico</label>
                <Controller
                  name="emailSignUp"
                  control={controlSignUp}
                  rules={{
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email inválido",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <Identify.Input
                      {...field}
                      id="emailSignUp"
                      type="email"
                      placeholder="Ej: ejemplo@oasis.com"
                      autoComplete="email"
                    />
                  )}
                />
                {errorsSignUp.emailSignUp && (
                  <span className="text-danger">
                    {errorsSignUp.emailSignUp.message}
                  </span>
                )}
              </div>

              <div className="form-group w-100 mb-3">
                <label htmlFor="phone">Número de Teléfono</label>
                <Controller
                  name="phone"
                  control={controlSignUp}
                  rules={{
                    required: "El número es obligatorio",
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "Solo se permiten números",
                    },
                    minLength: {
                      value: 10,
                      message: "El número debe tener al menos 10 caracteres",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <Identify.Input
                      {...field}
                      id="phone"
                      type="tel"
                      placeholder="Ej: 54222555"
                      autoComplete="tel"
                    />
                  )}
                />
                {errorsSignUp.phone && (
                  <span className="text-danger">
                    {errorsSignUp.phone.message}
                  </span>
                )}
              </div>

              {/* Contraseña */}
              <div className="form-group w-100 mb-3">
                <label
                  htmlFor="passwordSignUp"
                  className="d-flex justify-content-between"
                >
                  Contraseña (6 caracteres)
                  <button
                    type="button"
                    className="rounded-3 border-0"
                    onClick={togglePasswordVisibilitySignUp}
                  >
                    {showPasswordSignUp ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </label>
                <Controller
                  name="passwordSignUp"
                  control={controlSignUp}
                  rules={{
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <div className="password-input-container">
                      <Identify.Input
                        {...field}
                        id="passwordSignUp"
                        type={showPasswordSignUp ? "text" : "password"}
                        placeholder="Ingresa tu contraseña"
                        autoComplete="new-password"
                      />
                    </div>
                  )}
                />
                {errorsSignUp?.passwordSignUp && (
                  <span className="text-danger">
                    {errorsSignUp.passwordSignUp.message}
                  </span>
                )}
              </div>

              <div className="w-100 text-start mb-3">
                <Controller
                  name="terms"
                  control={controlSignUp}
                  rules={{ required: "Debes aceptar los términos de uso" }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        id="terms"
                        className="form-check-input me-2 mb-2"
                        type="checkbox"
                        autoComplete="off"
                      />
                      <label className="form-check-label" htmlFor="terms">
                        Aceptas nuestros Términos de Uso.
                      </label>
                    </div>
                  )}
                />
                {errorsSignUp.terms && (
                  <span className="text-danger">
                    {errorsSignUp.terms.message}
                  </span>
                )}
              </div>

              <Identify.Button type="submit">Crear Cuenta</Identify.Button>
            </Identify.Form>
          </Identify.SignUpContainer>

          {/* Iniciar Sesión */}
          <Identify.SignInContainer $signingIn={isSigningIn}>
            <Identify.Form
              onSubmit={handleSubmitSignIn(onSubmitSignIn)}
              className="fw-light"
            >
              <Identify.Title className="mb-3">Iniciar Sesión</Identify.Title>

              {/* Correo Electrónico */}
              <div className="form-group w-100 mb-3">
                <label htmlFor="emailLogin">Correo Electrónico</label>
                <Controller
                  name="emailLogin"
                  control={controlSignIn}
                  rules={{
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Correo inválido",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <Identify.Input
                      {...field}
                      id="emailLogin"
                      type="email"
                      placeholder="ejemplo@oasis.com"
                      autoComplete="email"
                    />
                  )}
                />
                {errorsSignIn.emailLogin && (
                  <span className="text-danger">
                    {errorsSignIn.emailLogin.message}
                  </span>
                )}
              </div>

              {/* Contraseña */}
              <div className="form-group w-100 mb-3">
                <label
                  htmlFor="passwordLogin"
                  className="d-flex justify-content-between"
                >
                  Contraseña
                  <button
                    type="button"
                    className="rounded-3 border-0"
                    onClick={togglePasswordVisibilitySignIn}
                  >
                    {showPasswordSignIn ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </label>
                <Controller
                  name="passwordLogin"
                  control={controlSignIn}
                  rules={{
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  }}
                  defaultValue=""
                  render={({ field }) => (
                    <div className="password-input-container">
                      <Identify.Input
                        {...field}
                        id="passwordLogin"
                        type={showPasswordSignIn ? "text" : "password"}
                        placeholder="Ingresa tu contraseña"
                        autoComplete="current-password"
                      />
                    </div>
                  )}
                />
                {errorsSignIn.passwordLogin && (
                  <span className="text-danger">
                    {errorsSignIn.passwordLogin.message}
                  </span>
                )}
              </div>

              {/* Olvidaste tu contraseña */}
              <Identify.Anchor href="#">
                ¿Olvidaste tu contraseña?
              </Identify.Anchor>

              {/* Botón Iniciar Sesión */}
              <Identify.Button type="submit">INICIAR SESIÓN</Identify.Button>
            </Identify.Form>
          </Identify.SignInContainer>

          {/* Overlay de Iniciar Sesión */}
          <Identify.OverlayContainer $signingIn={isSigningIn}>
            <Identify.Overlay $signingIn={isSigningIn}>
              <Identify.LeftOverlayPanel $signingIn={isSigningIn}>
                <Identify.Title>¿Ya tienes cuenta?</Identify.Title>
                <Identify.Paragraph>
                  Inicia sesión y disfruta de nuestros servicios.
                </Identify.Paragraph>
                <Identify.GhostButton onClick={toggleSignIn}>
                  INICIAR SESIÓN
                </Identify.GhostButton>
              </Identify.LeftOverlayPanel>

              {/* Overlay de Registrarse */}
              <Identify.RightOverlayPanel $signingIn={isSigningIn}>
                <Identify.Title>¿No tienes cuenta?</Identify.Title>
                <Identify.Paragraph>
                  Regístrate y disfruta de nuestros servicios.
                </Identify.Paragraph>
                <Identify.GhostButton onClick={toggleSignIn}>
                  REGISTRARSE
                </Identify.GhostButton>
              </Identify.RightOverlayPanel>
            </Identify.Overlay>
          </Identify.OverlayContainer>
        </Identify.Container>
      </article>

      {/* Login para teléfonos móviles */}
      <article className="d-md-none py-5 text-poppins background-img-identificarse ">
        <div className="container py-5">
          {/* Formulario Crear Cuenta */}
          <div className="row justify-content-center">
            <div className={`col-11 ${!showSignUpSm ? "d-none" : ""}`}>
              <div className="card mb-4 shadow-sm rounded-5">
                <div className="card-body px-4">
                  <h2 className="card-title text-center mt-4 mb-4 color-arena">
                    Crear Cuenta
                  </h2>
                  <form
                    onSubmit={handleSubmitSignUpMobile(onSubmitSignUpMobile)}
                    className="fw-light"
                  >
                    {/* Nombre Completo */}
                    <div className="form-group mb-3">
                      <label htmlFor="usernameSm">Nombre Completo</label>
                      <Controller
                        name="usernameSm"
                        control={controlSignUpMobile}
                        rules={{
                          required: "El nombre es obligatorio",
                          minLength: {
                            value: 5,
                            message:
                              "El nombre debe tener al menos 5 caracteres",
                          },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            id="usernameSm"
                            className="form-control"
                            type="text"
                            placeholder="Ej: Oasis Hotel"
                            autoComplete="name"
                          />
                        )}
                      />
                      {errorsSignUpMobile.usernameSm && (
                        <small className="text-danger">
                          {errorsSignUpMobile.usernameSm.message}
                        </small>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group mb-3">
                      <label htmlFor="emailSignUpSm">Correo Electrónico</label>
                      <Controller
                        name="emailSignUpSm"
                        control={controlSignUpMobile}
                        rules={{
                          required: "El email es obligatorio",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email inválido",
                          },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            id="emailSignUpSm"
                            className="form-control"
                            type="email"
                            placeholder="Ej: ejemplo@oasis.com"
                            autoComplete="email"
                          />
                        )}
                      />
                      {errorsSignUpMobile.emailSignUpSm && (
                        <small className="text-danger">
                          {errorsSignUpMobile.emailSignUpSm.message}
                        </small>
                      )}
                    </div>

                    {/* Número de Teléfono */}
                    <div className="form-group mb-3">
                      <label htmlFor="phoneSm">Número de Teléfono</label>
                      <Controller
                        name="phoneSm"
                        control={controlSignUpMobile}
                        rules={{
                          required: "El número es obligatorio",
                          pattern: {
                            value: /^[0-9]+$/i,
                            message: "Solo se permiten números",
                          },
                          minLength: {
                            value: 10,
                            message:
                              "El número debe tener al menos 10 caracteres",
                          },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            id="phoneSm"
                            className="form-control"
                            type="tel"
                            placeholder="Ej: 54222555"
                            autoComplete="tel"
                          />
                        )}
                      />
                      {errorsSignUpMobile.phoneSm && (
                        <small className="text-danger">
                          {errorsSignUpMobile.phoneSm.message}
                        </small>
                      )}
                    </div>

                    {/* Contraseña */}
                    <div className="form-group mb-3">
                      <label
                        htmlFor="passwordSignUpSm"
                        className="d-flex justify-content-between mb-2"
                      >
                        Contraseña (6 caracteres)
                        <button
                          type="button"
                          className="rounded-3 border-0"
                          onClick={togglePasswordVisibilitySignUp}
                        >
                          {showPasswordSignUp ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </label>
                      <Controller
                        name="passwordSignUpSm"
                        control={controlSignUpMobile}
                        rules={{
                          required: "La contraseña es obligatoria",
                          minLength: {
                            value: 6,
                            message:
                              "La contraseña debe tener al menos 6 caracteres",
                          },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            id="passwordSignUpSm"
                            className="form-control"
                            type={showPasswordSignUp ? "text" : "password"}
                            placeholder="Ingresa tu contraseña"
                            autoComplete="new-password"
                          />
                        )}
                      />
                      {errorsSignUpMobile.passwordSignUpSm && (
                        <small className="text-danger">
                          {errorsSignUpMobile.passwordSignUpSm.message}
                        </small>
                      )}
                    </div>

                    {/* Términos y Condiciones */}
                    <div className="form-group mb-3">
                      <Controller
                        name="termsSm"
                        control={controlSignUpMobile}
                        rules={{
                          required: "Debes aceptar los términos de uso",
                        }}
                        render={({ field }) => (
                          <div className="form-check">
                            <input
                              {...field}
                              id="termsSm"
                              className="form-check-input"
                              type="checkbox"
                              autoComplete="off"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="termsSm"
                            >
                              Acepto los Términos de Uso
                            </label>
                          </div>
                        )}
                      />
                      {errorsSignUpMobile.termsSm && (
                        <small className="text-danger">
                          {errorsSignUpMobile.termsSm.message}
                        </small>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn bg-arena text-light fw-medium w-100"
                    >
                      Crear Cuenta
                    </button>
                  </form>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="btn btn-link text-dark mb-3"
                      onClick={() => setShowSignUpSm(false)}
                    >
                      ¿Ya tienes cuenta? Inicia sesión
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Iniciar Sesión */}
          <div className="row justify-content-center">
            <div className={`col-11 ${showSignUpSm ? "d-none" : ""}`}>
              <div className="card shadow-sm rounded-5">
                <div className="card-body px-4">
                  <h2 className="card-title text-center mt-3 mb-4 color-arena">
                    Iniciar Sesión
                  </h2>
                  <form
                    onSubmit={handleSubmitSignInMobile(onSubmitSignInMobile)}
                    className="fw-light"
                  >
                    {/* Correo Electrónico */}
                    <div className="form-group mb-3">
                      <label htmlFor="emailLoginSm">Correo Electrónico</label>
                      <Controller
                        name="emailLoginSm"
                        control={controlSignInMobile}
                        rules={{
                          required: "El correo es obligatorio",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Correo inválido",
                          },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            id="emailLoginSm"
                            className="form-control"
                            type="email"
                            placeholder="Ej: ejemplo@oasis.com"
                            autoComplete="email"
                          />
                        )}
                      />
                      {errorsSignInMobile.emailLoginSm && (
                        <small className="text-danger">
                          {errorsSignInMobile.emailLoginSm.message}
                        </small>
                      )}
                    </div>

                    {/* Contraseña */}
                    <div className="form-group mb-3">
                      <label
                        htmlFor="passwordLoginSm"
                        className="d-flex justify-content-between mb-1"
                      >
                        Contraseña
                        <button
                          type="button"
                          className="rounded-3 border-0"
                          onClick={togglePasswordVisibilitySignIn}
                        >
                          {showPasswordSignIn ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </label>
                      <Controller
                        name="passwordLoginSm"
                        control={controlSignInMobile}
                        rules={{
                          required: "La contraseña es obligatoria",
                          minLength: {
                            value: 6,
                            message:
                              "La contraseña debe tener al menos 6 caracteres",
                          },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            {...field}
                            id="passwordLoginSm"
                            className="form-control"
                            type={showPasswordSignIn ? "text" : "password"}
                            placeholder="Ingresa tu contraseña"
                            autoComplete="current-password"
                          />
                        )}
                      />
                      {errorsSignInMobile.passwordLoginSm && (
                        <small className="text-danger">
                          {errorsSignInMobile.passwordLoginSm.message}
                        </small>
                      )}
                    </div>

                    <div className="d-flex justify-content-center mb-3">
                      <a href="#" className="text-decoration-none text-muted">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 bg-arena border-0"
                    >
                      Iniciar Sesión
                    </button>
                  </form>
                  <div className="d-flex justify-content-center mt-3 ">
                    <button
                      type="button"
                      className="btn btn-link text-dark mb-3"
                      onClick={() => setShowSignUpSm(true)}
                    >
                      ¿No tienes cuenta? Crea una nueva
                    </button>
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

export default Identificarse;
