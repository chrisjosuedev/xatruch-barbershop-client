import xatruchBarberApi from '../clientApi';

export const getAllUserBookings = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get('/bookings/orders/users');
  return data;
};
