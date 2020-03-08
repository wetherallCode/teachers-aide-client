import React, { useState } from 'react'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'
import { useQuery } from '@apollo/react-hooks'
import { GET_CURRENT_MARKING_PERIOD } from '../ClassPeriodCreator'
import { CURRENT_MARKING_PERIOD_ID } from '../../../utils'

const TestModifierDisplay = ({
	period,
	date,
	markingPeriodList,
	updateAssignment,
	assignedTest,
	updateCheckToggle,
	setUpdateCheckToggle
}) => {
	const [modifiedTestValues, setModifiedTestValues] = useState({
		assignmentType: assignedTest.assignmentType,
		assignedDate: assignedTest.assignedDate,
		dueDate: assignedTest.dueDate,
		markingPeriod: assignedTest.markingPeriod,
		readingPages: assignedTest.readingPages,
		readingSections: assignedTest.readingSections,
		maxScore: assignedTest.maxScore
	})
	const [dueDateToggle, setDueDateToggle] = useState(false)
	const [markingPeriodToggle, setMarkingPeriodToggle] = useState(false)
	const { loading, data, error } = useQuery(GET_CURRENT_MARKING_PERIOD, {
		variables: { _id: CURRENT_MARKING_PERIOD_ID }
	})
	if (loading) return null
	if (error) console.error(error)
	const { markingPeriod } = data.findCurrentMarkingPeriod

	return (
		<div style={{ fontSize: '130%', height: '15vh' }}>
			<div style={{ textAlign: 'center', marginTop: '2%' }}>Update Test</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div>{modifiedTestValues.readingSections.substring(0, 42)}...</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{ marginRight: '1%' }}>DueDate: </div>
				{!dueDateToggle ? (
					<div onClick={() => setDueDateToggle(!dueDateToggle)}>{assignedTest.dueDate}</div>
				) : (
					<input
						type='date'
						value={modifiedTestValues.dueDate}
						onChange={e =>
							setModifiedTestValues({ ...modifiedTestValues, dueDate: e.target.value })
						}
					/>
				)}
			</div>
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
				<div style={{ marginRight: '1%' }}>MarkingPeriod: </div>
				{!markingPeriodToggle ? (
					<div onClick={() => setMarkingPeriodToggle(!markingPeriodToggle)}>
						{assignedTest.markingPeriod}
					</div>
				) : (
					<select
						style={{ width: '10rem', fontSize: '90%', color: 'var(--blue)' }}
						onChange={e =>
							setModifiedTestValues({ ...modifiedTestValues, markingPeriod: e.target.value })
						}
						value={markingPeriod}>
						{markingPeriodList.map(mp => (
							<option key={mp} value={mp}>
								{mp}
							</option>
						))}
					</select>
				)}
			</div>

			{!updateCheckToggle ? (
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
					onClick={() => setUpdateCheckToggle(!updateCheckToggle)}>
					Update Test
				</button>
			) : (
				<StudentInfoMutatorButton
					mutation={updateAssignment}
					variables={{
						period: period,
						assignmentType: modifiedTestValues.assignmentType,
						assignedDate: modifiedTestValues.assignedDate,
						dueDate: modifiedTestValues.dueDate,
						markingPeriod: modifiedTestValues.markingPeriod,
						readingPages: modifiedTestValues.readingPages,
						readingSections: modifiedTestValues.readingSections,
						maxScore: modifiedTestValues.maxScore
					}}
					buttonColor={'red'}
					buttonDisplay={'Execute'}
				/>
			)}
		</div>
	)
}

export default TestModifierDisplay
