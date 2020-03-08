import React, { useState } from 'react'
import { CSVLink } from 'react-csv'
import ResponsibilityPointsGrid from './ResponsibilityPointsGrid'

const ResponsibilityPointsDownloader = ({ roster, period }) => {
	const [rosterList, setRosterList] = useState([])
	const [csvToggle, setCsvToggle] = useState(false)

	const title = 'responsibility_points'
	const headers = [
		{ label: 'NAME', key: 'NAME' },
		{ label: 'STUDENTID', key: 'STUDENTID' },
		{ label: 'GRADE', key: 'GRADE' },
		{ label: 'ABSENT', key: 'ABSENT' },
		{ label: 'EXEMPT', key: 'EXEMPT' },
		{ label: 'INCOMPLETE', key: 'INCOMPLETE' },
		{ label: 'MISSING', key: 'MISSING' }
	]

	return (
		<div style={{ margin: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '3rem',
					fontSize: '150%',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ marginLeft: '2%' }}>Responsibility Points Downloader </div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center'
					}}>
					{csvToggle && rosterList.length > 0 ? (
						<CSVLink
							data={rosterList}
							headers={headers}
							filename={title + '_' + period}
							target='_blank'
							style={{ marginRight: '2%', textDecoration: 'none', color: 'var(--white)' }}>
							Download
						</CSVLink>
					) : (
						<div
							onClick={() => setCsvToggle(true)}
							style={{ marginRight: '2%', textDecoration: 'none', color: 'var(--white)' }}>
							Load CSV
						</div>
					)}
				</div>
			</div>
			<ResponsibilityPointsGrid
				roster={roster}
				setRosterList={setRosterList}
				csvToggle={csvToggle}
			/>
		</div>
	)
}

export default ResponsibilityPointsDownloader
