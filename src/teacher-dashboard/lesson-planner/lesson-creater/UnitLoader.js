import React, { useState } from 'react'
import GradeSelector from './GradeSelector'
import UnitLoaderDisplay from './UnitLoaderDisplay'

const UnitLoader = ({ grade, unitName, setUnitName }) => {
	const [selectedGrade, setSelectedGrade] = useState(grade[0])
	const [gradeLessonSelector, setGradeLessonSelector] = useState(true)
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr  1fr ',
				height: '8rem',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr  5fr ' }}>
				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '100%' }}
					onClick={() => setGradeLessonSelector(!gradeLessonSelector)}>
					{gradeLessonSelector ? 'Select Grade' : 'Select Unit'}
				</button>
				{!gradeLessonSelector && (
					<GradeSelector grade={grade} unitName={unitName} setUnitName={setUnitName} />
				)}
				{gradeLessonSelector && (
					<UnitLoaderDisplay
						selectedGrade={selectedGrade}
						setUnitName={setUnitName}
						setGradeLessonSelector={setGradeLessonSelector}
					/>
				)}
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '160%'
				}}>
				In Unit: {unitName}
			</div>
		</div>
	)
}

export default UnitLoader
