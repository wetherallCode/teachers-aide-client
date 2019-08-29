import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AgendaItemsNavBar from './AgendaItemsNavBar'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Route } from 'react-router-dom'

const FIND_CLASS_PERIOD = gql`
	query findClassPeriod($assignedDate: Date, $period: periodName) {
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
				vocabWords {
					word
					partOfSpeech
					definition
				}
				workDue {
					type
					dueDate
					readingPages
					readingSections
				}
			}
		}
	}
`

const DailyAgenda = ({ match }) => {
	const { courseName } = match.params
	const todaysDate = new Date().toISOString().substring(0, 10)

	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: todaysDate, period: courseName }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<>
			{data.findClassPeriod === null ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						height: '75vh',
						alignItems: 'center',
						fontSize: '200%'
					}}>
					<div>No Lesson Assigned for Today!</div>
				</div>
			) : (
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
					<AgendaItemsNavBar match={match} lesson={data.findClassPeriod} />
					<Route
						path={`${match.path}/warmUp`}
						render={() => (
							<div
								style={{
									color: 'var(--blue)',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<h1
									style={{
										textDecoration: 'underline',
										fontSize: '300%'
									}}>
									Warm Up
								</h1>
								<div
									style={{
										textAlign: 'center',
										fontSize: '250%',
										marginTop: '10%',
										marginBottom: '25%'
									}}>
									{data.findClassPeriod.assignedLesson.warmup}
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
									justifyContent: 'center',
									alignItems: 'center'
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
										marginTop: '10%',
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
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<h1
									style={{
										textDecoration: 'underline',
										fontSize: '300%',
										marginTop: '2%'
									}}>
									Today's Assigned Reading
								</h1>
								<div
									style={{
										textAlign: 'center',
										fontSize: '250%',
										// marginTop: '%',
										marginBottom: '20%'
									}}>
									<div>Read page: {data.findClassPeriod.assignedLesson.readings.pages}</div>
									<div>Sections: {data.findClassPeriod.assignedLesson.readings.sections}</div>
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
									gridTemplateRows: '1fr 4fr'
								}}>
								<div>
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
										paddingLeft: '3%'
										// marginBottom: '20%'
									}}>
									{data.findClassPeriod.assignedLesson.vocabWords.map((word, i) => (
										<div key={i}>
											{word.word}: {word.definition}.
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
										// marginBottom: '20%'
									}}>
									{data.findClassPeriod.assignedLesson.socraticQuestions.map((question, i) => (
										<div key={i}>{question.question}</div>
									))}
								</div>
							</div>
						)}
					/>
					<Route
						path={`${match.path}/workDue`}
						render={() => (
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
									{data.findClassPeriod.assignedLesson.workDue.map((assignment, i) => (
										<ol
											key={i}
											style={{
												fontSize: '170%',
												paddingLeft: '4%'
												// marginBottom: '20%'
											}}>
											{assignment.type === 'OEQ' && (
												<li
												// style={{ borderBottom: '1px solid var(--blue)', width: '85%' }}
												>
													<>
														<div>
															Read pages {assignment.readingPages}: {assignment.readingSections} and
															answer the following Open Ended Question:
														</div>
														<ul>
															<li style={{ marginTop: '1%' }}>{assignment.question}</li>
															<li style={{ marginTop: '1%' }}>
																Due on {assignment.dueDate.substring(6, 10)}
															</li>
														</ul>
													</>
												</li>
											)}
											<br />
											{assignment.type === 'THINKING_GUIDE' && (
												<li
												// style={{ borderBottom: '1px solid var(--blue)', width: '85%' }}
												>
													<>
														<div>
															Read pages {assignment.readingPages}: {assignment.readingSections} and
															complete a Critical Thinking Guide.
														</div>
														<ul>
															<li style={{ marginTop: '1%' }}>
																Due on {assignment.dueDate.substring(6, 10)}
															</li>
														</ul>
													</>
												</li>
											)}
										</ol>
									))}
								</div>
							</div>
						)}
					/>
				</div>
			)}
		</>
	)
}

export default DailyAgenda
