import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CLASS_ROSTER } from '../../roster-components/rosterView'
import TestGrid from './TestGrid'
import { gql } from 'apollo-boost'
import MissingTestList from './MissingTestList'

const ROSTER_FOR_TEST_GRADING = gql`
	query classListForTestGrading($period: periodName) {
		classRoster(period: $period) {
			_id
			firstName
			lastName
			hasTests {
				maxScore
				dueDate
				markingPeriod
				readingSections
				score
				exempt
				missing
				studyTime
				earnedPoints
			}
		}
	}
`

const TestGrader = ({ dueDate, period, test }) => {
	const [missingTestsToggle, setMissingTestsToggle] = useState(false)
	const { loading, data, error } = useQuery(ROSTER_FOR_TEST_GRADING, {
		variables: { period: period }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<div style={{ margin: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					border: '3px solid var(--blue)',
					fontSize: '150%',
					display: 'grid'
				}}>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', height: '3rem' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginLeft: '2%'
						}}>
						<div onClick={() => setMissingTestsToggle(!missingTestsToggle)}>Test Manager</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							marginRight: '2%'
						}}>
						{missingTestsToggle ? <div>Missing Test List</div> : <div>{test.readingSections}</div>}
					</div>
				</div>
				{missingTestsToggle ? (
					<MissingTestList classRoster={data.classRoster} dueDate={dueDate} />
				) : (
					<TestGrid
						classRoster={data.classRoster}
						dueDate={dueDate}
						periodName={period}
						test={test}
					/>
				)}
			</div>
		</div>
	)
}

export default TestGrader
