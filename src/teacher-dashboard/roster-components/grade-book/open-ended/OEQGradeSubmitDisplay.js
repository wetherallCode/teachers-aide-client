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
	setLatenessOverride
}) => {
	const heightControl = 2
	console.log(responsibilityPointsForOEQ)
	return (
		<div>
			<OEQGradeSubmitDisplayComments
				commentList={commentList}
				organizerScore={organizerScore}
				paragraphScore={paragraphScore}
				overallScore={overallScore}
				assignment={assignment}
			/>
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
			<button onClick={() => setLatenessOverride(true)}>Override Lateness</button>
			{assignment.missing && !latenessOverride && (
				<StudentInfoMutatorButton
					mutation={scoreAssignment}
					variables={{
						_id: student._id,
						date: assignment.dueDate,
						assignmentType: 'OEQ',
						exempt: false,
						missing: false,
						score: overallScore,
						earnedPoints: 4,
						responsibilityPoints: 4,
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
