import React from "react";
import { NavButton, NavContainer } from "../styles/styledComponents";

const NavBar: React.FC = () => {
	return (
		<NavContainer>
			<NavButton to="/new">New</NavButton>
			<NavButton to="/palettes">My Palettes</NavButton>
			<NavButton to="/themes">My Themes</NavButton>
			<NavButton
				to="/"
				onClick={() => {
					localStorage.setItem("id", "-1");
				}}
			>
				Logout
			</NavButton>
		</NavContainer>
	);
};

export default NavBar;
