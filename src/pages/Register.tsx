import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegForm from "../components/RegForm";
import getUserId from "../functions/getUserId";
import UserInterface from "../types/userInterface";

const Register: React.FC = () => {
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
		<main>
			<RegForm />
		</main>
	);
};

export default Register;
