import { NavBar } from "../../ui";
import { HeaderSection } from "./";

export const Header = () => {
  return (
    <header id="home">
      <div className="container-fluid">
        <NavBar />
        <HeaderSection />
      </div>
    </header>
  )
}
