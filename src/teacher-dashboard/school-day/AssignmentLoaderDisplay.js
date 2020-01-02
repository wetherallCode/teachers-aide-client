import React, { useState } from 'react'
import IndividualAssignmentDisplay from './IndividualAssignmentDisplay'

const AssignmentLoaderDisplay = ({
	data,
	date,
	lessonValues,
	assignmentList,
	setAssignmentList
}) => {
	const [assignedHomework, setAssignedHomework] = useState({
		assignedDate: '',
		dueDate: '',
		readingPages: '',
		readingSections: '',
		assignmentType: ''
	})

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				backgroundColor: 'var(--white)',
				color: 'var(--blue)'
			}}>
			{data.findLessonByName.workDue.map((lesson, i) => {
				return (
					<IndividualAssignmentDisplay
						key={i}
						lesson={lesson}
						date={date}
						assignedHomework={assignedHomework}
						setAssignedHomework={setAssignedHomework}
						assignmentList={assignmentList}
						setAssignmentList={setAssignmentList}
					/>
				)
			})}
		</div>
	)
}

export default AssignmentLoaderDisplay
