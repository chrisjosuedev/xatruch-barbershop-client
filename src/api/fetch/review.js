import xatruchBarberApi from '../clientApi'

// GET
export const getUserReviews = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get('/reviews/my-reviews')
  return data
}

// GET ALL
export const getReviews = async (approved = false) => {
  const {
    data: { data },
  } = await xatruchBarberApi.get(`/reviews?approved=${approved}`)
  return data
}

// PUT
export const updateReview = async ({ id, title, review }) => {
  const {
    data: {
      data: { user, ...rest },
      message,
    },
  } = await xatruchBarberApi.put(`/reviews/${id}`, { title, review })
  return {
    review: rest,
    message,
  }
}

// POST
export const saveReview = async (title, review) => {
  const {
    data: {
      data: { user, ...rest },
      message,
    },
  } = await xatruchBarberApi.post('/reviews', { title, review })
  return {
    review: rest,
    message,
  }
}

// POST
export const approveReviews = async (reviewsId = []) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.post(`/reviews/approve?ids=${reviewsId}`)
  return {
    reviews: data,
    message,
  }
}

// DELETE
export const deleteReview = async (id) => {
  const {
    data: { message },
  } = await xatruchBarberApi.delete(`/reviews/${id}`)
  return {
    message,
  }
}
