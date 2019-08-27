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

const StudentInfoDisplay = ({ student }) => {
	const todaysDate = new Date()
	const date = new Date().toISOString().substring(0, 10)
	const { firstName, lastName, responsibilityPoints, _id, period, daysAbsent } = student

	const [attendanceToggle, setAttendanceToggle] = useState(false)
	const [undoAbsentMark, setUndoAbsentMark] = useState(false)
	const [markStudentAbsent] = useMutation(MARK_STUDENT_ABSENT, {
		variables: { _id: _id, date: date, assignedDate: date, period: period },
		refetchQueries: ['FindStudent']
	})

	console.log(date)

	// if (daysAbsent !== null) {
	// 	var isStudentAbsentToday = daysAbsent.filter(day => day === fakeDate)
	// }
	// console.log(isStudentAbsentToday)

	// student.daysAbsent !== null && isStudentAbsentToday && console.log(student.firstName)
	// console.log(daysAbsent !== null && isStudentAbsentToday === true)
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
							onClick={() => setAttendanceToggle(!attendanceToggle)}>
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
								setAttendanceToggle(!attendanceToggle)
								// setUndoAbsentMark(!undoAbsentMark)
							}}>
							{!undoAbsentMark ? 'Absent' : 'Undo'}
						</button>
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
