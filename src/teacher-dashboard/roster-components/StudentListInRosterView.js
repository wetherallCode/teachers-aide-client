import React from 'react'
import { Link } from 'react-router-dom'

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

const StudentListInRosterView = ({ classRoster }) => {
	let numberMaker = 1

	return (
		<>
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
								<div style={{ display: 'flex' }}>
									<Link
										style={{ textDecoration: 'none', color: 'var(--blue)' }}
										to={`/dashboard/roster-profile/student/${student._id}`}>
										{
											<div style={{ display: 'flex' }}>
												<div>{`${numberMaker++} ${student.lastName}, ${student.firstName} `}</div>
											</div>
										}
									</Link>
									<div style={{ marginLeft: '2%' }}>{student.responsibilityPoints}</div>
								</div>
							</div>
						</div>
					)}
				</div>
			))}
		</>
	)
}

export default StudentListInRosterView
