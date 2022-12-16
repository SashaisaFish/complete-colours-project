import React from "react";
import {
	LoginFormSC,
	LoginInputSC,
	LoginLabelSC,
	SubmitSC,
} from "../styles/styledComponents";

const LoginForm: React.FC = () => {
	return (
		<LoginFormSC action="http://127.0.0.1:8000/login" method="POST">
			<LoginLabelSC htmlFor="username-input">Username:</LoginLabelSC>
			<LoginInputSC
				type="text"
				name="username-input"
				id="username-input"
				required
			/>
			<LoginLabelSC htmlFor="password-input">Password:</LoginLabelSC>
			<LoginInputSC
				type="password"
				name="password-input"
				id="password-input"
				required
			/>
			<SubmitSC value="Login" />
		</LoginFormSC>
	);
};

export default LoginForm;
