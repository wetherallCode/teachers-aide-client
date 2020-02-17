import React, { useState } from 'react'

const TestLoader = ({
	date,
	data,
	testValues,
	setTestValues,
	markingPeriodDefault,
	markingPeriod
}) => {
	const [dueDate, setDueDate] = useState('')
	const { pages } = data.findLessonByName.readings
	const { sections } = data.findLessonByName.readings
	console.log(testValues)
	return (
		<div style={{ marginTop: '1%' }}>
			<div style={{ textAlign: 'center', marginBottom: '1%' }}>Create Test Here</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<div style={{ marginRight: '1%' }}>Test Date: </div>
				<input
					style={{ fontSize: '100%', color: 'var(--blue)', backgroundColor: 'transparent' }}
					type='date'
					onChange={e => setDueDate(e.target.value)}
				/>
				<button
					style={
						testValues.dueDate === ''
							? {
									width: '10rem',
									fontSize: '100%',
									color: 'var(--white)',
									backgroundColor: 'var(--blue)'
							  }
							: {
									width: '10rem',
									fontSize: '100%',
									color: 'var(--blue)',
									backgroundColor: 'var(--grey)'
							  }
					}
					onClick={() =>
						setTestValues({
							assignedDate: date,
							dueDate: dueDate,
							markingPeriod: markingPeriodDefault,
							readingPages: pages,
							readingSections: sections,
							assignmentType: 'TEST',
							maxScore: 3,
							scored: false
						})
					}>
					Add Test
				</button>
			</div>
		</div>
	)
}

export default TestLoader
