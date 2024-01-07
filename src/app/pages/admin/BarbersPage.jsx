import { AdminLayout } from "../../layout/AdminLayout"
import { AppLayout } from "../../layout/AppLayout"

export const BarbersPage = () => {
  return (
    <AppLayout isLanding={false}>
      <AdminLayout>
        <div>BarbersView</div>
      </AdminLayout>
    </AppLayout>
  )
}
