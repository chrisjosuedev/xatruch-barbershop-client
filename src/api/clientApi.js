import axios from "axios";
import { getEnvVariables } from "../helpers";

// prod
const { VITE_API_URL } = getEnvVariables();

const xatruchBarberApi = axios.create({
  baseURL: "/api",
});

export default xatruchBarberApi;
