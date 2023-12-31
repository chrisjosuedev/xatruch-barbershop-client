import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewReview,
  onClearMessage,
  onLoadUserReviews,
  onSetSelectedReview,
} from "../store/reviews/reviewsSlice";
import { getUserReviews, saveReview } from "../api/fetch/review";

export const useReviewStore = () => {
  const { reviews, userReviews, activeReview, isLoadingReviews, message } =
    useSelector((state) => state.review);
  const dispatch = useDispatch();

  const startLoadingUserReviews = async () => {
    const reviews = await getUserReviews();
    dispatch(onLoadUserReviews(reviews));
  };

  const setActiveReview = (review) => {
    dispatch(onSetSelectedReview(review));
  };

  const startSavingReview = async ({ id, title, review }) => {
    if (id) {
      console.log("Update review....");

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

  return {
    // props
    reviews,
    userReviews,
    activeReview,
    isLoadingReviews,
    message,

    // methods
    startLoadingUserReviews,
    setActiveReview,
    startSavingReview,
  };
};
