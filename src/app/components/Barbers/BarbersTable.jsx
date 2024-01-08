import { Table } from ".."
import { Actions } from "./BarberActions";

const columns = [
  {
    header: "Nombre Completo",
    accessorKey: "fullName"
  },
  {
    header: "",
    accessorKey: "id",
    cell: (props) => (<Actions values={props.getValue()} />)
  }
];

export const BarbersTable = ({ data }) => {
  return (
    <Table
      data={data}
      columns={columns}
      filterBy={"Nombre Completo..."}
    />
  )
}
