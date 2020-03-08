import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'
import { useMutation } from '@apollo/react-hooks'

export const DELETE_TEST = gql`
	mutation removeTest($input: RemoveTestInput) {
		removeTest(input: $input) {
			students {
				firstName
				lastName
			}
			classPeriod {
				assignedDate
				period
			}
			removed
		}
	}
`
export const DELETE_ASSIGNMENT = gql`
	mutation deleteAssignment($input: DeleteAssignmentInput) {
		deleteAssignment(input: $input) {
			classPeriod {
				period
			}
			students {
				firstName
			}
		}
	}
`

const AssignmentDeleteManager = ({ period, date, assignedHomework, assignedTest }) => {
	const [deleteButtonToggle, setDeleteButtonToggle] = useState(false)
	console.log(period, date, assignedHomework, assignedTest)

	const [removeTest] = useMutation(DELETE_TEST, {
		refetchQueries: ['findClassPeriodForClassManagerDisplay']
	})

	const [deleteAssignment, { data }] = useMutation(DELETE_ASSIGNMENT, {
		refetchQueries: ['findClassPeriodForClassManagerDisplay'],
		onCompleted: data => console.log(data)
	})
	console.log(
		assignedHomework.map(assignment => assignment.assignmentType).includes('PARENT_CONTACT')
	)

	return (
		<div
			style={{
				color: 'var(--blue)',
				borderLeft: '3px solid var(--blue)',
				borderRight: '3px solid var(--blue)',
				borderBottom: '3px solid var(--blue)',
				height: '40vh'
				// display: 'grid',
				// gridTemplateRows: '1fr 4fr'
			}}>
			{assignedTest ? (
				<div>
					<div>Delete Test {assignedTest.readingSections}</div>
					{!deleteButtonToggle ? (
						<button onClick={() => setDeleteButtonToggle(true)}>Delete</button>
					) : (
						<StudentInfoMutatorButton
							mutation={removeTest}
							variables={{ assignedDate: date, period: period }}
							height={2}
							buttonDisplay={'Are You Sure'}
							buttonColor={'red'}
						/>
					)}
				</div>
			) : (
				<div>No test Assigned</div>
			)}
			{assignedHomework ? (
				<>
					<div>
						{assignedHomework
							.map(assignment => assignment.assignmentType)
							.includes('PARENT_CONTACT') && (
							<div>
								<div>Delete Parent Contact? </div>
								<button
									onClick={() =>
										deleteAssignment({
											variables: {
												input: {
													period: period,
													assignedDate: date,
													assignmentType: 'PARENT_CONTACT'
												}
											}
										})
									}>
									Yes
								</button>
							</div>
						)}
					</div>
					<div>
						{assignedHomework
							.map(assignment => assignment.assignmentType)
							.includes('EXTRA_CREDIT') && (
							<div>
								<div>Delete Extra Credit? </div>
								<button
									onClick={() =>
										deleteAssignment({
											variables: {
												input: {
													period: period,
													assignedDate: date,
													assignmentType: 'EXTRA_CREDIT'
												}
											}
										})
									}>
									Yes
								</button>
							</div>
						)}
					</div>
				</>
			) : (
				<div>No Assignments </div>
			)}
		</div>
	)
}

export default AssignmentDeleteManager
