import { AdminLayout } from "../../layout/AdminLayout";
import { AppLayout } from "../../layout/AppLayout";

export const BookingsPage = () => {
  return (
    <AppLayout isLanding={false}>
      <AdminLayout>
        <div>BookingsView</div>
      </AdminLayout>
    </AppLayout>
  );
};
