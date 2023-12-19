import { CardService } from ".."

export const Services = ({ services }) => {
  return (
    <section className="container sevices" id="servicios">
      <div className="row">
        {/** Get Services from Database Top 5 - use state / selector / redux */}
        <div className="col-md-6 our-services">
          <h2 className="title-services"> Principales Servicios </h2>
          {
            services.map((service) => (
              <CardService
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
  )
}
