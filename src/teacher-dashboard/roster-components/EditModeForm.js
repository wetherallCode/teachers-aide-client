import React, { useState } from 'react'
import { GET_PERIOD_NAMES } from './rosterNavigation'
import { useMutation, useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const UPDATE_STUDENT_MUTATION = gql`
	mutation update(
		$_id: ID!
		$firstName: String!
		$lastName: String!
		$period: periodName!
		$desk: Int!
		$responsibilityPoints: Int!
		$teacher: String!
	) {
		updateStudent(
			_id: $_id
			firstName: $firstName
			lastName: $lastName
			period: $period
			desk: $desk
			responsibilityPoints: $responsibilityPoints
			teacher: $teacher
		) {
			firstName
			lastName
			period
			desk
			responsibilityPoints
			teacher
		}
	}
`

const EditModeForm = ({ studentInfo, isEditStudentMode }) => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <h3>Loading</h3>
	if (error) console.log(error)

	return (
		<EditStudentInfo
			periodName={data.periodName.enumValues.map((period) => period.name)}
			studentInfo={studentInfo}
			isEditStudentMode={isEditStudentMode}
		/>
	)
}

const EditStudentInfo = ({ studentInfo, periodName, history, isEditStudentMode }) => {
	const { _id, firstName, lastName, period, desk, responsibilityPoints, teacher } = studentInfo

	const [updatedStudent, setupdatedStudent] = useState({
		_id: _id,
		firstName: firstName,
		lastName: lastName,
		period: period,
		desk: desk,
		responsibilityPoints: responsibilityPoints,
		teacher: teacher,
	})

	const [updateStudent, { error }] = useMutation(UPDATE_STUDENT_MUTATION, {
		variables: {
			_id: updatedStudent._id,
			firstName: updatedStudent.firstName,
			lastName: updatedStudent.lastName,
			period: updatedStudent.period,
			desk: updatedStudent.desk,
			responsibilityPoints: updatedStudent.responsibilityPoints,
			teacher: updatedStudent.teacher,
		},
		refetchQueries: ['getStudentInfo', 'rosterList', 'roster'],
	})

	return (
		<ApolloConsumer>
			{(client) => (
				<div>
					<form
						style={{ display: 'flex', flexDirection: 'column' }}
						onSubmit={(e) => {
							e.preventDefault()
							updateStudent()
							client.writeData({ data: { isEditStudentMode: !isEditStudentMode } })
						}}>
						<div>
							First Name:{' '}
							<input
								style={{ backgroundColor: 'var(--white)' }}
								name='firstName'
								placeholder={updatedStudent.firstName}
								type='text'
								value={updatedStudent.firstName}
								onChange={(e) =>
									setupdatedStudent({ ...updatedStudent, firstName: e.target.value })
								}
							/>
						</div>

						<div>
							Last Name:{' '}
							<input
								style={{ backgroundColor: 'var(--white)' }}
								name='lastName'
								placeholder={updatedStudent.lastName}
								type='text'
								value={updatedStudent.lastName}
								onChange={(e) => setupdatedStudent({ ...updatedStudent, lastName: e.target.value })}
							/>
						</div>
						<div>
							Desk Number:{' '}
							<input
								style={{ backgroundColor: 'var(--white)' }}
								name='desk'
								placeholder={updatedStudent.desk}
								type='number'
								min='1'
								max='24'
								value={updatedStudent.desk}
								onChange={(e) =>
									setupdatedStudent({ ...updatedStudent, desk: parseInt(e.target.value, 10) })
								}
							/>
						</div>
						<div>
							Responsibility Points:{' '}
							<input
								style={{ backgroundColor: 'var(--white)' }}
								name='responsibilityPoints'
								placeholder={updatedStudent.responsibilityPoints}
								type='number'
								min='1'
								value={updatedStudent.responsibilityPoints}
								onChange={(e) =>
									setupdatedStudent({
										...updatedStudent,
										responsibilityPoints: parseInt(e.target.value, 10),
									})
								}
							/>
						</div>
						<div>
							Class Period:{' '}
							<select
								style={{ backgroundColor: 'var(--white)' }}
								onChange={(e) => setupdatedStudent({ ...updatedStudent, period: e.target.value })}>
								{periodName.map((period) => (
									<option key={period} value={period}>
										Period {period}
									</option>
								))}
							</select>
						</div>
						<div>
							Teacher's Name:{' '}
							<input
								style={{ backgroundColor: 'var(--white)' }}
								name='teacher'
								placeholder={updatedStudent.teacher}
								type='text'
								value={updatedStudent.teacher}
								onChange={(e) => setupdatedStudent({ ...updatedStudent, teacher: e.target.value })}
							/>
						</div>
						<button className='blueButton' type='submit'>
							Edit Student
						</button>
					</form>
				</div>
			)}
		</ApolloConsumer>
	)
}

export default EditModeForm
