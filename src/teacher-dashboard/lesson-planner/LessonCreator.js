import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks'
import { Redirect } from 'react-router'

const LESSON_CREATOR_MUTATION = gql`
	mutation createLesson($input: LessonInput!) {
		createLesson(input: $input) {
			_id
			lessonName
			inUnit {
				_id
				name
				gradeLevel
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
			vocabWords {
				word
				partOfSpeech
				definition
			}
			workDue {
				type
				readingPages
				readingSections
				dueDate
			}
		}
	}
`

const LESSON_CREATOR_ENUM_NAMES_QUERY = gql`
	query lessonCreatorEnumNames {
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

const GET_UNIT_NAMES = gql`
	query findUnitNames($gradeLevel: GradeLevelEnum) {
		findUnitsByGrade(gradeLevel: $gradeLevel) {
			name
		}
	}
`

const LessonCreator = ({ history, data, match }) => {
	const { grade } = match.params
	const { name } = data.findLesson.inUnit

	return <InfoLoader history={history} unitName={name} grade={grade} />
}

const InfoLoader = ({ history, unitName, grade }) => {
	const { loading, data } = useQuery(LESSON_CREATOR_ENUM_NAMES_QUERY)
	// const client = useApolloClient()
	const { isEditLessonMode, isEditLessonItemMode } = data
	// const creatorMode =client.writeData({data: {isEditLessonMode: !isEditLessonMode}})
	if (loading) return <h2>Loading</h2>

	return (
		<LessonCreatorForm
			essentialQuestionTypes={data.essentialQuestionTypeEnum.enumValues.map(
				Enumeration => Enumeration.name
			)}
			essentialQuestionTextStructures={data.majorTextStructureEnum.enumValues.map(
				Enumeration => Enumeration.name
			)}
			socraticQuestionsTypeEnumNames={data.socraticQuestionsTypeEnum.enumValues.map(
				Enumeration => Enumeration.name
			)}
			partsOfSpeechEnum={data.partsOfSpeechEnum.enumValues.map(Enumeration => Enumeration.name)}
			assignmentTypeEnumNames={data.AssignmentType.enumValues.map(Enumeration => Enumeration.name)}
			isEditLessonMode={isEditLessonMode}
			isEditLessonItemMode={isEditLessonItemMode}
			history={history}
			unitName={unitName}
			grade={grade}
		/>
	)
}

const LessonCreatorForm = ({
	essentialQuestionTypes,
	essentialQuestionTextStructures,
	socraticQuestionsTypeEnumNames,
	partsOfSpeechEnum,
	assignmentTypeEnumNames,
	lesson,
	isEditLessonMode,
	isEditLessonItemMode,
	history,
	unitName,
	grade
}) => {
	const client = useApolloClient()

	const setIsEditLessonItemMode = () =>
		client.writeData({ data: { isEditLessonItemMode: !isEditLessonItemMode } })

	// Create Lesson Name
	const [lessonName, setLessonName] = useState(lesson === undefined ? '' : lesson.lessonName)

	// Create Warm Up
	const [warmUp, setWarmUp] = useState(lesson === undefined ? '' : lesson.warmUp)

	// Create the Essential Question
	const [essentialQuestion, setEssentialQuestion] = useState({
		type: lesson === undefined ? essentialQuestionTypes[0] : lesson.essentialQuestion.type,
		textStructure:
			lesson === undefined
				? essentialQuestionTextStructures[0]
				: lesson.essentialQuestion.textStructure,
		question: lesson === undefined ? '' : lesson.essentialQuestion.question
	})

	// Create a Socratic Question
	const [socraticQuestions, setSocraticQuestions] = useState({
		type: socraticQuestionsTypeEnumNames[0],
		question: ''
	})

	const editModeSocraticQuestionsList = []
	isEditLessonMode &&
		lesson.socraticQuestions.forEach(question => editModeSocraticQuestionsList.unshift(question))

	// Socratic Question List
	const [socraticQuestionsList, setSocraticQuestionsList] = useState(
		lesson === undefined ? [] : editModeSocraticQuestionsList
	)

	const [editedSocraticQuestion, setEditedSocraticQuestion] = useState({
		type: socraticQuestionsTypeEnumNames[0],
		question: ''
	})

	// Create a Vocabulary Word
	const [vocabWord, setVocabWord] = useState({
		word: '',
		partOfSpeech: partsOfSpeechEnum[0],
		definition: ''
	})

	const editModeVocabWordList = []
	isEditLessonMode && lesson.vocabWords.forEach(word => editModeVocabWordList.unshift(word))
	// Vocab Word List
	const [vocabWordList, setVocabWordList] = useState([])

	// Reading Section
	const [readings, setReadings] = useState({
		pages: lesson === undefined ? '' : lesson.readings.pages,
		sections: lesson === undefined ? '' : lesson.readings.sections
	})

	// Homework Due Dates
	const [workDue, setWorkDue] = useState({
		type: assignmentTypeEnumNames[0],
		readingPages: '',
		readingSections: '',
		dueDate: new Date().toLocaleString().substring(0, 10)
	})

	// const editModeWorkDueList = []
	// isEditLessonMode &&
	// 	lesson.workDue.forEach((assignment) => editModeWorkDueList.unshift(assignment))

	const [workDueList, setWorkDueList] = useState([])

	const [createLesson, { data }] = useMutation(LESSON_CREATOR_MUTATION, {
		variables: {
			input: {
				lessonName: lessonName,
				inUnit: unitName,
				essentialQuestion: essentialQuestion,
				socraticQuestions: socraticQuestionsList,
				readings: readings,
				vocabWords: vocabWordList,
				warmup: warmUp,
				workDue: workDueList
			}
		},
		refetchQueries: ['findLessonsByUnit']
	})

	// const goToLessonFinder = () => {
	// 	return history.push(`/dashboard/lesson-planner/LessonManager/${data.createLesson._id}`)
	// }

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: 'repeat(1fr 8)',
				color: 'var(--blue)',
				height: '100vh',
				overflow: 'scroll',
				borderBottom: '1px solid var(--blue)'
			}}>
			{/* {data && goToLessonFinder()} */}
			{isEditLessonMode !== undefined && (
				<form
					style={{ autocomplete: 'off' }}
					onSubmit={e => {
						e.preventDefault()
						createLesson()

						const goToLessonFinder = () => {
							return history.push(`/dashboard/lesson-planner/${grade}`)
						}
						goToLessonFinder()
					}}>
					<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '250%' }}>
						Lesson Creator
					</div>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 6fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)'
						}}>
						<h2>Name: </h2>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center' }}>
							<input
								style={{
									height: '1.5rem',
									backgroundColor: 'transparent',
									color: 'var(--blue)',
									fontSize: '120%'
								}}
								type='text'
								name='lessonName'
								placeholder='Lesson Name'
								value={lessonName}
								onChange={e => setLessonName(e.target.value)}
							/>
							<h2
								style={{
									textAlign: 'center',
									// backgroundColor: 'var(--blue)',
									// color: 'var(--white)',
									marginLeft: '2rem',
									marginRigh: '2rem'
								}}>
								{lessonName}
							</h2>
						</div>
					</div>
					{/* <div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 6fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)'
						}}>
						<h2>Unit: </h2>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center' }}>
							<input
								style={{
									height: '1.5rem',
									backgroundColor: 'transparent',
									color: 'var(--blue)',
									fontSize: '120%'
								}}
								type='text'
								name='unit'
								placeholder='Unit Name'
								value={unit}
								onChange={e => setUnit(e.target.value)}
							/>
							<h2 style={{ textAlign: 'center' }}>{unit}</h2>
						</div>
					</div> */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 6fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)'
						}}>
						<h2>Warm Up: </h2>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center' }}>
							<input
								style={{
									height: '1.5rem',
									backgroundColor: 'transparent',
									color: 'var(--blue)',
									fontSize: '120%'
								}}
								type='text'
								name='warmup'
								placeholder='Warm Up Activity'
								value={warmUp}
								onChange={e => setWarmUp(e.target.value)}
							/>
							<h2 style={{ textAlign: 'center' }}>{warmUp}</h2>
						</div>
					</div>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 2fr 4fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)'
						}}>
						<h2>Readings: </h2>
						<div
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr',
								alignItems: 'center'
							}}>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Pages: </h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='pages'
									placeholder='Pages'
									value={readings.pages}
									onChange={e => setReadings({ ...readings, pages: e.target.value })}
								/>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Sections: </h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='sections'
									placeholder='Sections'
									value={readings.sections}
									onChange={e => setReadings({ ...readings, sections: e.target.value })}
								/>
							</div>
						</div>
						{readings.pages && readings.sections && (
							<h2 style={{ textAlign: 'center' }}>{readings.pages + ': ' + readings.sections}</h2>
						)}
					</div>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 2fr 4fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)'
						}}>
						<h2>Essential Question: </h2>
						<div
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr',
								alignItems: 'center'
							}}>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Type: </h3>
								<select
									style={{
										height: '2rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									onChange={e =>
										setEssentialQuestion({ ...essentialQuestion, type: e.target.value })
									}>
									{essentialQuestionTypes.map(type => (
										<option key={type} value={type}>
											{type}
										</option>
									))}
								</select>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}> Text Structure</h3>
								<select
									style={{
										height: '2rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									onChange={e =>
										setEssentialQuestion({ ...essentialQuestion, textStructure: e.target.value })
									}>
									{essentialQuestionTextStructures.map(textStructure => (
										<option key={textStructure} value={textStructure}>
											{textStructure}
										</option>
									))}
								</select>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Question</h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='Essential Question'
									placeholder='Essential Question'
									value={essentialQuestion.question}
									onChange={e =>
										setEssentialQuestion({ ...essentialQuestion, question: e.target.value })
									}
								/>
							</div>
						</div>
						<h2 style={{ textAlign: 'center' }}>{essentialQuestion.question}</h2>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 2fr 4fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)',
							paddingBottom: '1%'
						}}>
						<h2>Socratic Questions</h2>

						<div
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr',
								alignItems: 'center'
							}}>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Type: </h3>
								<select
									style={{
										height: '2rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									onChange={e =>
										setSocraticQuestions({ ...socraticQuestions, type: e.target.value })
									}>
									{socraticQuestionsTypeEnumNames.map(questionType => (
										<option key={questionType} value={questionType}>
											{questionType}
										</option>
									))}
								</select>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Question: </h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='Socratic Question'
									placeholder='Socratic Question'
									value={socraticQuestions.question}
									onChange={e =>
										setSocraticQuestions({ ...socraticQuestions, question: e.target.value })
									}
								/>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<button
									className='blueButton'
									style={{ width: '100%', fontSize: '120%' }}
									onClick={e => {
										e.preventDefault()
										setSocraticQuestionsList(list => [socraticQuestions].concat(list))
										setSocraticQuestions({ type: socraticQuestionsTypeEnumNames[0], question: '' })
									}}>
									Add Socratic Question
								</button>
							</div>
						</div>
						{!isEditLessonMode ? (
							<div>
								{socraticQuestionsList.reverse().map((question, i) => {
									return (
										<div
											style={{
												textAlign: 'center',
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'center',
												alignItems: 'center'
											}}
											key={i}>
											{!isEditLessonItemMode ? (
												<>
													<h2>{question.question}</h2>

													{socraticQuestionsList.length !== 0 && (
														<>
															<button
																style={{
																	height: '1.5rem',
																	width: '3rem',
																	marginLeft: '1%',
																	backgroundColor: 'var(--blue)',
																	color: 'var(--white)'
																}}
																onClick={e => {
																	console.log(question)
																	e.preventDefault()
																	// console.log('Before edit mode button: ' + isEditLessonItemMode)
																	setIsEditLessonItemMode()
																	console.log('after edit mode button: ' + isEditLessonItemMode)
																}}>
																Edit
															</button>
															<button
																style={{
																	height: '1.5rem',
																	width: '3rem',
																	marginLeft: '1%',
																	backgroundColor: 'var(--red)',
																	color: 'var(--white)'
																}}
																onClick={e => {
																	e.preventDefault()
																	console.log(question)
																	setSocraticQuestionsList(question =>
																		[socraticQuestions].splice(question, 1)
																	)
																	console.log(socraticQuestionsList)
																}}>
																Delete
															</button>
														</>
													)}
												</>
											) : (
												<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
													<div>
														<h2>{question.question}</h2>
													</div>
													<div>
														<select
															style={{
																height: '2rem',
																width: '50%',
																backgroundColor: 'transparent',
																color: 'var(--blue)',
																fontSize: '120%'
															}}
															onChange={e =>
																setEditedSocraticQuestion({
																	...editedSocraticQuestion,
																	type: e.target.value
																})
															}>
															{socraticQuestionsTypeEnumNames.map(questionType => (
																<option key={questionType} value={questionType}>
																	{questionType}
																</option>
															))}
														</select>
														<input
															style={{
																height: '1.5rem',
																width: '80%',
																backgroundColor: 'transparent',
																color: 'var(--blue)',
																fontSize: '120%'
															}}
															type='text'
															name='Edited Socratic Question'
															placeholder='Edit Mode'
															value={editedSocraticQuestion.question}
															onChange={e => {
																setEditedSocraticQuestion({
																	...editedSocraticQuestion,
																	question: e.target.value
																})
																console.log(editedSocraticQuestion)
															}}
														/>

														<button
															style={{
																height: '1.5rem',
																width: '3rem',
																marginLeft: '1%',
																backgroundColor: 'var(--blue)',
																color: 'var(--white)'
															}}
															onClick={e => {
																e.preventDefault()
																setIsEditLessonItemMode()
																setSocraticQuestionsList(question =>
																	[socraticQuestions].splice(question, 1)
																)
																setSocraticQuestionsList(question =>
																	[editedSocraticQuestion].concat(question)
																)
															}}>
															Replace
														</button>
														<button
															style={{
																height: '1.5rem',
																width: '3rem',
																marginLeft: '1%',
																backgroundColor: 'var(--red)',
																color: 'var(--white)'
															}}
															onClick={e => {
																e.preventDefault()
																setSocraticQuestionsList(question =>
																	[socraticQuestions].splice(question, 1)
																)
															}}>
															Delete
														</button>
													</div>
												</div>
											)}
											{/* <button
											style={{
												height: '1.5rem',
												width: '3rem',
												marginLeft: '1%',
												backgroundColor: 'var(--blue)',
												color: 'var(--white)',
											}}
											onClick={(e) => {
												e.preventDefault()
												setIsEditLessonItemMode(!isEditLessonItemMode)
											}}>
											Edit
										</button>
										<button
											style={{
												height: '1.5rem',
												width: '3rem',
												marginLeft: '1%',
												backgroundColor: 'var(--red)',
												color: 'var(--white)',
											}}>
											Delete
										</button> */}
										</div>
									)
								})}
							</div>
						) : (
							<h1>This is where I can edit individual Questions</h1>
						)}
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 2fr 4fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)',
							paddingBottom: '1%'
						}}>
						<h2>Vocab List</h2>
						<div
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr',
								alignItems: 'center'
							}}>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Word: </h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='Vocab Word'
									placeholder='Vocab Word'
									value={vocabWord.word}
									onChange={e => setVocabWord({ ...vocabWord, word: e.target.value })}
								/>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Part of Speech: </h3>
								<select
									style={{
										height: '2rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									onChange={e => setVocabWord({ ...vocabWord, partOfSpeech: e.target.value })}>
									{partsOfSpeechEnum.map(partOfSpeech => (
										<option key={partOfSpeech} value={partOfSpeech}>
											{partOfSpeech}
										</option>
									))}
								</select>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Definition: </h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='Vocab Definition'
									placeholder='Definition'
									value={vocabWord.definition}
									onChange={e => setVocabWord({ ...vocabWord, definition: e.target.value })}
								/>
							</div>

							<button
								className='blueButton'
								style={{ height: '3rem', width: '100%', fontSize: '120%' }}
								onClick={e => {
									e.preventDefault()
									setVocabWordList(list => [vocabWord].concat(list))
									setVocabWord({ word: '', partOfSpeech: partsOfSpeechEnum[0], definition: '' })
								}}>
								Add Vocab Word
							</button>
						</div>{' '}
						<div>
							{vocabWordList.reverse().map((word, i) => {
								return (
									<h2 style={{ textAlign: 'center' }} key={i}>
										{word.word + ': ' + word.definition}
									</h2>
								)
							})}
						</div>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 2fr 4fr',
							alignItems: 'center',
							borderBottom: '1px solid var(--blue)',
							paddingBottom: '1%'
						}}>
						<h2>Homework</h2>
						<div
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr',
								alignItems: 'center'
							}}>
							{/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Name</h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='name'
									placeholder='Assignment Name'
									value={workDue.name}
									onChange={e => setWorkDue({ ...workDue, name: e.target.value })}
								/>
							</div> */}
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Type</h3>
								<select
									style={{
										height: '2rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									onChange={e => setWorkDue({ ...workDue, type: e.target.value })}>
									{assignmentTypeEnumNames.map(assignmentType => {
										return (
											<option key={assignmentType} value={assignmentType}>
												{assignmentType}
											</option>
										)
									})}
								</select>
							</div>
							<div style={{}}>
								<h3 style={{}}>Pages</h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='ReadingPages'
									placeholder='Pages'
									value={workDue.readingPages}
									onChange={e => {
										setWorkDue({ ...workDue, readingPages: e.target.value })
										console.log(workDue.readingPages)
									}}
								/>
								<h3 style={{}}>Sections</h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='text'
									name='ReadingSections'
									placeholder='Sections'
									value={workDue.readingSections}
									onChange={e => {
										setWorkDue({ ...workDue, readingSections: e.target.value })
										console.log(workDue.readingSections)
									}}
								/>
							</div>
							<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
								<h3 style={{ marginRight: '5%' }}>Due Date</h3>
								<input
									style={{
										height: '1.5rem',
										width: '100%',
										backgroundColor: 'transparent',
										color: 'var(--blue)',
										fontSize: '120%'
									}}
									type='date'
									name='dueDate'
									placeholder='Assignment Due Date'
									value={workDue.dueDate}
									onChange={e => setWorkDue({ ...workDue, dueDate: e.target.value })}
								/>
							</div>
							<button
								className='blueButton'
								style={{ height: '3rem', width: '100%', fontSize: '120%' }}
								onClick={e => {
									e.preventDefault()
									setWorkDueList(list => [workDue].concat(list))
									setWorkDue({
										type: assignmentTypeEnumNames[0],
										readingPages: '',
										readingSections: '',
										dueDate: new Date().toLocaleString().substring(0, 10)
									})
								}}>
								Add an Assignment
							</button>
						</div>
						<div>
							{workDueList.reverse().map((assignment, i) => {
								return (
									<div style={{ textAlign: 'center' }} key={i}>
										<h2>{assignment.type + ' due on ' + assignment.dueDate}</h2>
										<h2>{assignment.readingPages + ': ' + assignment.readingSections}</h2>
									</div>
								)
							})}
						</div>
					</div>

					<button
						className='blueButton'
						style={{ height: '3rem', width: '100%', fontSize: '170%' }}
						type='submit'>
						Submit Lesson
					</button>
				</form>
			)}
		</div>
	)
}

export { LessonCreator, LessonCreatorForm }
