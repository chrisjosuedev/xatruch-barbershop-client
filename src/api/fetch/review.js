import xatruchBarberApi from "../clientApi";

// GET
export const getUserReviews = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get("/reviews/my-reviews");
  return data;
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
