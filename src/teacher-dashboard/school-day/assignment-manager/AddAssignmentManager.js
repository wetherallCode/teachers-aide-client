import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import ParentContactAdder from './ParentContactAdder'
import ExtraCreditAdder from './ExtraCreditAdder'
import { useMutation } from '@apollo/react-hooks'

export const ADD_ASSIGNMENT = gql`
	mutation addAssignment($input: AddAssignmentInput) {
		addAssignment(input: $input) {
			classPeriod {
				assignedLesson {
					lessonName
				}
			}
			students {
				hasAssignments {
					assignedDate
					assignmentType
					dueDate
					readingSections
				}
			}
		}
	}
`

const AddAssignmentManager = ({ period, assignedDate, markingPeriod }) => {
	const [addAssignmentToggle, setAddAssignmentToggle] = useState(false)
	const [assignmentOptionMode, setAssignmentOptionMode] = useState('parent-contact')
	const [addAssignmentValues, setAddAssignmentValues] = useState({
		dueDate: '',
		readingPages: '',
		readingSections: '',
		assignmentType: '',
		maxScore: ''
	})
	console.log(
		period,
		assignedDate,
		addAssignmentValues.dueDate,
		markingPeriod,
		addAssignmentValues.readingPages,
		addAssignmentValues.readingSections,
		addAssignmentValues.assignmentType,
		addAssignmentValues.maxScore
	)
	const [addAssignment] = useMutation(ADD_ASSIGNMENT, {
		variables: {
			input: {
				period: period,
				assignedDate: assignedDate,
				dueDate: addAssignmentValues.dueDate,
				markingPeriod: markingPeriod,
				readingPages: addAssignmentValues.readingPages,
				readingSections: addAssignmentValues.readingSections,
				assignmentType: addAssignmentValues.assignmentType,
				maxScore: addAssignmentValues.maxScore
			}
		},
		onCompleted: () => setAddAssignmentToggle(false),
		refetchQueries: ['findClassPeriodForClassManagerDisplay', 'classrosterForAssignmentGrader']
	})

	return (
		<div>
			{!addAssignmentToggle ? (
				<div
					style={{
						height: '20vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '130%'
					}}>
					<div onClick={() => setAddAssignmentToggle(true)}>Add Assignment</div>
				</div>
			) : (
				<div
					style={{
						height: '20vh',
						display: 'grid',
						gridTemplateRows: '1fr 3fr 1fr',
						// justifyContent: 'center',
						// alignItems: 'center',
						fontSize: '130%'
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
							// alignItems: 'center',
						}}>
						<div style={{ marginRight: '1%', marginTop: '2%', marginbottom: '2%' }}>
							What kind of assignment?
						</div>
						<select
							onChange={e => setAssignmentOptionMode(e.target.value)}
							style={{ width: '10rem', fontSize: '90%', color: 'var(--blue)', marginTop: '2%' }}>
							<option value='parent-contact'>Parent Contact</option>
							<option value='extra-credit'>Extra Credit</option>
						</select>
					</div>
					<div
						style={
							assignmentOptionMode === 'parent-contact'
								? { height: '100%', marginTop: '3%' }
								: { height: '100%', marginTop: '1.5%' }
						}>
						{assignmentOptionMode === 'parent-contact' && (
							<ParentContactAdder
								period={period}
								assignedDate={assignedDate}
								addAssignmentValues={addAssignmentValues}
								setAddAssignmentValues={setAddAssignmentValues}
							/>
						)}
						{assignmentOptionMode === 'extra-credit' && (
							<ExtraCreditAdder
								period={period}
								assignedDate={assignedDate}
								addAssignmentValues={addAssignmentValues}
								setAddAssignmentValues={setAddAssignmentValues}
							/>
						)}
					</div>

					{!addAssignmentValues.dueDate ? (
						<button
							style={{
								fontSize: '100%',
								height: `2rem`,
								width: '100%',
								textDecoration: 'none',
								color: 'var(--white)',
								backgroundColor: `var(--blue)`,
								borderRadius: '5px',
								boxShadow: `1px 1px 2px 1px var(--blue)`
							}}
							onClick={() => setAddAssignmentToggle(false)}>
							Go back
						</button>
					) : (
						<button
							style={{
								fontSize: '100%',
								height: `2rem`,
								width: '100%',
								textDecoration: 'none',
								color: 'var(--white)',
								backgroundColor: `var(--blue)`,
								borderRadius: '5px',
								boxShadow: `1px 1px 2px 1px var(--blue)`
							}}
							onClick={() => addAssignment()}>
							Add Assignment
						</button>
					)}
				</div>
			)}
		</div>
	)
}

export default AddAssignmentManager
