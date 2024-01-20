import xatruchBarberApi from "../clientApi";

// GET
export const getAllSettings = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get("/settings");
  return data;
};

// POST
export const createSetting = async (setting) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.post("/settings", setting);
  return {
    setting: data,
    message,
  };
};

// POST - Activate/Desactivate Setting
export const activateSetting = async (id) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.post(`/settings/active/${id}`);
  return {
    setting: data,
    message,
  };
};

// PUT
export const updateSetting = async ({
  startDailyAvailability,
  endDailyAvailability,
  ...rest
}) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.put(`/settings/${rest.id}`, {
    startDailyAvailability,
    endDailyAvailability,
  });
  return {
    setting: data,
    message,
  };
};

// DELETE
export const deleteSetting = async (id) => {
  const {
    data: { message },
  } = await xatruchBarberApi.delete(`/settings/${id}`);
  return message;
};
