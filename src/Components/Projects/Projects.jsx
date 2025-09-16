import { React, useState } from "react";
import "./Projects.css";
import rectangle from "../../assets/rectangle.svg";

const items = [
  {
    title: "coding",
    description: "all around coder. frontend + ml/ai focus",
    thumbnail: "https://via.placeholder.com/300x200", // replace with your image
    link: "/coding",
  },
  {
    title: "cubing",
    description: "3x3 main. single: 4.89, ao5: 7.62, ao12: 8.63",
    thumbnail: "https://via.placeholder.com/300x200",
    link: "/cubing",
  },
  {
    title: "sports",
    description: "mostly table tennis",
    thumbnail: "https://via.placeholder.com/300x200",
    link: "/sports",
  },
];

const Projects = () => {
	return (
		<div id="projects" className="projects">
			<div className="projects-title">
				<h1>my doings</h1>
				<img src={rectangle} alt="" />
			</div>
			<div className="projects-grid">
        {items.map((proj, index) => (
          <div key={index} className="projects-card">
            <img src={proj.thumbnail} alt={proj.title} className="projects-thumbnail" />
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} className="projects-button">learn more</a>
          </div>
        ))}
      </div>
		</div>
	);
};

export default Projects;
