import React, { useState } from 'react'

const IndividualAssignmentDisplay = ({
	lesson,
	assignment,
	date,

	assignmentList,
	setAssignmentList
}) => {
	const [assignedHomework, setAssignedHomework] = useState({
		assignedDate: '',
		dueDate: '',
		readingPages: '',
		readingSections: '',
		assignmentType: ''
	})

	const [assignmentAdded, setAssignmentAdded] = useState(false)
	const [dueDateSet, setDueDateSet] = useState(false)

	const assignmentSet = assignmentList.some(i => i.assignmentType === assignment.type)

	const handleChange = () => {
		const assignmentIndex = assignmentList.findIndex(i => i.assignmentType === assignment.type)
		console.log(assignmentIndex)
		if (assignmentIndex > -1) {
			setAssignmentList(list => [
				...list.slice(0, assignmentIndex),
				...list.slice(assignmentIndex + 1)
			])
		} else {
			setAssignmentList(list => [...assignmentList, assignedHomework])
		}
	}

	return (
		<div
			style={
				!assignmentSet
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
				{assignment.type === 'OEQ' ? 'Open Ended Question' : 'Critical Thinking Guide'}
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
									readingPages: assignment.readingPages,
									readingSections: assignment.readingSections,
									assignmentType: assignment.type
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
							<div onClick={() => setDueDateSet(false)}>{assignedHomework.dueDate}</div>
						</div>
					)}
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
					<div>Pages</div>
					<div
						style={{
							borderRadius: '5px'
						}}>
						{assignment.readingPages}
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
						{assignment.readingSections}
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
						!assignmentSet
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
					onClick={() => handleChange()}>
					{assignmentSet ? 'Remove Assignment' : 'Add Assignment'}
				</button>
			</div>
		</div>
	)
}

export default IndividualAssignmentDisplay
