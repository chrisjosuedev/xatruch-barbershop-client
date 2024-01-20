import { formatTime } from "../../../helpers";
import { Table } from "../Table";
import { Actions } from "./BookingActions";

const columns = [
  {
    header: "# Sesión",
    accessorKey: "id",
  },
  {
    header: "Fecha de Sesión",
    accessorKey: "bookingDate",
  },
  {
    header: "Hora de Sesión",
    accessorKey: "bookingTime",
    cell: (props) => formatTime(props.getValue()),
  },
  {
    header: "Barbero",
    accessorKey: "barber",
  },
  {
    header: "",
    accessorKey: "user",
    cell: (props) => {
      const { id } = props.row.original;
      return <Actions values={id} />;
    },
  },
];

export const BookingsTable = ({ data }) => {
  return (
    <Table data={data} columns={columns} filterBy={"Barbero, Sesión..."} />
  );
};
