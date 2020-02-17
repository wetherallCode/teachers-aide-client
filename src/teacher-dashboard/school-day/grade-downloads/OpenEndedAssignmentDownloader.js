import React, { useState, useEffect } from 'react'
import AssignmentsDisplay from './AssignmentsDisplay'

const OpenEndedAssignmentDownloader = ({
	roster,
	period,
	markingPeriods,
	currentMarkingPeriod,
	assignmentTypes,
	classPeriods
}) => {
	const [assignmentTypeFilterValue, setAssignmentTypeFilterValue] = useState('OEQ')
	const [classPeriodAssignments, setClassPeriodAssignments] = useState([])
	const [assignmentValue, setAssignmentValue] = useState('')
	const [markingPeriodValue, setMarkingPeriodValue] = useState(currentMarkingPeriod)

	const homework = classPeriods
		.filter(period => period.assignedHomework)
		.map(period => period.assignedHomework)

	useEffect(() => {
		homework.forEach(element =>
			element.forEach(assignment => setClassPeriodAssignments(list => [...list, assignment]))
		)
	}, [])

	return (
		<div style={{ marginTop: '2%', marginRight: '5%', marginLeft: '5%', marginBottom: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '3rem',
					fontSize: '150%',
					display: 'grid',
					gridTemplateColumns: '1fr '
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ marginLeft: '2%' }}>Open Ended Grade Downloader</div>
				</div>
			</div>
			<div
				style={{
					height: '80%',
					fontSize: '120%',
					borderBottom: '3px solid var(--blue)',
					borderLeft: '3px solid var(--blue)',
					borderRight: '3px solid var(--blue)'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						height: '8vh',
						borderBottom: '1px solid  var(--blue)'
					}}>
					<div style={{ display: 'flex', alignItems: 'center', width: '15rem' }}>
						<div>Marking Period: </div>
						<select
							value={markingPeriodValue}
							style={{ fontSize: '90%', marginLeft: '1%', color: 'var(--blue)' }}
							onChange={e => setMarkingPeriodValue(e.target.value)}>
							{markingPeriods.map(mp => (
								<option key={mp}>{mp}</option>
							))}
						</select>
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div style={{ width: '10rem' }}>Assignment Name: </div>
						<select
							style={{ fontSize: '90%', marginLeft: '1%', color: 'var(--blue)', width: '20rem' }}
							onChange={e => setAssignmentValue(e.target.value)}>
							<option value={''}>Pick an Assignment</option>
							{classPeriodAssignments
								.filter(
									assignment =>
										assignment.assignmentType === assignmentTypeFilterValue &&
										assignment.markingPeriod === markingPeriodValue
								)
								.map((assignment, i) => (
									<option key={i}>{assignment.readingSections}</option>
								))}
						</select>
					</div>
				</div>
				{assignmentValue && (
					<AssignmentsDisplay
						assignmentValue={assignmentValue}
						period={period}
						roster={roster}
						assignmentTypeFilterValue={assignmentTypeFilterValue}
					/>
				)}
			</div>
		</div>
	)
}

export default OpenEndedAssignmentDownloader
