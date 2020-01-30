import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AgendaItemsNavBar from './AgendaItemsNavBar'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Route, Link } from 'react-router-dom'
import ResourceButton from './ResourceButton'
import OldLesson from './OldLesson'

const FIND_CLASS_PERIOD = gql`
	query findClassPeriodForDailyAgenda($assignedDate: Date, $period: periodName) {
		findClassPeriod(assignedDate: $assignedDate, period: $period) {
			assignedLesson {
				_id
				lessonName
				warmup
				essentialQuestion {
					question
				}
				readings {
					pages
					sections
				}
				socraticQuestions {
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
			assignedHomework {
				assignmentType
				dueDate
				readingPages
				readingSections
			}
		}
	}
`

const DailyAgenda = ({ match }) => {
	const { courseName } = match.params
	const todaysDate = new Date().toISOString().substring(0, 10)

	const [classRoomResources, setClassRoomResources] = useState(false)

	const [oldLessonToggle, setOldLessonToggle] = useState(false)
	const [oldLessonDate, setOldLessonDate] = useState(todaysDate)

	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: todaysDate, period: courseName }
	})
	if (loading) return null
	if (error) console.error(error)

	// const OEQ = data.findClassPeriod.assignedHomework.filter(x => x.assignmentType === 'OEQ')
	// console.log(OEQ)

	return (
		<>
			{data.findClassPeriod === null ? (
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
					<div
						style={{
							backgroundColor: 'var(--blue)',
							color: 'var(--white)',
							fontSize: '150%',
							borderRight: '3px solid var(--white)',
							height: '100vh',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'center',
							paddingTop: '8%',
							overflow: 'scroll'
						}}>
						<div style={{ fontSize: '130%', marginBottom: '10%', textDecoration: 'underline' }}>
							{match.params.courseName.substring(0, 1)} Day Period{' '}
							{match.params.courseName.substring(2, 3)}-{match.params.courseName.substring(3, 4)}{' '}
						</div>
						<button
							style={{
								width: '80%',
								height: '8%',
								textDecoration: 'underline',
								fontSize: '130%',
								color: 'var(--blue)',
								backgroundColor: 'var(--grey)',
								textShadow: '1px 1px 8px var(--darkGrey)',
								borderRadius: '5px',
								boxShadow: '1px 1px 1px black',
								marginTop: '2%'
							}}
							onClick={() => setOldLessonToggle(!oldLessonToggle)}>
							Old Lessons
						</button>
						{oldLessonToggle && (
							<>
								<input
									style={{
										width: '70%',
										height: '5%',
										marginTop: '10%',
										fontSize: '100%',
										color: 'var(--blue)'
									}}
									type='date'
									value={oldLessonDate}
									onChange={e => setOldLessonDate(e.target.value)}></input>
								<Link
									style={{
										marginRight: '1%',
										marginTop: '10%',
										// fontSize: '150%',
										color: 'var(--white)',
										textDecoration: 'none'
									}}
									to={`${match.url}/${oldLessonDate}`}>
									Get Lesson
								</Link>
							</>
						)}
						<button
							style={{
								width: '80%',
								height: '8%',
								textDecoration: 'underline',
								fontSize: '130%',
								color: 'var(--blue)',
								backgroundColor: 'var(--grey)',
								textShadow: '1px 1px 8px var(--darkGrey)',
								borderRadius: '5px',
								boxShadow: '1px 1px 1px black',
								marginTop: '10%'
							}}
							onClick={() => {
								setClassRoomResources(!classRoomResources)
							}}>
							Resources
						</button>
						{classRoomResources && <ResourceButton />}
					</div>
					<Route
						path={`${match.path}/:oldLessonDate`}
						// render={props => <OldLesson {...props} date={oldLessonDate}></OldLesson>}>
						component={OldLesson}
					/>
				</div>
			) : (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 3fr',
						height: '100vh',
						overflow: 'auto'
					}}>
					<AgendaItemsNavBar match={match} lesson={data.findClassPeriod} />
					<Route
						path={`${match.path}/studyGuide`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
									marginTop: '5%',
									alignItems: 'center',
									overflow: 'scroll'
								}}>
								<h1
									style={{
										textDecoration: 'underline',
										fontSize: '300%'
									}}>
									Study Guide
								</h1>
								<div
									style={{
										fontSize: '250%',

										marginLeft: '2%'
									}}>
									{data.findClassPeriod.assignedLesson.studyGuideQuestions.map((question, i) => {
										return (
											<div key={i} style={{ fontSize: '80%', marginTop: '2%' }}>
												{i + 1}. {question}
											</div>
										)
									})}
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/essentialQuestion`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
									marginTop: '5%',
									alignItems: 'center',
									overflow: 'auto'
								}}>
								<h1
									style={{
										textDecoration: 'underline',
										fontSize: '300%'
									}}>
									Essential Question
								</h1>
								<div
									style={{
										textAlign: 'center',
										fontSize: '250%',
										marginTop: '2%',
										marginBottom: '25%'
									}}>
									{data.findClassPeriod.assignedLesson.essentialQuestion.question}
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/readings`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
									marginTop: '5%',
									alignItems: 'center',
									overflow: 'scroll'
								}}>
								<h1
									style={{
										textDecoration: 'underline',
										fontSize: '300%'
									}}>
									Today's Assigned Reading
								</h1>
								<div
									style={{
										textAlign: 'center',
										fontSize: '250%',
										marginTop: '2%',
										marginBottom: '20%'
									}}>
									<div>
										Read page {data.findClassPeriod.assignedLesson.readings.pages}:{' '}
										{data.findClassPeriod.assignedLesson.readings.sections}
									</div>
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/vocabWords`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'grid',
									gridTemplateRows: '1fr 6fr',
									borderRight: '3px solid var(--white)'
								}}>
								<div
									style={{
										borderBottom: '3px solid var(--blue)',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center'
									}}>
									<h1
										style={{
											textDecoration: 'underline',
											fontSize: '300%',
											textAlign: 'center'
										}}>
										Vocab
									</h1>
								</div>
								<div
									style={{
										fontSize: '200%',
										// paddingLeft: '3%',
										overflow: 'scroll',
										height: '100vh'
										// marginBottom: '20%'
									}}>
									{data.findClassPeriod.assignedLesson.vocabWords.map((word, i) => (
										<div
											key={i}
											style={{
												paddingLeft: '3%',
												height: '10%',
												display: 'flex',
												justifyContent: 'flex-start',
												alignItems: 'center'
											}}
											onMouseOver={e => {
												e.target.style.backgroundColor = 'var(--blue)'
												e.target.style.color = 'var(--white)'
											}}
											onMouseOut={e => {
												e.target.style.backgroundColor = 'var(--white)'
												e.target.style.color = 'var(--blue)'
											}}>
											{word.word}: {word.definition}
										</div>
									))}
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/socraticQuestions`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'grid',
									gridTemplateRows: '1fr 4fr'
								}}>
								<div>
									<h1
										style={{
											textDecoration: 'underline',
											fontSize: '300%',
											textAlign: 'center'
										}}>
										Socratic Questions
									</h1>
								</div>
								<div
									style={{
										fontSize: '200%',
										paddingLeft: '3%'
									}}>
									{data.findClassPeriod.assignedLesson.socraticQuestions.map((question, i) => (
										<div
											key={i}
											style={{
												height: '20%',
												display: 'flex',
												justifyContent: 'flex-start',
												alignItems: 'center'
											}}
											onMouseOver={e => {
												e.target.style.backgroundColor = 'var(--blue)'
												e.target.style.color = 'var(--white)'
											}}
											onMouseOut={e => {
												e.target.style.backgroundColor = 'var(--white)'
												e.target.style.color = 'var(--blue)'
											}}>
											{question.question}
										</div>
									))}
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/workDue`}
						render={() => {
							const [openEnded] = data.findClassPeriod.assignedHomework.filter(
								x => x.assignmentType === 'OEQ'
							)

							const [criticalThinking] = data.findClassPeriod.assignedHomework.filter(
								x => x.assignmentType === 'THINKING_GUIDE'
							)

							return (
								<div
									style={{
										color: 'var(--blue)',
										display: 'grid',
										gridTemplateRows: '1fr 4fr'
									}}>
									<h1
										style={{
											textDecoration: 'underline',
											fontSize: '300%',
											textAlign: 'center'
										}}>
										Assignments Due
									</h1>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'flex-start'
										}}>
										{openEnded && (
											<ul
												style={{
													fontSize: '170%',
													paddingLeft: '4%'
													// marginBottom: '20%'
												}}>
												<li>
													<div style={{ marginBottom: '1%' }}>
														Read pages {openEnded.readingPages}: {openEnded.readingSections} and
														answer the following Open Ended Question:
													</div>
													<ul>
														<li style={{ marginBottom: '1%' }}>
															{data.findClassPeriod.assignedLesson.essentialQuestion.question}
														</li>
														<li>Due on: {openEnded.dueDate.substring(5)}</li>
													</ul>
												</li>
											</ul>
										)}
										{criticalThinking && (
											<ul
												style={{
													fontSize: '170%',
													paddingLeft: '4%'
													// marginBottom: '20%'
												}}>
												<li>
													<div style={{ marginBottom: '1%' }}>
														Read pages {criticalThinking.readingPages}:{' '}
														{criticalThinking.readingSections} and complete a Critical Thinking
														Guide.
													</div>
													<ul>
														<li>Due on: {criticalThinking.dueDate.substring(5)}</li>
													</ul>
												</li>
											</ul>
										)}
									</div>
								</div>
							)
						}}
					/>
					<Route
						path={`${match.path}/studyGuideQuestions`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'grid',
									gridTemplateRows: '1fr 6fr',
									overflow: 'scroll'
								}}>
								<div>
									<h1
										style={{
											textDecoration: 'underline',
											fontSize: '300%',
											textAlign: 'center'
										}}>
										Study Guide
									</h1>
								</div>
								<div
									style={{
										fontSize: '200%',
										paddingLeft: '3%'
									}}>
									<ol>
										{data.findClassPeriod.assignedLesson.studyGuideQuestions.map((question, i) => (
											<li key={i} style={{ marginTop: '3%' }}>
												{question}
											</li>
										))}
									</ol>
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/oldLesson/:oldLessonDate`}
						// render={props => <OldLesson {...props} date={oldLessonDate}></OldLesson>}>
						component={OldLesson}
					/>
				</div>
			)}
		</>
	)
}

export default DailyAgenda
