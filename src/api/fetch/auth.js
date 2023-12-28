import xatruchBarberApi from "../clientApi";

// GET
export const renewToken = async () => {
  const { data } = await xatruchBarberApi.get("/auth/refresh-token");
  return {
    user: data.data,
  };
};

// POST
export const singIn = async (email, password) => {
  const { data } = await xatruchBarberApi.post("/auth/signin", {
    email,
    password,
  });
  return {
    user: data.data,
    message: data.message,
  };
};
