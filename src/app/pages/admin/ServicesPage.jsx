import { AdminLayout } from "../../layout/AdminLayout"
import { AppLayout } from "../../layout/AppLayout"

export const ServicesPage = () => {
  return (
    <AppLayout isLanding={false}>
      <AdminLayout>
        <div>ServicesView</div>
      </AdminLayout>
    </AppLayout>
  )
}
