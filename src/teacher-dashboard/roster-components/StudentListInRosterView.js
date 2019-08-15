import React from 'react'
import { Link } from 'react-router-dom'

// const students = []

const StudentListInRosterView = ({ classRoster }) => {
	let numberMaker = 1
	// classRoster.forEach((element) => students.unshift(element))
	// students.sort().map(console.log(students))
	return (
		<>
			{classRoster.sort().map((student, index) => (
				<div key={index}>
					{!student.isHiddenFromRoster && (
						<div
							style={{
								borderTop: '1px solid black',
								paddingTop: '5x',
								paddingBottom: '5x',
								display: 'flex',
								flextDirection: 'row',
								alignContent: 'center'
							}}>
							<div
								style={
									numberMaker % 2
										? {
												backgroundColor: 'var(--white)',
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
								<Link
									style={{ textDecoration: 'none', color: 'var(--blue)' }}
									to={`/dashboard/roster-profile/student/${student._id}`}>
									{`${numberMaker++} ${student.lastName}, ${student.firstName} `}
								</Link>
							</div>
						</div>
					)}
				</div>
			))}
		</>
	)
}

export default StudentListInRosterView
