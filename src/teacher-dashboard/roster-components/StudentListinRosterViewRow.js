import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { CurrentGradeCalculator, testTotalMaxScorePoints, testTotalScoredPoints } from '../../utils'

const StudentListinRosterViewRow = ({ student, index, markingPeriod, todaysDate }) => {
	const grade = CurrentGradeCalculator({ student, markingPeriod, todaysDate })
	const testTotalScoredPointsForGradeBook = testTotalScoredPoints({ student, markingPeriod })
	const testTotalMaxScorePointsForGradeBook = testTotalMaxScorePoints({
		student,
		markingPeriod,
		todaysDate
	})
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', color: 'var(--blue)' }}>
			<Link
				style={{ textDecoration: 'none', color: 'var(--blue)' }}
				to={`/dashboard/roster-profile/student/${student._id}`}>
				{
					<div style={{ display: 'flex' }}>
						<div>{`${index + 1} ${student.lastName}, ${student.firstName} `}</div>
					</div>
				}
			</Link>{' '}
			<div style={{ marginLeft: '2%' }}>{grade}</div>
			<div style={{ marginLeft: '2%' }}>{student.responsibilityPoints}</div>
			<div style={{ marginLeft: '2%' }}>
				{testTotalScoredPointsForGradeBook}/{testTotalMaxScorePointsForGradeBook}
			</div>
		</div>
	)
}

export default StudentListinRosterViewRow
