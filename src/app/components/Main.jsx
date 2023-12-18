import { Services, CardDescription, Slider } from "./";

import { barberInfo, barberServices } from "../../data/data";

export const Main = () => {
    return (
        <main>
            <section className="features" id="us">
                <img className="dots-1" src="/assets/img/recursos/dots.png" alt="dots-1" />
                <h2> Mas que un corte de cabello, <br /> una experiencia. </h2>
                <div className="container-features">
                    {
                        barberInfo.map((info) => (
                            <CardDescription
                                key={info.icon}
                                icon={info.icon}
                                title={info.title}
                                description={info.description}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="info">
                <h2> Elegancia y Clase </h2>
                <a href="#contacto__us" className="btn btn-outline-light">
                    Agenda una Cita
                </a>
                <div className="wave-info">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1"
                            d="M0,256L80,261.3C160,267,320,277,480,282.7C640,288,800,288,960,245.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                        </path>
                    </svg>
                </div>
            </section>

            <section className="container sevices" id="servicios">
                <div className="row">
                    {/** Get Services from Database Top 5 - use state / selector / redux */}
                    <div className="col-md-6 our-services">
                        <h2 className="title-services"> Principales Servicios </h2>
                        {
                            barberServices.map((service) => (
                                <Services
                                    key={service.icon}
                                    icon={service.icon}
                                    title={service.title}
                                    info={service.info}
                                />
                            ))
                        }
                    </div>

                    <div className="col-md-6 img-animation">
                        <img className="head-men" src="/assets/img/recursos/hairstyle.svg" alt="barber-ilustration" />
                        <img className="mustache" src="/assets/img/recursos/mustache.svg" alt="mustache" />
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <section className="container title_testimonials">
                    <div className="row">
                        <div className="col-lg-10 d-flex align-items-center">
                            <h2> Nuestros clientes hablan... </h2>
                        </div>
                        <div className="col-lg-2">
                            <img className="img-quote" src="/assets/img/recursos/cita.svg" alt="cita" />
                        </div>
                    </div>
                </section>
                <section className="slider">
                    <div className="slider__container container__s">
                        <Slider />
                    </div>
                </section>
            </section>

            <section className="data">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="numero_dato">70+</h2>
                        <p className="description_dato">Clientes diarios</p>
                        <hr />
                    </div>

                    <div className="col-lg-4">
                        <h2 className="numero_dato">10</h2>
                        <p className="description_dato">Estilistas a tu servicio</p>
                        <hr />
                    </div>

                    <div className="col-lg-4">
                        <h2 className="numero_dato">1</h2>
                        <p className="description_dato">Premio a Negocio del Año 2021</p>
                        <hr />
                    </div>
                </div>
            </section>

            {/** TODO: Update Form to useFormHooks */}
            <section className="form__contact" id="contacto__us">
                <h2> 💈 Agenda una cita 💈 </h2>
                <p>Coloca tus datos personales y un agente se contactará contigo</p>
                <div className="container__form">
                    <form action="/save" method="post">

                        <div className="form-group">
                            <input type="name" name="customer_fullname" className="form-control" placeholder="Ingrese su nombre" maxLength="60"
                                required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Correo Electrónico" maxLength="50" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="cel" className="form-control" maxLength="8" pattern="[0-9]{8}"
                                placeholder="Celular" required />
                        </div>
                        <div className="form-group">
                            <small className="form-text text-muted">
                                Nota: Por ahora solo estamos disponibles en Honduras.
                            </small>
                        </div>
                        <div className="form-group">
                            <label className="float-left" htmlFor="tipo-plan">Debe seleccionar un plan de servicio:</label>
                            <select id="tipo-plan" className="form-control" name="id_suscription" required>
                                <option value="1">Caballero</option>
                                <option value="2">Principe</option>
                                <option value="3">Rey Arturo</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-dark float-right btn-form" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
