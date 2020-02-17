import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RandomDeskSelector from './RandomDeskSelector'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ClassToolsDisplayBox from './ClassToolsDisplayBox'
import RandomStudentSelector from './RandomStudentSelector'

const FIND_ELIGIBLE_STUDENTS_QUERY = gql`
	query findEligibleStudents($period: periodName!) {
		classRoster(period: $period) {
			desk
			firstName
			daysAbsent
			period
		}
	}
`
export const FIND_STUDENT_QUERY = gql`
	query findStudentsNames($period: periodName!, $desk: Int!) {
		findStudentByPeriodAndDesk(period: $period, desk: $desk) {
			firstName
		}
	}
`

const ClassRoomTools = ({ period, match, todaysDate, teacherOptions, setTeacherOptions }) => {
	const [selectorSwitch, setSelectorSwitch] = useState(0)
	if (selectorSwitch > 2) setSelectorSwitch(0)
	if (selectorSwitch < 0) setSelectorSwitch(2)

	const { data, loading, error } = useQuery(FIND_ELIGIBLE_STUDENTS_QUERY, {
		variables: { period: period }
	})
	if (loading) return null
	if (error) console.log(error)
	const { classRoster } = data

	const eligibleStudentList = []

	classRoster.forEach(student => {
		if (student.daysAbsent !== null && student.daysAbsent.includes(todaysDate)) {
			return null
		} else eligibleStudentList.unshift(student.desk)
	})

	return (
		<div
			style={{
				backgroundColor: 'var(--blue)',
				display: 'grid',
				gridTemplateColumns: '1fr 4fr 1fr'
			}}>
			<div
				style={{
					display: 'grid',
					justifyContent: 'center',
					alignContent: 'center',
					backgroundColor: 'var(--blue)'
				}}>
				{eligibleStudentList.length > 2 && (
					<RandomStudentSelector
						eligibleStudentList={eligibleStudentList}
						period={period}
						match={match}
					/>
					// <RandomDeskSelector eligibleStudentList={eligibleStudentList} period={period} />
				)}
			</div>
			<div style={{ display: 'grid', gridTemplateRows: '1fr 3fr' }}>
				<Link
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'flex-start',
						textDecoration: 'none'
					}}
					to='/dashboard/classroom/class-period-selector'>
					<button
						style={{
							backgroundColor: 'var(--white)',
							color: 'var(--blue)',
							marginTop: '3px',
							height: '2rem',
							paddingLeft: '30%',
							paddingRight: '30%',
							fontSize: '150%',
							border: '1px solid black',
							boxShadow: '1px 1px 1px black',
							textShadow: '3px 3px 3px var(--grey)'
						}}>
						Period{' '}
						{period.substring(0, 1) + ' ' + period.substring(2, 3) + '-' + period.substring(3)}
					</button>
				</Link>
				<ClassToolsDisplayBox
					selector={selectorSwitch}
					period={period}
					teacherOptions={teacherOptions}
					setTeacherOptions={setTeacherOptions}
				/>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '(1fr 1fr)',
					justifyContent: 'center',
					backgroundColor: 'var(--blue)'
				}}>
				<button
					style={{
						height: '5rem',
						width: '8rem',
						margin: '2%',
						fontSize: '130%',
						textShadow: '3px 3px 3px var(--grey)',
						color: 'var(--blue)',
						backgroundColor: 'var(--white)',
						borderRadius: '5px'
					}}
					onClick={() => setSelectorSwitch(selectorSwitch + 1)}>
					Up
				</button>
				<button
					style={{
						height: '5rem',
						width: '8rem',
						margin: '2%',
						fontSize: '130%',
						textShadow: '3px 3px 3px var(--grey)',
						color: 'var(--blue)',
						backgroundColor: 'var(--white)',
						borderRadius: '5px'
					}}
					onClick={() => setSelectorSwitch(selectorSwitch - 1)}>
					Down
				</button>
			</div>
		</div>
	)
}

export default ClassRoomTools
