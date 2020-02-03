import React from 'react'

const AssignedSeatsView = ({ classRoster }) => {
	return (
		<div
			style={{
				marginLeft: '5%',
				fontSize: '130%',
				color: 'var(--blue)',
				marginTop: '5%',
				marginRight: '5%',
				width: '50%',
				borderTop: '1px solid var(--blue)'
			}}>
			{classRoster.map((student, i) => (
				<div
					key={i}
					style={
						i % 2
							? {
									paddingRight: '10%',
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									borderBottom: '1px solid var(--blue)',
									borderRight: '1px solid var(--blue)',
									borderLeft: '1px solid var(--blue)'
							  }
							: {
									paddingRight: '10%',
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									backgroundColor: 'var(--grey)',
									borderBottom: '1px solid var(--blue)',
									borderRight: '1px solid var(--blue)',
									borderLeft: '1px solid var(--blue)'
							  }
					}>
					<div style={{}}>
						{student.lastName}, {student.firstName}
					</div>
					<div style={{ textAlign: 'right' }}>{student.desk}</div>
				</div>
			))}
		</div>
	)
}

export default AssignedSeatsView
