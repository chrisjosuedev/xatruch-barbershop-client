import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { Table } from "../"
import { Actions } from "./ReviewActions";

const columns = [
  {
    header: "Título",
    accessorKey: "title"
  },
  {
    header: "Review",
    accessorKey: "review"
  },
  {
    header: "¿Aprobada?",
    accessorKey: "isApproved",
    cell: (props) => (
      (props.getValue() ? 
        <FontAwesomeIcon className="text-success" icon={faThumbsUp} /> : 
        <FontAwesomeIcon className="text-danger" icon={faThumbsDown} />)
    )
  },
  {
    header: "",
    accessorKey: "id",
    cell: (props) => (<Actions values={props.getValue()} />)
  }
];

export const ReviewsTable = ({ data }) => {
  return (
    <Table
      data={data}
      columns={columns}
      filterBy={"Título, review..."}
    />
  )
}