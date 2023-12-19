import { Slider } from ".."

export const Testimonials = ({ reviews }) => {
  return (
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
          <Slider 
            reviews={reviews} />
        </div>
      </section>
    </section>
  )
}
