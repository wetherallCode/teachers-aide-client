import React from 'react'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'
import OEQGradeSubmitDisplayComments from './OEQGradeSubmitDisplayComments'

const OEQGradeSubmitDisplay = ({
	student,
	assignment,
	scoreAssignment,
	undoScoreAssignment,
	commentList,
	setCommentList,
	paragraphScore,
	organizerScore,
	responsibilityPointsForOEQ,
	late,
	overallScore,
	gradeOpenEndedToggle,
	setGradeOpenEndedToggle,
	latenessOverride,
	setLatenessOverride,
	loading
}) => {
	const heightControl = 2

	return (
		<div>
			{loading ? (
				<div
					style={{
						height: '40vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<div>Grading</div>
				</div>
			) : (
				<OEQGradeSubmitDisplayComments
					commentList={commentList}
					organizerScore={organizerScore}
					paragraphScore={paragraphScore}
					overallScore={overallScore}
					assignment={assignment}
				/>
			)}
			<button
				onClick={() => {
					setGradeOpenEndedToggle(false)
				}}>
				Go Back
			</button>
			<button
				onClick={() => {
					setGradeOpenEndedToggle(false)
					setCommentList([
						'Conclusion is a logical result of the topic',
						'Organizer Complete',
						'Answer explains the topic sentence completely',
						'Topic sentence is complete'
					])
				}}>
				Reset
			</button>
			{late && <button onClick={() => setLatenessOverride(true)}>Override Lateness</button>}
			{assignment.missing && !latenessOverride && !late && (
				<StudentInfoMutatorButton
					mutation={scoreAssignment}
					variables={{
						_id: student._id,
						date: assignment.dueDate,
						assignmentType: 'OEQ',
						exempt: false,
						missing: false,
						score: overallScore,
						earnedPoint: 2,
						responsibilityPoints: 2,
						comments: commentList,
						late: late
					}}
					buttonDisplay={'Excused Complete'}
					buttonColor={'blue'}
					height={heightControl}
				/>
			)}
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
						earnedPoints: responsibilityPointsForOEQ,
						responsibilityPoints: responsibilityPointsForOEQ,
						comments: commentList,
						late: late
					}}
					buttonDisplay={'Complete'}
					buttonColor={'blue'}
					height={heightControl}
				/>
			)}

			{!assignment.missing && (
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
			)}
		</div>
	)
}

export default OEQGradeSubmitDisplay
