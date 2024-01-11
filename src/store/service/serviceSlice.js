import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    allServices: [],
    services: [],
    isLoadingServices: true,
    activeService: null,
    serviceErrors: [],
    message: undefined,
  },
  reducers: {
    onSaveNewService: (state, { payload }) => {
      state.allServices.push(payload.serviceSaved)
      state.message = payload.message
      state.serviceErrors = []
    },
    onUpdateService: (state, { payload }) => {
      state.allServices = state.allServices.map((serv) => {
        if (serv.id !== payload.serviceUpdated.id) return serv
        return payload.serviceUpdated
      })
      state.message = payload.message
      state.serviceErrors = []
    },
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
    onSetActiveService: (state, { payload }) => {
      state.activeService = payload
    },
    onSetServiceErrors: (state, { payload }) => {
      state.serviceErrors = payload
    },
    onClearMessage: (state) => {
      state.message = undefined
    },
    onClearErrors: (state) => {
      state.serviceErrors = []
    },
    onSetIsLoading: (state) => {
      state.isLoadingServices = false
    },
  },
})

export const {
  onClearErrors,
  onClearMessage,
  onFilterServices,
  onLoadServices,
  onUpdateService,
  onSetServiceErrors,
  onSetActiveService,
  onResetFilter,
  onSaveNewService,
  onSetIsLoading,
} = serviceSlice.actions
