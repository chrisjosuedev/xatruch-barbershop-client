import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

import { useAuthStore } from "../../hooks"

export const AuthForm = () => {

  const { startLogin, message } = useAuthStore();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    startLogin({ email, password });
  }


  return (
    <div className="card text-center font-weight-bold shadow animate__animated animate__fadeIn">
      <img
        src="/assets/img/icon.png"
        alt="barbershop"
        className="card-img-top mx-auto mt-4 w-25"
      />
      <span className="brand mt-2"> XATRUCH </span>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              {...register("email", {
                required: true
              })}
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              {...register("password", { 
                required: true 
              })}
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-group text-center">
            <Link className="signup-link" to={"/auth/forgot-password/request"}>
              ¿Olvidó su contraseña?
            </Link>
          </div>

          <button className="btn btn-dark btn-login btn-block">
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
