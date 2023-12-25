import { Link } from "react-router-dom"

export const AuthForm = () => {
  return (
    <div className="card text-center font-weight-bold shadow">
      <img
        src="/assets/img/icon.png"
        alt="barbershop"
        className="card-img-top mx-auto mt-4 w-25"
      />
      <span className="brand mt-2"> XATRUCH </span>
      <div className="card-body">
        <form action="/signin" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
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
