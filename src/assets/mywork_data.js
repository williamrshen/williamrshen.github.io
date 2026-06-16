import youtube_img from "../assets/uselessleaf.jpg";
import dmoj_img from "../assets/dmoj.svg";
import job1 from "../assets/youngengineers.png";
import job2 from "../assets/codeninjas.jpg";
import snowballistic from "../assets/snowballistic small.png";
export const work_data = [
	{
		time: "Fall 2025",
		name: "SQL Server/Infrastructure DBA",
		desc: "Sun Life",
		img: null,
		link: "https://www.sunlife.com/",
		para: "automated compliance mapping, developed security dashboards, and scripted identity monitoring across enterprise database infrastructure spanning MongoDB, MSSQL, PostgreSQL, Oracle, and MySQL",
		bullets: [
			"automated mapping of 400+ CIS standards to Imperva scans with OpenPyXL in Python for MongoDB, MSSQL, PostgreSQL, Oracle, MySQL — reducing manual compliance review time by 70%",
			"developed Splunk dashboards for MSSQL, Guardium Data Encryption, and Oracle Key Vault with 30+ panels monitoring suspicious logins, high traffic, and backup errors",
			"scripted Active Directory functional ID expiry monitoring in PowerShell, querying attributes via SQL for 600+ accounts across DEV, UAT, STAGE, and PROD environments",
			"researched and proposed Governance & Compliance AI Agent for Continuous Improvement, presenting feasibility, implementation, and impacts to senior leadership",
		],
		tags: ["SQL Server", "Python", "PowerShell", "Splunk", "Active Directory", "Imperva"],
	},
	{
		time: "Winter 2025",
		name: "Code Sensei / App Developer",
		desc: "Code Ninjas",
		img: job2,
		link: "https://www.codeninjas.com/",
		para: "taught game development coding curriculum on various platforms such as Microsoft MakeArcade, Roblox, and Unity. currently working on some app development",
		bullets: [
			"Developed full-stack app using Next.js, Tailwind CSS, and Firebase to display student session statistics—implemented CRUD functions on admin page, and grid display on session display page",
			"Taught various levels of game development (scripting, tilemap and sprite design, etc.) on platforms such as Microsoft MakeArcade, Roblox Studio, and Unity, to 70+ kids aged 5-12 every week",
			"Updated incomplete product information on Shopify using Shopify API for 400+ items automatically",
			"Standardized formatting of human inputted times on Excel spreadsheet automatically using regex and csv in Python, to improve data entry time by 109%",
		],
		tags: ["Unity", "Roblox", "JavaScript", "C#", "Game Development"],
	},
	{
		time: "Summer 2024",
		name: "Robotics Camp Supervisor",
		desc: "Young Engineers",
		img: job1,
		link: "https://youngengineers.org/",
		para: "developed and taught engineering/STEM curriculum to children of ages 4-10. managed 15+ counselors and guided 100+ students in robotics projectics. designed and implemented daily lesson, crafts, activities focused on robotics, programming, and engineering principles",
		bullets: [
			"developed and taught engineering/STEM curriculum for children ages 4–10",
			"managed 15+ counselors across camp sessions",
			"guided 100+ students in robotics and programming projects",
			"designed daily lessons, crafts, and activities around robotics and engineering principles",
		],
		tags: ["STEM", "Curriculum Design", "Team Management", "Robotics"],
	},
];

export const project_data = [
		{
		time: "2025",
		name: "Communal Catalogue",
		desc: "full-stack library management system",
		img: null,
		link: "https://github.com/williamrshen/library",
		para: "full-stack library management system built with React Vite and Firebase, empowering small communities to organize, track, and manage book checkouts. features webcam-based ISBN scanning and role-based admin access",
		bullets: [
			"designed and developed a full-stack library management system using React Vite and Firebase, empowering small communities to organize, track, and manage book checkouts",
			"built a webcam ISBN scanner using QuaggaJS to quickly check out books by scanning barcodes, with OpenLibrary API fetching book details automatically",
			"implemented role-based authentication with Firebase Auth to manage admin access",
		],
		tags: ["React", "Firebase", "JavaScript", "QuaggaJS", "APIs"],
	},
	{
		time: "2025",
		name: "Snowballistic",
		desc: "2D platformer game made in Unity",
		img: snowballistic,
		link: "https://grakp.itch.io/snowballistic",
		para: "waterloo game jam 2025 project. made in Unity. implemented mechanics such as shooting snowballs, menu navigation, and sound effects. also designed ui/ux for the game",
		bullets: [
			"built at Waterloo Game Jam 2025 in Unity over a weekend",
			"implemented snowball shooting mechanics, menu navigation, and sound effects",
			"designed UI/UX for the full game experience",
		],
		tags: ["Unity", "C#", "UI/UX"],
	},
	{
		time: "2024",
		name: "Gendentify",
		desc: "HackTheNorth 2024 — gender prediction ML app",
		img: null,
		link: "https://github.com/williamrshen/hackthenorth2",
		para: "hackathon project built at Hack the North 2024. full-stack web app using React, Flask, and scikit-learn to predict the gender of a given name using a machine learning model trained on 150,000 names",
		bullets: [
			"designed and developed a full-stack web app using React, Flask, and scikit-learn to predict gender from a given name",
			"built a React.js frontend to capture user input, integrated with a Flask backend API that returns predictions in real time",
			"integrated MongoDB for storing user inputs and predictions, managing data persistence on the backend",
			"trained a gender prediction model with scikit-learn on a dataset of 150,000 names",
		],
		tags: ["React", "Flask", "Python", "scikit-learn", "MongoDB", "Machine Learning"],
	},
	{
		time: "2020 - Present",
		name: "YouTube Channel",
		desc: "a variety of games",
		img: youtube_img,
		link: "https://www.youtube.com/@uselessleaf",
		para: "edited shorts, montages, compilations, and gameplay videos for a variety of games like ZombsRoyale.io and TETR.IO. formerly active in both communities and connected with fellow gamers",
		bullets: [
			"edited shorts, montages, compilations, and gameplay videos",
			"grew active presence in ZombsRoyale.io and TETR.IO communities",
			"connected with content creators and fellow gamers",
		],
		tags: ["Video Editing", "Content Creation", "Gaming"],
	},
	{
		time: "2019 - 2025",
		name: "Competitive Programming",
		desc: "former solver and problem setter, now teacher",
		img: dmoj_img,
		link: "https://dmoj.ca/user/uselessleaf",
		para: "active member in dmoj community; problem set in the biggest contest on DMOJ. participated in CCC senior twice, received disctinction award both times. see resources > coding > my journey for more info",
		bullets: [
			"active DMOJ community member and problem setter",
			"problem set in the largest contest on DMOJ",
			"participated in CCC Senior twice, received distinction award both times",
			"now teaching competitive programming to students",
		],
		tags: ["C++", "Python", "Algorithms", "DMOJ", "CCC"],
	},
];
