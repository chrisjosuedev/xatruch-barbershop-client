import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../hooks/useUiStore";
import { useServiceStore } from "../../../hooks/useServiceStore";

export const Actions = ({ values }) => {
  const { startOpenModal } = useUiStore();
  const { startFindService } = useServiceStore();

  const onUpdate = (id) => {
    startFindService(id);
    startOpenModal();
  };

  return (
    <>
      <button
        onClick={() => onUpdate(values)}
        className="btn btn-dark mr-2 mt-2"
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </>
  );
};
