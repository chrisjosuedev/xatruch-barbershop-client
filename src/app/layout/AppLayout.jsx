import { NavBar } from "../../ui";

export const AppLayout = ({ children, isLanding = true }) => {
  return (
    <>
      <NavBar isLanding={isLanding} />
      {children}
    </>
  );
};
