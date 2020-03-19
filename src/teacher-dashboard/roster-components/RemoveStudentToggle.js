import React from 'react'
import { useMutation, ApolloConsumer } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

// const REMOVE_STUDENT_MUTATION = gql`
// 	mutation removeStudent($_id: ID!) {
// 		removeStudent(_id: $_id) {
// 			removed
// 			student {
// 				_id
// 				firstName
// 			}
// 		}
// 	}
// `

const RemoveStudentToggle = ({ removeStudentScreen, setRemoveStudentScreen }) => {
	return (
		<button
			style={{
				fontSize: '70%',
				height: '50px',
				width: '30%',
				textDecoration: 'none',
				color: 'var(--white)',
				backgroundColor: 'var(--red)'
				// var(--blue)
			}}
			type='button'
			onClick={() => {
				setRemoveStudentScreen(removeStudentScreen)
			}}>
			{!removeStudentScreen ? 'Delete Student' : 'Go Back'}
		</button>
	)
}
export default RemoveStudentToggle
