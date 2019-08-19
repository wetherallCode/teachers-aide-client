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
					name
					type
					dueDate
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

	const { assignedLesson } = data.findClassPeriod

	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
			<AgendaItemsNavBar match={match} lesson={data.findClassPeriod} />
			<Route
				path={`${match.path}/warmUp`}
				render={() => (
					<div
						style={{
							color: 'var(--blue)'
						}}>
						<h1>Warm Up</h1>
						<h2>{assignedLesson.warmup}</h2>
					</div>
				)}
			/>
			<Route
				path={`${match.path}/essentialQuestion`}
				render={() => (
					<div
						style={{
							color: 'var(--blue)'
						}}>
						<h1>Essential Question</h1>
						<h2>{assignedLesson.essentialQuestion.question}</h2>
					</div>
				)}
			/>
			<Route
				path={`${match.path}/readings`}
				render={() => (
					<div
						style={{
							color: 'var(--blue)'
						}}>
						<h1>Today's Assigned Reading</h1>
						<h2>{assignedLesson.readings.pages}</h2>
						<h2>{assignedLesson.readings.sections}</h2>
					</div>
				)}
			/>
			<Route
				path={`${match.path}/vocabWords`}
				render={() => (
					<div
						style={{
							color: 'var(--blue)'
						}}>
						<h1>Vocab</h1>
						<div>
							{assignedLesson.vocabWords.map((word, i) => (
								<div>
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
							color: 'var(--blue)'
						}}>
						<h1>Vocab</h1>
						<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
							{assignedLesson.socraticQuestions.map((question, i) => (
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
							color: 'var(--blue)'
						}}>
						<h1>Assignments Due</h1>
						<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
							{assignedLesson.workDue.map((assignment, i) => (
								<div>
									<div>{assignment.type}</div>
									<div>{assignment.name}</div>
									<div>{assignment.dueDate}</div>
								</div>
							))}
						</div>
					</div>
				)}
			/>
		</div>
	)
}

export default DailyAgenda
