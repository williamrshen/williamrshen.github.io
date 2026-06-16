import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { FiHome } from "react-icons/fi";
import { PiDetective } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Navbar = () => {
	const [menu, setMenu] = useState("home");
	const location = useLocation();

	useEffect(() => {
		const hash = location.hash.replace("#", "");
		if (hash) setMenu(hash);

		const sections = document.querySelectorAll("section");
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setMenu(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, [location.pathname, location.hash]);

	return (
		<div className="navbar">
			<ul className="nav-menu">
				<li className={menu === "home" ? "active" : ""}>
					<a className="anchor-link" href="/#home" aria-label="Go to home section">
						<FiHome />
						<span className="nav-label">Home</span>
					</a>
				</li>
				<li className={menu === "about" ? "active" : ""}>
					<a className="anchor-link" href="/#about" aria-label="Go to about section">
						<PiDetective />
						<span className="nav-label">About</span>
					</a>
				</li>
				<li className={menu === "portfolio" ? "active" : ""}>
					<a className="anchor-link" href="/#portfolio" aria-label="Go to portfolio section">
						<FaRegFolderOpen />
						<span className="nav-label">Portfolio</span>
					</a>
				</li>
				<li className={menu === "contact" ? "active" : ""}>
					<a className="anchor-link" href="/#contact" aria-label="Go to contact section">
						<MdAlternateEmail />
						<span className="nav-label">Contact</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
