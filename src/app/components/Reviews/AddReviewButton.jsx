import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUiStore } from "../../../hooks/useUiStore";
import { useReviewStore } from "../../../hooks/useReviewStore";

export const AddReviewButton = () => {
  const { setActiveReview } = useReviewStore();
  const { startOpenModal } = useUiStore();

  const onNewReview = () => {
    setActiveReview({
      title: "",
      review: "",
    });
    startOpenModal();
  };

  return (
    <button className="btn btn-dark btn-sm" onClick={onNewReview}>
      <FontAwesomeIcon icon={faPlus} />
      &nbsp;Nueva
    </button>
  );
};
