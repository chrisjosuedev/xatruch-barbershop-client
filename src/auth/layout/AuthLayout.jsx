import { NavBar } from "../../ui"

export const AuthLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row header-container p-4">
        <div className="col-md-8 head-text-section">
          <h1>A tan solo pocos clicks..</h1>
          <p className="header-text"> Si tienes una cuenta, inicia sesión para agendar una cita. Si no tienes, puedes registrarte de manera gratuita para conectar con nosotros. </p>
        </div>
        <div className="col-md-4">
          {children}
        </div>
      </div>
    </div>
  )
}
