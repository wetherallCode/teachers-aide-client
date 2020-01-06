import React, { useState } from 'react'

const WorkDue = ({ AssignmentType, workDueList, setWorkDueList }) => {
	const [assignment, setAssignment] = useState({
		type: AssignmentType[0],
		readingPages: '',
		readingSections: ''
	})
	return (
		<>
			<div>Assignments</div>
			<div>Reading Pages</div>
			<input
				type='text'
				placeholder='Reading Pages'
				onChange={e => setAssignment({ ...assignment, readingPages: e.target.value })}></input>
			<div>Reading Sections</div>
			<input
				type='text'
				placeholder='Reading Sections'
				onChange={e => setAssignment({ ...assignment, readingSections: e.target.value })}></input>
			<div>Assignment Type</div>
			<select>
				{AssignmentType.map(type => (
					<option key={type} onChange={e => setAssignment({ ...assignment, type: e.target.value })}>
						{type}
					</option>
				))}
			</select>
			<button onClick={() => setWorkDueList(list => [...workDueList, assignment])}>
				Add Assignment
			</button>
		</>
	)
}

export default WorkDue
