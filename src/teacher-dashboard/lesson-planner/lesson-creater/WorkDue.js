import React, { useState } from 'react'

const WorkDue = ({ AssignmentType, workDueList, setWorkDueList }) => {
	const [assignment, setAssignment] = useState({
		type: AssignmentType[0],
		readingPages: '',
		readingSections: ''
	})
	console.log(AssignmentType)
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr  1fr ',
				height: '30vh',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '100%' }}
					onClick={() => setWorkDueList(list => [...workDueList, assignment])}>
					Add Assignment
				</button>
				<div>
					<div
						style={{
							marginRight: '3%',
							fontSize: '160%',
							textAlign: 'center',
							marginBottom: '3%',
							marginTop: '2%'
						}}>
						Assignments
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginBottom: '3%'
						}}>
						<div style={{ fontSize: '130%', marginRight: '2%' }}>Reading Pages</div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								width: '70%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e => setAssignment({ ...assignment, readingPages: e.target.value })}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginBottom: '3%'
						}}>
						<div style={{ fontSize: '130%', marginRight: '2%' }}>Reading Sections</div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								width: '60%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e =>
								setAssignment({ ...assignment, readingSections: e.target.value })
							}></input>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginBottom: '3%'
						}}>
						<div style={{ fontSize: '130%', marginRight: '2%' }}>Assignment Type</div>
						<select
							style={{
								height: '2rem',
								width: '40%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e => setAssignment({ ...assignment, type: e.target.value })}>
							{AssignmentType.map(type => (
								<option key={type}>{type}</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					margin: '5%'
				}}>
				{workDueList.map((assignment, i) => (
					<div
						key={i}
						style={{
							border: '1px solid var(--blue)',
							width: '20%',
							display: 'flex',
							flexDirection: 'column',
							padding: '5%'
						}}>
						<div style={{ textAlign: 'center' }}>{assignment.type}</div>
						<div style={{ textAlign: 'left', fontSize: '20%' }}>
							{assignment.readingPages}: {assignment.readingSections}
						</div>{' '}
						<div>_________________</div>
						<div>_________________</div>
						<div>_________________</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default WorkDue
