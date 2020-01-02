import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const REMOVE_CLASS_PERIOD = gql`
	mutation removeClassPeriodForRemoveClassPeriodButton($_id: ID!) {
		removeClassPeriod(_id: $_id) {
			classPeriod {
				_id
			}
			removed
		}
	}
`

const AssignmentRemover = ({ _id, removeLesson, setRemoveLesson }) => {
	const [removeClassPeriod] = useMutation(REMOVE_CLASS_PERIOD, {
		variables: { _id: _id },
		onCompleted: data => {
			console.log(data.removeClassPeriod)
			console.log('lesson removed')
		},
		refetchQueries: ['findClassPeriodForClassManagerDisplay']
	})

	return (
		<div style={{ color: 'var(--white)' }}>
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
