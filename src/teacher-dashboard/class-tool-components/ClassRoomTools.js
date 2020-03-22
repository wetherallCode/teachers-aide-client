import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ClassToolsDisplayBox from './ClassToolsDisplayBox'
import RandomStudentSelector from './RandomStudentSelector'

export const FIND_ELIGIBLE_STUDENTS_QUERY = gql`
	query findEligibleStudents($period: periodName!) {
		classRoster(period: $period) {
			desk
			firstName
			daysAbsent
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

const ClassRoomTools = ({
	classPeriodInfo,
	period,
	match,
	todaysDate,
	teacherOptions,
	setTeacherOptions,
	setProtocolToggle,
	protocolToggle,
	presentStudents
}) => {
	const [selectorSwitch, setSelectorSwitch] = useState(0)

	const { data, loading, error } = useQuery(FIND_ELIGIBLE_STUDENTS_QUERY, {
		variables: { period: period }
		// pollInterval: 10
	})
	if (loading) return null
	if (error) console.log(error)
	const { classRoster } = data
	if (selectorSwitch > 2) setSelectorSwitch(0)
	if (selectorSwitch < 0) setSelectorSwitch(2)

	const eligibleStudentList = []
	const presentStudentList = []

	presentStudents.forEach(student => {
		if (student.daysAbsent !== null && student.daysAbsent.includes(todaysDate)) {
			return null
		} else presentStudentList.unshift(student.desk)
	})

	classRoster.forEach(student => {
		if (student.daysAbsent !== null && student.daysAbsent.includes(todaysDate)) {
			return null
		} else eligibleStudentList.unshift(student.desk)
	})
	console.log(eligibleStudentList)
	console.log(presentStudentList)
	return (
		<div
			style={{
				backgroundColor: 'var(--blue)',
				display: 'grid',
				gridTemplateColumns: '1fr 4fr 1fr',
				height: '23.8vh'
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
						eligibleStudentList={presentStudentList}
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
				{classPeriodInfo !== null ? (
					<ClassToolsDisplayBox
						selector={selectorSwitch}
						period={period}
						classPeriodInfo={classPeriodInfo}
						teacherOptions={teacherOptions}
						setTeacherOptions={setTeacherOptions}
						setProtocolToggle={setProtocolToggle}
						protocolToggle={protocolToggle}
						eligibleStudentList={eligibleStudentList}
					/>
				) : (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '130%'
						}}>
						<div>No Class Today</div>
					</div>
				)}
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
