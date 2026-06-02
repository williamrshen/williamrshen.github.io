import React, { useState, useEffect } from "react";
import "./Projects.css";
import { work_data, project_data } from "../../assets/mywork_data";

const TABS = ["work", "projects"];

const SKILL_CATEGORIES = {
	// Languages
	"Python": "language", "C++": "language", "JavaScript": "language",
	"C#": "language", "PowerShell": "language",
	// Frameworks & libraries
	"React": "framework", "Flask": "framework", "Next.js": "framework",
	"scikit-learn": "framework", "Tailwind CSS": "framework",
	"Unity": "framework", "Roblox": "framework", "QuaggaJS": "framework",
	// Tools & platforms
	"Splunk": "tool", "Active Directory": "tool", "Imperva": "tool",
	"Git": "tool", "Shopify API": "tool", "OpenLibrary API": "tool",
	// Databases
	"SQL Server": "database", "MongoDB": "database", "Firebase": "database",
};

const getCategory = (skill) => SKILL_CATEGORIES[skill] ?? "misc";

const SKILLS = [...new Set([...work_data, ...project_data].flatMap((item) => item.tags))]
	.sort(() => Math.random() - 0.5);

const Projects = () => {
	const [activeTab, setActiveTab] = useState("work");
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		setSelectedIndex(0);
	}, [activeTab]);

	const getItems = () => {
		if (activeTab === "work") return work_data;
		return project_data;
	};

	const items = getItems();
	const selected = items[selectedIndex] ?? items[0];

	return (
		<div id="projects" className="projects">
			<div className="projects-title">
				<h1>works</h1>
			</div>

			<div className="marquee-wrapper" aria-hidden="true">
				<div className="marquee-track">
					{[...SKILLS, ...SKILLS].map((skill, i) => (
						<span key={i} className={`marquee-item marquee-item--${getCategory(skill)}`}>{skill}</span>
					))}
				</div>
			</div>

			<div className="projects-tabs">
				{TABS.map((tab) => (
					<button
						key={tab}
						className={`tab-btn${activeTab === tab ? " tab-btn--active" : ""}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>

			<div className="detail-layout">
				{/* LEFT — list */}
				<div className="detail-list">
					{items.map((item, i) => {
						const isActive = selectedIndex === i;
						return (
							<button
								key={item.name}
								className={`list-item${isActive ? " list-item--active" : ""}`}
								onClick={() => setSelectedIndex(i)}
							>
								{item.img
									? <img src={item.img} alt={item.name} className="list-thumb" />
									: <div className="list-thumb list-thumb--placeholder">{item.name[0]}</div>
								}
								<div className="list-text">
									<span className="list-time">{item.time}</span>
									<span className="list-name">{item.name}</span>
									<span className="list-sub">{item.desc}</span>
								</div>
							</button>
						);
					})}
				</div>

				{/* RIGHT — detail panel */}
				<div className="detail-panel" key={`${activeTab}-${selectedIndex}`}>
					<>
						{selected.img
							? <img src={selected.img} alt={selected.name} className="detail-hero" />
							: <div className="detail-hero detail-hero--placeholder">{selected.name[0]}</div>
						}
						<div>
							<p className="detail-time">{selected.time}</p>
							<h2 className="detail-title">{selected.name}</h2>
							<p className="detail-subtitle">{selected.desc}</p>
						</div>
						<ul className="detail-bullets">
							{selected.bullets.map((b) => (
								<li key={b}>{b}</li>
							))}
						</ul>
						<div className="detail-tags">
							{selected.tags.map((t) => (
								<span key={t} className="tag">{t}</span>
							))}
						</div>
						<a
							href={selected.link}
							target="_blank"
							rel="noreferrer"
							className="detail-link"
						>
							visit ↗
						</a>
					</>
				</div>
			</div>
		</div>
	);
};

export default Projects;
