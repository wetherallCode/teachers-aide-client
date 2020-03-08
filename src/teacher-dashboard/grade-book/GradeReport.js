import React, { useState, useEffect } from 'react'
import MissingAssignmentsDisplay from './MissingAssignmentsDisplay'

const GradeReport = ({ student, period, todaysDate }) => {
	const [reportToggle, setReportToggle] = useState('rundown')

	return (
		<div style={{ height: '30vh' }}>
			<div style={{ fontSize: '1.5em', display: 'flex', justifyContent: 'space-evenly' }}>
				<div onClick={() => setReportToggle('missingAssignments')}>Missing Assingments</div>
				<div onClick={() => setReportToggle('rundown')}>Marking Period Rundown </div>
			</div>
			{reportToggle === 'missingAssignments' && (
				<MissingAssignmentsDisplay student={student} period={period} todaysDate={todaysDate} />
			)}
		</div>
	)
}

export default GradeReport
