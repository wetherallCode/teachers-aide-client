import React, { useState } from 'react'
import StudentInfoMutatorButton from '../class-tool-components/StudentInfoMutatorButton'

const AssignmentModifierDisplay = ({ period, assignment, updateAssignment, markingPeriodList }) => {
	const [updatedAssignment, setUpdatedAssignment] = useState({
		dueDate: assignment.dueDate,
		maxScore: assignment.maxScore || 2,
		markingPeriod: assignment.markingPeriod
	})

	console.log(assignment.assignedDate)
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
				<div>Marking Period: </div>
				<select
					style={{ width: '10rem', fontSize: '90%', color: 'var(--blue)' }}
					value={assignment.markingPeriod}
					onChange={e =>
						setUpdatedAssignment({ ...updatedAssignment, markingPeriod: e.target.value })
					}>
					{markingPeriodList.map(mp => (
						<option key={mp}>{mp}</option>
					))}
				</select>
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
							value={assignment.maxScore}
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
					markingPeriod: updatedAssignment.markingPeriod,
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
