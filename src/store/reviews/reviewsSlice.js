import { createSlice } from '@reduxjs/toolkit'

export const reviewsSlice = createSlice({
  name: 'review',
  initialState: {
    reviews: [],
    approvedReviews: [],
    activeReview: null,
    isLoadingReviews: true,
    reviewsToApprove: [],
    message: undefined,
  },
  reducers: {
    onAddNewReview: (state, { payload }) => {
      state.userReviews.push(payload.reviewSaved)
      state.message = payload.message
    },
    onUpdateReview: (state, { payload }) => {
      state.userReviews = state.userReviews.map((review) => {
        if (payload.reviewUpdated.id !== review.id) return review
        return payload.reviewUpdated
      })
      state.message = payload.message
      state.activeReview = null
    },
    onDeleteReview: (state, { payload }) => {
      state.userReviews = state.userReviews.filter((review) => {
        return review.id !== state.activeReview.id
      })
      state.message = payload.message
    },
    onLoadReviews: (state, { payload }) => {
      payload.forEach((review) => {
        const exists = state.reviews.some((reviewInStore) => reviewInStore.id === review.id)
        if (!exists) state.reviews.push(review)
      })
      state.isLoadingReviews = false
    },
    onClearMessage: (state) => {
      state.message = undefined
    },
    onSetLoadingReview: (state) => {
      state.isLoadingReviews = false
    },
    onSetSelectedReview: (state, { payload }) => {
      state.activeReview = payload
    },
    onFindUserReview: (state, { payload }) => {
      state.activeReview = state.userReviews.find((review) => review.id === payload.id)
    },
    onApproveReviews: (state, { payload }) => {
      if (!state.reviewsToApprove.includes(payload)) {
        state.reviewsToApprove.push(payload)
        return
      }
      state.reviewsToApprove = state.reviewsToApprove.filter((rev) => rev !== payload)
    },
    onUpdateApprovedReviews: (state, { payload }) => {
      state.reviews = state.reviews.map((revInStore) => {
        const foundReview = payload.find((rev) => rev.id === revInStore.id)
        if (foundReview) return foundReview
        revInStore.isApproved = false
        return revInStore
      })
      state.reviewsToApprove = []
    },
    onSetMessage: (state, { payload }) => {
      state.message = payload
    },
    onLoadApprovedReviews: (state, { payload }) => {
      state.approvedReviews = payload
    },
    onLogoutReviews: (state) => {
      state.reviews = []
      state.activeReview = null
      state.isLoadingReviews = true
      state.reviewsToApprove = []
      state.message = undefined
      state.approvedReviews = []
    },
  },
})

export const {
  onAddNewReview,
  onApproveReviews,
  onClearMessage,
  onDeleteReview,
  onFindUserReview,
  onLoadReviews,
  onSetLoadingReview,
  onSetSelectedReview,
  onUpdateReview,
  onUpdateApprovedReviews,
  onLogoutReviews,
  onLoadApprovedReviews,
  onSetMessage,
} = reviewsSlice.actions
