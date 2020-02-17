import React, { useState } from 'react'
import StudentInfoMutatorButton from '../class-tool-components/StudentInfoMutatorButton'
import { useQuery } from '@apollo/react-hooks'
import { GET_CURRENT_MARKING_PERIOD } from './ClassPeriodCreator'
import { CURRENT_MARKING_PERIOD_ID } from '../../utils'

const AssignmentModifierDisplay = ({ period, assignment, updateAssignment, markingPeriodList }) => {
	const [updatedAssignment, setUpdatedAssignment] = useState({
		dueDate: assignment.dueDate,
		maxScore: assignment.maxScore || 2,
		markingPeriod: assignment.markingPeriod,
		readingSections: assignment.readingSections
	})

	const [dueDateToggle, setDueDateToggle] = useState(false)
	const [maxScoreToggle, setMaxScoreToggle] = useState(false)
	const [readingSectionToggle, setReadingSectionToggle] = useState(false)
	const [markingPeriodToggle, setMarkingPeriodToggle] = useState(false)
	const [updateAssignmentCheckPoint, setUpdateAssignmentCheckPoint] = useState(false)

	const { loading, data, error } = useQuery(GET_CURRENT_MARKING_PERIOD, {
		variables: { _id: CURRENT_MARKING_PERIOD_ID }
	})
	if (loading) return null
	if (error) console.error(error)
	const { markingPeriod } = data.findCurrentMarkingPeriod
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				fontSize: '130%',
				marginTop: '2%',
				overflow: 'scroll'
			}}>
			<div style={{ textAlign: 'center', marginBottom: '2%' }}>
				{assignment.assignmentType === 'OEQ'
					? 'Update Open Ended'
					: 'Update Critical Thinking Guide'}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<div style={{ marginRight: '1%' }}>Reading Section: </div>
				{!readingSectionToggle ? (
					<div onClick={() => setReadingSectionToggle(!readingSectionToggle)}>
						{updatedAssignment.readingSections.substring(0, 22)}...
					</div>
				) : (
					<input
						type='text'
						onChange={e =>
							setUpdatedAssignment({ ...updatedAssignment, readingSections: e.target.value })
						}
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
				<div style={{ marginRight: '1%' }}>Due Date: </div>
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
				<div style={{ marginRight: '1%' }}>Marking Period: </div>
				{!markingPeriodToggle ? (
					<div onClick={() => setMarkingPeriodToggle(true)}>{assignment.markingPeriod}</div>
				) : (
					<select
						style={{ width: '10rem', fontSize: '90%', color: 'var(--blue)' }}
						value={markingPeriod}
						onChange={e =>
							setUpdatedAssignment({ ...updatedAssignment, markingPeriod: e.target.value })
						}>
						{markingPeriodList.map(mp => (
							<option key={mp}>{mp}</option>
						))}
					</select>
				)}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'center',
					marginBottom: '2%'
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

			{!updateAssignmentCheckPoint ? (
				<button
					style={{
						fontSize: '100%',
						height: `2rem`,
						width: '100%',
						textDecoration: 'none',
						color: 'var(--white)',
						backgroundColor: `var(--blue)`,
						borderRadius: '5px',
						boxShadow: `1px 1px 2px 1px var(--blue)`
					}}
					onClick={() => setUpdateAssignmentCheckPoint(true)}>
					Update Assignment
				</button>
			) : (
				<StudentInfoMutatorButton
					mutation={updateAssignment}
					variables={{
						period: period,
						assignmentType: assignment.assignmentType,
						assignedDate: assignment.assignedDate,
						dueDate: updatedAssignment.dueDate,
						markingPeriod: updatedAssignment.markingPeriod,
						readingPages: assignment.readingPages,
						readingSections: updatedAssignment.readingSections,
						maxScore: updatedAssignment.maxScore
					}}
					buttonColor={'red'}
					buttonDisplay={
						assignment.assignmentType === 'OEQ' ? 'Update Open Ended' : 'Update Critical Thinking'
					}
				/>
			)}
		</div>
	)
}

export default AssignmentModifierDisplay
