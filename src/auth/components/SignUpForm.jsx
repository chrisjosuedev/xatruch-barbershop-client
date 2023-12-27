import { Link } from "react-router-dom"

export const SignUpForm = () => {
  return (
    <div className="card text-center font-weight-bold shadow animate__animated animate__fadeIn">
      <img
        src="/assets/img/icon.png"
        alt="barbershop"
        className="card-img-top mx-auto mt-4 w-25"
      />
      <span className="brand mt-2"> XATRUCH </span>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              className="form-control"
            />
          </div>
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
