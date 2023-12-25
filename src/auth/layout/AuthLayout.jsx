import { NavBar } from "../../ui"

export const AuthLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <NavBar />
      {children}
    </div>
  )
}
