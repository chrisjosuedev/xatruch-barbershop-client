import xatruchBarberApi from "../clientApi";

// PUT
export const updateUser = async (fullName, email) => {
  const {
    data: { data },
  } = await xatruchBarberApi.put("/users", {
    fullName,
    email,
  });
  return data;
};

export const updatePassword = async ({
  currentPassword,
  newPassword,
  confirmPassword,
}) => {
  const { data: { message } } = await xatruchBarberApi.put("/users/change-password", {
    currentPassword,
    newPassword,
    confirmPassword,
  });
  return message;
};
