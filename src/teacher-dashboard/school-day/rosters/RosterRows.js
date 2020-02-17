import React, { useState } from 'react'

const RosterRows = ({ student, index }) => {
	return (
		<div
			style={
				index % 2
					? {
							paddingLeft: '2%',
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
					  }
					: {
							backgroundColor: 'var(--grey)',
							paddingLeft: '2%',
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
					  }
			}>
			<div>{student.lastName}</div>
			<div>{student.firstName}</div>
			<div>{student.schoolID}</div>
			<div>{student.desk}</div>
			<div>{student.daysAbsent.length}</div>
		</div>
	)
}

export default RosterRows
