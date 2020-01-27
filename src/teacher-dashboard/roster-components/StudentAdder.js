import React, { useState } from 'react'
// import { MutationResult } from '@apollo/react-common'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GET_PERIOD_NAMES } from './rosterNavigation'
import { Link } from 'react-router-dom'
import { GET_CLASS_ROSTER } from './rosterView'
import { FIND_STUDENT_QUERY } from '../class-tool-components/StudentInfo'

// import * as ApolloTypes from './__generated__/addStudent'
// import GET_ALL_STUDENTS_QUERY from './dashboard'

const ADD_STUDENTS_MUTATION = gql`
	mutation addStudent($input: StudentDetails!) {
		addStudent(input: $input) {
			_id
			firstName
			lastName
			period
			responsibilityPoints
			desk
			teacher
			isHiddenFromRoster
			hasAssignments {
				assignmentType
			}
		}
	}
`

const StudentInfoLoader = () => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)

	if (loading) return <div className='loading'>Loading</div>
	if (error) console.log(error)

	return (
		<>
			<Link className='button' to='/dashboard'>
				Dashboard
			</Link>{' '}
			<Link className='button' to='/dashboard/roster-view'>
				Rosters
			</Link>
			<h1>Add Student</h1>
			<StudentAdder
				periodName={data.periodName.enumValues.map(period => period.name)}
				style={{ borderBottom: '1px solid var(--blue)', paddingBottom: '30px' }}
				isRosterMode={false}
			/>
		</>
	)
}

const StudentAdder = ({ periodName, isRosterMode, unUsedDesk, roster }) => {
	const [newStudent, setNewStudent] = useState({
		firstName: '',
		lastName: '',
		period: periodName,
		responsibilityPoints: 100,
		desk: '' || unUsedDesk,
		teacher: 'Wetherall',
		isHiddenFromRoster: false,
		hasAssignments: []
	})

	const {
		firstName,
		lastName,
		period,
		desk,
		responsibilityPoints,
		teacher,
		isHiddenFromRoster,
		hasAssignments
	} = newStudent
	console.log(newStudent)
	const [addStudent, { error }] = useMutation(ADD_STUDENTS_MUTATION, {
		variables: {
			input: {
				firstName,
				lastName,
				period,
				desk,
				responsibilityPoints,
				teacher,
				isHiddenFromRoster,
				hasAssignments
			}
		},
		refetchQueries: ['rosterList', 'getAllStudents', 'FindStudent'],
		update(client, { data: { addStudent } }) {
			const { classRoster } = client.readQuery({
				query: GET_CLASS_ROSTER,
				variables: { period: periodName }
			})
			client.writeQuery({
				query: GET_CLASS_ROSTER,
				variables: { period: periodName },
				data: { classRoster: [...classRoster, addStudent] }
			})
		}
	})

	if (error) {
		console.log('error', error)
	}

	return (
		<div>
			<form
				style={isRosterMode && { paddingLeft: '1%' }}
				onSubmit={e => {
					e.preventDefault()
					addStudent()
					setNewStudent({
						...newStudent,
						firstName: '',
						lastName: '',
						period: periodName,
						desk: ''
					})
				}}>
				<input
					style={
						isRosterMode && {
							paddingLeft: '1%',
							width: '20%',
							fontSize: '70%',
							fontWeight: 'bold',
							height: '25px',
							textDecoration: 'none',
							color: 'var(--blue)',
							backgroundColor: 'var(--white)'
						}
					}
					name='firstName'
					sytle={{ height: '100px' }}
					placeholder='First Name'
					type='text'
					value={newStudent.firstName}
					onChange={e => setNewStudent({ ...newStudent, firstName: e.target.value })}
				/>
				<input
					style={
						isRosterMode && {
							paddingLeft: '1%',
							width: '20%',
							fontSize: '70%',
							fontWeight: 'bold',
							height: '25px',
							textDecoration: 'none',
							color: 'var(--blue)',
							backgroundColor: 'var(--white)'
						}
					}
					name='lastName'
					placeholder='Last Name'
					type='text'
					value={newStudent.lastName}
					onChange={e => setNewStudent({ ...newStudent, lastName: e.target.value })}
				/>
				{!isRosterMode && (
					<select onChange={e => setNewStudent({ ...newStudent, period: e.target.value })}>
						{periodName.map(period => (
							<option key={period} value={period}>
								Period {period}
							</option>
						))}
					</select>
				)}
				<input
					style={
						isRosterMode && {
							paddingLeft: '1%',
							width: '10%',
							fontSize: '70%',
							fontWeight: 'bold',
							height: '25px',
							textDecoration: 'none',
							color: 'var(--grey)',
							backgroundColor: 'var(--white)'
						}
					}
					name='deskNumber'
					placeholder='Desk Number'
					type='text'
					value={newStudent.desk}
					onChange={e => setNewStudent({ ...newStudent, desk: parseInt(e.target.value, 10) })}
				/>
				{/* <input
					name='desk'
					placeholder={NewStudent.desk}
					type='number'
					min='1'
					max='24'
					value={NewStudent.desk}
					onChange={(e) => setNewStudent({ ...NewStudent, desk: parseInt(e.target.value, 10) })}
				/> */}
				<button
					style={{
						fontSize: '90%',
						height: '30px',
						width: '20%',
						textDecoration: 'none',
						color: 'var(--white)',
						backgroundColor: 'var(--blue)'
					}}
					type='submit'>
					Create Student
				</button>
			</form>
		</div>
	)
}

export { StudentInfoLoader, StudentAdder }
