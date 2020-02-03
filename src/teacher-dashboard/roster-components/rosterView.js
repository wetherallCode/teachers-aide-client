import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { StudentAdder } from './StudentAdder'
import StudentListInRosterView from './StudentListInRosterView'
import AllStudentRoster from './AllStudentRoster'
import AssignmentGrader from '../grade-book/AssignmentGrader'
import TestGrader from '../grade-book/test/TestGrader'
import AssignedSeatsView from './AssignedSeatsView'

export const GET_CLASS_ROSTER = gql`
	query rosterList($period: periodName) {
		classRoster(period: $period) {
			_id
			firstName
			lastName
			responsibilityPoints
			period
			desk
			teacher
			isHiddenFromRoster
			daysAbsent
			hasAssignments {
				assignedDate
				markingPeriod
				assignmentType
				readingPages
				readingSections
				score
				missing
				dueDate
				maxScore
				earnedPoints
				exempt
				comments
			}
			hasTests {
				dueDate
				readingSections
				missing
				maxScore
				earnedPoints
				studyTime
				markingPeriod
			}
		}
	}
`

const Rosters = ({ match }) => {
	const [isAddStudentPressed, setIsAddStudentPressed] = useState(false)
	const [gradeAssignments, setGradeAssignments] = useState(false)
	const [gradeTest, setGradeTest] = useState(true)
	const [deskLimit, setdeskLimit] = useState(24)
	const [deskChangeViewToggle, setDeskChangeViewToggle] = useState(false)

	const { periodName } = match.params

	const { data, loading, error } = useQuery(GET_CLASS_ROSTER, {
		variables: { period: periodName }
	})

	if (loading) return <h1>Loading</h1>
	if (error) console.error(error)

	const lastNames = []
	const { classRoster } = data

	classRoster.forEach(({ lastName, firstName }) =>
		lastNames.unshift({ lastName: lastName, firstName: firstName })
	)

	const desks = []

	classRoster.forEach(({ desk }) => {
		desks.unshift(desk)
	})

	const deskPicker = () => {
		const desk = Math.floor(Math.random() * deskLimit + 1)

		if (desks.includes(desk) && desks.length < deskLimit) {
			return deskPicker()
		} else return desk
	}

	let pickedDesk = deskPicker()
	const todaysDate = new Date().toISOString().substring(0, 10)
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 7fr',
				alignContent: 'center',
				height: '100vh',
				marginBottom: '0px',
				backgroundColor: 'var(--white)',
				borderLeft: '3px solid var(--white)',
				borderBottom: '1px solid black',
				overflow: 'scroll'
			}}>
			<header
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 2fr',
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					alignContent: 'center',
					justifyContent: 'center'
				}}>
				<div
					onClick={() => setDeskChangeViewToggle(!deskChangeViewToggle)}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignText: 'center',
						cursor: 'pointer'
					}}>
					<h1>
						{periodName.substring(0, 1)} Day: Period {periodName.substring(2, 3)}-
						{periodName.substring(3, 4)}
					</h1>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'center',
						marginRight: '2%'
					}}>
					{!deskChangeViewToggle ? (
						<>
							<div
								onClick={() => setGradeAssignments(!gradeAssignments)}
								style={{ marginRight: '2%', fontSize: '130%', cursor: 'pointer' }}>
								{!gradeAssignments ? 'Grade Assignments' : 'Roster'}
							</div>
							{desks.length < deskLimit && !gradeAssignments && (
								<div
									style={{ cursor: 'pointer', fontSize: '130%' }}
									onClick={() => setIsAddStudentPressed(!isAddStudentPressed)}>
									{isAddStudentPressed ? 'Cancel' : 'Add Student'}
								</div>
							)}
						</>
					) : (
						<div style={{ marginRight: '2%', fontSize: '130%' }}>Desks!</div>
					)}
				</div>
			</header>

			{/* Above is for all appropriate UI, and below is just the roster*/}

			{deskChangeViewToggle ? (
				<AssignedSeatsView classRoster={classRoster} />
			) : !gradeAssignments ? (
				<div>
					{isAddStudentPressed && (
						<div
							style={{ backgroundColor: 'var(--grey)', paddingTop: '10px', paddingBottom: '10px' }}>
							{
								<StudentAdder
									periodName={periodName}
									isRosterMode={true}
									unUsedDesk={pickedDesk}
									roster={classRoster}
								/>
							}
						</div>
					)}
					<>
						{/* delete all students from this */}
						{match.params.periodName === 'allStudents' ? (
							<AllStudentRoster />
						) : (
							<StudentListInRosterView classRoster={classRoster} />
						)}

						<div style={{ borderBottom: '1px solid var(--blue)' }} />
					</>
				</div>
			) : (
				<AssignmentGrader classRoster={classRoster} />
			)}
		</div>
	)
}

export default Rosters
