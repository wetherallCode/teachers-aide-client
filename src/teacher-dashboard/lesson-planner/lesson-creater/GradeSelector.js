import React from 'react'

const GradeSelector = ({ selectedGrade, setSelectedGrade, grade }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '160%'
			}}>
			<div style={{ marginRight: '3%' }}>Grade Select</div>
			<select
				style={{
					height: '2.2rem',
					backgroundColor: 'transparent',
					color: 'var(--blue)',
					fontSize: '100%'
				}}
				onChange={e => setSelectedGrade(e.target.value.toUpperCase())}>
				{grade.map(grade => (
					<option key={grade} style={{ textAlignLast: 'center' }}>
						{grade.substring(0, 1).toUpperCase() + grade.substring(1).toLowerCase()}
					</option>
				))}
			</select>
		</div>
	)
}

export default GradeSelector
