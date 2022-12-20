import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import {
	LogoutButtonSC,
	NavButton,
	NavContainer,
} from "../styles/styledComponents";
import UserInterface from "../types/userInterface";

const NavBar: React.FC = () => {
	//const [UserId, setUserId] = useState(setUser.UserId);
	const navigate = useNavigate();
	return (
		<NavContainer>
			<NavButton to="/new">New</NavButton>
			<NavButton to="/palettes">My Palettes</NavButton>
			<NavButton to="/themes">My Themes</NavButton>
			<NavButton
				to="/"
				onClick={() => {
					localStorage.setItem("id", "-1");
					//setUserId("-1");
					navigate("/");
				}}
			>
				Logout
			</NavButton>
		</NavContainer>
	);
};

export default NavBar;
