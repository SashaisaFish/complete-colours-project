import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegForm from "../components/RegForm";

const Register: React.FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (loggedInUser && loggedInUser !== "-1") {
			navigate("/palettes");
		}
	});
	return (
		<main>
			<RegForm />
		</main>
	);
};

export default Register;
