import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const FIND_ROSTER_QUERY = gql`
	query attendanceRoster($period: periodName) {
		classRoster(period: $period) {
			firstName
			lastName
			daysAbsent
		}
	}
`

const Attendance = ({ date, period }) => {
	// const todaysDate = new Date().toISOString().substring(0, 10)
	const { data, loading, error } = useQuery(FIND_ROSTER_QUERY, {
		variables: { period }
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)

	const absentStudent = data.classRoster.filter(
		student =>
			student !== null &&
			student.daysAbsent !== null &&
			student.daysAbsent.some(day => day === date)
	)

	return (
		<div style={{ margin: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '3rem',
					fontSize: '150%',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<div style={{ marginLeft: '2%' }}>Attendance</div>
			</div>
			<div
				style={{
					color: 'var(--blue)',
					border: '3px solid var(--blue)',
					display: 'grid',
					gridTemplateRows: '1fr 4fr'
				}}>
				<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '150%' }}>
					Absent Students
				</div>
				<div
					style={{
						marginTop: '2%',
						fontSize: '120%',
						display: 'flex',
						flexDirection: 'row',
						flexWrap: 'wrap'
					}}>
					{absentStudent.map((student, i) => {
						return (
							<div key={i} style={{ marginLeft: '3%' }}>
								{student.firstName + ' ' + student.lastName}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Attendance
