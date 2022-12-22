import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Home: React.FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (loggedInUser && loggedInUser !== "-1") {
			navigate("/palettes");
		}
	});
	return (
		<>
			<main>
				<LoginForm />
			</main>
		</>
	);
};

export default Home;
