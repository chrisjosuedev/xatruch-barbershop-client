import { AccountLayout } from "../../layout/AccountLayout"
import { AppLayout } from "../../layout/AppLayout"
import { PasswordUpdateView } from "../../views"

export const UserPasswordPage = () => {
  return (
    <AppLayout isLanding={false}>
      <AccountLayout>
        <PasswordUpdateView />
      </AccountLayout>
    </AppLayout>
  )
}
