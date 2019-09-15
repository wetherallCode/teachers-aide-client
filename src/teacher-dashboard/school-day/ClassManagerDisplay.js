import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Attendance from './Attendance'

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
					readingPages
					readingSections
					dueDate
				}
				studyGuideQuestions
			}
			period
			assignedDate
		}
	}
`

const ClassManagerDisplay = ({ match }) => {
	const [lessonPlanDate, setLessonPlanDate] = useState(new Date().toISOString().substring(0, 10))
	const { periods } = match.params

	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: lessonPlanDate, period: periods }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<div style={{ overflow: 'scroll', height: '100vh' }}>
			<div
				style={{
					color: 'var(--blue)',
					fontSize: '250%',
					marginBottom: '2%',
					marginTop: '2%',
					textDecoration: 'underline',
					textAlign: 'center'
				}}>
				Scheduled Lesson for{' '}
				{lessonPlanDate.substring(5, 7) +
					'/' +
					lessonPlanDate.substring(8, 10) +
					'/' +
					lessonPlanDate.substring(0, 4)}
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
				<div style={{ fontSize: '130%', color: 'var(--blue)' }}>Select Date: </div>
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
				<div>
					<div style={{ margin: '5%' }}>
						<div
							style={{
								color: 'var(--white)',
								backgroundColor: 'var(--blue)',
								height: '3rem',
								fontSize: '150%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center'
							}}>
							{/* <TodaysDate date={lessonPlanDate} /> */}
							<div style={{ marginLeft: '2%' }}>Lesson Plan</div>
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
									<div>{data.findClassPeriod.assignedLesson.readings.pages}</div>
									<div>{data.findClassPeriod.assignedLesson.readings.sections}</div>
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
												<h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
													Homework
												</h3>
												<div>{assignment.type}</div>
												<div>{assignment.readingPages + ': ' + assignment.readingSections}</div>
											</div>
										)
									})}
								</div>
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
						No Lesson Has Been Assigned for this date:{' '}
						{lessonPlanDate.substring(5, 7) +
							'/' +
							lessonPlanDate.substring(8, 10) +
							'/' +
							lessonPlanDate.substring(0, 4)}
					</div>
				</div>
			)}
			<div>Study Guide</div>
			<Attendance date={lessonPlanDate} period={periods}></Attendance>
		</div>
	)
}

export default ClassManagerDisplay
