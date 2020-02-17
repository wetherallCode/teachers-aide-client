import React, { useState, useEffect } from 'react'
import BehaviorPointsMutator from './BehaviorPointsMutator'
import CriticalThinkingScoreMutator from './CriticalThinkingScoreMutator'

const StudentInfoMutator = ({
	match,
	periodName,
	student,
	todaysDate,
	teacherOptions,
	setTeacherOptions
}) => {
	const [hasAssignment, setHasAssignment] = useState(false)

	useEffect(() => {
		student.hasAssignments.forEach(assignment => {
			if (assignment.assignmentType === 'THINKING_GUIDE' && assignment.dueDate === todaysDate) {
				setHasAssignment(true)
			}
		})
	}, [hasAssignment, setHasAssignment])

	return (
		<div
			style={{
				backgroundColor: 'var(--grey)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				textAlign: 'center',
				overflow: 'scroll'
			}}>
			<BehaviorPointsMutator
				match={match}
				periodName={periodName}
				student={student}
				teacherOptions={teacherOptions}
				setTeacherOptions={setTeacherOptions}
			/>
			{hasAssignment && student.hasAssignments !== null ? (
				<CriticalThinkingScoreMutator
					student={student}
					todaysDate={todaysDate}
					teacherOptions={teacherOptions}
					setTeacherOptions={setTeacherOptions}
				/>
			) : (
				<>
					{teacherOptions.criticalThinkingToggle && (
						<div style={{ color: 'var(--blue', fontSize: '120%', marginTop: '20%' }}>
							There have been no assignments given to this student at this time.
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default StudentInfoMutator
