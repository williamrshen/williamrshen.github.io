import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, '../src/Components/Hobbies/hobbyStats.json');

const ids = {
	wca: '2016SHEN13',
	mcsr: 'uselessleaf',
	tetrio: 'uselessleaf',
	ttcan: '30561',
};

const endpoints = {
	wca: `https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/refs/heads/v1/persons/${ids.wca}.json`,
	mcsr: `https://api.mcsrranked.com/users/${ids.mcsr}`,
	tetrioUser: `https://ch.tetr.io/api/users/${ids.tetrio}`,
	tetrioLeague: `https://ch.tetr.io/api/users/${ids.tetrio}/summaries/league`,
	tetrio40l: `https://ch.tetr.io/api/users/${ids.tetrio}/summaries/40l`,
	tetrioBlitz: `https://ch.tetr.io/api/users/${ids.tetrio}/summaries/blitz`,
	tetrioLeagueFlow: `https://ch.tetr.io/api/labs/leagueflow/${ids.tetrio}`,
	mcsrMatches: `https://api.mcsrranked.com/users/${ids.mcsr}/matches?count=100&type=2&sort=oldest`,
	ttcanProfile: `https://ttcan.onrender.com/api/players/${ids.ttcan}`,
};

const defaultBlurbs = {
	tetris: 'TODO: write a short blurb about your TETR.IO journey, favorite modes, and what keeps you playing.',
	mcsr: 'TODO: write a short blurb about your Minecraft speedrunning background, Ranked experience, and goals.',
	tableTennis: 'TODO: write a short blurb about your table tennis training, competitive history, and what the sport means to you.',
	speedcubing: 'TODO: write a short blurb about your speedcubing history, favorite events, and current goals.',
};

async function fetchJson(url) {
	const response = await fetch(url, {
		headers: {
			Accept: 'application/json, text/plain, */*',
			'User-Agent': 'williamrshen.github.io hobby-stats-updater',
			'X-Session-ID': 'williamrshen-github-io-hobby-stats',
		},
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText} for ${url}`);
	}

	return response.json();
}

function number(value, options = {}) {
	if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
	return new Intl.NumberFormat('en-US', options).format(Number(value));
}

function percent(value) {
	if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
	return `${(Number(value) * 100).toFixed(1)}%`;
}

function ratioPercent(wins, total) {
	if (!total) return '—';
	return `${((wins / total) * 100).toFixed(1)}%`;
}

function wcaTime(centiseconds) {
	if (!centiseconds || centiseconds < 0) return '—';
	const totalCentiseconds = Math.round(centiseconds);
	const minutes = Math.floor(totalCentiseconds / 6000);
	const seconds = Math.floor((totalCentiseconds % 6000) / 100);
	const cs = String(totalCentiseconds % 100).padStart(2, '0');
	if (minutes > 0) return `${minutes}:${String(seconds).padStart(2, '0')}.${cs}`;
	return `${seconds}.${cs}s`;
}

function millisTime(ms) {
	if (!ms || ms < 0) return '—';
	const totalMilliseconds = Math.round(ms);
	const minutes = Math.floor(totalMilliseconds / 60000);
	const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
	const milliseconds = String(totalMilliseconds % 1000).padStart(3, '0');
	return `${minutes}:${String(seconds).padStart(2, '0')}.${milliseconds}`;
}

function durationHours(seconds) {
	if (seconds === null || seconds === undefined || Number.isNaN(Number(seconds)) || Number(seconds) < 0) return '—';
	const hours = Number(seconds) / 3600;
	return `${number(Math.round(hours))}h`;
}

function tetrioTime(ms) {
	if (!ms || ms < 0) return '—';
	return `${(ms / 1000).toFixed(3)}s`;
}

function rank(value) {
	if (value === null || value === undefined || Number.isNaN(Number(value)) || Number(value) < 0) return '—';
	return `#${number(value)}`;
}

function round(value, digits = 0) {
	if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
	return Number(value).toFixed(digits);
}

function findEventRank(person, eventId, type) {
	const list = person?.rank?.[type] ?? [];
	return list.find((entry) => entry.eventId === eventId);
}

function stat(label, value, detail = '') {
	return { label, value, detail };
}

function compactHistory(ratings = []) {
	return ratings
		.slice()
		.reverse()
		.map((point) => ({
			label: point.date,
			value: point.rating,
		}));
}

function formatShortDate(timestamp) {
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}).format(new Date(timestamp));
}

function normalizeTetrioLeagueFlow(flowResponse) {
	const startTime = flowResponse?.data?.startTime;
	const points = flowResponse?.data?.points ?? [];
	return points
		.filter((point) => point.length >= 3 && point[2] !== null && point[2] !== undefined)
		.map((point) => ({
			label: formatShortDate(startTime + point[0]),
			value: Math.round(point[2]),
		}));
}

