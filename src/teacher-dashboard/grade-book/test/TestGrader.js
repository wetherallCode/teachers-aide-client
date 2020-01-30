import React, { useState } from 'react'
import TestGrid from './TestGrid'

const TestGrader = ({ classRoster, todaysDate }) => {
	const [date, setDate] = useState(todaysDate)

	return (
		<div style={{ margin: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '5rem',
					border: '3px solid var(--blue)',
					fontSize: '150%',
					display: 'grid'
				}}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginLeft: '2%'
						}}>
						<div>Test Grader</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
						<div>Date</div>
					</div>
				</div>
				<TestGrid classRoster={classRoster} date={date} />
			</div>
		</div>
	)
}

export default TestGrader
