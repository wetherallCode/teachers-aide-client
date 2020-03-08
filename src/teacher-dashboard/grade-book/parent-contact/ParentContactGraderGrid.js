import React, { useState, useEffect } from 'react'
import CriticalThinkingGrader from '../critical-thinking/CriticalThinkingGrader'
import ParentContactGrader from './ParentContactGrader'

const ParentContactGraderGrid = ({ student, assignment }) => {
	const [assignmentScorerToggle, setAssignmentScorerToggle] = useState(false)
	return (
		<div>
			<div
				style={
					!assignmentScorerToggle
						? {
								display: 'grid',
								gridTemplateColumns: '5fr 1fr',
								overflow: 'scroll',
								borderBottom: '1px solid var(--blue)',
								fontSize: '120%'
						  }
						: {
								display: 'grid',
								gridTemplateColumns: '5fr 1fr',
								backgroundColor: 'var(--grey)',
								overflow: 'scroll',
								borderBottom: '1px solid var(--blue)',
								fontSize: '120%'
						  }
				}>
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
				<ParentContactGrader
					student={student}
					assignment={assignment}
					assignmentScorerToggle={assignmentScorerToggle}
					setAssignmentScorerToggle={setAssignmentScorerToggle}
				/>
			)}
		</div>
	)
}

export default ParentContactGraderGrid