function normalizeMcsrEloHistory(matchesResponse, uuid) {
	const matches = matchesResponse?.data ?? [];
	return matches
		.slice()
		.sort((a, b) => a.date - b.date)
		.map((match) => {
			const change = match.changes?.find((entry) => entry.uuid === uuid);
			if (!change || change.eloRate === null || change.eloRate === undefined || change.change === null || change.change === undefined) return null;
			return {
				label: formatShortDate(match.date * 1000),
				value: change.eloRate + change.change,
			};
		})
		.filter(Boolean);
}

function normalizeWca(person) {
	const single333 = findEventRank(person, '333', 'singles');
	const average333 = findEventRank(person, '333', 'averages');
	const single222 = findEventRank(person, '222', 'singles');
	const oneHanded = findEventRank(person, '333oh', 'singles');

	return {
		id: 'speedcubing',
		title: 'Speedcubing',
		eyebrow: 'World Cube Association',
		icon: '🧩',
		accent: '#6EB257',
		profileUrl: `https://www.worldcubeassociation.org/persons/${ids.wca}`,
		apiUrl: endpoints.wca,
		blurb: defaultBlurbs.speedcubing,
		stats: [
			stat('3×3 single', wcaTime(single333?.best), `Canada ${rank(single333?.rank?.country)} · World ${rank(single333?.rank?.world)}`),
			stat('3×3 average', wcaTime(average333?.best), `Canada ${rank(average333?.rank?.country)} · World ${rank(average333?.rank?.world)}`),
			stat('competitions', number(person.numberOfCompetitions), `${person.country ?? 'CA'} competitor since 2016`),
		],
	};
}

function normalizeMcsr(response, matchesResponse) {
	const data = response.data;
	const season = data?.statistics?.season ?? {};
	const total = data?.statistics?.total ?? {};
	const seasonGames = season.playedMatches?.ranked ?? 0;
	const seasonWins = season.wins?.ranked ?? 0;
	const totalGames = total.playedMatches?.ranked ?? 0;
	const totalWins = total.wins?.ranked ?? 0;
	const totalLosses = total.loses?.ranked ?? 0;
	const history = normalizeMcsrEloHistory(matchesResponse, data?.uuid);

	return {
		id: 'mcsr',
		title: 'MCSR Ranked',
		eyebrow: 'Minecraft Speedrunning',
		icon: '⛏️',
		accent: '#C5E063',
		profileUrl: `https://mcsrranked.com/stats/${ids.mcsr}`,
		apiUrl: endpoints.mcsr,
		blurb: defaultBlurbs.mcsr,
		historyLabel: 'ranked elo history',
		history,
		stats: [
			stat('current elo', number(data?.eloRate), `rank ${rank(data?.eloRank)}`),
			stat('all-time best', millisTime(total.bestTime?.ranked), 'ranked RSG'),
			stat('ranked record', `${number(totalWins)}–${number(totalLosses)}`, `${ratioPercent(totalWins, totalWins + totalLosses)} win rate`),
		],
	};
}

function normalizeTetrio(userResponse, leagueResponse, sprintResponse, blitzResponse, leagueFlowResponse) {
	const user = userResponse.data;
	const league = leagueResponse.data;
	const sprint = sprintResponse.data;
	const blitz = blitzResponse.data;
	const history = normalizeTetrioLeagueFlow(leagueFlowResponse);
	return {
		id: 'tetris',
		title: 'TETR.IO',
		eyebrow: 'Competitive Tetris',
		icon: '▦',
		accent: '#8CCB6B',
		profileUrl: `https://ch.tetr.io/u/${ids.tetrio}`,
		apiUrl: `https://ch.tetr.io/api/users/${ids.tetrio}`,
		blurb: defaultBlurbs.tetris,
		historyLabel: 'tetra league tr history',
		history,
		stats: [
			stat('league rank', String(league?.rank ?? '—').toUpperCase(), `${rank(league?.standing)} global · ${rank(league?.standing_local)} Canada`),
			stat('TR', round(league?.tr, 0), `best rank ${String(league?.bestrank ?? '—').toUpperCase()}`),
			stat('APM / PPS / VS', `${round(league?.apm, 1)} / ${round(league?.pps, 2)} / ${round(league?.vs, 1)}`, 'last 10 games stats'),
			stat('40L PB', tetrioTime(sprint?.record?.results?.stats?.finaltime), `${rank(sprint?.rank_local)} Canada · ${rank(sprint?.rank)} global`),
			stat('Blitz PB', number(blitz?.record?.results?.stats?.score), `${rank(blitz?.rank_local)} Canada · ${rank(blitz?.rank)} global`),
			stat('win rate', ratioPercent(user?.gameswon, user?.gamesplayed), `${number(user?.gameswon)} / ${number(user?.gamesplayed)} games played · ${durationHours(user?.gametime)} time played`),
		],
	};
}

