import React, { useState } from 'react'
import StudentInfoMutatorButton from '../class-tool-components/StudentInfoMutatorButton'

const AssignmentModifierDisplay = ({ period, assignment, updateAssignment }) => {
	const [updatedAssignment, setUpdatedAssignment] = useState({
		dueDate: assignment.dueDate,
		maxScore: assignment.maxScore
	})

	const [dueDateToggle, setDueDateToggle] = useState(false)
	const [maxScoreToggle, setMaxScoreToggle] = useState(false)
	return (
		<div style={{ display: 'flex', flexDirection: 'column', fontSize: '130%' }}>
			<div style={{ textAlign: 'center' }}>{assignment.assignmentType}</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<div>Due Date: </div>
				{!dueDateToggle ? (
					<div onClick={() => setDueDateToggle(!dueDateToggle)}>{assignment.dueDate}</div>
				) : (
					<input
						type='date'
						onChange={e => setUpdatedAssignment({ ...updatedAssignment, dueDate: e.target.value })}
					/>
				)}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<div>Max Score: </div>
				{!maxScoreToggle ? (
					<div onClick={() => setMaxScoreToggle(!maxScoreToggle)}>{updatedAssignment.maxScore}</div>
				) : (
					<div style={{ display: 'flex' }}>
						<button
							style={{ marginRight: '10%' }}
							onClick={e => {
								setUpdatedAssignment({
									...updatedAssignment,
									maxScore: 5
								})
								setMaxScoreToggle(false)
							}}>
							5
						</button>
						<button
							onClick={e => {
								setUpdatedAssignment({
									...updatedAssignment,
									maxScore: 2
								})
								setMaxScoreToggle(false)
							}}>
							2
						</button>
					</div>
				)}
			</div>

			<StudentInfoMutatorButton
				mutation={updateAssignment}
				variables={{
					period: period,
					assignmentType: assignment.assignmentType,
					assignedDate: assignment.assignedDate,
					dueDate: updatedAssignment.dueDate,
					markingPeriod: assignment.markingPeriod,
					readingPages: assignment.readingPages,
					readingSections: assignment.readingSections,
					maxScore: updatedAssignment.maxScore
				}}
				buttonColor={'blue'}
				buttonDisplay={'Update Lesson'}
			/>
		</div>
	)
}

export default AssignmentModifierDisplay
