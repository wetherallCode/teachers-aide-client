import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { StudentAdder } from './StudentAdder'
import LessonCreator from '../lesson-planner/LessonCreator'
import StudentListInRosterView from './StudentListInRosterView'
import AllStudentRoster from './AllStudentRoster'

export const GET_CLASS_ROSTER = gql`
	query rosterList($period: periodName) {
		classRoster(period: $period) {
			_id
			firstName
			lastName
			responsibilityPoints
			period
			desk
			teacher
			isHiddenFromRoster
		}
	}
`

const Rosters = ({ match }) => {
	const [isAddStudentPressed, setIsAddStudentPressed] = useState(false)
	const [deskLimit, setdeskLimit] = useState(24)
	const { periodName } = match.params

	const { data, loading, error } = useQuery(GET_CLASS_ROSTER, {
		variables: { period: periodName }
	})

	if (loading) return <h1>Loading</h1>
	if (error) console.log(error)

	const lastNames = []
	const { classRoster } = data

	classRoster.forEach(({ lastName, firstName }) =>
		lastNames.unshift({ lastName: lastName, firstName: firstName })
	)

	const desks = []

	classRoster.forEach(({ desk }) => {
		desks.unshift(desk)
	})

	const deskPicker = () => {
		const desk = Math.floor(Math.random() * deskLimit + 1)

		if (desks.includes(desk) && desks.length < deskLimit) {
			return deskPicker()
		} else return desk
	}

	let pickedDesk = deskPicker()

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 7fr',
				alignContent: 'center',
				height: '100vh',
				marginBottom: '0px',
				backgroundColor: 'var(--white)',
				borderLeft: '3px solid var(--white)',
				borderBottom: '1px solid black',
				overflow: 'scroll'
			}}>
			<header className='SubHeader' style={{ alignContent: 'center', justifyContent: 'center' }}>
				<div style={{ display: 'flex', justifyContent: 'center', alignText: 'center' }}>
					<h1>Period {periodName}</h1>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignContent: 'center',
						paddingRight: '5%'
					}}>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						{desks.length < deskLimit && (
							<div>
								<div>
									<button
										className='button'
										style={{ borderRadius: '5px' }}
										onClick={() => setIsAddStudentPressed(!isAddStudentPressed)}>
										{isAddStudentPressed ? 'Cancel' : 'Add Student'}
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</header>

			{/* Above is for all appropriate UI, and below is just the roster*/}

			<div>
				{isAddStudentPressed && (
					<div
						style={{ backgroundColor: 'var(--grey)', paddingTop: '10px', paddingBottom: '10px' }}>
						{
							<StudentAdder
								periodName={periodName}
								isRosterMode={true}
								unUsedDesk={pickedDesk}
								roster={classRoster}
							/>
						}
					</div>
				)}
				<>
					{/* delete all students from this */}
					{match.params.periodName === 'allStudents' ? (
						<AllStudentRoster />
					) : (
						<StudentListInRosterView classRoster={classRoster} />
					)}

					<div style={{ borderBottom: '1px solid var(--blue)' }} />
				</>
			</div>
			<div style={{ backgroundColor: 'var(--grey)', width: '100%' }} />
		</div>
	)
}

export default Rosters
