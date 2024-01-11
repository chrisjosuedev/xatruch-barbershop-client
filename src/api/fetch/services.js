import xatruchBarberApi from '../clientApi'

// GET
export const getAllServices = async () => {
  const { data } = await xatruchBarberApi.get('/services')
  return data
}

// GET BY ID

export const getServiceById = async (id) => {
  const { data: { data } } = await xatruchBarberApi.get(`/services/${id}`)
  return data
}

// POST
export const saveService = async ({ serviceName, price }) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.post('/services', { serviceName, price })
  return {
    service: data,
    message,
  }
}

// PUT
export const updateService = async ({ serviceName, price, ...rest }) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.put(`/services/${rest.id}`, { serviceName, price })
  return {
    service: data,
    message,
  }
}
