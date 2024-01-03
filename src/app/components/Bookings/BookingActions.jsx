import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUiStore } from "../../../hooks/useUiStore";
import { useBookingStore } from "../../../hooks/useBookingStore";

export const Actions = ({ values }) => {

  const { startFindUserBookingDetail } = useBookingStore();
  const { startOpenModal  } = useUiStore();

  const onBookingDetail = (values) => {
    startFindUserBookingDetail(values);
    startOpenModal();
  }

  return (
    <>
      <button onClick={() => onBookingDetail(values)} className="btn btn-dark mr-2 mt-2">
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
    </>
  )
}
