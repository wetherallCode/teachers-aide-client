import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import StudentInfoMutatorButton from './StudentInfoMutatorButton'
import { FIND_STUDENT_QUERY } from './StudentInfo'

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

	console.log(criticalThinkingStatusValue)
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
		// onCompleted: data => {
		// 	if (data.undoScoreAssignment.assignmentScoreReset) {
		// 		setAssignmentScoringButtonToggle(!assignmentScoringButtonToggle)
		// 	}
		// }
	})

	const [scoreAssignment] = useMutation(
		SCORE_ASSIGNMENT,
		{
			refetchQueries: ['FindStudent']
			// onCompleted: data => {
			// 	if (data.scoreAssignment.scored) {
			// 		setAssignmentScoringButtonToggle(!assignmentScoringButtonToggle)
			// 	}
			// }
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
						// <div style={{ width: '70%' }}>
						<>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									marginTop: '5%',
									gridGap: '5%'
								}}>
								{criticalThinkingStatusValue && (
									<StudentInfoMutatorButton
										mutation={scoreAssignment}
										variables={{
											_id: student._id,
											date: todaysDate,
											assignmentType: 'THINKING_GUIDE',
											exempt: false,
											missing: false,
											score: 1,
											responsibilityPoints: 1
										}}
										buttonDisplay={'Incomplete'}
										buttonColor={'blue'}
									/>
								)}
								{criticalThinkingStatusValue && (
									<StudentInfoMutatorButton
										mutation={scoreAssignment}
										variables={{
											_id: student._id,
											date: todaysDate,
											assignmentType: 'THINKING_GUIDE',
											exempt: false,
											missing: false,
											score: 2,
											responsibilityPoints: 2
										}}
										buttonDisplay={'Complete'}
										buttonColor={'blue'}
									/>
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
