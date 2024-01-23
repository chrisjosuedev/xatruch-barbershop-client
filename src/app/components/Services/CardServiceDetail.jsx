import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useCartStore } from '../../../hooks/useCartStore'
import { useAuthStore } from '../../../hooks'
import { authStatus } from '../../../data/data'
import { alertInfo } from '../../../helpers'

export const CardDetailService = ({ id, serviceName, price }) => {
  const navigate = useNavigate()

  const { currentStatus } = useAuthStore()
  const { startAddingToCart, checkServiceInCart } = useCartStore()

  const onAddToCart = (id) => {
    if (currentStatus === authStatus[2]) {
      const logoutInfo = alertInfo(
        'Inicie sesión para agendar un cita',
        'info',
        'Sign In',
        'Mas tarde'
      )
      Swal.fire(logoutInfo).then((result) => {
        if (result.isConfirmed) navigate('/auth/signin')
      })
      return
    }
    startAddingToCart(id)
  }

  return (
    <div className='card m-2 animate__animated animate__fadeIn'>
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-8'>
            <h5 className='card-title'>{serviceName}</h5>
            <p className='card-text'>L. {price.toFixed(2)}</p>
          </div>
          <div className='col-md-4'>
            {checkServiceInCart(id) ? (
              <div className='text-right'>
                <FontAwesomeIcon className='check-cart' icon={faCircleCheck} />
                <div className='check-cart-title'>
                  <b>AGREGADO</b>
                </div>
              </div>
            ) : (
              <div className='text-right'>
                <button onClick={() => onAddToCart(id)} className='btn btn-dark'>
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
