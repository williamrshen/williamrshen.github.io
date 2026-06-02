import React from "react";
import "./Contact.css";

import { CiLocationOn } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
	return (
		<div id="contact" className="contact">
			<div className="contact-title">
				<h1>contact</h1>
			</div>
			<div className="contact-section">
				<div className="contact-grid">
					<a
						href="mailto:w22shen@uwaterloo.ca"
						target="_blank"
						className="contact-card"
					>
						<CiMail />
					</a>
					<a
						href="https://www.linkedin.com/in/williamrshen/"
						target="_blank"
						className="contact-card"
					>
						<CiLinkedin />
					</a>
					<a
						href="https://github.com/williamrshen"
						target="_blank"
						className="contact-card"
					>
						<FaGithub />
					</a>
					<a 
						href="https://share.google/HULBPYJBobzXckoXQ"
						target="_blank"
						className="contact-card">
						<CiLocationOn />
					</a>
				</div>
				<div className="contact-divider" />
				<div className="contact-text">
					<h1>let us chat!</h1>
					<p>feel free to message me about anything</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
