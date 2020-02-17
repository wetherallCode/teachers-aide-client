import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { GRADE_TESTS, UNDO_GRADED_TEST } from './TestGrid'

const IndividualTestDisplay = ({ assignment, student, periodName }) => {
	const [testValues, setTestValues] = useState({
		_id: student._id,
		dueDate: assignment.dueDate,
		period: student.period,
		missing: true,
		exempt: false,
		score: 0,
		earnedPoints: 0,
		studyTime: 0
	})

	const [gradeTests] = useMutation(GRADE_TESTS, {
		refetchQueries: ['classrosterForAssignmentGrader']
	})
	const [undoGradedTest] = useMutation(UNDO_GRADED_TEST, {
		refetchQueries: ['classrosterForAssignmentGrader']
	})
	console.log(testValues)
	return (
		<div
			style={{
				backgroundColor: 'var(--grey)',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				height: '20vh'
			}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '3fr  1fr',
					width: '100%',
					fontSize: '120%'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center'
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '15rem'
						}}>
						<div style={{ marginRight: '2%' }}>Score: </div>
						{assignment.missing ? (
							<input
								type='text'
								onChange={e => {
									setTestValues({
										...testValues,
										score: parseInt(e.target.value),
										missing: false,
										earnedPoints: parseInt(e.target.value)
									})
								}}
							/>
						) : (
							<div>{assignment.score}</div>
						)}
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '15rem'
						}}>
						<div style={{ marginRight: '2%' }}>Study Time: </div>
						{assignment.missing ? (
							<input
								type='text'
								onChange={e => {
									setTestValues({ ...testValues, studyTime: parseInt(e.target.value) })
								}}
							/>
						) : assignment.studyTime > 0 ? (
							<div>{assignment.studyTime} minutes</div>
						) : (
							<div>Didn't Study</div>
						)}
					</div>
				</div>
				{assignment.missing ? (
					<button
						style={{
							backgroundColor: 'var(--blue)',
							color: ' var(--white)',
							fontSize: '120%',
							width: '50%'
						}}
						onClick={() =>
							gradeTests({
								variables: {
									input: {
										period: periodName,
										dueDate: assignment.dueDate,
										scoredTests: [testValues]
									}
								}
							})
						}>
						Grade
					</button>
				) : (
					<button
						style={{
							backgroundColor: 'var(--red)',
							color: ' var(--white)',
							fontSize: '120%',
							width: '50%'
						}}
						onClick={() =>
							undoGradedTest({
								variables: {
									input: {
										_id: student._id,
										dueDate: assignment.dueDate,
										earnedPoints: assignment.earnedPoints
									}
								}
							})
						}>
						Undo
					</button>
				)}
			</div>
		</div>
	)
}

export default IndividualTestDisplay
