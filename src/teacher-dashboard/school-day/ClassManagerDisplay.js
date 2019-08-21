import React from 'react'
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
					readings {
						pages
						sections
					}
				}
			}
		}
	}
`

const ClassManagerDisplay = ({ match }) => {
	const todaysDate = new Date().toLocaleDateString().substring(0, 10)
	const { periods } = match.params
	console.log(periods)
	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: todaysDate, period: periods }
	})
	if (loading) return null
	if (error) console.error(error)

	const { assignedLesson } = data.findClassPeriod
	console.log(assignedLesson)
	return (
		<div>
			<h1 style={{ textAlign: 'center', color: 'var(--blue)' }}>Today's Scheduled Lesson</h1>
			<div style={{ color: 'var(--blue)', textAlign: 'center', fontSize: '150%' }}>
				<TodaysDate date={new Date()} />
				<div>{data.findClassPeriod.assignedLesson.lessonName}</div>
			</div>
		</div>
	)
}

export default ClassManagerDisplay
