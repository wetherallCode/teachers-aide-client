import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import AssignmentGraderDisplay from './AssignmentGraderDisplay'
import { sortByLastName } from '../roster-components/StudentListInRosterView'
import { Link } from 'react-router-dom'

const ASSIGNMENT_TYPE = gql`
	query selectAssingmentType {
		AssignmentType: __type(name: "AssignmentType") {
			enumValues {
				name
			}
		}
	}
`
const AssignmentGrader = ({ classRoster }) => {
	const [studentID, setStudentID] = useState('')

	const { data, loading, error } = useQuery(ASSIGNMENT_TYPE)
	if (loading) return null
	if (error) console.error(error)

	const student = classRoster.find(student => student._id === studentID)

	return (
		<div style={{ display: 'grid', gridTemplateRows: '1fr 7fr', color: 'var(--blue)' }}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
					<div>Student: </div>
					<select
						style={{
							height: '1.5rem',
							width: '100%',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '100%'
						}}
						onChange={e => setStudentID(e.target.value)}>
						<option>Pick Student</option>
						{classRoster.sort(sortByLastName).map(student => (
							<option key={student._id} value={student._id}>
								{student.lastName + ', ' + student.firstName}
							</option>
						))}
					</select>
				</div>
				{student !== undefined && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',

							textDecoration: 'underline'
						}}>
						<Link
							to={`/dashboard/roster-profile/student/${student._id}`}
							style={{ fontSize: '200%', color: 'var(--blue)' }}>
							{student.firstName + ' ' + student.lastName}
						</Link>
					</div>
				)}
			</div>
			{student !== undefined && (
				<AssignmentGraderDisplay
					assignmentType={data.AssignmentType.enumValues.map(value => value.name)}
					student={student}
				/>
			)}
		</div>
	)
}

export default AssignmentGrader
