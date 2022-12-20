import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import request from "../functions/request";
import { databasePath } from "../functions/request";
import {
	LoginFormSC,
	LoginInputSC,
	LoginLabelSC,
	LoginLinkSC,
	LoginTagSC,
	SubmitSC,
} from "../styles/styledComponents";
import UserInterface from "../types/userInterface";

interface User {
	username: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const [Username, setUsername] = useState<string>();
	const [Password, setPassword] = useState<string>();
	//const [UserId, setUserId] = useState(setUser.UserId);
	const navigate = useNavigate();
	return (
		<>
			<LoginFormSC
				// action="{`${databasePath}/login`}"
				// method="POST"
				//target="_blank"
				onSubmit={async (e) => {
					e.preventDefault();
					// const data = JSON.stringify({
					// 	username: Username,
					// 	password: Password,
					// });
					const data = `username=${Username}&password=${Password}`;

					// accidental copy paste lol
					const res = await request(
						"/login",
						{
							method: "POST",
						},
						data
					);
					const resData = await res.json();
					console.log(resData);
					if (res.ok) {
						localStorage.setItem("id", `${resData}`);
						//setUserId(`${resData}`);
						navigate("/palettes");
					} else {
						window.alert(resData.detail);
					}
				}}
			>
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
				<SubmitSC value="Login" />
			</LoginFormSC>
			<LoginTagSC>
				Don't have an account?&nbsp;
				<LoginLinkSC to="/register">Register</LoginLinkSC>
			</LoginTagSC>
		</>
	);
};

export default LoginForm;
