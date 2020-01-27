import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import AssignmentModifierDisplay from './AssignmentModifierDisplay'
import ClassManagerLinkDisplay from './ClassManagerLinkDisplay'

const UPDATE_ASSIGNMENT = gql`
	mutation updateAssignment($input: UpdateAssignmentInput) {
		updateAssignment(input: $input) {
			students {
				hasAssignments {
					maxScore
				}
			}
		}
	}
`

const AssignmentManager = ({ data, period, date }) => {
	const [updateAssignment] = useMutation(UPDATE_ASSIGNMENT)
	const { assignedHomework } = data.findClassPeriod
	const [switchAssignment, setSwitchAssignment] = useState(true)

	return (
		<div style={{ margin: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '3rem',
					fontSize: '150%',
					display: 'grid',
					gridTemplateColumns: '1fr 2fr'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						marginLeft: '2%'
					}}>
					<div>Assignment Manager</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						marginLeft: '2%'
					}}>
					<div
						style={{ marginRight: '2%' }}
						onMouseOver={e => (e.target.style.color = 'var(--grey)')}
						onMouseOut={e => (e.target.style.color = 'var(--white)')}
						onClick={() => setSwitchAssignment(true)}>
						Assigned Today
					</div>
					<div
						style={{ marginRight: '2%' }}
						onMouseOver={e => (e.target.style.color = 'var(--grey)')}
						onMouseOut={e => (e.target.style.color = 'var(--white)')}
						onClick={() => setSwitchAssignment(false)}>
						Due Today
					</div>
				</div>
			</div>
			<div
				style={{
					color: 'var(--blue)',
					border: '3px solid var(--blue)'
					// display: 'grid',
					// gridTemplateRows: '1fr 4fr'
				}}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
					{assignedHomework.map((assignment, i) => (
						<AssignmentModifierDisplay
							key={i}
							assignment={assignment}
							period={period}
							updateAssignment={updateAssignment}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default AssignmentManager
