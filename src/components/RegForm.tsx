import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import request from "../functions/request";
import {
	LoginFormSC,
	LoginInputSC,
	LoginLabelSC,
	LoginLinkSC,
	LoginTagSC,
	SubmitSC,
} from "../styles/styledComponents";

const RegForm: React.FC = () => {
	const [Username, setUsername] = useState<string>();
	const [Password, setPassword] = useState<string>();
	//const [UserId, setUserId] = useState(setUser.UserId);
	const navigate = useNavigate();
	return (
		<>
			<LoginFormSC
				onSubmit={async (e) => {
					e.preventDefault();
					// fetch to /register
					const data = `username=${Username}&password=${Password}`;
					const res = await request(
						"/register",
						{
							method: "POST",
						},
						data
					);
					const resData = await res.json();
					console.log("register", resData);
					if (res.ok) {
						localStorage.setItem("id", `${resData}`);
						navigate("/palettes");
					} else {
						window.alert(resData.detail);
					}
				}}
			>
				{/* these are just the inputs for username and password and onChange they setUsername/Password to the variable */}
				<LoginLabelSC htmlFor="username">Username:</LoginLabelSC>
				<LoginInputSC
					type="text"
					name="username"
					id="username"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
					required
				/>
				<LoginLabelSC htmlFor="password">Password:</LoginLabelSC>
				<LoginInputSC
					type="password"
					name="password"
					id="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					required
				/>
				<SubmitSC value="Register" />
			</LoginFormSC>
			<LoginTagSC>
				Already have an account?&nbsp;
				<LoginLinkSC to="/">Login</LoginLinkSC>
			</LoginTagSC>
		</>
	);
};

export default RegForm;
