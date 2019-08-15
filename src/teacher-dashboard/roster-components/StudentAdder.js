import React, { useState } from 'react'
// import { MutationResult } from '@apollo/react-common'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GET_PERIOD_NAMES } from './rosterNavigation'
import { Link } from 'react-router-dom'

// import * as ApolloTypes from './__generated__/addStudent'
// import GET_ALL_STUDENTS_QUERY from './dashboard'

const ADD_STUDENTS_MUTATION = gql`
	mutation addStudent(
		$firstName: String!
		$lastName: String!
		$period: periodName!
		$desk: Int!
		$responsibilityPoints: Int!
		$teacher: String!
		$isHiddenFromRoster: Boolean!
	) {
		addStudent(
			input: {
				firstName: $firstName
				lastName: $lastName
				period: $period
				desk: $desk
				responsibilityPoints: $responsibilityPoints
				teacher: $teacher
				isHiddenFromRoster: $isHiddenFromRoster
			}
		) {
			_id
			firstName
			lastName
			period
			responsibilityPoints
			desk
			teacher
			isHiddenFromRoster
		}
	}
`

const StudentInfoLoader = () => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	console.log(data)
	if (loading) return <h3>Loading</h3>
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
				style={{ borderBottom: '1px black solid', paddingBottom: '30px' }}
				isRosterMode={false}
			/>{' '}
		</>
	)
}

const StudentAdder = ({ periodName, isRosterMode, unUsedDesk, roster }) => {
	const [NewStudent, setNewStudent] = useState({
		firstName: '',
		lastName: '',
		period: periodName[periodName] || periodName[0],
		responsibilityPoints: 100,
		teacher: 'Wetherall',
		isHiddenFromRoster: false
	})

	const {
		firstName,
		lastName,
		period,
		responsibilityPoints,
		teacher,
		isHiddenFromRoster
	} = NewStudent

	const [addStudent, { error }] = useMutation(ADD_STUDENTS_MUTATION, {
		variables: {
			firstName,
			lastName,
			period,
			desk: unUsedDesk,
			responsibilityPoints,
			teacher,
			isHiddenFromRoster
		},
		refetchQueries: ['rosterList', 'getAllStudents']
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
						...NewStudent,
						firstName: '',
						lastName: '',
						period: periodName[periodName] || periodName[0]
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
							backgroundColor: '#var(--blue)'
						}
					}
					name='firstName'
					sytle={{ height: '100px' }}
					placeholder='First Name'
					type='text'
					value={NewStudent.firstName}
					onChange={e => setNewStudent({ ...NewStudent, firstName: e.target.value })}
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
							backgroundColor: '#var(--blue)'
						}
					}
					name='lastName'
					placeholder='Last Name'
					type='text'
					value={NewStudent.lastName}
					onChange={e => setNewStudent({ ...NewStudent, lastName: e.target.value })}
				/>
				{!isRosterMode && (
					<select onChange={e => setNewStudent({ ...NewStudent, period: e.target.value })}>
						{periodName.map(period => (
							<option key={period} value={period}>
								Period {period}
							</option>
						))}
					</select>
				)}
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
