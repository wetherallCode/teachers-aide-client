import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ApolloConsumer } from '@apollo/react-hooks'

//needs an array of all available desks to choose from
//needs a array of already selected students (10-15) to keep from having to many repeats
//needs to display the selected student in the studentInfo

const calledOnStudents = []

const RandomDeskSelector = ({ eligibleStudentList, period }) => {
	const calledOnStudentListSize = Math.ceil(eligibleStudentList.length * 0.4)

	const randomizer = () => {
		const student = Math.floor(Math.random() * 24 + 1)

		if (eligibleStudentList.includes(student)) {
			if (!calledOnStudents.includes(student)) {
				calledOnStudents.unshift(student)

				if (calledOnStudents.length > calledOnStudentListSize) {
					calledOnStudents.pop(student)
				}

				return student
			} else return randomizer()
		} else return randomizer()
	}

	let rando = randomizer()

	return <RandomDeskSelectorDisplay student={rando} period={period} />
}
const RandomDeskSelectorDisplay = ({ period, student }) => {
	return (
		<Link to={`/dashboard/classroom/class-period-selector/${period}/${student}`}>
			<button
				style={{
					fontSize: '130%',
					height: '10rem',
					width: '8rem',
					textDecoration: 'none',
					textShadow: '3px 3px 3px var(--grey)',
					color: 'var(--blue)',
					backgroundColor: 'var(--white)',
					borderRadius: '5px',
					boxShadow: '1px 1px 1px black',
				}}>
				Random Student Generator
			</button>
		</Link>
	)
}

export default RandomDeskSelector
