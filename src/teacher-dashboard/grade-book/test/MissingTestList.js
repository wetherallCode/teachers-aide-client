import React, { useState } from 'react'

const MissingTestList = ({ classRoster, dueDate }) => {
	const todaysDate = new Date().toISOString().substring(0, 10)
	const todaysYear = todaysDate.substring(0, 4)
	const todaysMonth = todaysDate.substring(5, 7)
	const todaysDay = todaysDate.substring(8, 10)

	return (
		<div
			style={{
				backgroundColor: 'var(--white)',
				color: 'var(--blue)',
				height: '75vh',
				width: '71.5vw',
				overflow: 'scroll',
				display: 'flex',
				flexDirection: 'column'
			}}>
			{classRoster.map((student, i) => {
				console.log(
					student.hasTests.filter(
						test => test.missing && test.markingPeriod === 'THIRD' && test.dueDate < todaysDate
					)
				)
				return (
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }} key={i}>
						<div>{student.firstName}: </div>
						<div style={{ display: 'flex', overflow: 'scroll' }}>
							{student.hasTests
								.filter(
									test =>
										test.missing && test.markingPeriod === 'THIRD' && test.dueDate < todaysDate
								)
								.map((test, i) => (
									<div key={i} style={{ width: '40rem' }}>
										{test.readingSections.substring(0, 25)}...
									</div>
								))}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default MissingTestList
