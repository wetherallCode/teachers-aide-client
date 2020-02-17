import React, { useState } from 'react'
import { CSVLink } from 'react-csv'
import TestGradeDownloaderGrid from './TestGradeDownloaderGrid'

const TestGradeDownloader = ({
	roster,
	classPeriods,
	markingPeriods,
	currentMarkingPeriod,
	period
}) => {
	const [rosterList, setRosterList] = useState([])
	const [csvToggle, setCsvToggle] = useState(false)
	const [markingPeriodSelector, setMarkingPeriodSelector] = useState(currentMarkingPeriod)
	const headers = [
		{ label: 'STUDENTID', key: 'STUDENTID' },
		{ label: 'GRADE', key: 'GRADE' },
		{ label: 'ABSENT', key: 'ABSENT' },
		{ label: 'EXEMPT', key: 'EXEMPT' },
		{ label: 'INCOMPLETE', key: 'INCOMPLETE' },
		{ label: 'MISSING', key: 'MISSING' }
	]
	const title = 'test_grades_'
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
					<div style={{ marginLeft: '2%' }}>Test Grade Downloader</div>
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
							filename={title + markingPeriodSelector + '_marking_period' + '_' + period}
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
			<TestGradeDownloaderGrid
				roster={roster}
				setRosterList={setRosterList}
				csvToggle={csvToggle}
				markingPeriods={markingPeriods}
				currentMarkingPeriod={currentMarkingPeriod}
				markingPeriodSelector={markingPeriodSelector}
				setMarkingPeriodSelector={setMarkingPeriodSelector}
			/>
		</div>
	)
}

export default TestGradeDownloader
