import { createSlice } from '@reduxjs/toolkit';

export const reviewsSlice = createSlice({
  name: 'review',
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
    onUpdateReview: (state, { payload }) => {
      state.userReviews = state.userReviews.map((review) => {
        if (payload.reviewUpdated.id !== review.id) return review;
        return payload.reviewUpdated;
      });
      state.message = payload.message;
      state.activeReview = null;
    },
    onDeleteReview: (state, { payload }) => {
      state.userReviews = state.userReviews.filter((review) => {
        return review.id !== state.activeReview.id;
      });
      state.message = payload.message;
    },
    onLoadUserReviews: (state, { payload }) => {
      payload.forEach((review) => {
        const exists = state.userReviews.some((reviewInStore) => reviewInStore.id === review.id);
        if (!exists) {
          const { user, ...rest } = review;
          state.userReviews.push(rest);
        }
      });
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
    onFindUserReview: (state, { payload }) => {
      state.activeReview = state.userReviews.find((review) => review.id === payload.id);
    },
    onLoadReviews: (state, { payload }) => {},
    onApproveReviews: (state, { payload }) => {},
    onLogoutReviews: (state) => {
      state.userReviews = [];
      state.reviews = [];
      state.activeReview = null;
      state.isLoadingReviews = true;
      state.message = undefined;
    },
  },
});

export const {
  onAddNewReview,
  onApproveReviews,
  onClearMessage,
  onDeleteReview,
  onFindUserReview,
  onLoadReviews,
  onLoadUserReviews,
  onSetLoadingReview,
  onSetSelectedReview,
  onUpdateReview,
  onLogoutReviews,
} = reviewsSlice.actions;
