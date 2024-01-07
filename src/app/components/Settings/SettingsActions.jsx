import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Actions = ({ values }) => {
  const onUpdate = (id) => {
    console.log("Updating..." + id)
  }

  const onDelete = (id) => {
    console.log("Removing..." + id)
  }

  const onActivate = (id) => {
    console.log("Activating..." + id)
  }

  return (
    <>
      <button onClick={() => onUpdate(values)} className="btn btn-dark mr-2 mt-2">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={() => onActivate(values)} className="btn btn-warning mr-2 mt-2" title="Activar/Desactivar">
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </button>
      <button onClick={() => onDelete(values)} className="btn btn-danger mr-2 mt-2">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  )
}
