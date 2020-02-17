import React, { useState } from 'react'
import CriticalThinkingGrader from './CriticalThinkingGrader'

const CriticalThinkingGridDisplay = ({ assignment, student }) => {
	const [assignmentScorerToggle, setAssignmentScorerToggle] = useState(false)
	return (
		<div>
			<div
				style={
					!assignmentScorerToggle
						? {
								display: 'grid',
								gridTemplateColumns: '1fr 4fr 1fr',
								overflow: 'scroll',
								borderTop: '1px solid var(--blue)',
								fontSize: '120%'
						  }
						: {
								display: 'grid',
								gridTemplateColumns: '1fr 4fr 1fr',
								backgroundColor: 'var(--grey)',
								overflow: 'scroll',
								borderTop: '1px solid var(--blue)',
								fontSize: '120%'
						  }
				}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ marginRight: '1%' }}>Pages: </div>
					<div style={{ marginRight: '1%' }}>{assignment.readingPages}</div>
				</div>
				<div
					style={
						!assignmentScorerToggle
							? { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }
							: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
					}>
					<div style={{ marginRight: '1%' }}>Sections: </div>
					<div style={{ marginRight: '1%' }}>{assignment.readingSections}</div>
				</div>

				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '120%' }}
					onClick={() => {
						console.log('click')
						setAssignmentScorerToggle(!assignmentScorerToggle)
					}}>
					Grade
				</button>
			</div>
			{assignmentScorerToggle && (
				<CriticalThinkingGrader
					student={student}
					assignment={assignment}
					assignmentScorerToggle={assignmentScorerToggle}
					setAssignmentScorerToggle={setAssignmentScorerToggle}
				/>
			)}
		</div>
	)
}

export default CriticalThinkingGridDisplay
