import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Actions = ({ values }) => {
  const onBookingDetail = (values) => {
    console.log(values);
  }

  return (
    <>
      <button onClick={() => onBookingDetail(values)} className="btn btn-dark mr-2 mt-2">
        <FontAwesomeIcon icon={faInfoCircle} />
      </button>
    </>
  )
}
