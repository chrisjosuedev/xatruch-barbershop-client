import { createSlice } from "@reduxjs/toolkit";

export const reviewsSlice = createSlice({
  name: "review",
  initialState: {
    userReviews: [],
    reviews: [],
    activeReview: null,
    isLoadingReviews: true,
    message: undefined,
  },
  reducers: {
    onAddNewReview: (state, { payload }) => {
      state.userReviews.push(payload.reviewSaved);
      state.message = payload.message;
    },
    onUpdateReview: (state, { payload }) => {},
    onDeleteReview: (state) => {},
    onLoadUserReviews: (state, { payload }) => {
      payload.forEach((review) => {
        const exists = state.userReviews.some(reviewInStore => reviewInStore.id === review.id);
        if (!exists) {
          const { user, ...rest } = review;
          state.userReviews.push(rest);
        }
      })
      state.isLoadingReviews = false;
    },
    onClearMessage: (state) => {
      state.message = undefined;
    },
    onSetLoadingReview: (state) => {
      state.isLoadingReviews = false;
    },
    onSetSelectedReview: (state, { payload }) => {
      state.activeReview = payload;
    },
    onLoadReviews: (state, { payload }) => {},
    onApproveReviews: (state, { payload }) => {},
  },
});

export const {
  onAddNewReview,
  onApproveReviews,
  onClearMessage,
  onDeleteReview,
  onLoadReviews,
  onLoadUserReviews,
  onSetLoadingReview,
  onSetSelectedReview,
  onUpdateReview,
} = reviewsSlice.actions;
