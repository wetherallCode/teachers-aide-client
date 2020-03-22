import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import StudentInfoDisplay from './StudentInfoDisplay'
import StudentInfoMutator from './StudentInfoMutator'

export const FIND_STUDENT_QUERY = gql`
	query FindStudent($period: periodName!, $desk: Int!) {
		findStudentByPeriodAndDesk(period: $period, desk: $desk) {
			_id
			schoolID
			firstName
			lastName
			nickName
			responsibilityPoints
			period
			daysAbsent
			daysLate
			desk
			hasAssignments {
				assignmentType
				assignedDate
				markingPeriod
				dueDate
				readingPages
				readingSections
				missing
				exempt
				score
				maxScore
				earnedPoints
			}
			hasTests {
				dueDate
				score
				maxScore
				markingPeriod
			}
			hasProtocols {
				__typename
				assignedDate
				isActive
				isPresent
				markingPeriod
				... on SocraticQuestionProtocol {
					socraticQuestion
					readingSections
					thinkPairScore
					thinkPairEarnedPoints
					shareEarnedPoints
					shareScore
				}
			}
		}
	}
`

const StudentInfo = ({
	match,
	periodName,
	teacherOptions,
	setTeacherOptions,
	todaysDate,
	protocolToggle,
	setProtocolToggle
}) => {
	// const [criticalThinkingScoreValue, setCriticalThinkingScoreValue] = useState(0)

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
			{findStudentByPeriodAndDesk !== null ? (
				<div
					style={{
						display: 'grid',
						gridTemplateRows: '2fr 3fr',
						gridGap: '2px',
						backgroundColor: 'var(--white)'
					}}>
					<StudentInfoDisplay
						student={findStudentByPeriodAndDesk}
						periodName={periodName}
						todaysDate={todaysDate}
					/>
					<StudentInfoMutator
						match={match}
						student={findStudentByPeriodAndDesk}
						periodName={periodName}
						todaysDate={todaysDate}
						teacherOptions={teacherOptions}
						setTeacherOptions={setTeacherOptions}
						protocolToggle={protocolToggle}
						setProtocolToggle={setProtocolToggle}
					/>
				</div>
			) : (
				<div
					style={{
						display: 'grid',
						gridTemplateRows: '2fr 3fr',
						gridGap: '2px',
						backgroundColor: 'var(--white)'
					}}>
					<div
						style={{
							backgroundColor: 'var(--blue)',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '130%'
						}}>
						<div>Select Student</div>
					</div>
					<div style={{ backgroundColor: 'var(--grey)' }}></div>
				</div>
			)}
		</>
	)
}

export default StudentInfo
