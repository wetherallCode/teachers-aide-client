import React, { useState, useEffect } from 'react'

const AssignmentDisplayRows = ({
	assignmentValue,
	student,
	assignmentTypeFilterValue,
	index,
	assignmentList,
	setAssignmentList,
	createCSVToggle
}) => {
	const [assignment] = student.hasAssignments.filter(
		assignment =>
			assignment.readingSections === assignmentValue &&
			assignment.assignmentType === assignmentTypeFilterValue
	)

	const [assignmentValues, setAssignmentValues] = useState({
		NAME: student.lastName + ', ' + student.firstName,
		STUDENTID: student.schoolID,
		GRADE: assignment.score,
		ABSENT: '',
		EXEMPT: '',
		INCOMPLETE: '',
		MISSING: ''
	})
	console.log(assignmentValues)
	useEffect(() => {
		if (assignment.missing) {
			setAssignmentValues({ ...assignmentValues, MISSING: 'Y' })
		}
		if (assignment.exempt) {
			setAssignmentValues({ ...assignmentValues, EXEMPT: 'Y' })
		}
	}, [assignmentValue])
	useEffect(() => {
		if (createCSVToggle) {
			if (student.schoolID !== null) {
				setAssignmentList(list => [...list, assignmentValues])
			}
		}
	}, [createCSVToggle])

	return (
		<div
			style={
				index % 2
					? {
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
					  }
					: {
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
							backgroundColor: 'var(--grey)'
					  }
			}>
			<div>{student.lastName}</div>
			<div>{student.firstName}</div>
			<div>
				{assignment.score}/{assignment.maxScore}
			</div>
			<div>{assignment.missing ? 'Missing' : ''}</div>
			<div>{assignment.exempt ? 'Exempt' : ''}</div>
		</div>
	)
}

export default AssignmentDisplayRows
