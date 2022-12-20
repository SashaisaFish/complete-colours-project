import React, { useState } from "react";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	createBrowserRouter,
// 	createRoutesFromElements,
// 	redirect,
// 	RouterProvider,
// 	Outlet,
// } from "react-router-dom";
// import Home from "../pages/Home";
// import Palettes from "../pages/Palettes";
// import NewPalette from "../pages/NewPalette";
// import Themes from "../pages/Themes";
// import Register from "../pages/Register";
// import Header from "../components/Header";
// import UserContext from "../contexts/userContext";
// import Root from "../pages/Root";
// import Error from "../pages/Error";

// interface ContextProps {
// 	value: {
// 		User: string;
// 		setUser: React.Dispatch<React.SetStateAction<string>>;
// 	};
// 	children: React.ReactNode;
// }

// function userLoader(setUser: React.Dispatch<React.SetStateAction<string>>) {
// 	const id = localStorage.getItem("id");
// 	if (id) {
// 		setUser(id);
// 	}
// 	return id;
// }

// const PageWithUserContext: React.FC<ContextProps> = (props) => {
// 	return (
// 		<UserContext.Provider value={props.value}>
// 			{props.children}
// 		</UserContext.Provider>
// 	);
// };

// function App() {
// 	const [User, setUser] = useState("");

// 	const router = createBrowserRouter(
// 		createRoutesFromElements(
// 			<Route
// 				path="/"
// 				element={
// 					<>
// 						<PageWithUserContext value={{ User, setUser }}>
// 							<Outlet />
// 						</PageWithUserContext>
// 					</>
// 				}
// 				errorElement={<Error />}
// 			>
// 				<Route
// 					path="/"
// 					loader={() => {
// 						const userId = userLoader(setUser);
// 						console.log(userId);
// 						if (userId) {
// 							return redirect("/palettes");
// 						} else {
// 							return;
// 						}
// 					}}
// 				/>
// 				<Route
// 					path="login"
// 					element={<Home />}
// 					loader={() => {
// 						const userId = userLoader(setUser);
// 						console.log(userId);
// 						if (userId) {
// 							return redirect("/palettes");
// 						} else {
// 							return;
// 						}
// 					}}
// 				/>
// 				<Route
// 					path="register"
// 					element={
// 						<>
// 							<Header />
// 							<Register />
// 							<footer></footer>
// 						</>
// 					}
// 					loader={() => {
// 						const userId = userLoader(setUser);
// 						if (userId) {
// 							return redirect("/palettes");
// 						} else {
// 							return;
// 						}
// 					}}
// 				/>
// 				<Route
// 					path="new"
// 					element={
// 						<>
// 							<Header />
// 							<NewPalette />
// 							<footer></footer>
// 						</>
// 					}
// 					loader={() => {
// 						const userId = userLoader(setUser);
// 						if (!userId) {
// 							return redirect("/login");
// 						} else {
// 							return;
// 						}
// 					}}
// 				/>
// 				<Route
// 					path="palettes"
// 					element={
// 						<>
// 							<Header />
// 							<Palettes />
// 							<footer></footer>
// 						</>
// 					}
// 					loader={() => {
// 						const userId = userLoader(setUser);
// 						if (!userId) {
// 							return redirect("/login");
// 						} else {
// 							return;
// 						}
// 					}}
// 				/>
// 				<Route
// 					path="themes"
// 					element={
// 						<>
// 							<Header />
// 							<Themes />
// 							<footer></footer>
// 						</>
// 					}
// 					loader={() => {
// 						const userId = userLoader(setUser);
// 						if (!userId) {
// 							return redirect("/login");
// 						} else {
// 							return;
// 						}
// 					}}
// 				/>
// 			</Route>
// 		)
// 	);
// 	return <RouterProvider fallbackElement={<Error />} router={router} />;
// }

// export default App;
