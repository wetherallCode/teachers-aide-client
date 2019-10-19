import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

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
				studyGuideQuestions
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

const OldLesson = ({ match }) => {
	const { oldLessonDate, courseName } = match.params

	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: oldLessonDate, period: courseName }
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)
	// const { assignedLesson } = data.findClassPeriod
	return (
		<>
			{data.findClassPeriod ? (
				<div style={{ display: 'grid', gridTemplateRows: '1fr 7fr' }}>
					<div
						style={{
							fontSize: '200%',
							borderBottom: '3px solid var(--blue)',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<div>
							Lesson for{' '}
							{oldLessonDate.substring(5, 7) +
								'/' +
								oldLessonDate.substring(8, 10) +
								'/' +
								oldLessonDate.substring(0, 4)}
						</div>
					</div>
					<div style={{ marginLeft: '2%', overflow: 'scroll' }}>
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
												<div>{assignment.dueDate}</div>
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
