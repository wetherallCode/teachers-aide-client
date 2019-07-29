import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StudentInfoMutatorCategory = ({}) => {
	return (
		<button
			style={{ textDecoration: 'underline' }}
			onClick={() => {
				setResponsibilityToggle(!responsibilityToggle)
			}}>
			Responsibility Points
		</button>
	)
}

export default StudentInfoMutatorCategory
