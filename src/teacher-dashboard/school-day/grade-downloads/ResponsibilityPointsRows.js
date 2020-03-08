import React, { useState, useEffect } from 'react'

const ResponsibilityPointsRows = ({ student, index, setRosterList, csvToggle }) => {
	const [studentResponsibilityPoints, setStudentResponsibilityPoints] = useState({
		NAME: student.lastName + ', ' + student.firstName,
		STUDENTID: student.schoolID,
		GRADE: student.responsibilityPoints,
		ABSENT: '',
		EXEMPT: '',
		INCOMPLETE: '',
		MISSING: ''
	})
	useEffect(() => {
		if (csvToggle) {
			if (student.schoolID !== null) {
				setRosterList(list => [...list, studentResponsibilityPoints])
			}
		}
	}, [csvToggle])
	return (
		<div
			style={
				index % 2
					? { display: 'grid', gridTemplateColumns: '1fr 1fr 4fr' }
					: { display: 'grid', gridTemplateColumns: '1fr 1fr 4fr', backgroundColor: 'var(--grey)' }
			}>
			<div>{student.lastName}</div>
			<div>{student.firstName}</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{student.schoolID ? (
					<div>{student.responsibilityPoints}</div>
				) : (
					<div>Student has no school ID!</div>
				)}
			</div>
		</div>
	)
}

export default ResponsibilityPointsRows
