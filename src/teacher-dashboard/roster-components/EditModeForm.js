import React, { useState } from 'react'
import { GET_PERIOD_NAMES } from './rosterNavigation'
import { useMutation, useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import DaysAbsent from './DaysAbsent'

export const UPDATE_STUDENT_MUTATION = gql`
	mutation update($input: UpdateStudentInput!) {
		updateStudent(input: $input) {
			firstName
			lastName
			period
			desk
			responsibilityPoints
			teacher
			learningStyle
		}
	}
`

const ADD_LEARNING_STYLE = gql`
	mutation addLearningStyle($_id: ID!, $learningStyle: String!) {
		addLearningStyle(_id: $_id, learningStyle: $learningStyle) {
			firstName
			lastName
			learningStyle
		}
	}
`

const EditModeForm = ({ studentInfo, isEditStudentMode, setIsEditStudentMode }) => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <h3>Loading</h3>
	if (error) console.log(error)

	return (
		<EditStudentInfo
			periodName={data.periodName.enumValues.map(period => period.name)}
			studentInfo={studentInfo}
			isEditStudentMode={isEditStudentMode}
			setIsEditStudentMode={setIsEditStudentMode}
		/>
	)
}

const EditStudentInfo = ({
	studentInfo,
	periodName,
	history,
	isEditStudentMode,
	setIsEditStudentMode
}) => {
	const [addLearningStyleToggle, setAddLearningStyleToggle] = useState(false)

	const {
		_id,
		firstName,
		lastName,
		period,
		desk,
		responsibilityPoints,
		teacher,
		learningStyle
	} = studentInfo

	const [updatedStudent, setupdatedStudent] = useState({
		_id: _id,
		schoolID: studentInfo.schoolID,
		firstName: firstName,
		lastName: lastName,
		nickName: studentInfo.nickName || '',
		period: period,
		desk: desk,
		responsibilityPoints: responsibilityPoints,
		teacher: teacher,
		learningStyle: 'Unknown'
	})

	const [updateStudent, { error }] = useMutation(UPDATE_STUDENT_MUTATION, {
		variables: {
			input: {
				_id: updatedStudent._id,
				schoolID: updatedStudent.schoolID,
				firstName: updatedStudent.firstName,
				lastName: updatedStudent.lastName,
				nickName: updatedStudent.nickName,
				period: updatedStudent.period,
				desk: updatedStudent.desk,
				responsibilityPoints: updatedStudent.responsibilityPoints,
				teacher: updatedStudent.teacher,
				learningStyle: updatedStudent.learningStyle
			}
		},
		refetchQueries: ['getStudentInfo', 'rosterList', 'roster', 'FindStudent']
	})

	if (error) console.error(error)

	return (
		<div>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={e => {
					e.preventDefault()
					updateStudent()
					setIsEditStudentMode(!isEditStudentMode)
				}}>
				<div>
					First Name:{' '}
					<input
						style={{ backgroundColor: 'var(--white)' }}
						name='firstName'
						placeholder={updatedStudent.firstName}
						type='text'
						value={updatedStudent.firstName}
						onChange={e => setupdatedStudent({ ...updatedStudent, firstName: e.target.value })}
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
						onChange={e => setupdatedStudent({ ...updatedStudent, lastName: e.target.value })}
					/>
				</div>
				<div>
					Nick Name:{' '}
					<input
						style={{ backgroundColor: 'var(--white)' }}
						name='lastName'
						placeholder={updatedStudent.nickName}
						type='text'
						value={updatedStudent.nickName}
						onChange={e => setupdatedStudent({ ...updatedStudent, nickName: e.target.value })}
					/>
				</div>
				<div>
					School ID:{' '}
					<input
						style={{ backgroundColor: 'var(--white)' }}
						name='schoolID'
						placeholder='School ID'
						type='text'
						value={updatedStudent.schoolID}
						onChange={e => setupdatedStudent({ ...updatedStudent, schoolID: e.target.value })}
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
						onChange={e =>
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
						onChange={e =>
							setupdatedStudent({
								...updatedStudent,
								responsibilityPoints: parseInt(e.target.value, 10)
							})
						}
					/>
				</div>
				<div>
					Class Period:{' '}
					<select
						style={{ backgroundColor: 'var(--white)' }}
						value={period}
						onChange={e => setupdatedStudent({ ...updatedStudent, period: e.target.value })}>
						{periodName.map(period => (
							<option key={period} value={period}>
								Period {period}
							</option>
						))}
					</select>
				</div>
				<div>
					Teacher's Name:
					<input
						style={{ backgroundColor: 'var(--white)' }}
						type='text'
						name='teacher'
						placeholder={updatedStudent.teacher}
						value={updatedStudent.teacher}
						onChange={e => setupdatedStudent({ ...updatedStudent, teacher: e.target.value })}
					/>
				</div>

				<div>
					Learning Style:
					<input
						style={{ backgroundColor: 'var(--white)' }}
						type='text'
						name='learning style'
						placeholder={updatedStudent.learningStyle}
						value={updatedStudent.learningStyle}
						onChange={e =>
							setupdatedStudent({ ...updatedStudent, learningStyle: e.target.value })
						}></input>
				</div>

				<div style={{ display: 'flex' }}>
					<button className='blueButton' type='submit'>
						Edit Student
					</button>
				</div>
			</form>
		</div>
	)
}
export default EditModeForm
