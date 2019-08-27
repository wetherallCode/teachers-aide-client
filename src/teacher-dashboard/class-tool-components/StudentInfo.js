import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import StudentInfoDisplay from './StudentInfoDisplay'
import StudentInfoMutator from './StudentInfoMutator'
// import { Query } from 'react-apollo'

export const FIND_STUDENT_QUERY = gql`
	query FindStudent($period: periodName!, $desk: Int!) {
		findStudentByPeriodAndDesk(period: $period, desk: $desk) {
			_id
			firstName
			lastName
			responsibilityPoints
			period
			daysAbsent
		}
	}
`
const StudentInfo = ({ match, periodName }) => {
	const { deskNumber } = match.params
	const numberizedDeskNumber = parseInt(deskNumber, 10)

	const { data, loading, error } = useQuery(FIND_STUDENT_QUERY, {
		variables: { period: periodName, desk: numberizedDeskNumber }
	})
	if (loading) return null
	if (error) console.log(error)

	const { findStudentByPeriodAndDesk } = data

	return (
		<>
			{findStudentByPeriodAndDesk ? (
				<div
					style={{
						display: 'grid',
						gridTemplateRows: '2fr 3fr',
						gridGap: '2px',
						backgroundColor: 'var(--white)'
					}}>
					<StudentInfoDisplay student={findStudentByPeriodAndDesk} />
					<StudentInfoMutator match={match} student={findStudentByPeriodAndDesk} />
				</div>
			) : (
				<h1
					style={{
						textDecoration: 'underline',
						textAlign: 'center',
						textShadow: '2px 2px 2x black'
					}}>
					No Student
				</h1>
			)}
		</>
	)
}

export default StudentInfo

// {
/* <Query
			query={FIND_STUDENT_QUERY}
			variables={{ period: periodName, desk: numberizedDeskNumber }}>
			{({ loading, error, data, refetching }) => {
				if (loading && !refetching) return <h1>Loading</h1>
				if (error) return <h2>{`Error: ${error}`}</h2>
				const { firstName, lastName, responsibilityPoints } = data.findStudentByPeriodAndDesk
				return (
					<div>
						{data ? (
							<div>
								<h3>First Name: {firstName}</h3>
								<h3>Last Name: {lastName}</h3>
								<h3>Points: {responsibilityPoints}</h3>
							</div>
						) : (
							<h3>No one sits here</h3>
						)}
					</div>
			}}
		</Query> */
// }
