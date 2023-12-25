import { AuthLayout } from "../layout/AuthLayout"
import { SignInView } from "../views"

export const AuthPage = () => {
  return (
    <AuthLayout>
      <SignInView />
    </AuthLayout>
  )
}
