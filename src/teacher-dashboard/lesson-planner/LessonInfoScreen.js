import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useApolloClient, useMutation } from '@apollo/react-hooks'
import LessonInfo from './LessonInfo'
import Modal from 'react-modal'
import { LessonCreator } from './LessonCreator'
import LessonEditor from './lesson-editor/LessonEditor'

export const FIND_LESSON_QUERY = gql`
	query findLesson($_id: ID!) {
		findLesson(_id: $_id) {
			_id
			lessonName
			inUnit {
				name
			}
			warmup
			essentialQuestion {
				type
				textStructure
				question
			}
			readings {
				pages
				sections
			}
			socraticQuestions {
				type
				question
			}
			studyGuideQuestions
			vocabWords {
				word
				partOfSpeech
				definition
			}
			workDue {
				type
				readingPages
				readingSections
			}
		}
		isEditLessonMode @client
		removeLessonModal @client
		createLessonMode @client
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
	const { lessonId, grade } = match.params
	const { data, loading, error } = useQuery(FIND_LESSON_QUERY, {
		variables: { _id: lessonId }
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)
	console.log(data)
	return (
		<LessonInfoDisplay
			match={match}
			history={history}
			data={data}
			lessonId={lessonId}
			grade={grade}
		/>
	)
}

const LessonInfoDisplay = ({ match, history, data, lessonId, grade }) => {
	const client = useApolloClient()
	const { findLesson } = data

	const [removeLesson] = useMutation(REMOVE_LESSON_MUTATION, {
		variables: { _id: lessonId },
		refetchQueries: ['findAllLessons', 'findLessonsByUnit']
	})

	const { isEditLessonMode, removeLessonModal, createLessonMode } = data

	const editLessonModeToggle = () => {
		client.writeData({ data: { isEditLessonMode: !isEditLessonMode } })
	}
	const removeLessonModalToggle = () => {
		client.writeData({ data: { removeLessonModal: !removeLessonModal } })
	}

	return (
		<div
			id='lessonInfoScreen'
			style={
				createLessonMode
					? {
							border: '3px solid var(--white)',
							width: '100%',
							display: 'grid'
							// gridTemplateRows: '4fr 1fr'
					  }
					: {
							borderLeft: '3px solid var(--white)',
							borderRight: '3px solid var(--white)',
							borderBottom: '3px solid var(--blue)',
							width: '100%',
							display: 'grid',
							gridTemplateRows: '4fr 1fr'
					  }
			}>
			<div>
				<>{createLessonMode && <LessonCreator match={match} data={data} history={history} />}</>

				<div>
					{findLesson !== undefined && !isEditLessonMode && !createLessonMode && (
						<LessonInfo lesson={findLesson} />
					)}
				</div>
				<>
					{findLesson !== undefined && isEditLessonMode && !createLessonMode && (
						<LessonEditor lesson={findLesson} match={match} />
					)}
				</>
				<Modal
					style={{
						overlay: {
							backgroundColor: 'var(--darkGrey)'
						},
						content: {
							// marginTop: '10%',
							marginLeft: '20%',
							width: '40rem',
							height: '25rem'
						}
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
								alignItems: 'center'
							}}>
							<button
								style={{
									marginTop: '2%',
									fontSize: '130%',
									width: '20rem',
									height: '5rem',
									borderRadius: '5px'
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
									// return<Redirect to='/dashboard/lesson-planner/LessonManager' />
									const goBack = () => {
										removeLessonModalToggle()
										return history.push(`/dashboard/lesson-planner/${grade}`)
									}
									goBack()
								}}>
								Delete Lesson
							</button>
						</div>
					</div>
				</Modal>
			</div>
			{!createLessonMode && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						backgroundColor: 'var(--blue)'
					}}>
					<button
						style={{
							width: '10rem',
							height: '4rem',
							fontSize: '120%',
							marginRight: '5%',
							color: 'var(--blue)',
							borderRadius: '5px'
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
							borderRadius: '5px'
						}}
						onClick={() => removeLessonModalToggle()}>
						Delete Lesson
					</button>
				</div>
			)}
		</div>
	)
}

export default LessonInfoScreen
