import React, { useState, useEffect } from 'react'

const TestGridRow = ({
	student,
	period,
	dueDate,
	test,
	setTestDate,
	testList,
	setTestList,
	listSetter,
	setListSetter,
	undoGradedTest
}) => {
	const [missing, setMissing] = useState(true)
	const [studentInfo] = student.hasTests.filter(test => test.dueDate === dueDate)
	const [earnedPoints] = student.hasTests
		.filter(test => test.dueDate === dueDate)
		.map(test => test.earnedPoints)

	const [testValues, setTestValues] = useState({
		_id: student._id,
		dueDate: dueDate,
		period: period,
		missing: true,
		exempt: false,
		score: 0,
		earnedPoints: 0,
		studyTime: 0
	})

	useEffect(() => {
		if (listSetter && studentInfo.missing) {
			setTestList(list => [...list, testValues])
		}
	}, [listSetter])

	return (
		<div
			style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', alignItems: 'center' }}>
			<div>{student.firstName}</div>
			<div>{student.lastName}</div>
			<div>
				{studentInfo.missing ? (
					<input
						type='text'
						style={{
							width: '6rem',
							height: '1rem',
							marginLeft: '22%',
							backgroundColor: 'transparent',
							color: 'var(--blue)'
						}}
						placeholder='Grade'
						onChange={e => {
							setTestValues({
								...testValues,
								score: parseInt(e.target.value, 10),
								earnedPoints: parseInt(e.target.value, 10),
								missing: false
							})
						}}
					/>
				) : (
					<div style={{ textAlign: 'right' }}>{studentInfo.score}</div>
				)}
			</div>
			<div>
				{studentInfo.missing ? (
					<input
						style={{
							width: '6rem',
							height: '1rem',
							marginLeft: '22%',
							backgroundColor: 'transparent',
							color: 'var(--blue)'
						}}
						type='text'
						placeholder='Study Time'
						onChange={e =>
							setTestValues({ ...testValues, studyTime: parseInt(e.target.value, 10) })
						}
					/>
				) : studentInfo.studyTime > 0 ? (
					<div style={{ textAlign: 'right' }}>{studentInfo.studyTime} minutes</div>
				) : (
					<div style={{ textAlign: 'right' }}>Didn't Study</div>
				)}
			</div>
			{studentInfo.missing ? (
				<button
					style={
						testValues.missing
							? {
									backgroundColor: 'var(--red)',
									color: 'var(--white)',
									borderRadius: '5px',
									width: '6rem',
									height: '1.5rem',
									marginLeft: '22%'
							  }
							: {
									backgroundColor: 'var(--blue)',
									color: 'var(--white)',
									borderRadius: '5px',
									width: '6rem',
									height: '1.5rem',
									marginLeft: '22%'
							  }
					}
					onClick={() =>
						setTestValues({ ...testValues, score: 0, earnedPoints: 0, studyTime: 0, missing: true })
					}>
					{testValues.missing || studentInfo.missing ? <div>Missing</div> : <div>Reset</div>}
				</button>
			) : (
				<button
					style={{
						backgroundColor: 'var(--grey)',
						color: 'var(--blue)',
						borderRadius: '5px',
						width: '6rem',
						height: '1.5rem',
						marginLeft: '22%'
					}}
					onClick={() =>
						undoGradedTest({
							variables: {
								input: { _id: student._id, dueDate: dueDate, earnedPoints: earnedPoints }
							}
						})
					}>
					Undo
				</button>
			)}
		</div>
	)
}

export default TestGridRow
