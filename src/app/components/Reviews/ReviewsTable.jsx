import { Table } from "../";
import { Actions } from "./ReviewActions";

const columns = [
  {
    header: "Título",
    accessorKey: "title",
  },
  {
    header: "Review",
    accessorKey: "review",
  },
  {
    header: "Estatus",
    accessorKey: "isApproved",
    cell: (props) =>
      props.getValue() ? (
        <span className="badge badge-success">Publicada</span>
      ) : (
        <span className="badge badge-danger">No aprobada</span>
      ),
  },
  {
    header: "",
    accessorKey: "id",
    cell: (props) => {
      const { isApproved } = props.row.original;
      const actionsRows = {
        id: props.getValue(),
        isApproved,
      };
      return <Actions values={actionsRows} />;
    },
  },
];

export const ReviewsTable = ({ data }) => {
  return <Table data={data} columns={columns} filterBy={"Título, review..."} />;
};
