import { AdminLayout } from "../../layout/AdminLayout"
import { AppLayout } from "../../layout/AppLayout"

export const ReviewsPage = () => {
  return (
    <AppLayout isLanding={false}>
      <AdminLayout>
        <div>ReviewsView</div>
      </AdminLayout>
    </AppLayout>
  )
}
