import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewReview,
  onClearMessage,
  onDeleteReview,
  onFindUserReview,
  onLoadUserReviews,
  onSetSelectedReview,
  onUpdateReview,
} from "../store/reviews/reviewsSlice";
import {
  deleteReview,
  getUserReviews,
  saveReview,
  updateReview,
} from "../api/fetch/review";
import { onSetIsLoading } from "../store";

export const useReviewStore = () => {
  const { reviews, userReviews, activeReview, isLoadingReviews, message } =
    useSelector((state) => state.review);
  const dispatch = useDispatch();

  const startSetActiveUserReview = (id) => {
    dispatch(onFindUserReview({ id }));
  };

  const startLoadingUserReviews = async () => {
    const reviews = await getUserReviews();
    dispatch(onLoadUserReviews(reviews));
  };

  const startSetIsLoadingUserReviews = () => {
    dispatch(onSetIsLoading());
  };

  const setActiveReview = (review) => {
    dispatch(onSetSelectedReview(review));
  };

  const startSavingReview = async ({ id, title, review }) => {
    if (id) {
      const { review: reviewUpdated, message } = await updateReview({
        id,
        title,
        review,
      });
      dispatch(onUpdateReview({ reviewUpdated, message }));
      setTimeout(() => {
        dispatch(onClearMessage());
      }, 10);
      return;
    }
    const { review: reviewSaved, message } = await saveReview(title, review);
    dispatch(onAddNewReview({ reviewSaved, message }));
    setTimeout(() => {
      dispatch(onClearMessage());
    }, 10);
  };

  const startDeletingUserReview = async (id) => {
    const { message } = await deleteReview(id);
    dispatch(onDeleteReview({ message }));
    setTimeout(() => {
      dispatch(onClearMessage());
    }, 10);
  };

  return {
    // props
    activeReview,
    isLoadingReviews,
    message,
    reviews,
    userReviews,

    // methods
    setActiveReview,
    startDeletingUserReview,
    startLoadingUserReviews,
    startSavingReview,
    startSetActiveUserReview,
    startSetIsLoadingUserReviews,
  };
};
