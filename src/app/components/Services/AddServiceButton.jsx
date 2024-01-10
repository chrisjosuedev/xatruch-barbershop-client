import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useUiStore } from "../../../hooks/useUiStore"


export const AddServiceButton = () => {

  const { startOpenModal } = useUiStore();

  const onNewService = () => {
    // TODO: Start Setting Active
    startOpenModal();
  }

  return (
    <button
      className="btn btn-dark btn-sm"
      onClick={onNewService}
    >
      <FontAwesomeIcon icon={faPlus} />&nbsp;Nuevo
    </button>
  )
}
