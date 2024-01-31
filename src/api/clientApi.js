import axios from 'axios'
import { getEnvVariables } from '../helpers'

// prod
const { VITE_API_URL } = getEnvVariables()

const xatruchBarberApi = axios.create({
  baseURL: VITE_API_URL,
})

// Interceptors
xatruchBarberApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return config
})

export default xatruchBarberApi
