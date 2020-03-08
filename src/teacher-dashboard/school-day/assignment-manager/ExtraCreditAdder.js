import React, { useState, useEffect } from 'react'

const ExtraCreditAdder = ({
	period,
	assignedDate,
	addAssignmentValues,
	setAddAssignmentValues
}) => {
	// const {markingPeriod, readingPages, readingSections, assignmentType, maxScore}
	useEffect(() => {
		setAddAssignmentValues({
			...addAssignmentValues,
			assignmentType: 'EXTRA_CREDIT',
			readingPages: 'extra-credit'
		})
	}, [])
	return (
		<div>
			{/* <div style={{ marginBottom: '2%', textAlign: 'center' }}>Parent Contact</div> */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
					// marginBottom: '2.5%'
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
					alignItems: 'center'
					// marginBottom: '1%'
				}}>
				<div>Name: </div>
				<input
					type='text'
					onChange={e =>
						setAddAssignmentValues({ ...addAssignmentValues, readingSections: e.target.value })
					}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
					// marginBottom: '1%'
				}}>
				<div>Points Available: </div>
				<input
					type='text'
					onChange={e =>
						setAddAssignmentValues({
							...addAssignmentValues,
							maxScore: Number(e.target.value)
						})
					}
				/>
			</div>
		</div>
	)
}

export default ExtraCreditAdder
