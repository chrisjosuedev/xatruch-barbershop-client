import { createSlice } from '@reduxjs/toolkit'

export const barbersSlice = createSlice({
  name: 'barber',
  initialState: {
    activeBarber: null,
    barbers: [],
    isLoadingBarbers: true,
    message: undefined,
  },
  reducers: {
    onLoadBarbers: (state, { payload }) => {
      payload.forEach((barber) => {
        const exists = state.barbers.some((barberInStore) => barberInStore.id === barber.id)
        if (!exists) state.barbers.push(barber)
      })
      state.isLoadingBarbers = false
    },
    onAddNewBarber: (state, { payload }) => {
      state.barbers.push(payload.barberSaved)
      state.message = payload.message
    },
    onUpdateBarber: (state, { payload }) => {
      state.barbers = state.barbers.map((barber) => {
        if (barber.id === payload.barberUpdated.id) return payload.barberUpdated
        return barber
      })
      state.message = payload.message
    },
    onDeleteBarber: (state, { payload }) => {
      state.barbers = state.barbers.filter((barber) => {
        if (barber.id !== state.activeBarber.id) return barber
      })
      state.message = payload
    },
    onSetActiveBarber: (state, { payload }) => {
      state.activeBarber = payload
    },
    onClearBarberMessage: (state) => {
      state.message = undefined
    },
    onLogoutBarbers: (state) => {
      state.activeBarber = null
      state.barbers = []
      state.isLoadingBarbers = true
      state.message = undefined
    },
  },
})

export const {
  onAddNewBarber,
  onClearBarberMessage,
  onDeleteBarber,
  onLoadBarbers,
  onSetActiveBarber,
  onUpdateBarber,
  onLogoutBarbers,
} = barbersSlice.actions
