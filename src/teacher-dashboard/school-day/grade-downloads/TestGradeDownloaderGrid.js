import React, { useState, useEffect } from 'react'
import { sortByLastName } from '../../../utils'
import TestGradeDownloaderGridRows from './TestGradeDownloaderGridRows'

const TestGradeDownloaderGrid = ({
	roster,
	setRosterList,
	csvToggle,
	markingPeriods,
	currentMarkingPeriod,
	markingPeriodSelector,
	setMarkingPeriodSelector
}) => {
	return (
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
						value={markingPeriodSelector}
						style={{ fontSize: '90%', marginLeft: '1%', color: 'var(--blue)' }}
						onChange={e => setMarkingPeriodSelector(e.target.value)}>
						{markingPeriods.map(mp => (
							<option key={mp}>{mp}</option>
						))}
					</select>
				</div>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					borderBottom: '1px solid var(--blue)'
				}}>
				<div>Last Name</div>
				<div>First Name</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div>Test Grade</div>
				</div>
			</div>
			{roster.sort(sortByLastName).map((student, i) => (
				<TestGradeDownloaderGridRows
					key={student._id}
					index={i}
					student={student}
					setRosterList={setRosterList}
					csvToggle={csvToggle}
					markingPeriodSelector={markingPeriodSelector}
				/>
			))}
		</div>
	)
}

export default TestGradeDownloaderGrid
