import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { GET_CLASS_ROSTER } from '../roster-components/rosterView'
import { CURRENT_MARKING_PERIOD_ID } from '../../utils'
import DownloadsDisplay from './grade-downloads/DownloadsDisplay'
import RosterManager from './rosters/RosterManager'

const GET_COURSE_INFO = gql`
	query getInfoForCourseManager($_id: ID!) {
		AssignmentType: __type(name: "AssignmentType") {
			enumValues {
				name
			}
		}
		MarkingPeriodEnum: __type(name: "MarkingPeriodEnum") {
			enumValues {
				name
			}
		}
		findCurrentMarkingPeriod(_id: $_id) {
			markingPeriod
		}
	}
`

const GET_ALL_CLASS_PERIODS_FOR_COURSE_MANAGER = gql`
	query getAllClassPeriodsForCourseManager($period: periodName) {
		findClassPeriodsForCourse(period: $period) {
			assignedDate
			assignedHomework {
				assignmentType
				assignedDate
				readingSections
				markingPeriod
			}
			assignedTest {
				dueDate
				markingPeriod
				readingSections
			}
		}
	}
`

const CourseManager = ({ match }) => {
	const { periods } = match.params
	const { loading, error, data } = useQuery(GET_CLASS_ROSTER, { variables: { period: periods } })
	if (loading) return <div>Bringing the Information</div>
	if (error) console.error(error)

	return <CourseManagerMarkingPeriodInfo period={periods} roster={data.classRoster} />
}

const CourseManagerMarkingPeriodInfo = ({ period, roster }) => {
	const { loading, error, data } = useQuery(GET_COURSE_INFO, {
		variables: { _id: CURRENT_MARKING_PERIOD_ID }
	})
	if (loading) return <div>Bringing the Information</div>
	if (error) console.error(error)

	return (
		<CourseManagerClassPeriodData
			period={period}
			roster={roster}
			markingPeriods={data.MarkingPeriodEnum.enumValues.map(value => value.name)}
			currentMarkingPeriod={data.findCurrentMarkingPeriod.markingPeriod}
			assignmentTypes={data.AssignmentType.enumValues.map(value => value.name)}
		/>
	)
}

const CourseManagerClassPeriodData = ({
	period,
	roster,
	markingPeriods,
	currentMarkingPeriod,
	assignmentTypes
}) => {
	const [courseManagerSelectorMenu, setCourseManagerSelectorMenu] = useState('roster')
	const { data, loading, error } = useQuery(GET_ALL_CLASS_PERIODS_FOR_COURSE_MANAGER, {
		variables: { period: period }
	})
	if (loading) return <div>Bringing the Information</div>
	if (error) console.error(error)

	return (
		<div style={{ color: 'var(--blue)', overflow: 'scroll', height: '100vh' }}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 2fr',
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					height: '7vh',
					borderLeft: '3px solid var(--white)'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						fontSize: '150%',
						marginLeft: '2%',
						overflow: 'scroll'
					}}>
					{courseManagerSelectorMenu === 'downloads' && <div>Download Manager</div>}
					{courseManagerSelectorMenu === 'roster' && <div>Roster Manager</div>}
					{courseManagerSelectorMenu === '' && <div>Course Manager</div>}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						fontSize: '150%'
					}}>
					<div style={{ marginRight: '2%' }} onClick={() => setCourseManagerSelectorMenu('roster')}>
						Class Roster
					</div>
					<div
						style={{ marginRight: '2%' }}
						onClick={() => setCourseManagerSelectorMenu('downloads')}>
						Downloads
					</div>
				</div>
			</div>

			<div style={{ textAlign: 'center', fontSize: '250%', marginTop: '2%', marginBottom: '2%' }}>
				Period {period.substring(0, 1)} {period.substring(2, 3)}-{period.substring(3, 4)}
			</div>
			{courseManagerSelectorMenu === 'downloads' && (
				<DownloadsDisplay
					classPeriods={data.findClassPeriodsForCourse}
					roster={roster}
					markingPeriods={markingPeriods}
					currentMarkingPeriod={currentMarkingPeriod}
				/>
			)}
			{courseManagerSelectorMenu === 'roster' && <RosterManager roster={roster} />}
		</div>
	)
}
export default CourseManager
