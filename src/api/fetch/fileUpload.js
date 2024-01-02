import xatruchBarberApi from "../clientApi";

export const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const {
    data: {
      data: { url },
    },
  } = await xatruchBarberApi.post("/users/profile-img", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return {
    profileUrl: url,
  };
};
