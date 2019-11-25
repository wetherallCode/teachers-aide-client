import React from 'react'
import { Link } from 'react-router-dom'

const calledOnStudents = []

const RandomDeskSelector = ({ eligibleStudentList, period }) => {
	const calledOnStudentListSize = Math.ceil(eligibleStudentList.length * 0.6)

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

	let randomStudent = randomizer()
	console.log(calledOnStudents)
	return <RandomDeskSelectorDisplay student={randomStudent} period={period} />
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
					boxShadow: '1px 1px 1px black'
				}}>
				Random Student Generator
			</button>
		</Link>
	)
}

export default RandomDeskSelector
