import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SCORE_ASSIGNMENT } from '../../class-tool-components/CriticalThinkingScoreMutator'
import { UNDO_SCORE_ASSIGNMENT } from '../../class-tool-components/CriticalThinkingScoreMutator'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'

const CriticalThinkingGrader = ({
	student,
	assignment,
	assignmentScorerToggle,
	setAssignmentScorerToggle
}) => {
	const [commentList, setCommentList] = useState([])

	const [assignmentStatus, setAssignmentStatus] = useState(0)
	const [late, setLate] = useState(false)

	const todaysDate = new Date().toISOString().substring(0, 10)

	const [scoreAssignment, { data }] = useMutation(SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader'],
		onCompleted: data => console.log(data)
	})

	const [undoScoreAssignment] = useMutation(UNDO_SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader']
	})

	const studentWasAbsent = student.daysAbsent.includes(assignment.dueDate)

	useEffect(() => {
		if (todaysDate !== assignment.dueDate) {
			console.log('late')
			setAssignmentStatus(-1)
			setLate(true)
			setCommentList(list => [...commentList, 'Late'])
		}
	}, [setCommentList])

	const heightControl = 2

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '3fr 1fr',
				height: '25%',
				backgroundColor: 'var(--grey)',
				paddingBottom: '2%'
			}}>
			<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '10rem'
					}}>
					<div style={{ marginRight: '2%' }}>Assigned: </div>
					<div style={{ marginRight: '2%' }}>
						{assignment.assignedDate.substring(5)}-{assignment.assignedDate.substring(0, 4)}
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '15rem'
					}}>
					<div style={{ marginRight: '2%' }}>Student Status: </div>
					<div style={{ marginRight: '2%' }}>{studentWasAbsent ? 'Absent' : 'Present'}</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '10rem'
					}}>
					<div style={{ marginRight: '2%' }}>Status: </div>
					{assignment.missing ? (
						<div>Missing</div>
					) : assignment.late ? (
						<div>Late</div>
					) : (
						<>
							{assignment.comments.length > 1 ? (
								<div>
									{assignment.comments[0]}: {assignment.comments[1]}
								</div>
							) : (
								<div>{assignment.comments[0]}</div>
							)}
						</>
					)}
				</div>
			</div>
			<div style={{ display: 'flex', backgroundColor: 'var(--grey)', justifyContent: 'center' }}>
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'THINKING_GUIDE',
							exempt: false,
							missing: false,
							score: 1,
							earnedPoints: 3,
							responsibilityPoints: 3,
							comments: ['Excused Late', 'Incomplete'],
							late: false
						}}
						buttonDisplay={'Excused Incomplete'}
						buttonColor={'blue'}
						height={heightControl}
						toggle={assignmentScorerToggle}
						setToggle={setAssignmentScorerToggle}
					/>
				)}
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'THINKING_GUIDE',
							exempt: false,
							missing: false,
							score: 2,
							earnedPoints: 4,
							responsibilityPoints: 4,
							comments: ['Excused Late', 'Complete'],
							late: false
						}}
						buttonDisplay={'Excused Complete'}
						buttonColor={'blue'}
						height={heightControl}
						toggle={assignmentScorerToggle}
						setToggle={setAssignmentScorerToggle}
					/>
				)}
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'THINKING_GUIDE',
							exempt: false,
							missing: false,
							score: 1,
							earnedPoints: 3 + assignmentStatus,
							responsibilityPoints: 3 + assignmentStatus,
							comments: [...commentList, 'Incomplete'],
							late: late
						}}
						buttonDisplay={'Incomplete'}
						buttonColor={'blue'}
						height={heightControl}
						toggle={assignmentScorerToggle}
						setToggle={setAssignmentScorerToggle}
					/>
				)}
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'THINKING_GUIDE',
							exempt: false,
							missing: false,
							score: 2,
							earnedPoints: 4 + assignmentStatus,
							responsibilityPoints: 4 + assignmentStatus,
							comments: [...commentList, 'Complete'],
							late: late
						}}
						buttonDisplay={'Complete'}
						buttonColor={'blue'}
						height={heightControl}
						toggle={assignmentScorerToggle}
						setToggle={setAssignmentScorerToggle}
					/>
				)}
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'THINKING_GUIDE',
							exempt: true,
							missing: false,
							score: 0,
							earnedPoints: 0,
							responsibilityPoints: 2,
							comments: ['Exempt'],
							late: late
						}}
						buttonDisplay={'Exempt'}
						buttonColor={'blue'}
						height={heightControl}
						toggle={assignmentScorerToggle}
						setToggle={setAssignmentScorerToggle}
					/>
				)}
				{!assignment.missing && (
					<div style={{ width: '10rem' }}>
						<StudentInfoMutatorButton
							mutation={undoScoreAssignment}
							variables={{
								_id: student._id,
								date: assignment.dueDate,
								assignmentType: 'THINKING_GUIDE',
								score: assignment.score,
								earnedPoints: assignment.earnedPoints
							}}
							buttonDisplay={'Undo'}
							buttonColor={'red'}
							height={heightControl}
							toggle={assignmentScorerToggle}
							setToggle={setAssignmentScorerToggle}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default CriticalThinkingGrader
