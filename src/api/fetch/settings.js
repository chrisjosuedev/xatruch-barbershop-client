import xatruchBarberApi from '../clientApi';

// GET
export const getAllSettings = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get('/settings');
  return data;
};

// POST
export const createSetting = async (setting) => {
  const {
    data: { data },
  } = await xatruchBarberApi.post('/settings', setting);
  return {
    setting: data,
  };
};
