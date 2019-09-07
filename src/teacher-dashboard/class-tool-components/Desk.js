import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const FIND_STUDENT_QUERY = gql`
	query FindStudent($period: periodName!, $desk: Int!) {
		findStudentByPeriodAndDesk(period: $period, desk: $desk) {
			_id
			firstName
			lastName
			responsibilityPoints
			isHiddenFromRoster
			daysAbsent
		}
	}
`

const Desk = ({ match, deskNumber, periodName }) => {
	const { data, loading, error } = useQuery(FIND_STUDENT_QUERY, {
		variables: { period: periodName, desk: deskNumber }
	})

	if (loading) return null
	if (error) console.log(error)

	const { url } = match
	const todaysDate = new Date().toISOString().substring(0, 10)

	const { findStudentByPeriodAndDesk } = data
	// console.log(todaysDate)
	// findStudentByPeriodAndDesk !== null &&
	// 	findStudentByPeriodAndDesk.daysAbsent !== null &&
	// 	findStudentByPeriodAndDesk.daysAbsent.includes(todaysDate) &&
	// 	console.log(findStudentByPeriodAndDesk.firstName)

	// console.log(new Date().toLocaleString().substring(0, 10))
	return (
		<>
			{findStudentByPeriodAndDesk && !findStudentByPeriodAndDesk.isHiddenFromRoster ? (
				<Link className='classroom-desks' to={`${url}/${deskNumber}`}>
					<button
						style={
							findStudentByPeriodAndDesk !== null &&
							findStudentByPeriodAndDesk.daysAbsent !== null &&
							findStudentByPeriodAndDesk.daysAbsent.includes(todaysDate)
								? {
										width: '100%',
										height: '100%',
										fontSize: '110%',
										textDecoration: 'none',
										textAlign: 'center',
										backgroundColor: 'var(--red)',
										color: 'var(--white)',
										borderRadius: '5px',
										boxShadow: '1x 1px 1px var(--darkgrey)'
								  }
								: {
										width: '100%',
										height: '100%',
										fontSize: '110%',
										textDecoration: 'none',
										textAlign: 'center',
										backgroundColor: 'var(--blue)',
										color: 'var(--white)',
										borderRadius: '5px',
										boxShadow: '1x 1px 1px var(--darkgrey)'
								  }
						}>
						<div>{findStudentByPeriodAndDesk.firstName}</div>
					</button>
				</Link>
			) : (
				<Link className='classroom-desks' to={`${url}`}>
					<button
						style={{
							width: '100%',
							height: '100%',
							textDecoration: 'none',
							backgroundColor: 'var(--darkGrey)',
							color: 'var(--white)',
							boxShadow: '1x 1px 1px var(--darkgrey)',
							borderRadius: '5px'
						}}
					/>
				</Link>
			)}
		</>
	)
}

export default Desk
