import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const useRollingArray = maxLength => {
	const [arr, setArr] = useState([])
	return [
		arr,
		// Function to add a new student
		student => {
			// We can't mutate the state, so we must return a new array.
			// [student, ...arr] adds the new student to the front, and
			// slice(0, length) pops any extras off the end
			setArr([student, ...arr].slice(0, maxLength))
		}
	]
}

const RandomStudentSelector = ({ eligibleStudentList, period }) => {
	// console.log(eligibleStudentList)
	const [selectedStudents, registerNewStudent] = useRollingArray(
		Math.floor(eligibleStudentList.length * 0.6)
	)
	// console.log(selectedStudents)
	const [currentStudent, setCurrentStudent] = useState(
		Math.floor(Math.random() * eligibleStudentList.length + 1)
	)

	const selectNewStudent = useCallback(() => {
		// Rather than randomising until we get a new student, instead
		// generate the list of available students by excluding the
		// recently called students.
		const availableStudents = eligibleStudentList.filter(
			student => !selectedStudents.includes(student)
		)
		const randomStudent = availableStudents[Math.floor(Math.random() * availableStudents.length)]
		// Add the new student to our rolling array
		registerNewStudent(randomStudent)
		// Update the react component;
		setCurrentStudent(randomStudent)
	}, [selectedStudents, eligibleStudentList, registerNewStudent])

	return (
		<Link to={`/dashboard/classroom/class-period-selector/${period}/${currentStudent}`}>
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
				}}
				onClick={selectNewStudent}>
				Random Student Generator
			</button>
		</Link>
	)
}

export default RandomStudentSelector
