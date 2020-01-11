import React, { useState } from 'react'
import IndividualAssignmentDisplay from './IndividualAssignmentDisplay'

const AssignmentLoaderDisplay = ({
	data,
	date,
	lessonValues,
	assignmentList,
	setAssignmentList
}) => {
	const [openEndedQuestion] = data.findLessonByName.workDue.filter(lesson => lesson.type === 'OEQ')
	const [criticalThinking] = data.findLessonByName.workDue.filter(
		lesson => lesson.type === 'THINKING_GUIDE'
	)

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				backgroundColor: 'var(--white)',
				color: 'var(--blue)'
			}}>
			<IndividualAssignmentDisplay
				lesson={data}
				assignment={openEndedQuestion}
				date={date}
				assignmentList={assignmentList}
				setAssignmentList={setAssignmentList}
			/>
			<IndividualAssignmentDisplay
				lesson={data}
				assignment={criticalThinking}
				date={date}
				assignmentList={assignmentList}
				setAssignmentList={setAssignmentList}
			/>
		</div>
	)
}

export default AssignmentLoaderDisplay
