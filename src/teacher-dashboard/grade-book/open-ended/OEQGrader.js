import React, { useState, useEffect } from 'react'
import CommentListDisplay from './OEQCommentListDisplay'
import OEQCommentSelector from './OEQCommentSelector'
import OEQAssignmentStatusDisplay from './OEQAssignmentStatusDisplay'
import OEQGradeSubmit from './OEQGradeSubmit'
import {
	topicSentenceCommentList,
	answerCommentList,
	organizerCommentList,
	conclusionCommentList
} from './OEQCommentList'
import OEQCompletionGradeSubmit from './OEQCompletionGradeSubmit'
import { useMutation } from '@apollo/react-hooks'
import { SCORE_ASSIGNMENT } from '../../class-tool-components/CriticalThinkingScoreMutator'
import { UNDO_SCORE_ASSIGNMENT } from '../../class-tool-components/CriticalThinkingScoreMutator'
import OEQCompletionStatus from './OEQCompletionStatus'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'
import OEQCompletedDisplay from './OEQCompletedDisplay'

const OEQGrader = ({ student, assignment, essentialQuestion }) => {
	const [gradeOpenEndedToggle, setGradeOpenEndedToggle] = useState(false)
	const [commentCategories, setCommentCategories] = useState('')
	const [commentList, setCommentList] = useState([])
	const [organizerGrade, setOrganizerGrade] = useState(1)
	const [paragraphGrade, setParagraphGrade] = useState(1)

	// console.log(['Answer explains the topic sentence completely'].includes(...answerCommentList))
	useEffect(() => {
		if (!commentList.includes(...topicSentenceCommentList)) {
			setCommentList(list => [...list, 'Topic sentence is complete'])
		}
		if (!commentList.includes(...answerCommentList)) {
			setCommentList(list => [...list, 'Answer explains the topic sentence completely'])
		}
		if (!commentList.includes(...organizerCommentList)) {
			setCommentList(list => [...list, 'Organizer Complete'])
		}
		if (!commentList.includes(...conclusionCommentList)) {
			setCommentList(list => [...list, 'Conclusion is a logical result of the topic'])
		}
	}, [])
	const [scoreAssignment, { data, loading }] = useMutation(SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader'],
		onCompleted: () => setGradeOpenEndedToggle(false)
	})
	const [undoScoreAssignment] = useMutation(UNDO_SCORE_ASSIGNMENT, {
		refetchQueries: ['classrosterForAssignmentGrader']
	})
	const heightControl = 2

	return (
		<div
			style={
				!gradeOpenEndedToggle
					? {
							display: 'grid',
							gridTemplateRows: '5fr  1fr ',
							height: '90vh',
							backgroundColor: 'var(--grey)'
					  }
					: {
							display: 'grid',
							gridTemplateRows: '4fr 1fr',
							height: '90vh',
							backgroundColor: 'var(--grey)'
					  }
			}>
			{!gradeOpenEndedToggle && (
				<>
					{!assignment.missing ? (
						<OEQCompletedDisplay assignment={assignment} />
					) : (
						<div>
							<OEQAssignmentStatusDisplay
								student={student}
								assignment={assignment}
								essentialQuestion={essentialQuestion}
							/>
							{assignment.maxScore === 5 || assignment.maxScore === null ? (
								<>
									{assignment.missing && (
										<>
											<OEQCommentSelector
												commentCategories={commentCategories}
												setCommentCategories={setCommentCategories}
											/>
											<div>
												{commentCategories !== '' && (
													<div style={{ textAlign: 'center' }}>Comment List</div>
												)}
												<CommentListDisplay
													commentCategories={commentCategories}
													commentList={commentList}
													setCommentList={setCommentList}
												/>
											</div>
										</>
									)}
								</>
							) : (
								<OEQCompletionStatus
									organizerGrade={organizerGrade}
									setOrganizerGrade={setOrganizerGrade}
									paragraphGrade={paragraphGrade}
									setParagraphGrade={setParagraphGrade}
									assignment={assignment}
								/>
							)}
						</div>
					)}
					<>
						{assignment.missing && (
							<button
								style={{ backgroundColor: 'var(--blue)', color: 'var(--white)' }}
								onClick={() => setGradeOpenEndedToggle(true)}>
								Grade Lesson
							</button>
						)}
						{!assignment.exempt && (
							<StudentInfoMutatorButton
								mutation={scoreAssignment}
								variables={{
									_id: student._id,
									date: assignment.dueDate,
									assignmentType: 'OEQ',
									exempt: true,
									missing: false,
									score: 0,
									earnedPoints: 0,
									responsibilityPoints: 0,
									comments: ['Exempt'],
									late: false
								}}
								buttonDisplay={'Exempt'}
								buttonColor={'red'}
								height={3}
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
					</>
				</>
			)}
			{gradeOpenEndedToggle && (
				<div>
					{assignment.maxScore === 5 && (
						<OEQGradeSubmit
							student={student}
							assignment={assignment}
							commentList={commentList}
							setCommentList={setCommentList}
							gradeOpenEndedToggle={gradeOpenEndedToggle}
							setGradeOpenEndedToggle={setGradeOpenEndedToggle}
							scoreAssignment={scoreAssignment}
							undoScoreAssignment={undoScoreAssignment}
							loading={loading}
						/>
					)}
					{assignment.maxScore === 2 && (
						<OEQCompletionGradeSubmit
							student={student}
							assignment={assignment}
							organizerGrade={organizerGrade}
							setOrganizerGrade={setOrganizerGrade}
							paragraphGrade={paragraphGrade}
							setParagraphGrade={setParagraphGrade}
							gradeOpenEndedToggle={gradeOpenEndedToggle}
							setGradeOpenEndedToggle={setGradeOpenEndedToggle}
							scoreAssignment={scoreAssignment}
							undoScoreAssignment={undoScoreAssignment}
							loading={loading}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default OEQGrader
