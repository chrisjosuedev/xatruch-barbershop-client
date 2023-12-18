export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-xatruch navbar-light bg-lignt">
            <a href="/" className="navbar-brand">
                <img src="/assets/img/icon.png" className="img-logo" alt="logo" />
                <span className="brand"> XATRUCH </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#us">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#servicios">Servicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto__us">Contacto</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mi Menú
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#"></a>
                            <a className="dropdown-item" href="#">Ajustes</a>
                            <a className="dropdown-item" href="#">Cerrar Sesión</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
