import React, { useState } from 'react'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const ADD_TEST = gql`
	mutation addTest($input: AddTestInput) {
		addTest(input: $input) {
			classPeriod {
				assignedDate
			}
			students {
				period
			}
		}
	}
`

const AddTestManager = ({
	period,
	date,
	markingPeriodList,
	markingPeriod,
	readingPages,
	readingSections
}) => {
	const [addTestToggle, setAddTestToggle] = useState(false)
	const [createTestToggle, setCreateTestToggle] = useState(false)
	const [markingPeriodToggle, setMarkingPeriodToggle] = useState(false)
	const [newTestValues, setNewTestValues] = useState({
		period: period,
		assignedDate: date,
		dueDate: '',
		markingPeriod: markingPeriod,
		readingPages: readingPages,
		readingSections: readingSections,
		maxScore: 3
	})

	const [addTest, { data }] = useMutation(ADD_TEST, {
		onCompleted: data => console.log(data),
		refetchQueries: ['findClassPeriodForClassManagerDisplay']
	})
	return (
		<div style={{ height: '20%' }}>
			{!addTestToggle ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '130%'
					}}>
					<div style={{ cursor: 'pointer' }} onClick={() => setAddTestToggle(true)}>
						Add Test
					</div>
				</div>
			) : (
				<div>
					<div style={{ textAlign: 'center', marginTop: '2%' }}>Update Test</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div>{newTestValues.readingSections}</div>
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div style={{ marginRight: '1%' }}>DueDate: </div>
						<input
							type='date'
							value={newTestValues.dueDate}
							onChange={e => setNewTestValues({ ...newTestValues, dueDate: e.target.value })}
						/>
					</div>
					<div style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
						<div style={{ marginRight: '1%' }}>MarkingPeriod: </div>
						{!markingPeriodToggle ? (
							<div onClick={() => setMarkingPeriodToggle(!markingPeriodToggle)}>
								{markingPeriod}
							</div>
						) : (
							<select
								style={{ width: '10rem', fontSize: '90%', color: 'var(--blue)' }}
								onChange={e =>
									setNewTestValues({ ...newTestValues, markingPeriod: e.target.value })
								}
								value={markingPeriod}>
								{markingPeriodList.map(mp => (
									<option key={mp} value={mp}>
										{mp}
									</option>
								))}
							</select>
						)}
					</div>

					{!createTestToggle ? (
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
							onClick={() => setCreateTestToggle(!createTestToggle)}>
							Create Test
						</button>
					) : (
						<StudentInfoMutatorButton
							mutation={addTest}
							variables={{
								period: period,
								assignedDate: newTestValues.assignedDate,
								dueDate: newTestValues.dueDate,
								markingPeriod: newTestValues.markingPeriod,
								readingPages: newTestValues.readingPages,
								readingSections: newTestValues.readingSections,
								maxScore: newTestValues.maxScore
							}}
							buttonColor={'red'}
							buttonDisplay={'Execute'}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default AddTestManager
