import { React, useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Footer from "./Components/Footer/Footer";
import Cubing from "./Components/Resources/Cubing/Cubing";
import Coding from "./Components/Resources/Coding/Coding";
import TableTennis from "./Components/Resources/TableTennis/TableTennis";
import Games from "./Components/Resources/Games/Games";
import Blog from "./Components/Blog/Blog";
import Error from "./Components/404Page/pagenotfound";

import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Navbar />
			<div style={{ flex: 1 }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cubing" element={<Cubing />} />
				<Route path="/coding" element={<Coding />} />
				<Route path="/tt" element={<TableTennis />} />
				<Route path="/games" element={<Games />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="*" element={<Error />} />
			</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
