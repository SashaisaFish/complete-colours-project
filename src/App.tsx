import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	redirect,
	RouterProvider,
	Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Palettes from "./pages/Palettes";
import NewPalette from "./pages/NewPalette";
import Themes from "./pages/Themes";
import Register from "./pages/Register";
import Header from "./components/Header";
import UserContext from "./contexts/userContext";
import Root from "./pages/Root";
import Error from "./pages/Error";
import getUserId from "./functions/getUserId";
import Footer from "./components/Footer";
import loginHandler from "./functions/loginHandler";

function App() {
	// const [loaded, setLoaded] = useState(false);
	const id = getUserId();
	const [User, setUser] = useState(id);
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (loggedInUser) {
			const id = getUserId();
			setUser(id);
		}
	}, []);

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/new" element={<NewPalette />} />
				<Route path="/palettes" element={<Palettes />} />
				<Route path="/themes" element={<Themes />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
