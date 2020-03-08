import React from 'react'
import { Link } from 'react-router-dom'
import StudentListinRosterViewRow from './StudentListinRosterViewRow'

export const sortByLastName = (a, b) => {
	let lastNameA = a.lastName.toLowerCase()
	let lastNameB = b.lastName.toLowerCase()

	if (lastNameA < lastNameB) {
		return -1
	}
	if (lastNameA > lastNameB) {
		return 1
	}
	return 0
}

const StudentListInRosterView = ({ classRoster, markingPeriod, todaysDate }) => {
	const readingSectionsForGradeBook = classRoster.map(student =>
		student.hasAssignments
			.filter(
				assignment => assignment.assignmentType === 'OEQ' && assignment.markingPeriod === 'SECOND'
			)
			.map(assignment => assignment.readingSections)
	)

	return (
		<div style={{ overflowX: 'scroll' }}>
			<div
				style={{
					color: 'var(--blue)',
					display: 'grid',
					gridTemplateColumns: `2fr 1fr 1fr 1fr`
				}}>
				<div style={{ color: 'var(--blue)' }}>Student</div>
				<div style={{ color: 'var(--blue)' }}>Overall Grade</div>
				<div style={{ color: 'var(--blue)' }}>Responsibility Points</div>
				<div style={{ color: 'var(--blue)' }}>Test Points</div>
				{/* {readingSectionsForGradeBook[0].map(assignment => (
					<div style={{ color: 'var(--blue)' }}>{assignment.substring(0, 8)}</div>
				))} */}
			</div>
			{classRoster.sort(sortByLastName).map((student, index) => (
				<div key={index}>
					{!student.isHiddenFromRoster && (
						<div
							style={{
								borderTop: '1px solid var(--blue)',
								// paddingTop: '5px',
								// paddingBottom: '5px',
								height: '100%',
								display: 'flex',
								flextDirection: 'row',
								alignContent: 'center'
							}}>
							<div
								style={
									index % 2
										? {
												width: '100%',
												height: '100%',
												paddingLeft: '2%'
										  }
										: {
												backgroundColor: 'var(--grey)',
												width: '100%',
												height: '100%',
												paddingLeft: '2%'
										  }
								}>
								<StudentListinRosterViewRow
									student={student}
									index={index}
									markingPeriod={markingPeriod}
									todaysDate={todaysDate}
								/>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default StudentListInRosterView
