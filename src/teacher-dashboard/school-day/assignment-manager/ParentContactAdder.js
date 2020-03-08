import React, { useState, useEffect } from 'react'

const ParentContactAdder = ({
	period,
	assignedDate,
	addAssignmentValues,
	setAddAssignmentValues
}) => {
	useEffect(() => {
		setAddAssignmentValues({
			...addAssignmentValues,
			assignmentType: 'PARENT_CONTACT',
			readingPages: 'parent-contact',
			maxScore: 10
		})
	}, [])
	return (
		<div>
			{/* <div style={{ marginBottom: '2%', textAlign: 'center' }}>Parent Contact</div> */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: '2.5%'
				}}>
				<div>Due Date: </div>
				<input
					type='date'
					onChange={e =>
						setAddAssignmentValues({ ...addAssignmentValues, dueDate: e.target.value })
					}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: '1%'
				}}>
				<div>Name: </div>
				<input
					type='text'
					onChange={e =>
						setAddAssignmentValues({ ...addAssignmentValues, readingSections: e.target.value })
					}
				/>
			</div>
		</div>
	)
}

export default ParentContactAdder
