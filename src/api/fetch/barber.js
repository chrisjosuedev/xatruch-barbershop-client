import xatruchBarberApi from "../clientApi";

// GET
export const getAllBarbers = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get("/barbers");
  return data;
};

// GET BY ID
export const getBarberById = async (id) => {
  const {
    data: { data },
  } = await xatruchBarberApi.get(`/barbers/${id}`);
  return data;
};

// POST
export const saveBarber = async ({ fullName }) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.post("/barbers", { fullName });
  return {
    barber: data,
    message,
  };
};

// PUT
export const updateBarber = async (id, { fullName }) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.put(`/barbers/${id}`, { fullName });
  return {
    barber: data,
    message,
  };
};

// DELETE
export const deleteBarber = async (id) => {
  const {
    data: { message },
  } = await xatruchBarberApi.delete(`/barbers/${id}`);
  return message;
};
