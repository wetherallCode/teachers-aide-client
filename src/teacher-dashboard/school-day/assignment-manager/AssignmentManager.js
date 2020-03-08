import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation, useQuery } from '@apollo/react-hooks'
import AssignmentModifierDisplay from './AssignmentModifierDisplay'
import ClassManagerLinkDisplay from '../ClassManagerLinkDisplay'
import TestModifierDisplay from './TestModifierDisplay'
import AssignmentDeleteManager from './AssignmentDeleteManager'
import AddTestManager from './AddTestManager'
import { GET_CURRENT_MARKING_PERIOD } from '../ClassPeriodCreator'
import { CURRENT_MARKING_PERIOD_ID } from '../../../utils'
import AddAssignmentManager from './AddAssignmentManager'

export const UPDATE_ASSIGNMENT = gql`
	mutation updateAssignment($input: UpdateAssignmentInput) {
		updateAssignment(input: $input) {
			students {
				period
				firstName
				hasAssignments {
					dueDate
					maxScore
				}
				hasTests {
					dueDate
					markingPeriod
				}
			}
			classPeriod {
				assignedHomework {
					markingPeriod
					maxScore
				}
				assignedTest {
					dueDate
					markingPeriod
				}
			}
		}
	}
`

const AssignmentManager = ({ classPeriod, period, date, markingPeriodList }) => {
	const [updateCheckToggle, setUpdateCheckToggle] = useState(false)
	const [assignmentManagerDisplayToggle, setAssignmentManagerDisplayToggle] = useState(true)

	const [updateAssignment] = useMutation(UPDATE_ASSIGNMENT, {
		onCompleted: () => setUpdateCheckToggle(false),
		refetchQueries: [
			'findClassPeriodForClassManagerDisplay',
			'classListForTestGrading',
			'getClassPeriodForTestManager',
			'rosterList'
		]
	})
	const [modifyAndDeleteToggle, setModifyAndDeleteToggle] = useState(false)
	const { loading, error, data } = useQuery(GET_CURRENT_MARKING_PERIOD, {
		variables: { _id: CURRENT_MARKING_PERIOD_ID }
	})
	if (loading) return null
	if (error) console.error(error)

	const { markingPeriod } = data.findCurrentMarkingPeriod

	const [openEndedQuestion] = classPeriod.assignedHomework.filter(
		lesson => lesson.assignmentType === 'OEQ'
	)
	const [criticalThinking] = classPeriod.assignedHomework.filter(
		lesson => lesson.assignmentType === 'THINKING_GUIDE'
	)
	console.log(classPeriod.assignedHomework)
	return (
		<div style={{ margin: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '3rem',
					fontSize: '150%',
					display: 'grid',
					gridTemplateColumns: '1fr 2fr'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						marginLeft: '2%'
					}}>
					<div
						style={{ cursor: 'pointer' }}
						onClick={() => setAssignmentManagerDisplayToggle(!assignmentManagerDisplayToggle)}>
						Assignment Manager
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						marginLeft: '2%'
					}}>
					{assignmentManagerDisplayToggle && (
						<>
							<div
								style={{ marginRight: '2%', cursor: 'pointer' }}
								onMouseOver={e => (e.target.style.color = 'var(--grey)')}
								onMouseOut={e => (e.target.style.color = 'var(--white)')}
								onClick={() => setModifyAndDeleteToggle(false)}>
								Modify
							</div>
							<div
								style={{ marginRight: '2%', cursor: 'pointer' }}
								onMouseOver={e => (e.target.style.color = 'var(--grey)')}
								onMouseOut={e => (e.target.style.color = 'var(--white)')}
								onClick={() => setModifyAndDeleteToggle(true)}>
								Delete
							</div>
						</>
					)}
				</div>
			</div>
			<>
				{assignmentManagerDisplayToggle && (
					<>
						{!modifyAndDeleteToggle ? (
							<div
								style={{
									color: 'var(--blue)',
									borderLeft: '3px solid var(--blue)',
									borderRight: '3px solid var(--blue)',
									borderBottom: '3px solid var(--blue)',
									height: '45.5vh'
								}}>
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
									{openEndedQuestion ? (
										<AssignmentModifierDisplay
											assignment={openEndedQuestion}
											period={period}
											date={date}
											updateAssignment={updateAssignment}
											markingPeriodList={markingPeriodList}
										/>
									) : (
										<div>No Open Ended Question Assigned</div>
									)}
									{criticalThinking ? (
										<AssignmentModifierDisplay
											assignment={criticalThinking}
											period={period}
											date={date}
											updateAssignment={updateAssignment}
											markingPeriodList={markingPeriodList}
										/>
									) : (
										<div>No Critical Thinking Guide Assigned</div>
									)}
								</div>
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
									{classPeriod.assignedTest ? (
										<TestModifierDisplay
											period={period}
											date={date}
											assignedTest={classPeriod.assignedTest}
											updateAssignment={updateAssignment}
											markingPeriodList={markingPeriodList}
											updateCheckToggle={updateCheckToggle}
											setUpdateCheckToggle={setUpdateCheckToggle}
										/>
									) : (
										<AddTestManager
											period={period}
											date={date}
											markingPeriodList={markingPeriodList}
											markingPeriod={markingPeriod}
											readingPages={classPeriod.assignedLesson.readings.pages}
											readingSections={classPeriod.assignedLesson.readings.sections}
										/>
									)}
									<AddAssignmentManager
										period={period}
										assignedDate={date}
										markingPeriod={markingPeriod}
									/>
								</div>
							</div>
						) : (
							<AssignmentDeleteManager
								period={period}
								date={date}
								assignedTest={classPeriod.assignedTest}
								assignedHomework={classPeriod.assignedHomework}
							/>
						)}
					</>
				)}
			</>
		</div>
	)
}

export default AssignmentManager
