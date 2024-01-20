import xatruchBarberApi from "../clientApi";

// GET
export const getAllUserBookings = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get("/bookings/orders/users");
  return data;
};

export const getUserBookingDetailById = async (id) => {
  const {
    data: { data },
  } = await xatruchBarberApi.get(`/bookings/orders/users/${id}`);
  return data;
};
