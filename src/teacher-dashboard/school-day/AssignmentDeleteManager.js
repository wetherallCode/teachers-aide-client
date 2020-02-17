import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import StudentInfoMutatorButton from '../class-tool-components/StudentInfoMutatorButton'
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

const AssignmentDeleteManager = ({ period, date, assignedHomework, assignedTest }) => {
	const [deleteButtonToggle, setDeleteButtonToggle] = useState(false)
	console.log(period, date, assignedHomework, assignedTest)

	const [removeTest, { data }] = useMutation(DELETE_TEST, {
		refetchQueries: ['findClassPeriodForClassManagerDisplay'],
		onCompleted: data => console.log(data)
	})

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
					<div>Delete {assignedTest.readingSections}</div>
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
		</div>
	)
}

export default AssignmentDeleteManager
