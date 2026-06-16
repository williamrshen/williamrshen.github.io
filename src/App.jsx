import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Footer from "./Components/Footer/Footer";
import Coding from "./Components/Resources/Coding/Coding";
import Hobbies from "./Components/Hobbies/Hobbies";
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
				<Route path="/coding" element={<Coding />} />
				<Route path="/hobbies" element={<Hobbies />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="*" element={<Error />} />
			</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
