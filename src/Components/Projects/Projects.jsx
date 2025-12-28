import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

import {
	FaBriefcase,
	FaCode,
	FaCube,
	FaTableTennis,
	FaMusic,
	FaGamepad,
} from "react-icons/fa";

const Projects = () => {
	return (
		<div id="projects" className="projects">
			<div className="projects-title">
				<h1>works</h1>
			</div>
			<div className="projects-columns">
				{/* LEFT COLUMN */}
				<div className="projects-column">
					<h2 className="column-header">experience</h2>

					<div className="info-box">
						<FaBriefcase className="info-icon" />
						<div>
							<h3>work</h3>
							<p>
								internships, technical roles, and real-world software experience
							</p>
						</div>
					</div>

					<div className="info-box">
						<FaCode className="info-icon" />
						<div>
							<h3>projects</h3>
							<p>
								personal + academic projects spanning frontend, backend, and ML
							</p>
						</div>
					</div>
				</div>

				{/* DIVIDER */}
				<div className="projects-divider" />

				{/* RIGHT COLUMN */}
				<div className="projects-column">
					<h2 className="column-header">hobbies</h2>

					<Link to="/cubing" className="info-box">
						<FaCube className="info-icon" />
						<div>
							<h3>cubing</h3>
							<p>3×3 main — speedsolving and casual practice</p>
						</div>
					</Link>

					<Link to="/sports" className="info-box">
						<FaTableTennis className="info-icon" />
						<div>
							<h3>sports</h3>
							<p>mostly table tennis, casually competitive</p>
						</div>
					</Link>

					<Link to="/music" className="info-box">
						<FaMusic className="info-icon" />
						<div>
							<h3>music</h3>
							<p>casual piano and guitar</p>
						</div>
					</Link>

					<Link to="/gaming" className="info-box">
						<FaGamepad className="info-icon" />
						<div>
							<h3>gaming</h3>
							<p>relaxation + strategy games</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
