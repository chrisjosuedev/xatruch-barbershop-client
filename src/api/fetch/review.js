import xatruchBarberApi from "../clientApi";

// GET
export const getUserReviews = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get("/reviews/my-reviews");
  return data;
};

// PUT
export const updateReview = async ({ id, title, review }) => {
  const {
    data: {
      data: { user, ...rest },
      message,
    },
  } = await xatruchBarberApi.put(`/reviews/${id}`, { title, review });
  return {
    review: rest,
    message,
  };
};

// POST
export const saveReview = async (title, review) => {
  const {
    data: {
      data: { user, ...rest },
      message,
    },
  } = await xatruchBarberApi.post("/reviews", { title, review });
  return {
    review: rest,
    message,
  };
};

// DELETE
export const deleteReview = async (id) => {
  const {
    data: { message },
  } = await xatruchBarberApi.delete(`/reviews/${id}`);
  return {
    message,
  };
};
