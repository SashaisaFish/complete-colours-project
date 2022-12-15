import React from "react";
import NewPalette from "./pages/NewPalette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<header>Colour Swatches</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<NewPalette />} />
			</Routes>
			<footer></footer>
		</Router>
	);
}

export default App;
