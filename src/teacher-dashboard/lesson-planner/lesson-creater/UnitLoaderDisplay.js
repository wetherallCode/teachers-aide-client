import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import UnitCreater from './UnitCreater'

const FIND_UNIT_BY_GRADE = gql`
	query findUnitsByGradeForUnitLoader($gradeLevel: GradeLevelEnum) {
		findUnitsByGrade(gradeLevel: $gradeLevel) {
			_id
			name
		}
	}
`

const UnitLoaderDisplay = ({ selectedGrade, setUnitName, setGradeLessonSelector }) => {
	const [newUnitName, setNewUnitName] = useState('')
	const { loading, data, error } = useQuery(FIND_UNIT_BY_GRADE, {
		variables: { gradeLevel: selectedGrade }
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)

	return (
		<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', height: '100%' }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '120%'
				}}>
				<div style={{ fontSize: '110%', marginRight: '3%' }}>Select Unit</div>
				<select
					style={{
						height: '1.7rem',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '100%'
					}}
					onChange={e => setUnitName(e.target.value)}>
					{data.findUnitsByGrade.map((unit, i) => (
						<option key={i}>{unit.name}</option>
					))}
				</select>
			</div>
			<UnitCreater
				grade={selectedGrade}
				newUnitName={newUnitName}
				setNewUnitName={setNewUnitName}></UnitCreater>
		</div>
	)
}

export default UnitLoaderDisplay
