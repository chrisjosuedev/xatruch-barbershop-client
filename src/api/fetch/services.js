import xatruchBarberApi from "../clientApi";

export const getAllServices = async () => {
  const { data } = await xatruchBarberApi.get("/services");
  return data;
};
