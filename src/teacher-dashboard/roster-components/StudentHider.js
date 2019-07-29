import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const HIDE_STUDENT_MUTATION = gql`
	mutation studentHider($_id: ID!, $isHiddenFromRoster: Boolean!) {
		hideStudentFromRoster(_id: $_id, isHiddenFromRoster: $isHiddenFromRoster) {
			firstName
			isHiddenFromRoster
		}
	}
`

const StudentHider = ({ studentInfo }) => {
	const { _id, isHiddenFromRoster } = studentInfo
	const [hideStudentFromRoster] = useMutation(HIDE_STUDENT_MUTATION, {
		variables: {
			_id: studentInfo._id,
			isHiddenFromRoster: !studentInfo.isHiddenFromRoster,
		},
		refetchQueries: ['getStudentInfo'],
	})

	return (
		<button className='blueButton' type='button' onClick={() => hideStudentFromRoster()}>
			Hide Student
		</button>
	)
}

export default StudentHider
