import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, ApolloConsumer } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const ALL_STUDENT_QUERY = gql`
	query getAllStudents {
		allStudents {
			_id
			firstName
			lastName
			responsibilityPoints
			period
			desk
			teacher
			isHiddenFromRoster
		}
		showHiddenStudents @client
	}
`

const AllStudentRoster = () => {
	const { data, loading, error } = useQuery(ALL_STUDENT_QUERY)

	if (loading) return <h3>Loading</h3>
	if (error) return console.log(`ALL_STUDENT_QUERY Error: ${error}`)

	const { allStudents, showHiddenStudents } = data

	// const {
	// 	_id,
	// 	firstName,
	// 	lastName,
	// 	responsibilityPoints,
	// 	period,
	// 	desk,
	// 	teacher,
	// 	isHiddenFromRoster,
	// } = allStudents

	let numberMaker = 1

	return (
		<ApolloConsumer>
			{(client) => (
				<div style={{ backgroundColor: 'var(--white)' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'Center',
							alignContent: 'center',
							alignItems: 'center',
							paddingBottom: '1%',
						}}>
						<h1 style={{ textAlign: 'center', color: 'var(--blue)' }}>All Students</h1>
						<button
							className='button'
							type='button'
							style={{ marginBottom: '2px' }}
							onClick={() =>
								client.writeData({ data: { showHiddenStudents: !showHiddenStudents } })
							}>
							{!showHiddenStudents ? 'Show Hidden Students' : 'Hide Hidden Students'}
						</button>
					</div>
					<div style={{ borderBottom: '1px solid black' }}>
						{allStudents.map((student, index) => (
							<>
								{!student.isHiddenFromRoster && (
									<div
										key={index}
										style={{
											borderTop: '1px solid black',
											paddingTop: '5x',
											paddingBottom: '5x',
											display: 'flex',
											alignContent: 'center',
										}}>
										<div
											style={
												numberMaker % 2
													? { backgroundColor: 'whie', width: '100%' }
													: { backgroundColor: 'lightgray', width: '100%' }
											}>
											<Link
												style={{ textDecoration: 'none', color: 'var(--blue)' }}
												to={`/dashboard/roster-profile/student/${student._id}`}>
												{`${numberMaker++} ${student.lastName}, ${
													student.firstName
												} Class Period: ${student.period} Responsibility Points: ${
													student.responsibilityPoints
												} `}
											</Link>
										</div>
									</div>
								)}
							</>
						))}
					</div>
					{showHiddenStudents && (
						<div>
							{allStudents.map((student, index) => (
								<>
									{student.isHiddenFromRoster && (
										<div
											key={index}
											style={{
												borderBottom: '1px solid black',
												paddingTop: '5x',
												paddingBottom: '5x',
												display: 'flex',
												alignContent: 'center',
											}}>
											<div
												style={
													numberMaker % 2
														? { backgroundColor: 'var(--white)', width: '100%' }
														: { backgroundColor: 'var(--grey)', width: '100%' }
												}>
												<Link
													style={{ textDecoration: 'none', color: 'var(--red)' }}
													to={`/dashboard/roster-profile/student/${student._id}`}>
													{`${numberMaker++} ${student.lastName}, ${student.firstName} `}
												</Link>
											</div>
										</div>
									)}
								</>
							))}
						</div>
					)}
				</div>
			)}
		</ApolloConsumer>
	)
}

export default AllStudentRoster

// {
/* <div>
									{showHiddenStudents && student.isHiddenFromRoster && (
										<div
											key={index}
											style={{
												borderTop: '1px solid black',
												paddingTop: '5x',
												paddingBottom: '5x',
												display: 'flex',
												alignContent: 'center',
											}}>
											<div
												style={
													(index + 1) % 2
														? { backgroundColor: 'whie', width: '100%' }
														: { backgroundColor: 'lightgray', width: '100%' }
												}>
												<Link
													style={{ textDecoration: 'none', color: 'red' }}
													to={`/dashboard/roster-profile/student/${student._id}`}>
													{`${index + 1} ${student.firstName} ${student.lastName}`}
												</Link>
											</div>
											<div style={{ display: 'flex', alignContent: 'flex-end' }} />
										</div>
									)}
								</div> */
// }
