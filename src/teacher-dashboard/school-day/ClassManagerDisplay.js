import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import TodaysDate from '../../website/TodaysDate'
import { useQuery } from 'react-apollo'
// import Moment from 'react-moment'

const FIND_CLASS_PERIOD = gql`
	query findClassPeriod($assignedDate: Date, $period: periodName) {
		findClassPeriod(assignedDate: $assignedDate, period: $period) {
			assignedLesson {
				_id
				lessonName
				inUnit {
					name
				}
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

const ClassManagerDisplay = ({ match }) => {
	const [lessonPlanDate, setLessonPlanDate] = useState(new Date().toLocaleString().substring(0, 10))
	const { periods } = match.params
	const { path, url } = match

	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: lessonPlanDate, period: periods }
	})
	if (loading) return null
	if (error) console.error(error)
	// console.log(data.findClassPeriod)
	// const { assignedLesson } = data.findClassPeriod

	return (
		<div style={{ overflow: 'scroll' }}>
			<div
				style={{
					color: 'var(--blue)',
					fontSize: '250%',
					marginBottom: '2%',
					marginTop: '2%',
					textDecoration: 'underline',
					textAlign: 'center'
				}}>
				Today's Scheduled Lesson
			</div>
			<div
				style={{
					color: 'var(--blue)',
					fontSize: '200%',
					marginBottom: '2%',
					// textDecoration: 'underline',
					textAlign: 'center'
				}}>
				Period {periods}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<div style={{ fontSize: '130%', color: 'var(--blue)', fontSize: '150%' }}>
					Select Date:{' '}
				</div>
				<input
					style={{
						width: '20%',
						alignContent: 'center',
						height: '1.5rem',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '150%',
						marginLeft: '2%'
					}}
					type='date'
					value={lessonPlanDate}
					placeholder={lessonPlanDate}
					onChange={e => setLessonPlanDate(e.target.value)}
				/>
			</div>

			{data.findClassPeriod !== null ? (
				<div style={{ margin: '5%' }}>
					<div
						style={{
							color: 'var(--white)',
							backgroundColor: 'var(--blue)',
							height: '3rem',
							fontSize: '150%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<TodaysDate date={new Date()} />
					</div>
					<div
						style={{
							color: 'var(--blue)',
							textAlign: 'center',
							fontSize: '150%'
						}}>
						<div
							id='lessonGrid'
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr ',
								gridTemplateColumns: '1fr 1fr 1fr 1fr',
								backgroundColor: 'var(--blue)',
								border: '3px solid var(--blue)',
								gridGap: '3px'
							}}>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Unit</h3>
								{data.findClassPeriod.assignedLesson.inUnit.name}
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Lesson</h3>
								{data.findClassPeriod.assignedLesson.lessonName}
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Warm Up</h3>
								{data.findClassPeriod.assignedLesson.warmup}
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
									Essential Question
								</h3>
								{data.findClassPeriod.assignedLesson.essentialQuestion.question}
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Readings</h3>
								<div>{data.findClassPeriod.assignedLesson.readingPages}</div>
								<div>{data.findClassPeriod.assignedLesson.readingSections}</div>
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
									Socratic Questions
								</h3>
								{data.findClassPeriod.assignedLesson.socraticQuestions.map((question, i) => (
									<div key={i}>{question.question}</div>
								))}
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Vocab</h3>
								{data.findClassPeriod.assignedLesson.vocabWords.map((word, i) => (
									<div key={i}>{word.word + ': ' + word.definition}</div>
								))}
							</div>
							<div style={{ backgroundColor: 'var(--white)' }}>
								{data.findClassPeriod.assignedLesson.workDue.map((assignment, i) => {
									return (
										<div key={i}>
											{' '}
											<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Homework</h3>
											<div>{assignment.type}</div>
											<div>{assignment.readingPages + ': ' + assignment.readingSections}</div>
											<div>{assignment.dueDate}</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: '40vh',
						marginTop: '5%',
						marginLeft: '15%',
						marginRight: '15%',
						marginBottom: '15%',
						border: '3px solid var(--blue)'
					}}>
					<div
						style={{
							color: 'var(--blue)',
							fontSize: '130%'
						}}>
						No Lesson Has Been Assigned for this date: {lessonPlanDate}
					</div>
				</div>
			)}
		</div>
	)
}

export default ClassManagerDisplay
