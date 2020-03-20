import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CLASS_ROSTER } from '../roster-components/rosterView'
import TestGrader from '../grade-book/test/TestGrader'
import { gql } from 'apollo-boost'

const GET_CLASS_PERIOD_FOR_TEST_MANAGER = gql`
	query getClassPeriodForTestManager($period: periodName, $dueDate: Date) {
		findClassPeriodByTestDueDate(period: $period, dueDate: $dueDate) {
			assignedTest {
				dueDate
				assignedDate
				markingPeriod
				maxScore
				readingPages
				readingSections
				scored
			}
		}
	}
`

const TestManager = ({ dueDate, period }) => {
	const { loading, data, error } = useQuery(GET_CLASS_PERIOD_FOR_TEST_MANAGER, {
		variables: { period: period, dueDate: dueDate },
		pollInterval: 10
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<>
			{data.findClassPeriodByTestDueDate !== null && (
				<TestGrader
					dueDate={dueDate}
					period={period}
					test={data.findClassPeriodByTestDueDate.assignedTest}
				/>
			)}
		</>
	)
}

export default TestManager
