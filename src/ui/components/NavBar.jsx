import { NavLink, Link } from "react-router-dom"

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg nav-xatruch navbar-light bg-lignt">
      <Link to="/" className="navbar-brand">
        <img src="/assets/img/icon.png" className="img-logo" alt="logo" />
        <span className="brand"> XATRUCH </span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#us">Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#stadistics">Stats</NavLink>
          </li>

          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cuenta
            </NavLink>
            {/* 
              TODO:
              - Handle Logout 
              - Perfil option to: "/portal/admin" if admin, "/portal/user" if user
            */}
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/portal/">Perfil</NavLink>
              <NavLink className="dropdown-item" to="/logout">Cerrar Sesión</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
