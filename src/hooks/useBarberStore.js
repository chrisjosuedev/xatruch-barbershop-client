import { useDispatch, useSelector } from 'react-redux'
import {
  deleteBarber,
  getAllBarbers,
  getBarberById,
  saveBarber,
  updateBarber,
} from '../api/fetch'
import {
  onAddNewBarber,
  onClearBarberMessage,
  onDeleteBarber,
  onLoadBarbers,
  onSetActiveBarber,
  onUpdateBarber,
} from '../store/barbers/barbersSlice'

export const useBarberStore = () => {
  const { barbers, isLoadingBarbers, message, activeBarber } = useSelector(
    (state) => state.barber
  )
  const dispatch = useDispatch()

  // Start Setting Active Barber
  const startSetActiveBarber = (barber) => {
    dispatch(onSetActiveBarber(barber))
  }

  // Start Finding Barber
  const startFindBarber = async (id) => {
    const barber = await getBarberById(id)
    dispatch(onSetActiveBarber(barber))
  }

  // Loading Barbers
  const startLoadingBarbers = async () => {
    const barbers = await getAllBarbers()
    dispatch(onLoadBarbers(barbers))
  }

  // Start Creating/Update Barber
  const startSavingBarber = async (barber) => {
    const { id, ...rest } = barber

    // Update
    if (id) {
      const { barber: barberUpdated, message } = await updateBarber(id, rest)
      dispatch(onUpdateBarber({ barberUpdated, message }))
      setTimeout(() => {
        dispatch(onClearBarberMessage())
      }, 3)
      return
    }

    // Create
    const { barber: barberSaved, message } = await saveBarber(rest)
    dispatch(onAddNewBarber({ barberSaved, message }))
    setTimeout(() => {
      dispatch(onClearBarberMessage())
    }, 3)
  }

  // Start Deleting
  const startDeleting = async (id) => {
    const message = await deleteBarber(id)
    dispatch(onDeleteBarber(message))
    setTimeout(() => {
      dispatch(onClearBarberMessage())
    }, 3)
  }

  return {
    // props
    barbers,
    isLoadingBarbers,
    message,
    activeBarber,

    // methods
    startLoadingBarbers,
    startSavingBarber,
    startSetActiveBarber,
    startFindBarber,
    startDeleting,
  }
}
