import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import StudentInfoMutatorButton from './StudentInfoMutatorButton'

export const SCORE_ASSIGNMENT = gql`
	mutation scoreAssignment($input: AssignmentScoringInput) {
		scoreAssignment(input: $input) {
			scored
			student {
				hasAssignments {
					dueDate
					score
					assignmentType
					missing
				}
			}
		}
	}
`
export const UNDO_SCORE_ASSIGNMENT = gql`
	mutation undoScoreAssignment($input: UndoAssignmentScoringInput) {
		undoScoreAssignment(input: $input) {
			assignmentScoreReset
		}
	}
`

const CriticalThinkingScoreMutator = ({
	student,
	todaysDate,
	teacherOptions,
	setTeacherOptions
}) => {
	const [criticalThinkingScoreValue, setCriticalThinkingScoreValue] = useState(0)
	const [criticalThinkingStatusValue, setCriticalThinkingStatusValue] = useState(false)
	const [currentCriticalThinkingGuide, setCurrentCriticalThinkingGuide] = useState({})
	const [exemptToggle, setExemptToggle] = useState(false)

	useEffect(() => {
		student.hasAssignments.forEach(assignment => {
			if (assignment.assignmentType === 'THINKING_GUIDE' && assignment.dueDate === todaysDate) {
				setCriticalThinkingScoreValue(assignment.score)
				console.log(assignment.missing)
			}
		})
	}, [
		criticalThinkingScoreValue,
		setCriticalThinkingScoreValue,
		student.hasAssignments,
		todaysDate
	])

	useEffect(() => {
		student.hasAssignments.forEach(assignment => {
			if (assignment.assignmentType === 'THINKING_GUIDE' && assignment.dueDate === todaysDate) {
				setCriticalThinkingStatusValue(assignment.missing)
			}
		})
	}, [
		criticalThinkingStatusValue,
		setCriticalThinkingStatusValue,
		student.hasAssignments,
		todaysDate
	])

	useEffect(() => {
		student.hasAssignments.forEach(assignment => {
			if (assignment.assignmentType === 'THINKING_GUIDE' && assignment.dueDate === todaysDate) {
				setCurrentCriticalThinkingGuide(assignment)
			}
		})
	}, [currentCriticalThinkingGuide])

	const { criticalThinkingToggle } = teacherOptions

	const [undoScoreAssignment] = useMutation(UNDO_SCORE_ASSIGNMENT, {
		refetchQueries: ['FindStudent']
	})

	const [scoreAssignment] = useMutation(
		SCORE_ASSIGNMENT,
		{
			refetchQueries: ['FindStudent']
		}
		// setCriticalThinkingScoreValue(data.scoreAssignment.lastScore)
		// }
		// update(client, { data: { scoreAssignment } }) {
		// 	const { findStudentByPeriodAndDesk } = client.readQuery({
		// 		query: FIND_STUDENT_QUERY,
		// 		variables: { period: student.periodName, desk: student.desk }
		// 	})

		// 	const { responsibilityPoints, hasAssignments, __typename } = findStudentByPeriodAndDesk

		// 	client.writeQuery({
		// 		query: gql`
		// 			query updateResponsibilityPointsAndAssignmentScore($period: periodName!, $desk: Int!) {
		// 				findStudentByPeriodAndDesk(period: $period, desk: $desk) {
		// 					_id
		// 					responsibilityPoints
		// 				}
		// 			}
		// 		`,
		// 		variables: { period: student.periodName, desk: student.desk },
		// 		data: {
		// 			findStudentByPeriodAndDesk: {
		// 				_id: student._id,
		// 				__typename,
		// 				responsibilityPoints,
		// 				hasAssignments
		// 			}
		// 		}
		// 	})
		// }
		// }
	)
	const heightControl = 3
	return (
		<>
			{teacherOptions.criticalThinkingToggle && (
				<div
					style={{
						width: '98%',
						height: '3rem',
						marginTop: '25px',
						color: 'var(--blue)',
						fontSize: '130%'
					}}>
					<div
						style={{
							color: 'var(--blue)',
							fontSize: '120%',
							textAlign: 'center',
							textDecoration: 'underline',
							fontWeight: 'bolder'
						}}>
						Critical Thinking{' '}
					</div>
					<div
						style={{ color: 'var(--blue)', fontSize: '100%', marginTop: '3%', textAlign: 'left' }}>
						<div>
							Page
							{' ' +
								currentCriticalThinkingGuide.readingPages +
								': ' +
								currentCriticalThinkingGuide.readingSections}
						</div>
						<div
							style={{
								color: 'var(--blue)',
								fontSize: '100%',
								marginTop: '3%',
								textAlign: 'left'
							}}>
							Score: {criticalThinkingScoreValue === 0 ? 'Missing' : criticalThinkingScoreValue}
						</div>
					</div>
					{criticalThinkingToggle && (
						<>
							<div
								style={{
									display: 'grid',
									gridTemplateRows: '1fr 1fr',
									marginTop: '5%',
									gridGap: '20%'
								}}>
								{criticalThinkingStatusValue && !exemptToggle && (
									<StudentInfoMutatorButton
										mutation={scoreAssignment}
										variables={{
											_id: student._id,
											date: todaysDate,
											assignmentType: 'THINKING_GUIDE',
											exempt: false,
											missing: false,
											score: 1,
											earnedPoints: 3,
											responsibilityPoints: 3,
											comments: ['Incomplete'],
											late: false
										}}
										buttonDisplay={'Incomplete'}
										buttonColor={'blue'}
										height={heightControl}
									/>
								)}
								{criticalThinkingStatusValue && !exemptToggle && (
									<StudentInfoMutatorButton
										mutation={scoreAssignment}
										variables={{
											_id: student._id,
											date: todaysDate,
											assignmentType: 'THINKING_GUIDE',
											exempt: false,
											missing: false,
											score: 2,
											earnedPoints: 4,
											responsibilityPoints: 4,
											comments: ['Complete'],
											late: false
										}}
										buttonDisplay={'Complete'}
										buttonColor={'blue'}
										height={heightControl}
									/>
								)}
								{criticalThinkingStatusValue && exemptToggle && (
									<StudentInfoMutatorButton
										mutation={scoreAssignment}
										variables={{
											_id: student._id,
											date: todaysDate,
											assignmentType: 'THINKING_GUIDE',
											exempt: true,
											missing: false,
											score: 0,
											earnedPoints: 2,
											responsibilityPoints: 2,
											comments: ['Exempt'],
											late: false
										}}
										buttonDisplay={'Exempt'}
										buttonColor={'blue'}
										height={heightControl}
									/>
								)}
								{criticalThinkingStatusValue && (
									<button
										style={{
											fontSize: '100%',
											height: '3rem',
											width: '100%',
											textDecoration: 'none',
											color: 'var(--white)',
											backgroundColor: `var(--blue)`,
											borderRadius: '5px',
											boxShadow: `1px 1px 2px 1px var(--blue)`
										}}
										onClick={() => setExemptToggle(!exemptToggle)}>
										{!exemptToggle ? 'Exempt' : 'Score'}
									</button>
								)}
							</div>
							{!criticalThinkingStatusValue && (
								<StudentInfoMutatorButton
									mutation={undoScoreAssignment}
									variables={{
										_id: student._id,
										date: todaysDate,
										assignmentType: 'THINKING_GUIDE',
										score: criticalThinkingScoreValue
									}}
									buttonDisplay={'Undo'}
									buttonColor={'red'}
									height={heightControl}
								/>
							)}
						</>
					)}
				</div>
			)}
		</>
	)
}

export default CriticalThinkingScoreMutator
