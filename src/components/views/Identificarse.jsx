import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Components from "./Components";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Para los íconos del botón de mostrar/ocultar
import "./styles/Identificarse.css";

const Identificarse = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const toggleSignIn = () => {
    setIsSigningIn(!isSigningIn);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="mainSection">
      <article className="d-none d-md-flex justify-content-center py-5 min-vh-86 min-vh-md-60 ">
        <Components.Container className="">
          <Components.SignUpContainer $signingIn={isSigningIn}>
            <Components.Form
              onSubmit={handleSubmit(onSubmit)}
              className="text-poppins"
            >
              <Components.Title className="mb-3">Crear Cuenta</Components.Title>

              {/* Nombre Completo */}
              <div className="form-group w-100 fw-normal">
                <label htmlFor="username">Nombre Completo</label>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "El nombre es obligatorio" }}
                  render={({ field }) => (
                    <Components.Input
                      {...field}
                      type="text"
                      placeholder="Ej: Oasis Hotel"
                    />
                  )}
                />
                {errors.username && <span>{errors.username.message}</span>}
              </div>

              {/* Email */}
              <div className="form-group w-100">
                <label htmlFor="email">Correo Electrónico</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email inválido",
                    },
                  }}
                  render={({ field }) => (
                    <Components.Input
                      {...field}
                      type="email"
                      placeholder="Ej: ejemplo@oasis.com"
                    />
                  )}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              {/* Phone */}
              <div className="form-group w-100">
                <label htmlFor="phone">Número de Teléfono</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "El número es obligatorio",
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "Solo se permiten números",
                    },
                  }}
                  render={({ field }) => (
                    <Components.Input
                      {...field}
                      type="tel"
                      placeholder="+54222555"
                      className="w-90"
                    />
                  )}
                />
                {errors.phone && <span>{errors.phone.message}</span>}
              </div>

              {/* Password */}
              <div className="form-group w-100">
                <label htmlFor="password">
                  Contraseña
                  <span className="text-muted">
                    (6 caracteres, 1 mayuscula y miniscula)
                  </span>
                </label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  }}
                  render={({ field }) => (
                    <div className="password-input-container">
                      <Components.Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Ingresa tu contraseña"
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  )}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              {/* Terms and conditions */}
              <div className="w-100 text-start">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Aceptas nuestros Terminos de Uso.
                </label>
              </div>

              <Components.Button type="submit">
                Create Account
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer $signingIn={isSigningIn}>
            <Components.Form>
              <Components.Title>Sign In</Components.Title>
              <Components.Input type="email" placeholder="Enter your email" />
              <Components.Input
                type="password"
                placeholder="Enter your password"
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button>Login</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer $signingIn={isSigningIn}>
            <Components.Overlay $signingIn={isSigningIn}>
              <Components.LeftOverlayPanel $signingIn={isSigningIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us, please log in with your personal
                  information.
                </Components.Paragraph>
                <Components.GhostButton onClick={toggleSignIn}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel $signingIn={isSigningIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your details and start your journey with us.
                </Components.Paragraph>
                <Components.GhostButton onClick={toggleSignIn}>
                  Sign Up
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
