import { CardDescription } from ".."

export const Features = ({ features }) => {
  return (
    <section className="features" id="us">
      <img className="dots-1" src="/assets/img/recursos/dots.png" alt="dots-1" />
      <h2> Mas que un corte de cabello, <br /> una experiencia. </h2>
      <div className="container-features">
        {
          features.map((info) => (
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
  )
}
