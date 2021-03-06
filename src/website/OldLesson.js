import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const FIND_CLASS_PERIOD = gql`
	query findClassPeriodForOldLesson($assignedDate: Date, $period: periodName) {
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
		}
	}
`

const OldLesson = ({ match, oldLessonDateForDisplay, setOldLessonDateForDisplay, period }) => {
	// const { oldLessonDate, courseName } = match.params
	// console.log(oldLessonDate)
	console.log(period)
	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: {
			assignedDate: match !== undefined ? match.params.oldLessonDate : oldLessonDateForDisplay,
			period: match !== undefined ? match.params.courseName : period
		}
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)
	// const { assignedLesson } = data.findClassPeriod

	return (
		<>
			{data.findClassPeriod ? (
				<div
					style={{
						display: 'grid',
						gridTemplateRows: '1fr 7fr',
						overflow: 'scroll',
						height: '100vh'
					}}>
					<div
						style={{
							fontSize: '200%',
							// borderBottom: '3px solid var(--blue)',
							marginTop: '5%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						{match !== undefined ? (
							<div>
								Lesson for{' '}
								{match.params.oldLessonDate.substring(5, 7) +
									'/' +
									match.params.oldLessonDate.substring(8, 10) +
									'/' +
									match.params.oldLessonDate.substring(0, 4)}
							</div>
						) : (
							<div>
								Lesson for{' '}
								{oldLessonDateForDisplay.substring(5, 7) +
									'/' +
									oldLessonDateForDisplay.substring(8, 10) +
									'/' +
									oldLessonDateForDisplay.substring(0, 4)}
							</div>
						)}
					</div>
					<div style={{ marginLeft: '2%' }}>
						<div style={{ fontSize: '160%', marginTop: '4%' }}>
							Essential Question: {data.findClassPeriod.assignedLesson.essentialQuestion.question}
						</div>
						<div style={{ fontSize: '160%', marginTop: '4%' }}>
							Read Page {data.findClassPeriod.assignedLesson.readings.pages}:{' '}
							{data.findClassPeriod.assignedLesson.readings.sections}
						</div>
						<div style={{ fontSize: '160%', marginTop: '4%' }}>
							Assignments Due:
							<ul>
								{data.findClassPeriod.assignedLesson.workDue.map((assignment, i) => (
									<li key={i}>
										{assignment.type === 'OEQ' && (
											<>
												Open Ended Question:{' '}
												{data.findClassPeriod.assignedLesson.essentialQuestion.question}
											</>
										)}
										{assignment.type === 'THINKING_GUIDE' && (
											<div>
												Critical Thinking Guide:
												{assignment.readingPages + ' ' + assignment.readingSections}
											</div>
										)}
									</li>
								))}
							</ul>
						</div>
						<div style={{ fontSize: '160%', marginTop: '4%' }}>
							<div>Study Guide: </div>
							<ol>
								{data.findClassPeriod.assignedLesson.studyGuideQuestions.map((question, i) => {
									return <li key={i}>{question}</li>
								})}
							</ol>
						</div>
						<div style={{ fontSize: '160%', marginTop: '4%' }}>
							<div>Vocabulary Words: </div>
							{data.findClassPeriod.assignedLesson.vocabWords.map((word, i) => (
								<div key={i} style={{ marginLeft: '3%', marginTop: '2%' }}>
									{word.word}: {word.definition}
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh'
					}}>
					<div style={{ fontSize: '250%', marginBottom: '20%' }}>
						No lesson Scheduled for this day
					</div>
				</div>
			)}
		</>
	)
}

export default OldLesson
