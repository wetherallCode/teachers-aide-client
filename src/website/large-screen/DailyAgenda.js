import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import ResourceButton from '../ResourceButton'
import OldLesson from '../OldLesson'

import LivePeriod from './LivePeriod'
import ManualAgenda from './ManualAgenda'

export const FIND_CLASS_PERIOD = gql`
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
			assignedProtocols {
				... on SocraticQuestionProtocolForClassPeriod {
					isActive
					socraticQuestion
					socraticQuestionType
				}
			}
			livePeriod
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
		variables: { assignedDate: todaysDate, period: courseName },
		pollInterval: 10
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<>
			{data.findClassPeriod === null || data.findClassPeriod === undefined ? (
				<div
					style={{
						height: '90vh',
						overflow: 'scroll',
						display: 'grid',
						gridTemplateColumns: '1fr 3fr'
					}}>
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
							paddingTop: '8%'
							// overflow: 'scroll'
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
						height: '100vh'
						// overflow: 'scroll'
					}}>
					<>
						{data.findClassPeriod.livePeriod !== 'DISABLED' && (
							<LivePeriod
								classPeriod={data.findClassPeriod}
								livePeriod={data.findClassPeriod.livePeriod}
								match={match}
							/>
						)}

						{data.findClassPeriod.livePeriod === 'DISABLED' && (
							<ManualAgenda classPeriod={data.findClassPeriod} match={match} />
						)}
					</>

					{/* <div>
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
					</div> */}
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
