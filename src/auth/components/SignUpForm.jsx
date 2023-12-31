import { useEffect } from "react"
import { useForm } from "react-hook-form"

import Swal from "sweetalert2"

import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../hooks"

import { alertSuccess, emailValidations, fullNameValidations, passwordValidations } from "../../helpers"

const initForm = {
  fullName: "",
  email: "",
  password: ""
}

export const SignUpForm = () => {

  const navigate = useNavigate();

  const { errors: authErrors, startRegister } = useAuthStore();
  const { register, formState: { errors }, setError, handleSubmit } = useForm({ defaultValues: initForm });

  useEffect(() => {
    if (authErrors && authErrors.length > 0) {
      for (const error of authErrors) {
        setError(error.field, {
          type: "server",
          message: error.message
        });
      }
    }
  }, [authErrors]);

  const onSubmit = async (data) => {
    const { fullName, email, password } = data;

    startRegister({ fullName, email, password })
      .then(() => {
        const successInfo = alertSuccess(`Registro Existoso, ¡Hola, ${fullName}!`);
        Swal.fire(successInfo);
        navigate("/services");
      });
  };


  return (
    <div className="card text-center font-weight-bold shadow animate__animated animate__fadeIn">
      <span className="brand mt-4"> REGISTRARSE </span>
      <hr />
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              {...register("fullName", fullNameValidations)}
              placeholder="Nombre Completo"
            />
            <small className="invalid-feedback text-left">
              {errors.fullName && errors.fullName.message}
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register("email", emailValidations)}
              placeholder="Email"
            />
            <small className="invalid-feedback text-left">
              {errors.email && errors.email.message}
            </small>
          </div>
          <div className="form-group">
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

          <button className="btn btn-dark btn-login btn-block">
            Registrarme
          </button>
        </form>
        <br />
        <div className="mx-auto">
          <small className="form-text text-muted text-center">
            ¿Ya tienes una cuenta?
          </small>
          <Link className="signup-link" to={"/auth/signin"}>Inciar Sesión</Link>
        </div>
      </div>
    </div>
  )
}
