import { useEffect } from "react";
import { useReviewStore } from "../../../hooks/useReviewStore"
import { AddReviewButton, ReviewsModal, ReviewsTable } from "../../components/Reviews"

export const UserReviewsView = () => {

  const { userReviews, startLoadingUserReviews } = useReviewStore();

  /**
   * TODO: Conditional Rendering...
   */

  useEffect(() => {
    startLoadingUserReviews();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Reviews</h3>
        <hr />
      </div>
      <div className="col-md-12 mb-2">
        <AddReviewButton />
      </div>
      <div className="col-md-12">
        <ReviewsTable data={userReviews} />
      </div>
      <ReviewsModal />
    </div>
  )
}
