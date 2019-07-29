import React from 'react'
import { ApolloConsumer } from '@apollo/react-hooks'

const EditModeToggle = ({ isEditStudentMode }) => {
	return (
		<ApolloConsumer>
			{(client) => (
				<button
					className='blueButton'
					type='button'
					onClick={() => client.writeData({ data: { isEditStudentMode: !isEditStudentMode } })}>
					{isEditStudentMode ? 'Go Back' : 'Edit Mode'}
				</button>
			)}
		</ApolloConsumer>
	)
}

export default EditModeToggle
