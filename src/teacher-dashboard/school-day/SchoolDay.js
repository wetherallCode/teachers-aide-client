import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AssignmentCreator from '../lesson-planner/AssignmentCreator'
import LessonCreator from '../lesson-planner/LessonCreator'

const SchoolDay = ({ match }) => {
	const { url, path } = match
	return (
		<div>
			<h1>School Day Screen</h1>
		</div>
	)
}

export default SchoolDay

// A School Day should have a list of classes for the day
// A way to track absences/resons for leaving the class for all students
// Be apart of the Dashboard?
