import { createContext } from "react";

const UserContext = createContext({
	User: "",
	setUser: () => {
		console.log("NO USER UPDATER");
	},
});

export default UserContext;
