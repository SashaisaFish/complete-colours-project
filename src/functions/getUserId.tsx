const getUserId = () => {
	const id = localStorage.getItem("id");
	if (typeof id === "string") {
		return id;
	} else {
		return "-1";
	}
};

export default getUserId;
