import React, { useState, useEffect } from 'react'
import BehaviorPointsMutator from './BehaviorPointsMutator'
import CriticalThinkingScoreMutator from './CriticalThinkingScoreMutator'
import ScoreProtocol from './protocol-scoring/ScoreProtocol'

const StudentInfoMutator = ({
	match,
	periodName,
	student,
	todaysDate,
	teacherOptions,
	setTeacherOptions,
	protocolToggle,
	setProtocolToggle
}) => {
	const [hasAssignment, setHasAssignment] = useState(false)
	const [studentCategoryToggle, setStudentCategoryToggle] = useState('behavior')
	const [todaysCriticalThinkingGuide] = student.hasAssignments.filter(
		assignment =>
			assignment.assignmentType === 'THINKING_GUIDE' && assignment.dueDate === todaysDate
	)

	useEffect(() => {
		student.hasAssignments.forEach(assignment => {
			if (assignment.assignmentType === 'THINKING_GUIDE' && assignment.dueDate === todaysDate) {
				setHasAssignment(true)
			}
		})
	}, [hasAssignment, setHasAssignment])
	const protocolIsActive = student.hasProtocols.some(protocol => protocol.isActive === true)
	return (
		<div
			style={{
				backgroundColor: 'var(--grey)',
				// height: '60vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				textAlign: 'center',
				overflow: 'scroll'
			}}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					borderRadius: '5%',
					marginTop: '2%',
					width: '20rem'
				}}>
				<button
					style={{
						backgroundColor: 'var(--blue)',
						color: 'var(--white)',
						width: '6rem',
						height: '2rem',
						fontSize: '1rem'
					}}
					onClick={() => setStudentCategoryToggle('behavior')}>
					Behavior
				</button>
				<button
					style={{
						backgroundColor: 'var(--blue)',
						color: 'var(--white)',
						width: '6rem',
						height: '2rem',
						fontSize: '1rem'
					}}
					onClick={() => setStudentCategoryToggle('homework')}>
					Homework
				</button>
			</div>
			<>
				{protocolIsActive && (
					<ScoreProtocol
						student={student}
						protocol={student.hasProtocols.filter(protocol => protocol.isActive === true)}
					/>
				)}
			</>
			{!protocolIsActive && (
				<>
					{studentCategoryToggle === 'behavior' && (
						<BehaviorPointsMutator
							match={match}
							periodName={periodName}
							student={student}
							teacherOptions={teacherOptions}
							setTeacherOptions={setTeacherOptions}
						/>
					)}

					{studentCategoryToggle === 'homework' && (
						<CriticalThinkingScoreMutator
							student={student}
							todaysCriticalThinkingGuide={todaysCriticalThinkingGuide}
							todaysDate={todaysDate}
							teacherOptions={teacherOptions}
							setTeacherOptions={setTeacherOptions}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default StudentInfoMutator
