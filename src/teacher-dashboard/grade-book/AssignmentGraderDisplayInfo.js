import React, { useState, useEffect } from 'react'
import SearchForAssignments from './SearchForAssignments'
import CriticalThinkingGridDisplay from './critical-thinking/CriticalThinkingGridDisplay'
import OEQGridDisplay from './open-ended/OEQGridDisplay'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import IndividualTestDisplay from './test/IndividualTestDisplay'
import IndividualTestGrid from './test/IndividualTestGrid'
import { CURRENT_MARKING_PERIOD_ID } from '../../utils'
import ParentContactGraderGrid from './parent-contact/ParentContactGraderGrid'
import ExtraCreditGraderGrid from './extra-credit/ExtraCreditGraderGrid'

const GET_MARKING_PERIOD = gql`
	query findMarkingPeriodForAssignmentGrader($_id: ID!) {
		findCurrentMarkingPeriod(_id: $_id) {
			markingPeriod
		}
	}
`

const AssignmentGraderDisplayInfo = ({
	assignmentType,
	student,
	markingPeriodList,
	periodName
}) => {
	const { loading, data, error } = useQuery(GET_MARKING_PERIOD, {
		variables: { _id: CURRENT_MARKING_PERIOD_ID }
	})

	if (loading) return null
	if (error) console.error(error)

	const markingPeriod = data.findCurrentMarkingPeriod.markingPeriod
	return (
		<AssignmentGraderDisplay
			assignmentType={assignmentType}
			student={student}
			markingPeriodList={markingPeriodList}
			periodName={periodName}
			currentMarkingPeriod={markingPeriod}
		/>
	)
}

const AssignmentGraderDisplay = ({
	assignmentType,
	student,
	markingPeriodList,
	currentMarkingPeriod,
	periodName
}) => {
	const [assignmentTypeValue, setAssignmentTypeValue] = useState('OEQ')
	const [pickedDate, setPickedDate] = useState('')
	const [filteredAssignmentList, setFilteredAssignmentList] = useState([])

	const [markingPeriod, setMarkingPeriod] = useState(currentMarkingPeriod)

	const filterFn = assignment => assignment.markingPeriod === markingPeriod

	useEffect(() => {
		if (pickedDate === '') {
			const list = student.hasAssignments.filter(
				assignment => assignment.assignmentType === assignmentTypeValue
			)
			setFilteredAssignmentList([...list])
		} else {
			const list = student.hasAssignments.filter(
				assignment =>
					assignment.assignmentType === assignmentTypeValue &&
					assignment.assignedDate === pickedDate
			)
			setFilteredAssignmentList(list)
		}
	}, [pickedDate, assignmentTypeValue, student])

	useEffect(() => {
		if (assignmentTypeValue === 'TEST' && pickedDate === '') {
			const list = student.hasTests
			setFilteredAssignmentList(list)
		}
	}, [pickedDate, assignmentTypeValue, student])

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
			<div style={{ textAlign: 'center', fontSize: '160%', marginBottom: '2%', marginTop: '2%' }}>
				{assignmentTypeValue === 'OEQ'
					? 'Open Ended Question'
					: assignmentTypeValue === 'TEST'
					? 'Tests'
					: assignmentTypeValue === 'PARENT_CONTACT'
					? 'Parent Contact'
					: assignmentTypeValue === 'EXTRA_CREDIT'
					? 'Extra Credit'
					: 'Critical Thinking Guide'}
				<>{assignmentTypeValue === 'THINKING_GUIDE' && ' Assignments'} </>
				<>{assignmentTypeValue === 'OEQ' && ' Assignments'} </>
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

			{assignmentTypeValue === 'TEST' && (
				<div style={{ borderTop: '1px solid var(--blue)' }}>
					{filteredAssignmentList
						.filter(filterFn)
						.sort(sortByDateAssigned)
						.map((assignment, i) => (
							<IndividualTestGrid
								key={assignment.dueDate}
								assignment={assignment}
								student={student}
								periodName={periodName}
							/>
						))}
				</div>
			)}
			{assignmentTypeValue === 'PARENT_CONTACT' && (
				<div style={{ borderTop: '1px solid var(--blue)' }}>
					{filteredAssignmentList
						.filter(filterFn)
						.sort(sortByDateAssigned)
						.map((assignment, i) => (
							<ParentContactGraderGrid
								key={assignment.dueDate}
								assignment={assignment}
								student={student}
								periodName={periodName}
							/>
						))}
				</div>
			)}
			{assignmentTypeValue === 'EXTRA_CREDIT' && (
				<div style={{ borderTop: '1px solid var(--blue)' }}>
					{filteredAssignmentList
						.filter(filterFn)
						.sort(sortByDateAssigned)
						.map((assignment, i) => (
							<ExtraCreditGraderGrid
								key={assignment.dueDate}
								assignment={assignment}
								student={student}
								periodName={periodName}
							/>
						))}
				</div>
			)}
		</div>
	)
}

export default AssignmentGraderDisplayInfo
