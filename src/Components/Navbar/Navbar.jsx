import React, { useState, useEffect } from "react";
import "./Navbar.css";
import new_underline from "../../assets/underline.png";
import { FiHome } from "react-icons/fi";
import { PiDetective } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Navbar = () => {
	const [menu, setMenu] = useState("home");

	useEffect(() => {
		const sections = document.querySelectorAll("section"); // assumes each part has <section id="...">
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5, // triggers when 50% of section is visible
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setMenu(entry.target.id); // update menu with section id
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div className="navbar">
			<ul className="nav-menu">
				<li className={menu === "home" ? "active" : ""}>
					<a className="anchor-link" href="#home">
						<p>
							<FiHome />
						</p>
					</a>
					{menu === "home" && <img src={new_underline} alt="" />}
				</li>
				<li className={menu === "about" ? "active" : ""}>
					<a className="anchor-link" href="#about">
						<p>
							<PiDetective />
						</p>
					</a>
					{menu === "about" && <img src={new_underline} alt="" />}
				</li>
				<li className={menu === "portfolio" ? "active" : ""}>
					<a className="anchor-link" href="#portfolio">
						<p>
							<FaRegFolderOpen />
						</p>
					</a>
					{menu === "portfolio" && <img src={new_underline} alt="" />}
				</li>
				<li className={menu === "contact" ? "active" : ""}>
					<a className="anchor-link" href="#contact">
						<p>
							<MdAlternateEmail />
						</p>
					</a>
					{menu === "contact" && <img src={new_underline} alt="" />}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
