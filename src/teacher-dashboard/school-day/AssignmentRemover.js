import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const REMOVE_CLASS_PERIOD = gql`
	mutation removeClassPeriodForRemoveClassPeriodButton($_id: ID!) # , $date: Date!
	{
		removeClassPeriod(_id: $_id) #  date: $date
		{
			classPeriod {
				_id
			}
			removed
		}
	}
`

const AssignmentRemover = ({ _id, date, removeLesson, setRemoveLesson }) => {
	const [withAssignmentsInput, setWithAssignmentsInput] = useState(false)
	console.log(withAssignmentsInput)
	const [removeClassPeriod] = useMutation(REMOVE_CLASS_PERIOD, {
		variables: {
			_id: _id
			//  date: date,
			//  withAssignments: withAssignmentsInput
		},
		onCompleted: data => {
			console.log(data.removeClassPeriod)
			console.log('lesson removed')
		},
		refetchQueries: ['findClassPeriodForClassManagerDisplay']
	})

	return (
		<div style={{ color: 'var(--white)' }}>
			{/* <div>Delete Assignments?</div> */}
			{/* <input
				type='checkbox'
				value={withAssignmentsInput}
				onChange={e => setWithAssignmentsInput(false)}></input> */}
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
