import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../hooks/useUiStore";

export const Actions = ({ values }) => {

  const { startOpenModal } = useUiStore();

  const onUpdate = (id) => {
    // TODO: Find review and set to active...
    startOpenModal();
    console.log(id);
  }

  const onDelete = (id) => {
    console.log(id);
  }

  return (
    <>
      <button onClick={() => onUpdate(values)} className="btn btn-info mr-2 mt-2">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={() => onDelete(values)} className="btn btn-danger mt-2"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  )
}
