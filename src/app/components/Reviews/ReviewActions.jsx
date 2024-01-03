import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../hooks/useUiStore";
import { useReviewStore } from "../../../hooks/useReviewStore";
import { alertInfo } from "../../../helpers";

export const Actions = ({ values: { id, isApproved } }) => {
  const { startSetActiveUserReview, startDeletingUserReview } = useReviewStore();
  const { startOpenModal } = useUiStore();

  const onUpdate = (id) => {
    startSetActiveUserReview(id);
    startOpenModal();
  }

  const onDelete = (id) => {
    startSetActiveUserReview(id);
    const logoutInfo = alertInfo("¿Seguro que desea eliminar la review?", "info", "Si");
    Swal.fire(logoutInfo).then((result) => {
      if (result.isConfirmed) startDeletingUserReview(id);
    });
  }

  return (
    <>
      <button onClick={() => onUpdate(id)} className="btn btn-dark mr-2 mt-2">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      {
        !isApproved && (
          <button
            className="btn btn-danger mt-2"
            onClick={() => onDelete(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )
      }

    </>
  )
}
