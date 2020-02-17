import React, { useState } from 'react'

const SearchForAssignments = ({
	assignmentType,
	assignmentTypeValue,
	setAssignmentTypeValue,
	pickedDate,
	setPickedDate,
	filteredAssignmentList,
	setFilteredAssignmentList,
	markingPeriodList,
	markingPeriod,
	setMarkingPeriod
}) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
			<div
				style={{ display: 'flex', width: '20rem', justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ width: '15rem' }}>Assignment Type: </div>
				<select
					style={{
						height: '1.5rem',
						width: '100%',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '100%'
					}}
					onChange={e => {
						setAssignmentTypeValue(e.target.value)
						setPickedDate('')
						setFilteredAssignmentList([])
					}}>
					<option value='OEQ'>Open Ended Question</option>
					<option value='THINKING_GUIDE'>Critical Thinking Guide</option>
					<option value='TEST'>Test</option>
				</select>
			</div>
			<div
				style={{ display: 'flex', width: '20rem', justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ marginRight: '1%' }}>Marking Period: </div>
				<select
					style={{
						height: '1.5rem',
						width: '30%',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '100%'
					}}
					value={markingPeriod}
					onChange={e => setMarkingPeriod(e.target.value)}>
					{markingPeriodList.map(mp => (
						<option key={mp}>{mp}</option>
					))}
				</select>
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<input
					style={{
						height: '1.5rem',
						width: '63%',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '100%'
					}}
					type='date'
					onChange={e => setPickedDate(e.target.value)}
				/>
				<button
					style={{
						height: '1.8rem',
						width: '30%',
						color: 'var(--white)',
						backgroundColor: 'var(--red)',
						fontSize: '100%'
					}}
					onClick={() => {
						setPickedDate('')
						setFilteredAssignmentList([])
					}}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default SearchForAssignments
