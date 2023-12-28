import { NavBar } from "../../ui"

export const AppLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	)
}
