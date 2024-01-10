import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    allServices: [],
    services: [],
    isLoadingServices: true,
  },
  reducers: {
    onLoadServices: (state, { payload }) => {
      payload.forEach((service) => {
        const exists = state.allServices.some((current) => current.id === service.id)
        if (!exists) state.allServices.push(service)
      })
      state.services = state.allServices
      state.isLoadingServices = false
    },
    onFilterServices: (state, { payload }) => {
      state.isLoadingServices = true
      state.services = state.allServices.filter((serv) =>
        serv.serviceName.toLowerCase().includes(payload.toLowerCase())
      )
    },
    onResetFilter: (state) => {
      state.isLoadingServices = true
      state.services = state.allServices
    },
    onSetIsLoading: (state) => {
      state.isLoadingServices = false
    },
  },
})

export const { onLoadServices, onSetIsLoading, onFilterServices, onResetFilter } =
  serviceSlice.actions
