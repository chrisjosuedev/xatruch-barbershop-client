import xatruchBarberApi from "../clientApi";

// GET
export const renewToken = async () => {
  const { data: { data } } = await xatruchBarberApi.get("/auth/refresh-token");
  return {
    user: data,
  };
};

// POST
export const singIn = async (email, password) => {
  const { data: { message, data } } = await xatruchBarberApi.post("/auth/signin", {
    email,
    password,
  });
  return {
    user: data,
    message,
  };
};

export const signUp = async (fullName, email, password) => {
  const { data: { message, data } } = await xatruchBarberApi.post("/auth/signup", {
    fullName,
    email,
    password,
  });
  return {
    user: data,
    message,
  };
};
