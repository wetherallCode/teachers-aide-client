import React, { useState, useEffect } from 'react'

import OEQGradeSubmitDisplay from './OEQGradeSubmitDisplay'
import { topicSentenceCommentList, answerCommentList } from './OEQCommentList'

const OEQGradeSubmit = ({
	student,
	assignment,
	commentList,
	setCommentList,
	gradeOpenEndedToggle,
	setGradeOpenEndedToggle,
	scoreAssignment,
	undoScoreAssignment,
	loading
}) => {
	const [late, setLate] = useState(false)
	const [responsibilityPointsForOEQ, setResponsibilityPointsForOEQ] = useState(2)
	const [latenessOverride, setLatenessOverride] = useState(false)

	const [paragraphScore, setParagraphScore] = useState(4)
	const [organizerScore, setOrganizerScore] = useState(1)
	const overallScore = paragraphScore + organizerScore

	const todaysDate = new Date().toISOString().substring(0, 10)
	const studentWasAbsent = student.daysAbsent.includes(assignment.dueDate)

	useEffect(() => {
		if (todaysDate !== assignment.dueDate && !studentWasAbsent) {
			setLate(true)
			setResponsibilityPointsForOEQ(0)
		}
		if (todaysDate !== assignment.dueDate && studentWasAbsent) {
			console.log('student was absent')
			setResponsibilityPointsForOEQ(2)
		}
		if (todaysDate !== assignment.dueDate && !studentWasAbsent && latenessOverride) {
			console.log('lateness override')
			setResponsibilityPointsForOEQ(2)
			setLate(false)
		}
	}, [studentWasAbsent, latenessOverride])

	useEffect(() => {
		if (commentList.includes('Organizer Incomplete')) {
			return setOrganizerScore(0)
		}
	})

	//
	useEffect(() => {
		if (
			commentList.includes('Off Topic - Used wrong material') ||
			commentList.includes('Outside Information was used in answering the question') ||
			commentList.includes('Information was copied from text') ||
			commentList.includes('Essay was copied from another student')
		) {
			return setParagraphScore(0)
		}
		if (
			commentList.includes('Topic sentence is missing') ||
			commentList.includes('Answer is missing') ||
			commentList.includes('Answer is incorrect') ||
			commentList.includes('No text structure or organization') ||
			commentList.includes('Relies too heavily on the author’s words') ||
			commentList.includes('No textual evidence cited') ||
			commentList.includes('Conclusion is Missing') ||
			commentList.includes('Essay is a summary') ||
			commentList.includes('Text structure doesn’t match the question’s text structure') ||
			commentList.includes('Answer is not supported by evidence from the text')
		) {
			return setParagraphScore(1)
		}
		if (
			commentList.includes('Not enough textual evidence cited') ||
			commentList.includes(
				'Not enough textual evidence Topic sentence isn’t separate from the answer'
			) ||
			commentList.includes('Answer is only partially correct') ||
			commentList.includes('Parts of the text Structure don’t logically connect') ||
			commentList.includes('Missing  parts of the text structure')
		) {
			return setParagraphScore(2)
		}
		if (
			commentList.includes('Missing appropriate transitions to connect your ideas') ||
			commentList.includes('Missing details that would explain your answer better') ||
			commentList.includes('Conclusion is logical but general and not specific to the topic') ||
			commentList.includes('Conclusion is not a logical result of the topic') ||
			commentList.includes('Conclusion repeats information from the answer section')
		) {
			return setParagraphScore(3)
		}
	})

	return (
		<>
			<OEQGradeSubmitDisplay
				scoreAssignment={scoreAssignment}
				undoScoreAssignment={undoScoreAssignment}
				student={student}
				commentList={commentList}
				assignment={assignment}
				paragraphScore={paragraphScore}
				organizerScore={organizerScore}
				responsibilityPointsForOEQ={responsibilityPointsForOEQ}
				late={late}
				overallScore={overallScore}
				gradeOpenEndedToggle={gradeOpenEndedToggle}
				setGradeOpenEndedToggle={setGradeOpenEndedToggle}
				setCommentList={setCommentList}
				latenessOverride={latenessOverride}
				setLatenessOverride={setLatenessOverride}
				loading={loading}
			/>
		</>
	)
}

export default OEQGradeSubmit
