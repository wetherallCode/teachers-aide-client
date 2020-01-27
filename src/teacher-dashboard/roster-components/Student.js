import React from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'
import EditModeToggle from './EditModeToggle'
import EditModeForm from './EditModeForm'
import StudentHider from './StudentHider'
import RemoveStudentToggle from './RemoveStudentToggle'
import Modal from 'react-modal'
import { GET_CLASS_ROSTER } from './rosterView'
import DaysAbsent from './DaysAbsent'

export const STUDENT_INFO_QUERY = gql`
	query getStudentInfo($_id: ID!) {
		student(_id: $_id) {
			_id
			firstName
			lastName
			period
			teacher
			responsibilityPoints
			desk
			isHiddenFromRoster
			daysAbsent
			daysLate
			learningStyle
		}
		isEditStudentMode @client
		removeStudentScreen @client
	}
`

const REMOVE_STUDENT_MUTATION = gql`
	mutation removeStudent($_id: ID!) {
		removeStudent(_id: $_id) {
			removed
			student {
				_id
				desk
			}
		}
	}
`

Modal.setAppElement(document.getElementById('root'))

const Student = ({ match, history }) => {
	const client = useApolloClient()
	const { studentInfo } = match.params
	const todaysDate = new Date().toISOString().substring(0, 10)

	const { data, loading, error } = useQuery(STUDENT_INFO_QUERY, {
		variables: { _id: studentInfo }
	})

	const [removeStudent] = useMutation(REMOVE_STUDENT_MUTATION, {
		variables: {
			_id: studentInfo
		},
		refetchQueries: ['rosterList', 'getAllStudents', 'roster']
		// update(
		// 	client,
		// 	{
		// 		data: { addStudent }
		// 	}
		// ) {
		// 	const { classRoster } = client.readQuery({
		// 		query: GET_CLASS_ROSTER,
		// 		variables: { period: periodName }
		// 	})
		// 	client.writeQuery({
		// 		query: GET_CLASS_ROSTER,
		// 		variables: { period: periodName },
		// 		data: { classRoster: [...classRoster, addStudent] }
		// 	})
		// }
	})
	if (loading) return <h1>Loading</h1>
	if (error) console.log(error)

	const { student, isEditStudentMode, removeStudentScreen } = data
	const {
		firstName,
		lastName,
		period,
		teacher,
		responsibilityPoints,
		desk,
		isHiddenFromRoster,
		daysAbsent,
		daysLate,
		learningStyle
	} = student

	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					gridGap: '1%'
				}}>
				<div
					style={{
						color: 'var(--blue)',
						padding: '1%',
						border: '1px solid var(--blue)',
						width: '100%',
						backgroundColor: 'var(--grey)'
					}}>
					{!removeStudentScreen ? (
						<div>
							{isEditStudentMode ? (
								<div>
									<EditModeToggle className='blueButton' isEditStudentMode={isEditStudentMode} />
									<h1>Edit Student</h1>
									<EditModeForm
										clasName='button'
										studentInfo={student}
										history={history}
										isEditStudentMode={isEditStudentMode}
									/>
								</div>
							) : (
								<div>
									<Link className='blueButton' to={`/dashboard/roster-view/${period}`}>
										<button
											style={{
												width: '99%',
												height: '2rem',
												backgroundColor: 'var(--blue)',
												color: 'var(--white)',
												fontSize: '200%',
												textShadow: '1px 3px 1px black',
												boxShadow: '1px 1px 1px black',
												border: '1px solid var(--white)',
												display: 'flex',
												justifyContent: 'center'
											}}>
											Back to Roster
										</button>
									</Link>
									<div>
										<h1
											style={
												isHiddenFromRoster ? { color: 'var(--red)' } : { color: 'var(--blue)' }
											}>
											{firstName + ' ' + lastName}
										</h1>
										<h1 style={{ color: 'var(--red)', fontSize: '100%' }}>
											{isHiddenFromRoster && 'Hidden'}{' '}
										</h1>
									</div>
									<h2>{`Period: ${period}`}</h2>
									<h2>{`Seat: ${desk}`}</h2>
									<h2>{`Responsibility Points: ${responsibilityPoints}`}</h2>
									<h2>{`Teacher: ${teacher}`}</h2>
									<h2>{`Learning Style: ${learningStyle}`}</h2>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											textShadow: '1px 3px 1px black',
											boxShadow: '1px 1px 1px black',
											border: '1px solid var(--white)'
										}}>
										<Link to={`/dashboard/classroom/class-period-selector/${period}/${desk}`}>
											<button
												style={{
													width: '100%',
													textShadow: '1px 3px 1px black'
												}}
												className='blueButton'>
												Back to Class
											</button>
										</Link>
										<EditModeToggle className='blueButton' isEditStudentMode={isEditStudentMode} />
										<StudentHider studentInfo={student} />
										<RemoveStudentToggle
											className='redButton'
											removeStudentScreen={removeStudentScreen}
										/>
									</div>
								</div>
							)}
						</div>
					) : (
						<div>
							<RemoveStudentToggle
								style={{
									backgroundColor: 'red',
									border: '0.01px solid black',
									width: '100px',
									height: '50px',
									color: '#var(--blue)',
									textDecoration: 'none',
									fontSize: '125%',
									fontWeight: 'bolder',
									boxShadow: '3px 3px 3px black',
									textShadow: '2px 2px 2px #888'
								}}
								removeStudentScreen={removeStudentScreen}
							/>
							<Modal
								style={{
									overlay: {
										backgroundColor: 'var(--darkGrey)'
									},
									content: {
										// marginTop: '10%',
										marginLeft: '20%',
										width: '40rem',
										height: '25rem'
									}
								}}
								isOpen={removeStudentScreen}
								onRequestClose={() =>
									client.writeData({ data: { removeStudentScreen: !removeStudentScreen } })
								}>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center'
									}}>
									<h1 style={{ color: 'var(--red)' }}>
										Are You Sure You want to Delete {firstName}!!
									</h1>
									<button
										className='blueButton'
										style={{
											width: '40rem',
											height: '10rem',
											fontSize: '170%',
											marginBottom: '10%'
										}}
										onClick={() =>
											client.writeData({ data: { removeStudentScreen: !removeStudentScreen } })
										}>
										Don't Delete!
									</button>
									<button
										style={{
											fontSize: '70%',
											height: '30px',
											width: '30rem',
											textDecoration: 'none',
											color: 'var(--white)',
											backgroundColor: 'var(--red)'
										}}
										onClick={() => {
											removeStudent()
											const goBack = () => {
												client.writeData({ data: { removeStudentScreen: !removeStudentScreen } })
												return !isHiddenFromRoster
													? history.push(`/dashboard/roster-view/${period}`)
													: history.push(`/dashboard/allStudent`)
											}
											goBack()
										}}>
										Delete Student
									</button>
								</div>
							</Modal>
						</div>
					)}
				</div>
				<DaysAbsent student={student} todaysDate={todaysDate} />
			</div>
		</>
	)
}

export default Student
