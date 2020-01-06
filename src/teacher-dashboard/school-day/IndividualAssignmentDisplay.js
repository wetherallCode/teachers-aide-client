import React, { useState } from 'react'

const IndividualAssignmentDisplay = ({
	lesson,
	date,
	assignedHomework,
	setAssignedHomework,
	assignmentList,
	setAssignmentList
}) => {
	const [assignmentAdded, setAssignmentAdded] = useState(false)
	const [dueDateSet, setDueDateSet] = useState(false)

	return (
		<div
			style={
				!assignmentAdded
					? {
							display: 'grid',
							gridTemplateRows: '1fr 3fr',
							marginLeft: '2%',
							marginRight: '2%',
							marginBottom: '2%',
							fontSize: '80%'
					  }
					: {
							display: 'grid',
							gridTemplateRows: '1fr 3fr',
							marginLeft: '2%',
							marginRight: '2%',
							marginBottom: '2%',
							color: 'var(--grey)',
							fontSize: '80%'
					  }
			}>
			<div style={{ textAlign: 'center', textDecoration: 'underline' }}>
				{lesson.type === 'OEQ' ? 'Open Ended Question' : 'Critical Thinking Guide'}
			</div>
			<div>
				<div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>Assigned Date</div>
					<div
						style={{
							borderRadius: '5px',
							display: 'flex',
							alignItems: 'center'
						}}>
						<div>{date}</div>
					</div>
					{/* <input
								type='date'
								value={date}
								onChange={e =>
									setAssignedHomework({ ...assignedHomework, assignedDate: e.target.value })
								}
								style={{
									backgroundColor: 'var(--white)',
									color: 'var(--blue)',
									borderRadius: '5px',
									fontSize: '70%'
								}}></input> */}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
					<div>Due Date</div>
					{!dueDateSet ? (
						<input
							style={{
								backgroundColor: 'var(--white)',
								color: 'var(--blue)',
								borderRadius: '2%',
								fontSize: '100%'
							}}
							type='date'
							onChange={e => {
								setAssignedHomework({
									...assignedHomework,
									assignedDate: date,
									dueDate: e.target.value,
									readingPages: lesson.readingPages,
									readingSections: lesson.readingSections,
									assignmentType: lesson.type
								})
								setDueDateSet(true)
							}}
						/>
					) : (
						<div
							style={{
								borderRadius: '5px',

								display: 'flex',
								alignItems: 'center'
							}}>
							<div>{assignedHomework.dueDate}</div>
						</div>
					)}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
					<div>Pages</div>
					<div
						style={{
							borderRadius: '5px'
						}}>
						{lesson.readingPages}
					</div>
					{/* <input
								placeholder={lesson.readingPages}
								style={{
									backgroundColor: 'var(--white)',
									color: 'var(--blue)',
									borderRadius: '5px',
						
								}}
								value={lesson.readingPages}
								onChange={e =>
									setAssignedHomework({ ...assignedHomework, readingPage: e.target.value })
								}></input> */}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
					<div>Sections</div>
					<div
						style={{
							borderRadius: '5px'
						}}>
						{lesson.readingSections}
					</div>
					{/* <input
								style={{
									backgroundColor: 'var(--white)',
									color: 'var(--blue)',
									borderRadius: '5px',
						
								}}
								value={lesson.readingSections}
								onChange={e =>
									setAssignedHomework({ ...assignedHomework, readingSections: e.target.value })
								}></input> */}
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
				<button
					style={
						!assignmentAdded
							? {
									width: '60%',
									fontSize: '120%',
									height: '2rem',
									backgroundColor: 'var(--blue)',
									color: 'var(--white)'
							  }
							: {
									width: '60%',
									fontSize: '120%',
									height: '2rem',
									backgroundColor: 'var(--grey)',
									color: 'var(--blue)'
							  }
					}
					onClick={e => {
						e.preventDefault()
						if (!assignmentAdded) {
							setAssignmentList(list => {
								console.log(list)
								return [assignedHomework].concat(list)
							})
							setAssignmentAdded(true)
						} else {
							console.log('already added')
						}
					}}>
					Add Assignment
				</button>
			</div>
		</div>
	)
}

export default IndividualAssignmentDisplay
