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
const ClassroomInfo = () => {
	return <div></div>
}

export default ClassroomInfo
