import { createContext, useState } from "react";

interface UserContext {
	User: string;
	setUser: React.Dispatch<React.SetStateAction<string>>;
}

const userContext = createContext<UserContext | null>(null);

export default userContext;
