import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import new_underline from "../../assets/underline.png";
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
	}, [location.pathname]);

	return (
		<div className="navbar">
			<ul className="nav-menu">
				<li className={menu === "home" ? "active" : ""}>
					<a className="anchor-link" href="/#home">
						<p>
							<FiHome />
						</p>
						<span className="nav-label">Home</span>
					</a>
					{menu === "home" && <img src={new_underline} alt="" />}
				</li>
				<li className={menu === "about" ? "active" : ""}>
					<a className="anchor-link" href="/#about">
						<p>
							<PiDetective />
						</p>
						<span className="nav-label">About</span>
					</a>
					{menu === "about" && <img src={new_underline} alt="" />}
				</li>
				<li className={menu === "portfolio" ? "active" : ""}>
					<a className="anchor-link" href="/#portfolio">
						<p>
							<FaRegFolderOpen />
						</p>
						<span className="nav-label">Portfolio</span>
					</a>
					{menu === "portfolio" && <img src={new_underline} alt="" />}
				</li>
				<li className={menu === "contact" ? "active" : ""}>
					<a className="anchor-link" href="/#contact">
						<p>
							<MdAlternateEmail />
						</p>
						<span className="nav-label">Contact</span>
					</a>
					{menu === "contact" && <img src={new_underline} alt="" />}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