function normalizeTtcan(profile) {
	const ratings = profile.ratings ?? [];
	const matches = profile.matches ?? [];
	const wins = matches.filter((match) => match.won).length;
	const losses = matches.length - wins;
	const peak = ratings.reduce((best, point) => (point.rating > best.rating ? point : best), ratings[0] ?? { rating: null, date: '' });
	const latest = ratings[0];

	return {
		id: 'table-tennis',
		title: 'Table Tennis',
		eyebrow: 'TTCAN Ratings',
		icon: '🏓',
		accent: '#59BA73',
		profileUrl: endpoints.ttcanProfile,
		apiUrl: endpoints.ttcanProfile,
		blurb: defaultBlurbs.tableTennis,
		stats: [
			stat('latest rating', number(profile.latestRating), latest?.date ? `rating period ${latest.date}` : ''),
			stat('peak rating', number(peak.rating), peak.date ? `reached ${peak.date}` : ''),
			stat('record', `${number(wins)}–${number(losses)}`, `${ratioPercent(wins, matches.length)} win rate`),
		],
		historyLabel: 'rating history',
		history: compactHistory(ratings),
	};
}

async function readPreviousSnapshot() {
	try {
		const contents = await readFile(outputPath, 'utf8');
		return JSON.parse(contents);
	} catch {
		return null;
	}
}

async function main() {
	const previous = await readPreviousSnapshot();
	const generatedAt = new Date().toISOString();

	const fetches = await Promise.allSettled([
		fetchJson(endpoints.wca),
		fetchJson(endpoints.mcsr),
		fetchJson(endpoints.tetrioUser),
		fetchJson(endpoints.tetrioLeague),
		fetchJson(endpoints.tetrio40l),
		fetchJson(endpoints.tetrioBlitz),
		fetchJson(endpoints.tetrioLeagueFlow),
		fetchJson(endpoints.mcsrMatches),
		fetchJson(endpoints.ttcanProfile),
	]);

	const errors = [];
	const get = (index, label) => {
		const result = fetches[index];
		if (result.status === 'fulfilled') return result.value;
		errors.push(`${label}: ${result.reason.message}`);
		return null;
	};

	const wca = get(0, 'WCA');
	const mcsr = get(1, 'MCSR');
	const tetrioUser = get(2, 'TETR.IO user');
	const tetrioLeague = get(3, 'TETR.IO league');
	const tetrio40l = get(4, 'TETR.IO 40L');
	const tetrioBlitz = get(5, 'TETR.IO blitz');
	const tetrioLeagueFlow = get(6, 'TETR.IO league flow');
	const mcsrMatches = get(7, 'MCSR matches');
	const ttcan = get(8, 'TTCAN');

	const previousById = new Map((previous?.hobbies ?? []).map((hobby) => [hobby.id, hobby]));
	const fallback = (id, title, error) => ({
		...(previousById.get(id) ?? { id, title, stats: [], blurb: 'Stats unavailable. Try refreshing the hobby snapshot.' }),
		stale: true,
		error,
	});

	const hobbies = [
		tetrioUser && tetrioLeague && tetrio40l && tetrioBlitz
			? normalizeTetrio(tetrioUser, tetrioLeague, tetrio40l, tetrioBlitz, tetrioLeagueFlow)
			: fallback('tetris', 'TETR.IO', 'Unable to refresh TETR.IO stats.'),
		mcsr ? normalizeMcsr(mcsr, mcsrMatches) : fallback('mcsr', 'MCSR Ranked', 'Unable to refresh MCSR stats.'),
		ttcan ? normalizeTtcan(ttcan) : fallback('table-tennis', 'Table Tennis', 'Unable to refresh TTCAN stats.'),
		wca ? normalizeWca(wca) : fallback('speedcubing', 'Speedcubing', 'Unable to refresh WCA stats.'),
	];

	const hobbiesWithPreviousBlurbs = hobbies.map((hobby) => ({
		...hobby,
		blurb: previousById.get(hobby.id)?.blurb ?? hobby.blurb,
	}));

	const snapshot = {
		updatedAt: generatedAt,
		ids,
		endpoints,
		errors,
		hobbies: hobbiesWithPreviousBlurbs,
	};

	await mkdir(dirname(outputPath), { recursive: true });
	await writeFile(outputPath, `${JSON.stringify(snapshot, null, '\t')}\n`);

	if (errors.length > 0) {
		console.warn(`Generated ${outputPath} with ${errors.length} warning(s):`);
		errors.forEach((error) => console.warn(`- ${error}`));
	} else {
		console.log(`Generated ${outputPath}`);
	}
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
