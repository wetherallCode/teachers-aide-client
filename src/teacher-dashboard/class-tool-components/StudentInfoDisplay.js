import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TodaysDate from '../../website/TodaysDate'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'

const MARK_STUDENT_ABSENT = gql`
	mutation markStudentAbsent($_id: ID!, $date: Date, $assignedDate: Date, $period: periodName) {
		markStudentAbsent(_id: $_id, date: $date, assignedDate: $assignedDate, period: $period) {
			_id
			firstName
			lastName
			period
		}
	}
`
const UNDO_MARK_STUDENT_ABSENT = gql`
	mutation unduMarkStudentAbsent($_id: ID!, $date: Date) {
		unduMarkStudentAbsent(_id: $_id, date: $date) {
			firstName
			lastName
			daysAbsent
		}
	}
`
const StudentInfoDisplay = ({ student }) => {
	const todaysDate = new Date()
	const date = new Date().toISOString().substring(0, 10)
	const { firstName, lastName, responsibilityPoints, _id, period, daysAbsent } = student

	const [attendanceToggle, setAttendanceToggle] = useState(false)
	const [markStudentAbsentToggle, setMarkStudentAbsent] = useState(false)

	const [markStudentAbsent] = useMutation(MARK_STUDENT_ABSENT, {
		variables: { _id: _id, date: date, assignedDate: date, period: period },
		refetchQueries: ['FindStudent', 'findEligibleStudents', 'attendanceRoster']
	})
	const [unduMarkStudentAbsent] = useMutation(UNDO_MARK_STUDENT_ABSENT, {
		variables: { _id: _id, date: date },
		refetchQueries: ['FindStudent', 'findEligibleStudents', 'attendanceRoster']
	})

	return (
		<div
			style={
				daysAbsent !== null && daysAbsent.includes(date)
					? {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							paddingTop: '2%',
							backgroundColor: 'var(--red)'
					  }
					: {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							paddingTop: '2%',
							backgroundColor: 'var(--blue)'
					  }
			}>
			<>
				{!attendanceToggle ? (
					<div>
						<Link to={`/dashboard/roster-profile/student/${_id}`}>
							<div style={{ fontSize: '200%', textDecoration: 'underline', color: 'var(--white)' }}>
								{firstName + ' ' + lastName}
							</div>
							<div style={{ fontSize: '150%', textDecoration: 'underline', color: 'var(--white)' }}>
								Points: {responsibilityPoints}
							</div>
						</Link>
						<button
							style={{
								fontSize: '130%',
								textShadow: '3px 3px 3px var(--grey)',
								borderRadius: '5px',
								backgroundColor: 'var(--white)',
								height: '3rem',
								width: '10rem',
								marginTop: '10%',
								boxShadow: '1px 1px 1px black'
							}}
							onClick={() => {
								setAttendanceToggle(true)
							}}>
							Attendance
						</button>
					</div>
				) : (
					<div style={{ display: 'grid', gridTemplateRows: '1fr 2fr', alignItems: 'center' }}>
						<>
							<div style={{ fontSize: '180%' }}>{firstName + ' ' + lastName}</div>
							<div style={{ fontSize: '130%' }}>
								<TodaysDate date={todaysDate}></TodaysDate>
							</div>
						</>
						{daysAbsent !== null && daysAbsent.includes(date) ? (
							<button
								style={{
									height: '2rem',
									fontSize: '120%',
									textShadow: '3px 3px 3px var(--grey)',
									color: 'var(--blue)',
									marginBottom: '10%'
								}}
								onClick={() => {
									unduMarkStudentAbsent()
									setAttendanceToggle(false)
								}}>
								Undo
							</button>
						) : (
							<button
								style={{
									height: '2rem',
									fontSize: '120%',
									textShadow: '3px 3px 3px var(--grey)',
									color: 'var(--blue)',
									marginBottom: '10%'
								}}
								onClick={() => {
									markStudentAbsent()
									setAttendanceToggle(false)
								}}>
								Absent
							</button>
						)}
						<button
							style={{
								height: '2rem',
								fontSize: '120%',
								textShadow: '3px 3px 3px var(--grey)',
								color: 'var(--blue)',
								marginBottom: '10%'
							}}>
							Late
						</button>
						<button
							style={{
								height: '2rem',
								fontSize: '120%',
								textShadow: '3px 3px 3px black',
								color: 'var(--white)',
								backgroundColor: 'var(--red)',
								marginBottom: '10%'
							}}
							onClick={() => setAttendanceToggle(!attendanceToggle)}>
							Cancel
						</button>
					</div>
				)}
			</>
		</div>
	)
}

export default StudentInfoDisplay
