import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import AssignmentGraderDisplayInfo from './AssignmentGraderDisplayInfo'
import { sortByLastName } from '../roster-components/StudentListInRosterView'
import { Link } from 'react-router-dom'
import GradeReport from './GradeReport'

const ASSIGNMENT_TYPE = gql`
	query selectAssingmentType {
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
	}
`
const AssignmentGrader = ({ classRoster, periodName }) => {
	const [studentID, setStudentID] = useState('')
	const [gradeReportRundownToggle, setGradeReportRundownToggle] = useState(false)
	const todaysDate = new Date().toISOString().substring(0, 10)

	const { data, loading, error } = useQuery(ASSIGNMENT_TYPE)
	if (loading) return null
	if (error) console.error(error)

	const student = classRoster.find(student => student._id === studentID)

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 7fr',
				color: 'var(--blue)',
				overflow: 'scroll'
			}}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
					<div>Student: </div>
					<select
						style={{
							height: '1.5rem',
							width: '100%',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '100%'
						}}
						onChange={e => setStudentID(e.target.value)}>
						<option>Pick Student</option>
						{classRoster.sort(sortByLastName).map(student => (
							<option key={student._id} value={student._id}>
								{student.lastName + ', ' + student.firstName}
							</option>
						))}
					</select>
				</div>
				{student !== undefined && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textDecoration: 'underline'
						}}>
						<div
							onClick={() => setGradeReportRundownToggle(!gradeReportRundownToggle)}
							style={{ fontSize: '200%', color: 'var(--blue)' }}>
							{student.firstName + ' ' + student.lastName}
						</div>
					</div>
				)}
			</div>
			{!gradeReportRundownToggle ? (
				<>
					{student !== undefined && (
						<AssignmentGraderDisplayInfo
							assignmentType={data.AssignmentType.enumValues.map(value => value.name)}
							markingPeriodList={data.MarkingPeriodEnum.enumValues.map(value => value.name)}
							student={student}
							periodName={periodName}
						/>
					)}
				</>
			) : (
				<GradeReport student={student} period={periodName} todaysDate={todaysDate} />
			)}
		</div>
	)
}

export default AssignmentGrader
