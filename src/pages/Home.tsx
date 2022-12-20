import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import getUserId from "../functions/getUserId";
import UserInterface from "../types/userInterface";

const Home: React.FC = () => {
	const id = getUserId();
	const [User, setUser] = useState(id);
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (loggedInUser && loggedInUser !== "-1") {
			const id = getUserId();
			setUser(id);
			navigate("/palettes");
		}
	}, []);
	return (
		<>
			<main>
				<LoginForm />
			</main>
		</>
	);
};

export default Home;
