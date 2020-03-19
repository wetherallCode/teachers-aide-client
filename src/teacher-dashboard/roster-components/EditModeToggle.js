import React from 'react'
import { ApolloConsumer } from '@apollo/react-hooks'

const EditModeToggle = ({ isEditStudentMode, setIsEditStudentMode }) => {
	return (
		<ApolloConsumer>
			{client => (
				<button
					className='blueButton'
					type='button'
					onClick={() => setIsEditStudentMode(!isEditStudentMode)}>
					{isEditStudentMode ? 'Go Back' : 'Edit Mode'}
				</button>
			)}
		</ApolloConsumer>
	)
}

export default EditModeToggle
