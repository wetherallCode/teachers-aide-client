import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { MARK_STUDENT_ABSENT } from '../class-tool-components/StudentInfoDisplay'
import { UNDO_MARK_STUDENT_ABSENT } from '../class-tool-components/StudentInfoDisplay'

const DaysAbsent = ({ student, todaysDate }) => {
	const [absentDate, setAbsentDate] = useState(todaysDate)
	const [deleteDayToggle, setDeleteDayToggle] = useState(false)
	const [markStudentAbsent, { data }] = useMutation(MARK_STUDENT_ABSENT, {
		variables: { _id: student._id, date: absentDate },
		refetchQueries: ['getStudentInfo'],
		onCompleted: data => console.log(data)
	})
	const [undoMarkStudentAbsent] = useMutation(UNDO_MARK_STUDENT_ABSENT, {
		refetchQueries: ['getStudentInfo']
	})

	return (
		<div
			style={{
				color: 'var(--blue)',
				padding: '1%',
				border: '1px solid var(--blue)',
				width: '100%',
				backgroundColor: 'var(--grey)',
				display: 'grid',
				gridTemplateRows: '1fr 5fr 1fr'
			}}>
			<div style={{ fontSize: '200%', textDecoration: 'underline', textAlign: 'center' }}>
				Day's Absent
			</div>
			{student.daysAbsent !== null ? (
				<div>
					{student.daysAbsent.map((day, i) => (
						<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
							<div key={i} onClick={() => setDeleteDayToggle(!deleteDayToggle)}>
								{day}
							</div>
							{deleteDayToggle && (
								<div
									onClick={() => {
										undoMarkStudentAbsent({
											variables: { _id: student._id, date: day }
										})
										setDeleteDayToggle(!deleteDayToggle)
									}}>
									Delete Absence
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>No Absence</div>
			)}
			<div>
				<div>New Absence</div>
				<input type='date' onChange={e => setAbsentDate(e.target.value)} />
				<button onClick={() => markStudentAbsent()}>Create Absence</button>
			</div>
		</div>
	)
}

export default DaysAbsent
