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
	const heightControl = 2
	const overallScore = organizerGrade + paragraphGrade
	return (
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
			<button
				onClick={() => {
					setGradeOpenEndedToggle(false)
				}}>
				Go Back
			</button>
			<button
				onClick={() => {
					setGradeOpenEndedToggle(false)
					setOrganizerGrade(0)
					setParagraphGrade(0)
				}}>
				Reset
			</button>

			{assignment.missing && (
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
					buttonDisplay={'Complete'}
					buttonColor={'blue'}
					height={heightControl}
				/>
			)}
			{/* {!assignment.missing && (
				<StudentInfoMutatorButton
					mutation={undoScoreAssignment}
					variables={{
						_id: student._id,
						date: assignment.dueDate,
						assignmentType: 'OEQ',
						score: assignment.score,
						earnedPoints: assignment.earnedPoints
					}}
					buttonDisplay={'Undo'}
					buttonColor={'red'}
					height={heightControl}
				/>
			)} */}
		</div>
	)
}

export default OEQCompletionGradeSubmit
