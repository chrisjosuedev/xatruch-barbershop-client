import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ItemCard = ({ serviceId, serviceName, price, onDelete }) => {
  return (
    <div className='card m-2'>
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-10'>
            <h5 className='card-title'>{serviceName}</h5>
            <p className='card-text'>L. {price.toFixed(2)}</p>
          </div>
          <div className='col-md-2'>
            <button
              onClick={() => onDelete(serviceId)}
              className='btn btn-outline-danger btn-sm float-right'
            >
              <FontAwesomeIcon icon={faMinus} />{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
