import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

import { useAuthStore } from "../../hooks"
import { alertSuccess, emailValidations, passwordValidations } from "../../helpers";

const initForm = {
  email: "",
  password: ""
}

export const AuthForm = () => {

  const navigate = useNavigate();

  const { startLogin, message, errors: authErrors } = useAuthStore();

  const { register, handleSubmit, setError, formState: { errors } } = useForm({ defaultValues: initForm });

  useEffect(() => {
    for (const error of authErrors) {
      setError(error.field, {
        type: "server",
        message: error.message
      });
    }
  }, [authErrors]);


  const onSubmit = async (data) => {
    const { email, password } = data;
    startLogin({ email, password })
      .then(() => {
        const successInfo = alertSuccess("Inicio de Sesión Exitoso");
        Swal.fire(successInfo);
        navigate("/services");
      });
  }

  return (
    <div className="card text-center font-weight-bold shadow animate__animated animate__fadeIn">
      <span className="brand mt-4"> INICIAR SESIÓN </span>
      <hr />
      <div className="card-body">
        {
          (message) && (
            <div className="alert alert-danger" role="alert">
              <small>{message}</small>
            </div>)
        }

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row mb-2">
            <input
              type="text"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Email"
              {...register("email", emailValidations)}
            />
            <small className="invalid-feedback text-left">
              {errors.email && errors.email.message}
            </small>
          </div>
          <div className="form-row">
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              {...register("password", passwordValidations)}
              placeholder="Password"
            />
            <small className="invalid-feedback text-left">
              {errors.password && errors.password.message}
            </small>
          </div>
          <div className="form-group text-center mt-2">
            <Link className="signup-link" to={"/auth/forgot-password/request"}>
              ¿Olvidó su contraseña?
            </Link>
          </div>

          <button type="submit" className="btn btn-dark btn-login btn-block">
            Login
          </button>
        </form>
        <br />
        <div className="mx-auto">
          <small className="form-text text-muted text-center">
            ¿No tienes una cuenta?
          </small>
          <Link className="signup-link" to={"/auth/signup"}>Registrarse</Link>
        </div>

      </div>
    </div>
  )
}
