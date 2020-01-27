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

const OEQGrader = ({ student, assignment, essentialQuestion }) => {
	const [gradeOpenEndedToggle, setGradeOpenEndedToggle] = useState(false)
	const [commentCategories, setCommentCategories] = useState('')
	const [commentList, setCommentList] = useState([])
	const [organizerGrade, setOrganizerGrade] = useState(0)
	const [paragraphGrade, setParagraphGrade] = useState(0)

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
	const [scoreAssignment, { data }] = useMutation(SCORE_ASSIGNMENT, {
		refetchQueries: ['rosterList'],
		onCompleted: data => console.log(data)
	})
	const [undoScoreAssignment] = useMutation(UNDO_SCORE_ASSIGNMENT, {
		refetchQueries: ['rosterList']
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
					<div>
						<OEQAssignmentStatusDisplay
							student={student}
							assignment={assignment}
							essentialQuestion={essentialQuestion}
						/>
						{assignment.maxScore === 5 || assignment.maxScore === null ? (
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
					<>
						{assignment.missing && (
							<button
								style={{ backgroundColor: 'var(--blue)', color: 'var(--white)' }}
								onClick={() => setGradeOpenEndedToggle(true)}>
								Grade Lesson
							</button>
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
					{assignment.maxScore === 5 ||
						(assignment.maxScore === null && (
							<OEQGradeSubmit
								student={student}
								assignment={assignment}
								commentList={commentList}
								setCommentList={setCommentList}
								gradeOpenEndedToggle={gradeOpenEndedToggle}
								setGradeOpenEndedToggle={setGradeOpenEndedToggle}
								scoreAssignment={scoreAssignment}
								undoScoreAssignment={undoScoreAssignment}
							/>
						))}
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
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default OEQGrader
