export const HeaderSection = () => {
    return (
        <div className="row header-container">
            <div className="col-md-6 head-text-section">
                <h1>Barbería como forma de arte.</h1>
                <p className="header-text"> Cada dia muchas personas confían en nosotros, <br />
                    saben que nos tomamos el corte de cabello muy en serio. </p>
                <a href="#contacto__us" className="btn btn-dark contact-us">
                    Agenda una Cita
                </a>
            </div>
            <div className="col-md-6 images-home">
                <img className="men" src="/assets/img/home.png" alt="hombre" />
            </div>
        </div>
    )
}
