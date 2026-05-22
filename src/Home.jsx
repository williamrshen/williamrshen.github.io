import React, { useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./Home.css";

const Home = () => {
	useEffect(() => {
		const sections = document.querySelectorAll(".fade-in");

		const options = {
			threshold: 0.2, 
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		}, options);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div className="snap-container">
			<section id="home" className="fade-in snap-section">
				<Hero />
			</section>
			<section id="about" className="fade-in snap-section">
				<About />
			</section>
			<section id="portfolio" className="fade-in snap-section">
				<Projects />
			</section>
			<section id="contact" className="fade-in snap-section">
				<Contact />
			</section>
		</div>
	);
};

export default Home;
