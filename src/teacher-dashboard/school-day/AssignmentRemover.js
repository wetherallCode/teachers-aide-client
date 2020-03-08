import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const REMOVE_CLASS_PERIOD = gql`
	mutation removeClassPeriodForRemoveClassPeriodButton($input: RemoveClassPeriodInput!) {
		removeClassPeriod(input: $input) {
			classPeriod {
				_id
			}
			removed
		}
	}
`

const AssignmentRemover = ({ _id, date, removeLesson, setRemoveLesson, period }) => {
	const [withAssignmentsInput, setWithAssignmentsInput] = useState(false)
	const [withTest, setWithTest] = useState(false)

	const [removeClassPeriod] = useMutation(REMOVE_CLASS_PERIOD, {
		variables: {
			input: {
				_id: _id,
				date: date,
				withAssignments: withAssignmentsInput,
				withTest: withTest,
				period: period
			}
		},
		onCompleted: data => {
			console.log(data.removeClassPeriod)
			console.log('lesson removed')
		},
		refetchQueries: [
			'findClassPeriodForClassManagerDisplay',
			'findClassPeriodByTestDueDate',
			'rosterList'
		]
	})

	return (
		<div style={{ color: 'var(--white)' }}>
			<div>Delete Assignments?</div>
			<button onClick={() => setWithAssignmentsInput(!withAssignmentsInput)}>
				{withAssignmentsInput ? 'Keep Assignments' : 'Delete Assignments'}
			</button>
			<button onClick={() => setWithTest(!withTest)}>
				{withTest ? 'Keep Test' : 'Delete Test'}
			</button>
			<button
				style={{
					backgroundColor: 'var(--blue)',
					marginLeft: '2%',
					color: 'var(--white)',
					fontSize: '130%'
				}}
				onClick={() => {
					setRemoveLesson(false)
				}}>
				Keep Lesson
			</button>
			<button
				style={{
					backgroundColor: 'var(--red)',
					marginLeft: '2%',
					color: 'var(--white)',
					fontSize: '130%'
				}}
				onClick={() => {
					removeClassPeriod()
					setRemoveLesson(false)
				}}>
				Remove
			</button>
		</div>
	)
}

export default AssignmentRemover
