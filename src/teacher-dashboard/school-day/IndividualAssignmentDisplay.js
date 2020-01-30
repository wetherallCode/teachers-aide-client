import React, { useState, useEffect } from 'react'

const IndividualAssignmentDisplay = ({
	lesson,
	assignment,
	markingPeriods,
	date,
	assignmentList,
	setAssignmentList,
	markingPeriodDefault
}) => {
	const [assignedHomework, setAssignedHomework] = useState({
		assignedDate: '',
		dueDate: '',
		markingPeriod: markingPeriodDefault,
		readingPages: '',
		readingSections: '',
		assignmentType: '',
		maxScore: 2
	})

	useEffect(() => {
		if (assignment.type === 'OEQ') {
			setAssignedHomework({ ...assignedHomework, maxScore: 5 })
		}
	}, [])

	const [maxScoreToggle, setMaxScoreToggle] = useState(false)
	const [dueDateSet, setDueDateSet] = useState(false)

	const assignmentSet = assignmentList.some(i => i.assignmentType === assignment.type)

	const handleChange = () => {
		const assignmentIndex = assignmentList.findIndex(i => i.assignmentType === assignment.type)

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
				<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
					<div>Assign Maximum Score: </div>
					{assignment.type === 'OEQ' ? (
						<div onClick={() => setMaxScoreToggle(!maxScoreToggle)}>
							{maxScoreToggle ? (
								<div>
									<button
										value={5}
										onClick={e =>
											setAssignedHomework({
												...assignedHomework,
												maxScore: parseInt(e.target.value, 10)
											})
										}>
										5
									</button>
									<button
										value={2}
										onClick={e =>
											setAssignedHomework({
												...assignedHomework,
												maxScore: parseInt(e.target.value, 10)
											})
										}>
										2
									</button>
								</div>
							) : (
								<div>{assignedHomework.maxScore}</div>
							)}
						</div>
					) : (
						<div>2</div>
					)}
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
