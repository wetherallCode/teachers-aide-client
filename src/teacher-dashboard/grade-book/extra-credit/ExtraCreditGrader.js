import React, { useState } from 'react'
import {
	SCORE_ASSIGNMENT,
	UNDO_SCORE_ASSIGNMENT
} from '../../class-tool-components/CriticalThinkingScoreMutator'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'
import { useMutation } from '@apollo/react-hooks'

const ExtraCreditGrader = ({ student, assignment }) => {
	const [extraCreditValues, setExtraCreditValues] = useState(0)
	console.log(typeof extraCreditValues)
	const [scoreAssignment] = useMutation(SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader']
		// onCompleted: () => setAssignmentScorerToggle(!assignmentScorerToggle)
	})
	const [undoScoreAssignment] = useMutation(UNDO_SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader']
		// onCompleted: () => setAssignmentScorerToggle(!assignmentScorerToggle)
	})

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '20vh',
				backgroundColor: 'var(--grey)'
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'

					// width: '10rem'
				}}>
				<div style={{ marginRight: '2%', fontSize: '130%' }}>Score: </div>
				<input
					style={{
						backgroundColor: 'var(--white)',
						fontSize: '130%',
						color: 'var(--blue)',
						marginRight: '2%'
					}}
					onChange={e => setExtraCreditValues(Number(e.target.value))}
				/>
				{assignment.missing && (
					<StudentInfoMutatorButton
						mutation={scoreAssignment}
						variables={{
							_id: student._id,
							date: assignment.dueDate,
							assignmentType: 'EXTRA_CREDIT',
							exempt: false,
							missing: false,
							score: extraCreditValues,
							earnedPoints: extraCreditValues,
							responsibilityPoints: extraCreditValues,
							comments: ['Scored'],
							late: false
						}}
						buttonDisplay={'Score'}
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
								assignmentType: 'EXTRA_CREDIT',
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

export default ExtraCreditGrader
