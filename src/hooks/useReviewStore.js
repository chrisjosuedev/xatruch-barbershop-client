import { useDispatch, useSelector } from 'react-redux'
import {
  onAddNewReview,
  onApproveReviews,
  onClearMessage,
  onDeleteReview,
  onFindUserReview,
  onLoadApprovedReviews,
  onLoadReviews,
  onSetMessage,
  onSetSelectedReview,
  onUpdateApprovedReviews,
  onUpdateReview,
} from '../store/reviews/reviewsSlice'
import {
  approveReviews,
  deleteReview,
  getReviews,
  getUserReviews,
  saveReview,
  updateReview,
} from '../api/fetch/review'
import { onSetIsLoading } from '../store'

export const useReviewStore = () => {
  const {
    reviews,
    reviewsToApprove,
    approvedReviews,
    activeReview,
    isLoadingReviews,
    message,
  } = useSelector((state) => state.review)
  const dispatch = useDispatch()

  const startSetActiveUserReview = (id) => {
    dispatch(onFindUserReview({ id }))
  }

  // Loading Reviews
  const startLoadingReviews = async (isAdmin = false) => {
    if (!isAdmin) {
      const userReviews = await getUserReviews()
      dispatch(onLoadReviews(userReviews))
      return
    }
    const reviews = await getReviews()
    dispatch(onLoadReviews(reviews))
  }

  // Add/remove to Approve
  const startApprovingReviews = (id) => {
    dispatch(onApproveReviews(id))
  }

  // Start Loading Aproved Reviews
  const startLoadingApprovedReviews = async () => {
    const reviews = await getReviews(true)
    dispatch(onLoadApprovedReviews(reviews))
  }

  // Start Approving Reviews
  const startSavingApprovedReviews = async (ids) => {
    const { reviews: approvedReviews, message } = await approveReviews(ids)
    dispatch(onUpdateApprovedReviews(approvedReviews))
    dispatch(onSetMessage(message))
    setTimeout(() => {
      dispatch(onClearMessage())
    }, 5)
  }

  const startSetIsLoadingUserReviews = () => {
    dispatch(onSetIsLoading())
  }

  const setActiveReview = (review) => {
    dispatch(onSetSelectedReview(review))
  }

  const startSavingReview = async ({ id, title, review }) => {
    if (id) {
      const { review: reviewUpdated, message } = await updateReview({
        id,
        title,
        review,
      })
      dispatch(onUpdateReview({ reviewUpdated, message }))
      setTimeout(() => {
        dispatch(onClearMessage())
      }, 10)
      return
    }
    const { review: reviewSaved, message } = await saveReview(title, review)
    dispatch(onAddNewReview({ reviewSaved, message }))
    setTimeout(() => {
      dispatch(onClearMessage())
    }, 10)
  }

  const startDeletingUserReview = async (id) => {
    const { message } = await deleteReview(id)
    dispatch(onDeleteReview({ message }))
    setTimeout(() => {
      dispatch(onClearMessage())
    }, 10)
  }

  return {
    // props
    activeReview,
    isLoadingReviews,
    message,
    approvedReviews,
    reviews,
    reviewsToApprove,

    // methods
    setActiveReview,
    startDeletingUserReview,
    startSavingReview,
    startLoadingApprovedReviews,
    startSetActiveUserReview,
    startSetIsLoadingUserReviews,
    startLoadingReviews,
    startApprovingReviews,
    startSavingApprovedReviews,
  }
}
