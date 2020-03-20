import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_STUDENT_MUTATION } from './EditModeForm'

// const HIDE_STUDENT_MUTATION = gql`
// 	mutation studentHider($_id: ID!, $isHiddenFromRoster: Boolean!) {
// 		hideStudentFromRoster(_id: $_id, isHiddenFromRoster: $isHiddenFromRoster) {
// 			firstName
// 			isHiddenFromRoster
// 		}
// 	}
// `

const StudentHider = ({ studentInfo }) => {
	// const [hideStudentFromRoster] = useMutation(HIDE_STUDENT_MUTATION, {
	// 	variables: {
	// 		_id: studentInfo._id,
	// 		isHiddenFromRoster: !studentInfo.isHiddenFromRoster
	// 	},
	// 	refetchQueries: ['getStudentInfo']
	// })
	console.log(studentInfo)
	const {
		_id,
		schoolID,
		firstName,
		lastName,
		nickName,
		desk,
		teacher,
		learningStyle,
		responsibilityPoints
	} = studentInfo

	const [updateStudent] = useMutation(UPDATE_STUDENT_MUTATION, {
		variables: {
			input: {
				_id: _id,
				schoolID: schoolID,
				firstName: firstName,
				lastName: lastName,
				nickName: nickName,
				desk: desk,
				period: 'Reserved',
				teacher: teacher,
				learningStyle: learningStyle,
				responsibilityPoints: responsibilityPoints
			}
		},
		refetchQueries: ['getStudentInfo', 'rosterList', 'roster', 'FindStudent']
	})

	return (
		<button className='blueButton' type='button' onClick={() => updateStudent()}>
			Hide Student
		</button>
	)
}

export default StudentHider
