import React, { useState, useEffect } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import mywork_data from "../../assets/mywork_data";

import {
	FaCube,
	FaTableTennis,
	FaMusic,
	FaGamepad,
} from "react-icons/fa";

const TABS = ["work", "projects", "hobbies"];

const hobbies = [
	{
		to: "/cubing",
		Icon: FaCube,
		label: "cubing",
		sub: "3×3 main — speedsolving and casual practice",
		para: "primarily focused on 3×3 speedsolving using CFOP. enjoy casual solves and working on improving times. occasionally explore other puzzle types.",
	},
	{
		to: "/sports",
		Icon: FaTableTennis,
		label: "sports",
		sub: "mostly table tennis, casually competitive",
		para: "play table tennis regularly and compete casually. enjoy the quick reflexes and strategy the game requires. also play other sports recreationally.",
	},
	{
		to: "/music",
		Icon: FaMusic,
		label: "music",
		sub: "casual piano and guitar",
		para: "play piano and guitar as a hobby. enjoy learning songs by ear and picking up new pieces. mostly self-taught on guitar.",
	},
	{
		to: "/gaming",
		Icon: FaGamepad,
		label: "gaming",
		sub: "relaxation + strategy games",
		para: "enjoy strategy and relaxation games in my spare time. games are a way to unwind and challenge myself in different ways.",
	},
];

const workItems = mywork_data.filter((d) => d.category === "work");
const projectItems = mywork_data.filter((d) => d.category === "project");

const Projects = () => {
	const [activeTab, setActiveTab] = useState("work");
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		setSelectedIndex(0);
	}, [activeTab]);

	const getItems = () => {
		if (activeTab === "work") return workItems;
		if (activeTab === "projects") return projectItems;
		return hobbies;
	};

	const items = getItems();
	const selected = items[selectedIndex] ?? items[0];

	return (
		<div id="projects" className="projects">
			<div className="projects-title">
				<h1>works</h1>
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
						if (activeTab === "hobbies") {
							const { Icon, label, sub } = item;
							return (
								<button
									key={label}
									className={`list-item${isActive ? " list-item--active" : ""}`}
									onClick={() => setSelectedIndex(i)}
								>
									<Icon className="list-icon" />
									<div className="list-text">
										<span className="list-name">{label}</span>
										<span className="list-sub">{sub}</span>
									</div>
								</button>
							);
						}
						return (
							<button
								key={item.name}
								className={`list-item${isActive ? " list-item--active" : ""}`}
								onClick={() => setSelectedIndex(i)}
							>
								<img src={item.img} alt={item.name} className="list-thumb" />
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
					{activeTab === "hobbies" ? (
						<>
							<selected.Icon className="detail-hero-icon" />
							<div>
								<p className="detail-time">{selected.sub}</p>
								<h2 className="detail-title">{selected.label}</h2>
							</div>
							<p className="detail-para">{selected.para}</p>
							<Link to={selected.to} className="detail-link">
								explore →
							</Link>
						</>
					) : (
						<>
							<img
								src={selected.img}
								alt={selected.name}
								className="detail-hero"
							/>
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
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
