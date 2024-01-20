import { Table } from '../../Table'
import { ActionAdmin } from './ActionAdmin'

const columns = [
  {
    header: 'Título',
    accessorKey: 'title',
  },
  {
    header: 'Review',
    accessorKey: 'review',
  },
  {
    header: 'Usuario',
    accessorKey: 'user',
    cell: (props) => props.getValue().fullName,
  },
  {
    header: 'Estatus',
    accessorKey: 'isApproved',
    cell: (props) =>
      props.getValue() ? (
        <span className='badge badge-success'>Publicada</span>
      ) : (
        <span className='badge badge-danger'>No aprobada</span>
      ),
  },
  {
    header: '',
    accessorKey: 'id',
    cell: (props) => <ActionAdmin values={props.getValue()} />,
  },
]

export const ReviewsAdminTable = ({ data }) => {
  return <Table data={data} columns={columns} filterBy={'Título, review...'} />
}
