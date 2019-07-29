import React from 'react'
import { Link } from 'react-router-dom'

const StudentInfoDisplay = ({ student }) => {
	const { firstName, lastName, responsibilityPoints, _id } = student
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				paddingTop: '2%',
				backgroundColor: 'var(--blue)',
			}}>
			<>
				{student ? (
					<div>
						<h2>{firstName + ' ' + lastName}</h2>
						<h3>Points: {responsibilityPoints}</h3>
						<Link to={`/dashboard/roster-profile/student/${_id}`}>
							<button
								style={{
									fontSize: '130%',
									textShadow: '3px 3px 3px var(--grey)',
									borderRadius: '5px',
									backgroundColor: 'var(--white)',
									height: '3rem',
									width: '7rem',
									boxShadow: '1px 1px 1px black',
								}}>
								Info
							</button>
						</Link>
					</div>
				) : (
					<h1>No Student</h1>
				)}
			</>
		</div>
	)
}

export default StudentInfoDisplay
