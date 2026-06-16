import { useState } from 'react'
import { FaChevronDown, FaCube, FaTableTennis } from 'react-icons/fa'
import './Hobbies.css'
import hobbyStats from './hobbyStats.json'
import { LuBlocks, LuPickaxe } from 'react-icons/lu'
import hobbyEntries from './hobbyEntries'


const hobbyIcons = {
	tetris: LuBlocks,
	mcsr: LuPickaxe,
	'table-tennis': FaTableTennis,
	speedcubing: FaCube,
}

const HobbyIcon = ({ hobbyId, className }) => {
	const Icon = hobbyIcons[hobbyId] ?? FaCube
	return <Icon className={className} aria-hidden="true" />
}

const formatUpdatedAt = (dateString) => {
	if (!dateString) return 'unknown'
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
	}).format(new Date(dateString))
}

const renderSparkline = (history, accent, label = 'rating history') => {
	if (!history || history.length < 2) return null

	const width = 620
	const height = 150
	const padding = 16
	const values = history.map((point) => point.value)
	const min = Math.min(...values)
	const max = Math.max(...values)
	const spread = max - min || 1
	const step = (width - padding * 2) / (history.length - 1)
	const points = history
		.map((point, index) => {
			const x = padding + index * step
			const y = height - padding - ((point.value - min) / spread) * (height - padding * 2)
			return `${x},${y}`
		})
		.join(' ')
	const latest = history[history.length - 1]
	const peak = history.reduce((best, point) => (point.value > best.value ? point : best), history[0])

	return (
		<div className="hobby-chart" aria-label={`${label} chart`}>
			<div className="hobby-chart-head">
				<div>
					<p className="hobby-chart-label">{label}</p>
					<p className="hobby-chart-range">{history[0].label} → {latest.label}</p>
				</div>
				<div className="hobby-chart-peak">peak {peak.value}</div>
			</div>
			<svg viewBox={`0 0 ${width} ${height}`} role="img">
				<defs>
					<linearGradient id="ratingFill" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor={accent} stopOpacity="0.32" />
						<stop offset="100%" stopColor={accent} stopOpacity="0" />
					</linearGradient>
				</defs>
				<polyline
					points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
					fill="url(#ratingFill)"
					stroke="none"
				/>
				<polyline points={points} fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	)
}

const HobbyGuides = ({ hobbyId, accent, openEntryIndex, onToggleEntry }) => {
	const entries = hobbyEntries[hobbyId] ?? []

	return (
		<section className="hobby-guides" style={{ '--hobby-accent': accent }}>
			<div className="hobby-guides-header">
				<p className="hobby-guides-kicker">blogs / guides</p>
				<h3>resources</h3>
			</div>
			<div className="hobby-entry-list">
				{entries.map((entry, index) => {
					const isOpen = openEntryIndex === index
					return (
						<div key={`${entry.title}-${entry.date}`} className={`hobby-entry${isOpen ? ' hobby-entry--open' : ''}`}>
							<button
								type="button"
								className="hobby-entry-header"
								onClick={() => onToggleEntry(isOpen ? null : index)}
								aria-expanded={isOpen}
							>
								<span className="hobby-entry-title">{entry.title}</span>
								<span className="hobby-entry-date">{entry.date}</span>
								<FaChevronDown className="hobby-entry-chevron" />
							</button>
							<div className={`hobby-entry-body${isOpen ? ' hobby-entry-body--open' : ''}`} aria-hidden={!isOpen}>
								<div className="hobby-entry-body-inner">
									<p>{entry.body}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

const HobbyCard = ({ hobby, openEntryIndex, onToggleEntry }) => (
	<article id={hobby.id} className="hobby-card" style={{ '--hobby-accent': hobby.accent }}>
		<div className="hobby-card-top">
			<div className="hobby-title-block">
				<div className="hobby-icon"><HobbyIcon hobbyId={hobby.id} /></div>
				<div>
					<p className="hobby-eyebrow">{hobby.eyebrow}</p>
					<h2>{hobby.title}</h2>
				</div>
			</div>
			<a className="hobby-source" href={hobby.profileUrl} target="_blank" rel="noreferrer">
				view profile ↗
			</a>
		</div>

		<p className="hobby-blurb">{hobby.blurb}</p>

		<div className="hobby-stats-grid">
			{hobby.stats?.map((item) => (
				<div className="hobby-stat" key={`${hobby.id}-${item.label}`}>
					<p className="hobby-stat-label">{item.label}</p>
					<p className="hobby-stat-value">{item.value}</p>
					{item.detail && <p className="hobby-stat-detail">{item.detail}</p>}
				</div>
			))}
		</div>

		{renderSparkline(hobby.history, hobby.accent, hobby.historyLabel)}

		<HobbyGuides
			hobbyId={hobby.id}
			accent={hobby.accent}
			openEntryIndex={openEntryIndex}
			onToggleEntry={onToggleEntry}
		/>

		{hobby.stale && (
			<p className="hobby-warning">{hobby.error ?? 'Stats are stale because the last refresh failed.'}</p>
		)}
	</article>
)

const Hobbies = () => {
	const hobbies = hobbyStats.hobbies ?? []
	const [activeHobbyId, setActiveHobbyId] = useState(null)
	const [openEntryIndex, setOpenEntryIndex] = useState(null)
	const activeHobby = hobbies.find((hobby) => hobby.id === activeHobbyId)

	const selectHobby = (hobbyId) => {
		setActiveHobbyId((currentHobbyId) => currentHobbyId === hobbyId ? null : hobbyId)
		setOpenEntryIndex(null)
	}

	return (
		<main className="hobbies-page">
			<section className="hobbies-hero">
				<p className="hobbies-kicker">hobbies</p>
				<h1>what i grew up doing</h1>
				<p className="hobbies-intro">
					and still do now sometimes. backed by static snapshots from public stats APIs.
				</p>
				<p className="hobbies-updated">stats snapshot updated {formatUpdatedAt(hobbyStats.updatedAt)}</p>
			</section>

			<div className="hobbies-layout">
				<section className="hobbies-stage" aria-live="polite">
					{activeHobby ? (
						<HobbyCard
							hobby={activeHobby}
							openEntryIndex={openEntryIndex}
							onToggleEntry={setOpenEntryIndex}
						/>
					) : (
						<div className="hobbies-placeholder">
							<p className="hobbies-placeholder-kicker">choose a profile</p>
							<h2>pick a hobby up top!</h2>
							<p>to view stats, notes, and future related content</p>
						</div>
					)}
				</section>

				<nav className="hobbies-nav" aria-label="Choose a hobby">
					{hobbies.map((hobby) => {
						const isActive = activeHobbyId === hobby.id
						return (
							<button
								key={hobby.id}
								type="button"
								className={`hobbies-nav-pill${isActive ? ' hobbies-nav-pill--active' : ''}`}
								style={{ '--hobby-accent': hobby.accent }}
								onClick={() => selectHobby(hobby.id)}
								aria-pressed={isActive}
							>
								<span className="hobbies-nav-icon"><HobbyIcon hobbyId={hobby.id} /></span>
								<span>
									<span className="hobbies-nav-title">{hobby.title}</span>
									<span className="hobbies-nav-subtitle">{hobby.eyebrow}</span>
								</span>
							</button>
						)
					})}
				</nav>
			</div>
		</main>
	)
}

export default Hobbies
