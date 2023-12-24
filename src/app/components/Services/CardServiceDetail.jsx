import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faMinus } from "@fortawesome/free-solid-svg-icons"


export const CardDetailService = ({ serviceName, price }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h5 className="card-title">{serviceName}</h5>
            <p className="card-text">L. {price}</p>
          </div>
          <div className="col-md-4">
            <button className="btn btn-success mr-2 mt-2">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="btn btn-danger mt-2">
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
