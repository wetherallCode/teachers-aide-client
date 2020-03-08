import React, { useState } from 'react'
import IndividualAssignmentDisplay from '../IndividualAssignmentDisplay'

const AssignmentLoaderDisplay = ({
	lesson,
	date,
	markingPeriods,
	lessonValues,
	assignmentList,
	setAssignmentList,
	markingPeriodDefault
}) => {
	const [openEndedQuestion] = lesson.workDue.filter(lesson => lesson.type === 'OEQ')
	const [criticalThinking] = lesson.workDue.filter(lesson => lesson.type === 'THINKING_GUIDE')

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				backgroundColor: 'var(--white)',
				color: 'var(--blue)'
			}}>
			<IndividualAssignmentDisplay
				lesson={lesson}
				assignment={openEndedQuestion}
				date={date}
				markingPeriods={markingPeriods}
				markingPeriodDefault={markingPeriodDefault}
				assignmentList={assignmentList}
				setAssignmentList={setAssignmentList}
			/>
			<IndividualAssignmentDisplay
				lesson={lesson}
				assignment={criticalThinking}
				date={date}
				markingPeriods={markingPeriods}
				markingPeriodDefault={markingPeriodDefault}
				assignmentList={assignmentList}
				setAssignmentList={setAssignmentList}
			/>
		</div>
	)
}

export default AssignmentLoaderDisplay
