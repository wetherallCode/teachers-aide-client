import React, { useState, useEffect } from 'react'
import SearchForAssignments from './SearchForAssignments'
import CriticalThinkingGridDisplay from './critical-thinking/CriticalThinkingGridDisplay'
import OEQGridDisplay from './open-ended/OEQGridDisplay'

const AssignmentGraderDisplay = ({ assignmentType, student }) => {
	const [assignmentTypeValue, setAssignmentTypeValue] = useState('OEQ')
	// console.log(assignmentTypeValue === 'THINKING_GUIDE')
	// console.log(
	// 	student.hasAssignments.filter(assignment => assignment.assignmentType === assignmentTypeValue)
	// )
	const [pickedDate, setPickedDate] = useState('')
	const [filteredAssignmentList, setFilteredAssignmentList] = useState([])

	useEffect(() => {
		if (pickedDate === '') {
			const list = student.hasAssignments.filter(
				assignment => assignment.assignmentType === assignmentTypeValue
			)
			console.log(list)
			setFilteredAssignmentList([...filteredAssignmentList, ...list])
		} else {
			const list = student.hasAssignments.filter(
				assignment =>
					assignment.assignmentType === assignmentTypeValue &&
					assignment.assignedDate === pickedDate
			)
			setFilteredAssignmentList(list)
		}
	}, [pickedDate, assignmentTypeValue])

	return (
		<div>
			<SearchForAssignments
				assignmentType={assignmentType}
				assignmentTypeValue={assignmentTypeValue}
				setAssignmentTypeValue={setAssignmentTypeValue}
				pickedDate={pickedDate}
				setPickedDate={setPickedDate}
				filteredAssignmentList={filteredAssignmentList}
				setFilteredAssignmentList={setFilteredAssignmentList}
			/>
			<div style={{ textAlign: 'center', fontSize: '160%', marginBottom: '2%' }}>
				{assignmentTypeValue === 'OEQ' ? 'Open Ended Question' : 'Critical Thinking Guide'}{' '}
				Assignments
			</div>
			{assignmentTypeValue === 'OEQ' && (
				<div id='test' style={{ borderBottom: '1px solid var(--blue)' }}>
					{filteredAssignmentList.map((assignment, i) => (
						<OEQGridDisplay key={i} assignment={assignment} student={student} />
					))}
				</div>
			)}

			{assignmentTypeValue === 'THINKING_GUIDE' && (
				<div style={{ borderBottom: '1px solid var(--blue)' }}>
					{filteredAssignmentList.map((assignment, i) => (
						<CriticalThinkingGridDisplay key={i} assignment={assignment} student={student} />
					))}
				</div>
			)}
		</div>
	)
}

export default AssignmentGraderDisplay
