export const CardService = ({ icon, title, info }) => {
    return (
        <div className="row mx-auto service-info">
            <div className="col-md-2">
                <div className="circle-img">
                    <img src={`/assets/img/services/${icon}.png`} alt="haircut" />
                </div>
            </div>
            <div className="col-md-10 text-services">
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}
