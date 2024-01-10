import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,} from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../hooks/useUiStore";
import { alertInfo } from "../../../helpers";


export const Actions = ({ values }) => {

  const { startOpenModal } = useUiStore();


  const onUpdate = (id) => {
    // TODO: Start Find Service
    startOpenModal();
  }

  const onDelete = (id) => {
    // TODO: Start Find Service
    const logoutInfo = alertInfo("¿Seguro que eliminar el Servicio?", "info", "Si");
    Swal.fire(logoutInfo).then((result) => {
      if (result.isConfirmed) return // TODO: startDeleting...
    });
  }

  return (
    <>
      <button onClick={() => onUpdate(values)} className="btn btn-dark mr-2 mt-2">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button
        className="btn btn-danger mt-2"
        onClick={() => onDelete(values)}
        title="Eliminar"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

    </>
  )
}
