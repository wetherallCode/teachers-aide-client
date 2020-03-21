import React, { useState } from 'react'
import ResponsibilityPointsDownloader from './ResponsibilityPointsDownloader'
import OpenEndedAssignmentDownloader from './OpenEndedAssignmentDownloader'
import TestGradeDownloader from './TestGradeDownloader'

const DownloadsDisplay = ({
	roster,
	classPeriods,
	markingPeriods,
	period,
	currentMarkingPeriod
}) => {
	const [downloadCategorySelector, setDownloadCategorySelector] = useState('openEnded')
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: '130%' }}>
				<div style={{ cursor: 'pointer' }} onClick={() => setDownloadCategorySelector('openEnded')}>
					Open Ended
				</div>
				<div
					style={{ cursor: 'pointer' }}
					onClick={() => setDownloadCategorySelector('responsibility')}>
					Responsibility Points
				</div>
				<div style={{ cursor: 'pointer' }} onClick={() => setDownloadCategorySelector('test')}>
					Test Grade
				</div>
			</div>
			{downloadCategorySelector === 'responsibility' && (
				<ResponsibilityPointsDownloader roster={roster} period={period} />
			)}
			{downloadCategorySelector === 'openEnded' && (
				<OpenEndedAssignmentDownloader
					roster={roster}
					period={period}
					classPeriods={classPeriods}
					markingPeriods={markingPeriods}
					currentMarkingPeriod={currentMarkingPeriod}
				/>
			)}
			{downloadCategorySelector === 'test' && (
				<TestGradeDownloader
					roster={roster}
					period={period}
					classPeriods={classPeriods}
					markingPeriods={markingPeriods}
					currentMarkingPeriod={currentMarkingPeriod}
				/>
			)}
		</>
	)
}

export default DownloadsDisplay
