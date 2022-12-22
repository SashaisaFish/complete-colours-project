import React from "react";
import { AppHeaderSC, AppTitleSC } from "../styles/styledComponents";
import NavBar from "./NavBar";

const Header: React.FC = () => {
	//const [UserId, setUserId] = useState(setUser.UserId);

	return (
		<>
			<AppHeaderSC>
				<AppTitleSC>Colours</AppTitleSC>
			</AppHeaderSC>
			<NavBar />
		</>
	);
};

export default Header;
