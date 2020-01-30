import React, { useState, useEffect } from 'react'
import SearchForAssignments from './SearchForAssignments'
import CriticalThinkingGridDisplay from './critical-thinking/CriticalThinkingGridDisplay'
import OEQGridDisplay from './open-ended/OEQGridDisplay'

const AssignmentGraderDisplay = ({ assignmentType, student, markingPeriodList }) => {
	const [assignmentTypeValue, setAssignmentTypeValue] = useState('OEQ')
	const [pickedDate, setPickedDate] = useState('')
	const [filteredAssignmentList, setFilteredAssignmentList] = useState([])

	const [markingPeriod, setMarkingPeriod] = useState(markingPeriodList[1])

	const filterFn = assignment => assignment.markingPeriod === markingPeriod

	useEffect(() => {
		if (pickedDate === '') {
			const list = student.hasAssignments.filter(
				assignment => assignment.assignmentType === assignmentTypeValue
			)
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

	const sortByDateAssigned = (a, b) => {
		let dateA = a.assignedDate
		let dateB = b.assignedDate

		if (dateA < dateB) {
			return -1
		}
		if (dateA > dateB) {
			return 1
		}
		return 0
	}

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
				markingPeriodList={markingPeriodList}
				markingPeriod={markingPeriod}
				setMarkingPeriod={setMarkingPeriod}
			/>
			<div style={{ textAlign: 'center', fontSize: '160%', marginBottom: '2%' }}>
				{assignmentTypeValue === 'OEQ' ? 'Open Ended Question' : 'Critical Thinking Guide'}{' '}
				Assignments
			</div>
			{assignmentTypeValue === 'OEQ' && (
				<div id='test' style={{ borderBottom: '1px solid var(--blue)' }}>
					{filteredAssignmentList
						.filter(filterFn)
						.sort(sortByDateAssigned)
						.map((assignment, i) => (
							<OEQGridDisplay key={i} assignment={assignment} student={student} />
						))}
				</div>
			)}

			{assignmentTypeValue === 'THINKING_GUIDE' && (
				<div style={{ borderBottom: '1px solid var(--blue)' }}>
					{filteredAssignmentList
						.filter(filterFn)
						.sort(sortByDateAssigned)
						.map((assignment, i) => (
							<CriticalThinkingGridDisplay key={i} assignment={assignment} student={student} />
						))}
				</div>
			)}
		</div>
	)
}

export default AssignmentGraderDisplay
