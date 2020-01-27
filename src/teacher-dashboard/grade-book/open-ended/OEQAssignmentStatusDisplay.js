import React, { useState } from 'react'

const OEQAssignmentStatusDisplay = ({ student, assignment, essentialQuestion }) => {
	const studentWasAbsent = student.daysAbsent.includes(assignment.dueDate)
	return (
		<div style={{ borderBottom: '1px solid var(--blue)', fontSize: '110%', paddingBottom: '2%' }}>
			<div style={{ marginTop: '1.5%', paddingBottom: '2%', textAlign: 'center' }}>
				Assignment Status
			</div>
			<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }}>
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '12rem'
						}}>
						<div style={{ marginRight: '2%' }}>Assigned: </div>
						<div>
							{assignment.assignedDate.substring(5)}-{assignment.assignedDate.substring(0, 4)}
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '13rem'
						}}>
						<div style={{ marginRight: '2%' }}>Student Status: </div>
						<div>{studentWasAbsent ? 'Absent' : 'Present'} </div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<div style={{ marginRight: '2%' }}>Status: </div>
						{assignment.missing ? (
							<div style={{ color: 'var(--red)' }}>Missing</div>
						) : (
							<div>Completed</div>
						)}
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					paddingBottom: '2%'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '60rem'
					}}>
					<div style={{ marginRight: '1%' }}>Question: </div>
					<div>{essentialQuestion.question}</div>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '20rem'
					}}>
					<div style={{ marginRight: '1%' }}>Type: </div>
					<div>{essentialQuestion.type}</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '20rem'
					}}>
					<div style={{ marginRight: '1%' }}>Text Structure: </div>
					<div>{essentialQuestion.textStructure}</div>
				</div>
			</div>
		</div>
	)
}

export default OEQAssignmentStatusDisplay
