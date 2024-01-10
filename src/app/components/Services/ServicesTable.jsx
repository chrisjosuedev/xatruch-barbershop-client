import { Table } from ".."
import { Actions } from "./ServicesActions";

const columns = [
  {
    header: "Servicio",
    accessorKey: "serviceName"
  },
  {
    header: "Precio",
    accessorKey: "price",
    cell: (props) => props.getValue().toFixed(2)
  },
  {
    header: "",
    accessorKey: "id",
    cell: (props) => (<Actions values={props.getValue()} />)
  }
];

export const ServicesTable = ({ data }) => {
  return (
    <Table
      data={data}
      columns={columns}
      filterBy={"Nombre del Servicio, precio..."}
    />
  )
}
