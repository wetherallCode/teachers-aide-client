import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const EDIT_LESSON = gql`
	mutation editLesson($_id: ID!, $input: LessonInput!) {
		editLesson(_id: $_id, input: $input) {
			_id
			lessonName
		}
	}
`

const EditWarmUpQuestion = ({ lesson }) => {
	const [warmup, setWarmup] = useState(lesson.warmup)
	const [editLesson] = useMutation(EDIT_LESSON, {
		variables: {
			_id: lesson._id,
			input: {
				lessonName: lesson.lessonName,
				inUnit: lesson.inUnit.name,
				essentialQuestion: lesson.essentialQuestion,
				socraticQuestions: lesson.socraticQuestions,
				studyGuideQuestions: lesson.studyGuideQuestions,
				readings: { pages: lesson.readings.pages, sections: lesson.readings.sections },
				vocabWords: lesson.vocabWords,
				warmup: warmup,
				workDue: lesson.workDue
			}
		},
		refetchQueries: ['findLesson']
	})
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 1fr'
			}}>
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
					<div>Warm Up</div>
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
					<div>{lesson.warmup}</div>
				</div>
			</div>
			<div>Hello</div>
		</div>
	)
}

export default EditWarmUpQuestion
