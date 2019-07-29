import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery, useApolloClient, useMutation } from '@apollo/react-hooks'
import LessonInfoDisplay from './LessonInfoDisplay'
import LessonEditMode from './LessonEditMode'
import Modal from 'react-modal'

export const FIND_LESSON_QUERY = gql`
	query findLesson($_id: ID!) {
		findLesson(_id: $_id) {
			lessonName
			essentialQuestion {
				type
				textStructure
				question
			}
			readings {
				pages
				sections
			}
			vocabWords {
				word
				partOfSpeech
				definition
			}
			warmup
			socraticQuestions {
				type
				question
			}
			workDue {
				type
				name
				dueDate
			}
		}
		isEditLessonMode @client
		removeLessonModal @client
	}
`
const REMOVE_LESSON_MUTATION = gql`
	mutation removeLesson($_id: ID!) {
		removeLesson(_id: $_id) {
			removed
			lesson {
				lessonName
			}
		}
	}
`

const LessonInfoScreen = ({ match, history }) => {
	console.log(match.path)
	const { lessonId } = match.params
	const client = useApolloClient()

	const { data, loading } = useQuery(FIND_LESSON_QUERY, {
		variables: { _id: lessonId },
	})
	const [removeLesson] = useMutation(REMOVE_LESSON_MUTATION, {
		variables: { _id: lessonId },
		refetchQueries: ['findAllLessons'],
	})
	if (loading) return <h1>Loading</h1>

	const { findLesson, isEditLessonMode, removeLessonModal } = data
	console.log(isEditLessonMode)
	const editLessonModeToggle = () => {
		client.writeData({ data: { isEditLessonMode: !isEditLessonMode } })
		console.log(isEditLessonMode)
	}
	const removeLessonModalToggle = () => {
		client.writeData({ data: { removeLessonModal: !removeLessonModal } })
	}

	return (
		<div
			style={{
				border: '3px solid var(--white)',
				width: '100%',
				display: 'grid',
				gridTemplateRows: '4fr 1fr',
			}}>
			<div>
				<div>
					{findLesson !== undefined && !isEditLessonMode && (
						<LessonInfoDisplay lesson={findLesson} />
					)}
				</div>
				<div>
					{findLesson !== undefined && isEditLessonMode && <LessonEditMode lesson={findLesson} />}
				</div>
				<Modal
					style={{
						overlay: {
							backgroundColor: 'var(--darkGrey)',
						},
						content: {
							// marginTop: '10%',
							marginLeft: '20%',
							width: '40rem',
							height: '25rem',
						},
					}}
					isOpen={removeLessonModal}
					onRequestClose={() => removeLessonModalToggle()}>
					<div style={{ display: 'grid', gridTemplateRows: '1fr 2fr' }}>
						<div style={{ textAlign: 'center' }}>
							<h1 style={{ color: 'var(--red)' }}>Are you sure you want to delete this lesson?</h1>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<button
								style={{
									marginTop: '2%',
									fontSize: '130%',
									width: '20rem',
									height: '5rem',
									borderRadius: '5px',
								}}
								className='blueButton'
								onClick={() => removeLessonModalToggle()}>
								Don't Delete Lesson!
							</button>
							<button
								style={{ marginTop: '8%', fontSize: '130%', borderRadius: '5px' }}
								className='redButton'
								onClick={() => {
									removeLesson()
									// Would like to use redirect here, just gotta figure out how
									// return<Redirect to='/dashboard/lesson-planner/lessonFinderDirectory' />
									const goBack = () => {
										removeLessonModalToggle()
										return history.push('/dashboard/lesson-planner/lessonFinderDirectory')
									}
									goBack()
								}}>
								Delete Lesson
							</button>
						</div>
					</div>
				</Modal>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					backgroundColor: 'var(--blue)',
				}}>
				<button
					style={{
						width: '10rem',
						height: '4rem',
						fontSize: '120%',
						marginRight: '5%',
						color: 'var(--blue)',
						borderRadius: '5px',
					}}
					onClick={() => editLessonModeToggle()}>
					{!isEditLessonMode ? 'Edit Lesson' : 'Lesson Display'}
				</button>
				<button
					style={{
						width: '10rem',
						height: '4rem',
						fontSize: '120%',
						marginRight: '5%',
						color: 'var(--blue)',
						borderRadius: '5px',
					}}
					onClick={() => removeLessonModalToggle()}>
					Delete Lesson
				</button>
			</div>
		</div>
	)
}

export default LessonInfoScreen
