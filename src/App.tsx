import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Palettes from "./pages/Palettes";
import NewPalette from "./pages/NewPalette";
import Themes from "./pages/Themes";
import Register from "./pages/Register";
import Header from "./components/Header";
import UserContext from "./contexts/userContext";
import Root from "./pages/Root";

interface ContextProps {
	user: {
		User: string;
		setUser: React.Dispatch<React.SetStateAction<string>>;
	};
	children: React.ReactNode;
}

async function userLoader(
	setUser: React.Dispatch<React.SetStateAction<string>>
) {
	const id = localStorage.getItem("id");
	if (id) {
		setUser(id);
	}
}

const PageWithUserContext: React.FC<ContextProps> = (props) => {
	return (
		<UserContext.Provider value={props.user}>
			{props.children}
		</UserContext.Provider>
	);
};

function App() {
	const [User, setUser] = useState("");

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={
					<PageWithUserContext user={{ User, setUser }}>
						<Root />
					</PageWithUserContext>
				}
			>
				<Route index element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/new" element={<NewPalette />} />
				<Route path="/palettes" element={<Palettes />} />
				<Route path="/themes" element={<Themes />} />
			</Route>
		)
	);
	return (
		<Router>
			<Header />
			<Routes></Routes>
			<footer></footer>
		</Router>
	);
}

export default App;
