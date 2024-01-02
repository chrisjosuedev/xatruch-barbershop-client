import xatruchBarberApi from "../clientApi";

export const updateUser = async (fullName, email) => {
  const {
    data: { data },
  } = await xatruchBarberApi.put("/users", {
    fullName,
    email,
  });
  return data;
};
