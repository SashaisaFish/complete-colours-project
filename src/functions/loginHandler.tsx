import { redirect } from "react-router-dom";

const loginHandler = () => {
	return {
		login() {
			redirect("/palettes");
		},
		logout() {
			redirect("/");
		},
	};
};

export default loginHandler;
