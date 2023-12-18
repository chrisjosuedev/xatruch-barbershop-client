export const CardDescription = ({ icon, title, description }) => {
    return (
        <div className="card-us">
            <img src={`/assets/img/recursos/${icon}.png`} />
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}
