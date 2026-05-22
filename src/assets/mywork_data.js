import youtube_img from "../assets/uselessleaf.jpg";
import dmoj_img from "../assets/dmoj.svg";
import job1 from "../assets/youngengineers.png";
import job2 from "../assets/codeninjas.jpg";
import snowballistic from "../assets/snowballistic small.png";

const mywork_data = [
	{
		time: "2020 - Present",
		name: "YouTube Channel",
		desc: "a variety of games",
		img: youtube_img,
		link: "https://www.youtube.com/@uselessleaf",
		para: "edited shorts, montages, compilations, and gameplay videos for a variety of games like ZombsRoyale.io and TETR.IO. formerly active in both communities and connected with fellow gamers",
		category: "project",
		bullets: [
			"edited shorts, montages, compilations, and gameplay videos",
			"grew active presence in ZombsRoyale.io and TETR.IO communities",
			"connected with content creators and fellow gamers",
		],
		tags: ["video editing", "content creation", "gaming"],
	},
	{
		time: "2019 - Present",
		name: "Competitive Programming",
		desc: "former solver and problem setter, now teacher",
		img: dmoj_img,
		link: "https://dmoj.ca/user/uselessleaf",
		para: "active member in dmoj community; problem set in the biggest contest on DMOJ. participated in CCC senior twice, received disctinction award both times. see resources > coding > my journey for more info",
		category: "project",
		bullets: [
			"active DMOJ community member and problem setter",
			"problem set in the largest contest on DMOJ",
			"participated in CCC Senior twice, received distinction award both times",
			"now teaching competitive programming to students",
		],
		tags: ["C++", "Python", "algorithms", "DMOJ", "CCC"],
	},
	{
		time: "2024",
		name: "Robotics Camp Supervisor",
		desc: "with Young Engineers",
		img: job1,
		link: "https://youngengineers.org/",
		para: "developed and taught engineering/STEM curriculum to children of ages 4-10. managed 15+ counselors and guided 100+ students in robotics projectics. designed and implemented daily lesson, crafts, activities focused on robotics, programming, and engineering principles",
		category: "work",
		bullets: [
			"developed and taught engineering/STEM curriculum for children ages 4–10",
			"managed 15+ counselors across camp sessions",
			"guided 100+ students in robotics and programming projects",
			"designed daily lessons, crafts, and activities around robotics and engineering principles",
		],
		tags: ["STEM", "curriculum design", "team management", "robotics"],
	},
	{
		time: "2025",
		name: "Code Sensei / App Developer",
		desc: "with Code Ninjas",
		img: job2,
		link: "https://www.codeninjas.com/",
		para: "taught game development coding curriculum on various platforms such as Microsoft MakeArcade, Roblox, and Unity. currently working on some app development",
		category: "work",
		bullets: [
			"taught game development curriculum on MakeArcade, Roblox, and Unity",
			"mentored students through game design and basic programming concepts",
			"currently building internal app development projects",
		],
		tags: ["Unity", "Roblox", "JavaScript", "C#", "game development"],
	},
	{
		time: "2025",
		name: "Snowballistic",
		desc: "2D platformer game made in Unity",
		img: snowballistic,
		link: "https://grakp.itch.io/snowballistic",
		para: "waterloo game jam 2025 project. made in Unity. implemented mechanics such as shooting snowballs, menu navigation, and sound effects. also designed ui/ux for the game",
		category: "project",
		bullets: [
			"built at Waterloo Game Jam 2025 in Unity over a weekend",
			"implemented snowball shooting mechanics, menu navigation, and sound effects",
			"designed UI/UX for the full game experience",
		],
		tags: ["Unity", "C#", "game jam", "2D platformer", "UI/UX"],
	},
];

export default mywork_data;
