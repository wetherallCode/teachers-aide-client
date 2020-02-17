import React, { useState, useEffect } from 'react'
import { sortByLastName } from '../../roster-components/StudentListInRosterView'
import TestGridRow from './TestGridRow'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const GRADE_TESTS = gql`
	mutation gradeTests($input: MultipleTestScoringInput) {
		scoreMultipleTests(input: $input) {
			students {
				firstName
				hasTests {
					dueDate
					score
				}
			}
			classPeriod {
				assignedTest {
					dueDate
					scored
				}
			}
		}
	}
`

export const UNDO_GRADED_TEST = gql`
	mutation undoGradedTest($input: UndoScoreTestInput) {
		undoScoreTest(input: $input) {
			student {
				firstName
				learningStyle
				hasTests {
					score
					dueDate
					missing
				}
			}
		}
	}
`

const TestGrid = ({ classRoster, dueDate, periodName, test }) => {
	const [testList, setTestList] = useState([])
	const [listSetter, setListSetter] = useState(false)

	const [gradeTests, { data }] = useMutation(GRADE_TESTS, {
		refetchQueries: ['classListForTestGrading'],
		onComplete: data => console.log(data)
	})
	const [undoGradedTest] = useMutation(UNDO_GRADED_TEST, {
		refetchQueries: ['classListForTestGrading']
	})
	return (
		<div
			style={{
				backgroundColor: 'var(--white)',
				color: 'var(--blue)',
				height: '75vh',

				display: 'grid',
				gridTemplateRows: '1fr 11fr 1fr'
			}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
					borderBottom: '3px solid var(--blue)'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingLeft: '2%',
						paddingRight: '2%'
					}}>
					<div>First Name</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingLeft: '2%',
						paddingRight: '2%'
					}}>
					<div>Last Name</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingLeft: '2%',
						marginLeft: '29%'
					}}>
					<div>Score</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						marginLeft: '15%',
						paddingRight: '10%'
					}}>
					<div>Study Time</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						// paddingLeft: '2%',
						paddingRight: '15%'
					}}>
					<div>Status</div>
				</div>
			</div>
			<div style={{ overflow: 'scroll', paddingLeft: '2%', paddingRight: '2%' }}>
				{classRoster.sort(sortByLastName).map(student => (
					<TestGridRow
						key={student._id}
						dueDate={dueDate}
						student={student}
						period={periodName}
						test={test}
						testList={testList}
						setTestList={setTestList}
						listSetter={listSetter}
						setListSetter={setListSetter}
						undoGradedTest={undoGradedTest}
					/>
				))}
			</div>
			<div>
				{testList.length < 1 ? (
					<button
						style={{
							width: '100%',
							fontSize: '110%',
							height: '3rem',
							backgroundColor: 'var(--blue)',
							color: 'var(--white)'
						}}
						onClick={() => {
							console.log('set list')
							setListSetter(!listSetter)
						}}>
						Ready To Grade
					</button>
				) : (
					<div style={{ display: 'flex' }}>
						<button
							style={{
								width: '100%',
								fontSize: '110%',
								height: '3rem',
								backgroundColor: 'var(--red)',
								color: 'var(--white)'
							}}
							onClick={() => {
								setTestList([])
								setListSetter(false)
							}}>
							Reset
						</button>
						<button
							style={{
								width: '100%',
								fontSize: '110%',
								height: '3rem',
								backgroundColor: 'var(--blue)',
								color: 'var(--white)'
							}}
							onClick={() =>
								gradeTests({
									variables: {
										input: { period: periodName, scoredTests: testList, dueDate: dueDate }
									}
								})
							}>
							Grade
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default TestGrid
