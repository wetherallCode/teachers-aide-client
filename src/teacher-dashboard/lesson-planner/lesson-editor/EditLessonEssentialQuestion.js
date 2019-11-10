import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { EDIT_LESSON_MUTATION } from './LessonEditor'
// const EDIT_LESSON = gql`
// 	mutation editLessonName($_id: ID!, $input: LessonInput!) {
// 		editLesson(_id: $_id, input: $input) {
// 			_id
// 			lessonName
// 		}
// 	}
// `

const EditLessonEssentialQuestion = ({
	lesson,
	essentialQuestionTypeEnum,
	majorTextStructureEnum,
	socraticQuestionList,
	vocabWordList,
	workDueList
}) => {
	const [essentialQuestion, setEssentialQuestion] = useState({
		type: lesson.essentialQuestion.type,
		textStructure: lesson.essentialQuestion.textStructure,
		question: lesson.essentialQuestion.question
	})
	const [editLesson] = useMutation(EDIT_LESSON_MUTATION, {
		variables: {
			_id: lesson._id,
			input: {
				lessonName: lesson.lessonName,
				inUnit: lesson.inUnit.name,
				essentialQuestion: essentialQuestion,
				socraticQuestions: socraticQuestionList,
				studyGuideQuestions: lesson.studyGuideQuestions,
				readings: { pages: lesson.readings.pages, sections: lesson.readings.sections },
				vocabWords: vocabWordList,
				warmup: lesson.warmup,
				workDue: workDueList
			}
		},
		refetchQueries: ['findLesson']
	})
	return (
		<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
			<div
				style={{
					color: 'var(--blue)',
					borderBottom: '3px solid var(--blue)'
				}}>
				<div
					style={{
						textDecoration: 'underline',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '200%'
					}}>
					<div>Essential Question</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						fontSize: '150%',
						marginTop: '5%',
						marginLeft: '2%'
					}}>
					<div style={{ marginBottom: '2%' }}>Question: {lesson.essentialQuestion.question}</div>
					<div style={{ marginBottom: '2%' }}>Type: {lesson.essentialQuestion.type}</div>
					<div style={{ marginBottom: '2%' }}>
						Text-Structure: {lesson.essentialQuestion.textStructure}
					</div>
				</div>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr 1fr 1fr 1fr',
					color: 'var(--blue)',
					marginLeft: '2%'
				}}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ fontSize: '150%' }}>Question: </div>
					<input
						type='text'
						name='Essential Question'
						style={{
							color: 'var(--blue)',
							marginLeft: '1%',
							width: '80%',
							backgroundColor: 'transparent',
							border: 'none',
							borderBottom: '1px solid var(--blue)',
							fontSize: '150%'
						}}
						value={essentialQuestion.question}
						onChange={e =>
							setEssentialQuestion({ ...essentialQuestion, question: e.target.value })
						}></input>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ fontSize: '150%' }}>Type: </div>
					<select
						style={{
							color: 'var(--blue)',
							marginLeft: '1%',
							width: '10%',
							backgroundColor: 'transparent',

							border: '1px solid var(--blue)',
							fontSize: '150%'
						}}
						value={essentialQuestion.type}
						onChange={e => setEssentialQuestion({ ...essentialQuestion, type: e.target.value })}>
						{essentialQuestionTypeEnum.map(type => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ fontSize: '150%' }}>Text Structure: </div>
					<select
						style={{
							color: 'var(--blue)',
							marginLeft: '1%',
							width: '40%',
							backgroundColor: 'transparent',

							border: '1px solid var(--blue)',
							fontSize: '150%'
						}}
						value={essentialQuestion.textStructure}
						onChange={e =>
							setEssentialQuestion({ ...essentialQuestion, textStructure: e.target.value })
						}>
						{majorTextStructureEnum.map(textStructure => (
							<option key={textStructure} value={textStructure}>
								{textStructure}
							</option>
						))}
					</select>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button
						style={{
							backgroundColor: 'var(--grey)',
							color: 'var(--blue)',
							border: '1px solid var(--blue)',
							fontSize: '150%',
							width: '80%',
							height: '80%',
							borderRadius: '5px'
						}}
						onClick={() => editLesson()}>
						Edit Essential Question
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditLessonEssentialQuestion
