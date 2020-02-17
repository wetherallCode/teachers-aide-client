import React, { useState } from 'react'
import IndividualTestDisplay from './IndividualTestDisplay'

const IndividualTestGrid = ({ assignment, student, periodName }) => {
	const [gradeTestToggle, setGradeTestToggle] = useState(false)

	return (
		<div style={{ borderBottom: '1px solid var(--blue)' }}>
			<div
				style={
					!gradeTestToggle
						? {
								display: 'grid',
								gridTemplateColumns: '5fr 1fr',
								overflow: 'scroll',
								fontSize: '120%'
						  }
						: {
								display: 'grid',
								gridTemplateColumns: '5fr 1fr',
								backgroundColor: 'var(--grey)',
								overflow: 'scroll',
								// borderTop: '1px solid var(--blue)',
								fontSize: '120%'
						  }
				}>
				{/* <div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ marginRight: '1%' }}>Pages: </div>
					<div style={{ marginRight: '1%' }}>{test.readingPages}</div>
				</div> */}
				<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
					<div style={{ marginRight: '1%' }}>Sections: </div>
					<div style={{ marginRight: '1%' }}>{assignment.readingSections}</div>
				</div>

				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '120%' }}
					onClick={() => {
						setGradeTestToggle(!gradeTestToggle)
					}}>
					Grade
				</button>
			</div>

			{gradeTestToggle && (
				<IndividualTestDisplay assignment={assignment} student={student} periodName={periodName} />
			)}
		</div>
	)
}

export default IndividualTestGrid
