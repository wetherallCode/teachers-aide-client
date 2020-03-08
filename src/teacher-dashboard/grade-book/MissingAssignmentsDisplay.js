import React, { useState } from 'react'
import MissingOEQDisplay from './MissingOEQDisplay'
import MissingCriticalThinkingGuideDisplay from './MissingCriticalThinkingGuideDisplay'

const MissingAssignmentsDisplay = ({ student, period, todaysDate }) => {
	return (
		<div style={{ overflow: 'scroll' }}>
			<div>Open Ended Questions: </div>
			{student.hasAssignments
				.filter(
					assignment =>
						assignment.missing &&
						assignment.markingPeriod === 'THIRD' &&
						assignment.dueDate <= todaysDate &&
						assignment.assignmentType === 'OEQ'
				)
				.map((assignment, i) => (
					<MissingOEQDisplay key={i} assignment={assignment} period={period} />
					// <div key={i}>{assignment.readingSections}</div>
				))}
			<div>Critical Thinking Guides: </div>
			{student.hasAssignments
				.filter(
					assignment =>
						assignment.missing &&
						assignment.markingPeriod === 'THIRD' &&
						assignment.dueDate <= todaysDate &&
						assignment.assignmentType === 'THINKING_GUIDE'
				)
				.map((assignment, i) => (
					<MissingCriticalThinkingGuideDisplay key={i} assignment={assignment} period={period} />
					// <div key={i}>{assignment.readingSections}</div>
				))}
		</div>
	)
}

export default MissingAssignmentsDisplay
