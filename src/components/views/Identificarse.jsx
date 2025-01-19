import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Components from "./Components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Identificarse = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
  const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);

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
  } = useForm();

  // Manejador para el formulario de iniciar sesión
  const {
    handleSubmit: handleSubmitSignIn,
    control: controlSignIn,
    formState: { errors: errorsSignIn },
  } = useForm();

  const toggleSignIn = () => {
    setIsSigningIn(!isSigningIn);
  };

  const onSubmitSignUp = (data) => {
    console.log("Registro", data);
  };

  const onSubmitSignIn = (data) => {
    console.log("Inicio de sesión", data);
  };

  return (
    <section className="mainSection">
      <article className="d-none d-md-flex justify-content-center py-5 min-vh-86 min-vh-md-60 text-poppins">
        {/* Crear Cuenta */}
        <Components.Container>
          <Components.SignUpContainer $signingIn={isSigningIn}>
            <Components.Form
              onSubmit={handleSubmitSignUp(onSubmitSignUp)}
              className="fw-light"
            >
              <Components.Title className="mb-3">Crear Cuenta</Components.Title>

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
                    <Components.Input
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
                    <Components.Input
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
                    <Components.Input
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
                      <Components.Input
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

              <Components.Button type="submit">Crear Cuenta</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          {/* Iniciar Sesión */}
          <Components.SignInContainer $signingIn={isSigningIn}>
            <Components.Form
              onSubmit={handleSubmitSignIn(onSubmitSignIn)}
              className="fw-light"
            >
              <Components.Title className="mb-3">
                Iniciar Sesión
              </Components.Title>

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
                    <Components.Input
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
                      <Components.Input
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
              <Components.Anchor href="#">
                ¿Olvidaste tu contraseña?
              </Components.Anchor>

              {/* Botón Iniciar Sesión */}
              <Components.Button type="submit">
                INICIAR SESIÓN
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          {/* Overlay de Iniciar Sesión */}
          <Components.OverlayContainer $signingIn={isSigningIn}>
            <Components.Overlay $signingIn={isSigningIn}>
              <Components.LeftOverlayPanel $signingIn={isSigningIn}>
                <Components.Title>¿Ya tienes cuenta?</Components.Title>
                <Components.Paragraph>
                  Inicia sesión y disfruta de nuestros servicios.
                </Components.Paragraph>
                <Components.GhostButton onClick={toggleSignIn}>
                  INICIAR SESIÓN
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              {/* Overlay de Registrarse */}
              <Components.RightOverlayPanel $signingIn={isSigningIn}>
                <Components.Title>¿No tienes cuenta?</Components.Title>
                <Components.Paragraph>
                  Regístrate y disfruta de nuestros servicios.
                </Components.Paragraph>
                <Components.GhostButton onClick={toggleSignIn}>
                  REGISTRARSE
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </article>
    </section>
  );
};

export default Identificarse;
