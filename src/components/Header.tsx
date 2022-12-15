import React from "react";
import { AppHeaderSC, AppTitleSC } from "../styles/styledComponents";
import NavBar from "./NavBar";

const Header: React.FC = () => {
	return (
		<AppHeaderSC>
			<AppTitleSC>Colours</AppTitleSC>
			<NavBar />
		</AppHeaderSC>
	);
};

export default Header;
