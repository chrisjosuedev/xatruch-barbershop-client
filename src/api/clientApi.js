import axios from "axios";

const xatruchBarberApi = axios.create({
  baseURL: "/api",
});

export default xatruchBarberApi;
