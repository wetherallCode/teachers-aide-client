import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import AssignmentGrader from './AssignmentGrader'
import { useQuery } from '@apollo/react-hooks'

const CLASS_ROSTER_FOR_ASSIGNMENT_GRADER = gql`
	query classrosterForAssignmentGrader($period: periodName) {
		classRoster(period: $period) {
			_id
			firstName
			lastName
			responsibilityPoints
			period
			desk
			daysAbsent
			hasAssignments {
				assignedDate
				markingPeriod
				assignmentType
				readingPages
				readingSections
				score
				missing
				dueDate
				maxScore
				earnedPoints
				exempt
				comments
			}
			hasTests {
				dueDate
				readingSections
				missing
				maxScore
				score
				earnedPoints
				studyTime
				markingPeriod
			}
		}
	}
`
const AssingmentGraderInfo = ({ period }) => {
	const { loading, data, error } = useQuery(CLASS_ROSTER_FOR_ASSIGNMENT_GRADER, {
		variables: { period: period }
	})
	if (loading) return 'Fetching Students'
	if (error) console.error(error)

	return <AssignmentGrader classRoster={data.classRoster} periodName={period} />
}

export default AssingmentGraderInfo
