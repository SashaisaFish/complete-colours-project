import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import request from "../functions/request";
import { databasePath } from "../functions/request";
import {
	LoginFormSC,
	LoginInputSC,
	LoginLabelSC,
	SubmitSC,
} from "../styles/styledComponents";

interface User {
	username: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const [Username, setUsername] = useState<string>();
	const [Password, setPassword] = useState<string>();
	const [User, setUser] = useState();
	const navigate = useNavigate();
	return (
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
                    const resDate = await res.json();
                    
				// const resData = await res.json();
				// if (res.ok) {
				// 	console.log(resData);
				// 	localStorage.setItem("id", resData);
				// 	navigate("/palettes");
				// } else {
				// 	window.alert(resData.detail);
				// }
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
			<SubmitSC value="Login" />
		</LoginFormSC>
	);
};

export default LoginForm;
