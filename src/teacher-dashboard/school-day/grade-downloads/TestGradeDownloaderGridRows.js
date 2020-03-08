import React, { useState, useEffect } from 'react'
import { testTotalScoredPoints, testTotalMaxScorePoints } from '../../../utils'

const TestGradeDownloaderGridRows = ({
	student,
	setRosterList,
	index,
	csvToggle,
	markingPeriodSelector,
	setTestGradeTotalForDisplay
}) => {
	const todaysDate = new Date().toISOString().substring(0, 10)
	const markingPeriod = markingPeriodSelector
	const testGradeTotal = testTotalScoredPoints({ student, markingPeriod })
	const testGradeMaxTotal = testTotalMaxScorePoints({ student, markingPeriod, todaysDate })
	const [studentTestGrade, setStudentTestGrade] = useState({
		NAME: student.lastName + ', ' + student.firstName,
		STUDENTID: student.schoolID,
		GRADE: testGradeTotal,
		ABSENT: '',
		EXEMPT: '',
		INCOMPLETE: '',
		MISSING: ''
	})
	useEffect(() => {
		setTestGradeTotalForDisplay(testGradeMaxTotal)
	}, [])
	useEffect(() => {
		if (csvToggle) {
			if (student.schoolID !== null) {
				setRosterList(list => [...list, studentTestGrade])
			}
		}
	}, [csvToggle])

	return (
		<div
			style={
				index % 2
					? {
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr'
					  }
					: {
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr',
							backgroundColor: 'var(--grey)'
					  }
			}>
			<div>{student.lastName}</div>
			<div>{student.firstName}</div>
			<div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					{testGradeTotal}/{testGradeMaxTotal}
				</div>
			</div>
		</div>
	)
}

export default TestGradeDownloaderGridRows
