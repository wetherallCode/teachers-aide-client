import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import {
	SCORE_ASSIGNMENT,
	UNDO_SCORE_ASSIGNMENT
} from '../../class-tool-components/CriticalThinkingScoreMutator'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'

const ParentContactGrader = ({
	student,
	assignment,
	assignmentScorerToggle,
	setAssignmentScorerToggle
}) => {
	const [scoreAssignment] = useMutation(SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader'],
		onCompleted: () => setAssignmentScorerToggle(!assignmentScorerToggle)
	})
	const [undoScoreAssignment] = useMutation(UNDO_SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader'],
		onCompleted: () => setAssignmentScorerToggle(!assignmentScorerToggle)
	})
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '3fr 1fr',
				height: '25%',
				backgroundColor: 'var(--grey)',
				paddingBottom: '2%'
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '10rem'
				}}>
				<div style={{ marginRight: '2%' }}>Status: </div>
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'PARENT_CONTACT',
							exempt: false,
							missing: false,
							score: 1,
							earnedPoints: 10,
							responsibilityPoints: 10,
							comments: ['Parent Signed'],
							late: false
						}}
						buttonDisplay={'Signed'}
						buttonColor={'blue'}
						height={2}
					/>
				)}
				{!assignment.missing && (
					<div style={{ width: '10rem' }}>
						<StudentInfoMutatorButton
							mutation={undoScoreAssignment}
							variables={{
								_id: student._id,
								date: assignment.dueDate,
								assignmentType: 'PARENT_CONTACT',
								score: 0,
								earnedPoints: assignment.earnedPoints
							}}
							buttonDisplay={'Undo'}
							buttonColor={'red'}
							height={2}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default ParentContactGrader
