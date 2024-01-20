import { AdminLayout } from "../layout/AdminLayout";
import { AppLayout } from "../layout/AppLayout";
import { SettingsView } from "../views";

export const AdminPanelPage = () => {
  return (
    <AppLayout isLanding={false}>
      <AdminLayout>
        <SettingsView />
      </AdminLayout>
    </AppLayout>
  );
};
