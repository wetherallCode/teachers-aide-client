import React, { useState, useEffect } from 'react'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'

const OEQCompletionGradeSubmit = ({
	student,
	assignment,
	organizerGrade,
	setOrganizerGrade,
	paragraphGrade,
	setParagraphGrade,
	gradeOpenEndedToggle,
	setGradeOpenEndedToggle,
	scoreAssignment,
	undoScoreAssignment
}) => {
	const [late, setLate] = useState(false)
	const [latenessOverride, setLatenessOverride] = useState(false)
	const todaysDate = new Date().toISOString().substring(0, 10)
	const studentWasAbsent = student.daysAbsent.includes(assignment.dueDate)
	const heightControl = 2
	const overallScore = organizerGrade + paragraphGrade

	useEffect(() => {
		if (todaysDate > assignment.dueDate) {
			setLate(true)
		}
	}, [])

	return (
		<div style={{ display: 'grid', gridTemplateRows: '1fr 3fr 1fr' }}>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						fontSize: '150%',
						marginTop: '5%',
						marginBottom: '5%'
					}}>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div>Organizer Score: </div>
						<div>{organizerGrade}</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div>Paragraph Score: </div>
						<div>{paragraphGrade}</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div>Overall Score: </div>
						<div>{organizerGrade + paragraphGrade}/ 2</div>
					</div>
				</div>
			</div>
			<div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button
						style={{
							backgroundColor: 'var(--red)',
							color: 'var(--white)',
							width: '10rem',
							fontSize: '100%',
							marginRight: '5%'
						}}
						onClick={() => {
							setGradeOpenEndedToggle(false)
						}}>
						Go Back
					</button>
					<button
						style={{
							backgroundColor: 'var(--red)',
							color: 'var(--white)',
							width: '10rem',
							fontSize: '100%',
							marginRight: '5%'
						}}
						onClick={() => {
							setGradeOpenEndedToggle(false)
							setOrganizerGrade(1)
							setParagraphGrade(1)
						}}>
						Reset
					</button>
					<button
						style={{
							backgroundColor: 'var(--red)',
							color: 'var(--white)',
							width: '10rem',
							fontSize: '100%',
							marginRight: '5%'
						}}
						onClick={() => {
							setLate(false)
						}}>
						Override Lateness
					</button>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
				{assignment.missing && (
					<div
						style={{
							width: '50%'
						}}>
						<StudentInfoMutatorButton
							mutation={scoreAssignment}
							variables={{
								_id: student._id,
								date: assignment.dueDate,
								assignmentType: 'OEQ',
								exempt: false,
								missing: false,
								score: overallScore,
								earnedPoints: overallScore * 5,
								responsibilityPoints: overallScore * 5,
								comments: [],
								late: late
							}}
							buttonDisplay={'Complete'}
							buttonColor={'blue'}
							height={4}
						/>
					</div>
				)}
				{assignment.missing && late && (
					<div
						style={{
							width: '50%'
						}}>
						<StudentInfoMutatorButton
							mutation={scoreAssignment}
							variables={{
								_id: student._id,
								date: assignment.dueDate,
								assignmentType: 'OEQ',
								exempt: false,
								missing: false,
								score: overallScore,
								earnedPoints: overallScore * 5,
								responsibilityPoints: overallScore * 5,
								comments: [],
								late: false
							}}
							buttonDisplay={'Excused Lateness Complete'}
							buttonColor={'blue'}
							height={4}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default OEQCompletionGradeSubmit
