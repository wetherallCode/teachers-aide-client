import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const CREATE_LESSON = gql`
	mutation createNewLesson($input: LessonInput) {
		createLesson(input: $input) {
			_id
		}
	}
`

const NewLessonCreater = ({
	lessonName,
	unitName,
	warmUpActivity,
	essentialQuestionValues,
	readingsValues,
	vocabWordList,
	socraticQuestionsList,
	studyGuideQuestionList,
	workDueList
}) => {
	const [createLesson, { data }] = useMutation(CREATE_LESSON, {
		variables: {
			input: {
				lessonName: lessonName,
				inUnit: unitName,
				warmup: warmUpActivity,
				essentialQuestion: essentialQuestionValues,
				socraticQuestions: socraticQuestionsList,
				studyGuideQuestions: studyGuideQuestionList,
				vocabWords: vocabWordList,
				readings: readingsValues,
				workDue: workDueList
			}
		},
		onCompleted: data => console.log(data.createLesson._id)
	})

	return (
		<button
			style={{
				backgroundColor: 'var(--blue)',
				color: 'var(--white)',
				fontSize: '150%',
				height: '10vh'
			}}
			onClick={() => createLesson()}>
			Create Lesson
		</button>
	)
}

export default NewLessonCreater
