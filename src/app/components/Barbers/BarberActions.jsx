import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../hooks/useUiStore";
import { alertInfo } from "../../../helpers";
import { useBarberStore } from "../../../hooks";

export const Actions = ({ values }) => {
  const { startOpenModal } = useUiStore();
  const { startFindBarber, startDeleting } = useBarberStore();

  const onUpdate = (id) => {
    startFindBarber(id);
    startOpenModal();
  };

  const onDelete = (id) => {
    startFindBarber(id);
    const logoutInfo = alertInfo(
      "¿Seguro que dar de baja al barbero?",
      "info",
      "Si",
    );
    Swal.fire(logoutInfo).then((result) => {
      if (result.isConfirmed) return startDeleting(id);
    });
  };

  return (
    <>
      <button
        onClick={() => onUpdate(values)}
        className="btn btn-dark mr-2 mt-2"
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button
        className="btn btn-info mt-2"
        onClick={() => onDelete(values)}
        title="Deshabilitar"
      >
        <FontAwesomeIcon icon={faUserSlash} />
      </button>
    </>
  );
};
