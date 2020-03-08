import React, { useState, useEffect } from 'react'
import AssignmentDisplayRows from './AssignmentDisplayRows'
import { sortByLastName } from '../../../utils'
import { CSVLink } from 'react-csv'

const AssignmentsDisplay = ({ assignmentValue, roster, period, assignmentTypeFilterValue }) => {
	const [assignmentList, setAssignmentList] = useState([])
	const [createCSVToggle, setCreateCSVToggle] = useState(false)
	console.log(assignmentList)
	const headers = [
		{ label: 'NAME', key: 'NAME' },
		{ label: 'STUDENTID', key: 'STUDENTID' },
		{ label: 'GRADE', key: 'GRADE' },
		{ label: 'ABSENT', key: 'ABSENT' },
		{ label: 'EXEMPT', key: 'EXEMPT' },
		{ label: 'INCOMPLETE', key: 'INCOMPLETE' },
		{ label: 'MISSING', key: 'MISSING' }
	]

	return (
		<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 14fr auto' }}>
			<div style={{ textAlign: 'center', fontSize: '130%' }}>{assignmentValue}</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
					borderBottom: '1px solid var(--blue)'
				}}>
				<div>Last Name</div>
				<div>First Name</div>
				<div>Score</div>
				<div>Missing</div>
				<div>Exempt</div>
			</div>
			<div>
				{roster.sort(sortByLastName).map((student, i) => (
					<AssignmentDisplayRows
						key={student._id}
						index={i}
						assignmentValue={assignmentValue}
						student={student}
						assignmentTypeFilterValue={assignmentTypeFilterValue}
						assignmentList={assignmentList}
						setAssignmentList={setAssignmentList}
						createCSVToggle={createCSVToggle}
					/>
				))}
			</div>
			{!createCSVToggle && (
				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '130%' }}
					onClick={() => setCreateCSVToggle(true)}>
					Load Import Grade Document
				</button>
			)}
			{createCSVToggle && assignmentList.length > 0 && (
				<CSVLink
					data={assignmentList}
					headers={headers}
					filename={
						assignmentValue
							.split('-')
							.join(' ')
							.split(' ')
							.join('_') +
						'_' +
						period
					}
					style={{
						backgroundColor: 'var(--red)',
						color: 'var(--white)',
						fontSize: '140%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						textDecoration: 'none'
					}}
					target='_blank'>
					Download
				</CSVLink>
			)}
		</div>
	)
}

export default AssignmentsDisplay
