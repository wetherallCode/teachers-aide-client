import React from 'react'
import { gql } from 'apollo-boost'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import EditLessonEssentialQuestion from './EditLessonEssentialQuestion'
import EditWarmUpQuestion from './EditWarmUpQuestion'

export const EDIT_LESSON_MUTATION = gql`
	mutation editLesson($_id: ID!, $input: LessonInput!) {
		editLesson(_id: $_id, input: $input) {
			_id
			lessonName
		}
	}
`
const LESSON_CREATOR_ENUM_NAMES_QUERY = gql`
	query lessonEditorEnumNames {
		essentialQuestionTypeEnum: __type(name: "essentialQuestionTypeEnum") {
			enumValues {
				name
			}
		}
		majorTextStructureEnum: __type(name: "majorTextStructureEnum") {
			enumValues {
				name
			}
		}
		socraticQuestionsTypeEnum: __type(name: "socraticQuestionsTypeEnum") {
			enumValues {
				name
			}
		}
		partsOfSpeechEnum: __type(name: "partsOfSpeechEnum") {
			enumValues {
				name
			}
		}
		AssignmentType: __type(name: "AssignmentType") {
			enumValues {
				name
			}
		}
		isEditLessonMode @client
		isEditLessonItemMode @client
	}
`

const LessonEditor = ({ lesson, match }) => {
	const socraticQuestionsList = []
	const vocabWordList = []
	const workDueList = []

	lesson.socraticQuestions.forEach(question => {
		const modifiedQuestion = {
			type: question.type,
			question: question.question
		}
		socraticQuestionsList.push(modifiedQuestion)
	})
	lesson.vocabWords.forEach(word => {
		const modifiedWord = {
			word: word.word,
			partOfSpeech: word.partOfSpeech,
			definition: word.definition
		}
		vocabWordList.push(modifiedWord)
	})
	lesson.workDue.forEach(assignment => {
		const modifiedAssignment = {
			readingPages: assignment.readingPages,
			readingSections: assignment.readingSections,
			type: assignment.type
		}
		workDueList.push(modifiedAssignment)
	})

	const { loading, data, error } = useQuery(LESSON_CREATOR_ENUM_NAMES_QUERY)
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)

	// Create a Socratic Question

	const { path, url } = match
	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 4fr',
					backgroundColor: 'var(--blue)',
					height: '7vh',
					width: '99.75%',
					borderBottom: '3px solid var(--white)',
					color: 'var(--white)',
					fontSize: '150%'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					Lesson Editor
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					{lesson.lessonName}
				</div>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						backgroundColor: 'var(--blue)',
						color: 'var(--white)',
						height: '72vh'
					}}>
					<Link
						to={`${url}/essentialQuestion`}
						style={{
							marginRight: '1%',
							marginTop: '10%',
							fontSize: '150%',
							color: 'var(--white)',
							textDecoration: 'none'
						}}>
						Essential Question
					</Link>
					<Link
						to={`${url}/warmUp`}
						style={{
							marginRight: '1%',
							marginTop: '10%',
							fontSize: '150%',
							color: 'var(--white)',
							textDecoration: 'none'
						}}>
						Warm Up
					</Link>
					<div style={{ marginRight: '1%', marginTop: '10%', fontSize: '150%' }}>Readings</div>
					<div style={{ marginRight: '1%', marginTop: '10%', fontSize: '150%' }}>
						Socratic Questions
					</div>
					<div style={{ marginRight: '1%', marginTop: '10%', fontSize: '150%' }}>Study Guide</div>
					<div style={{ marginRight: '1%', marginTop: '10%', fontSize: '150%' }}>Vocab</div>
					<div style={{ marginRight: '1%', marginTop: '10%', fontSize: '150%' }}>Work Due</div>
				</div>
				<Route
					path={`${path}/essentialQuestion`}
					render={props => (
						<EditLessonEssentialQuestion
							{...props}
							lesson={lesson}
							socraticQuestionList={socraticQuestionsList}
							vocabWordList={vocabWordList}
							workDueList={workDueList}
							essentialQuestionTypeEnum={data.essentialQuestionTypeEnum.enumValues.map(
								Enumeration => Enumeration.name
							)}
							majorTextStructureEnum={data.majorTextStructureEnum.enumValues.map(
								Enumeration => Enumeration.name
							)}
						/>
					)}></Route>
				<Route
					path={`${path}/warmUp`}
					render={props => (
						<EditWarmUpQuestion {...props} lesson={lesson}></EditWarmUpQuestion>
					)}></Route>
				<Route path={`${path}/readings`}></Route>
				<Route path={`${path}/socraticQuestions`}></Route>
				<Route path={`${path}/studyGuideQuestions`}></Route>
				<Route path={`${path}/vocab`}></Route>
				<Route path={`${path}/workDue`}></Route>
			</div>
		</>
	)
}

export default LessonEditor
