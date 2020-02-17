import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const CREATE_UNIT = gql`
	mutation CreateUnit($input: UnitInput) {
		createUnit(input: $input) {
			_id
			name
			gradeLevel
		}
	}
`

const UnitCreater = ({ grade, newUnitName, setNewUnitName }) => {
	const [createUnit] = useMutation(CREATE_UNIT, {
		refetchQueries: ['findUnitsByGradeForUnitLoader']
	})

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: '120%'
			}}>
			<input
				type='text'
				style={{
					height: '1.5rem',
					backgroundColor: 'transparent',
					color: 'var(--blue)',
					fontSize: '120%'
				}}
				placeholder='Unit Name'
				onChange={e => setNewUnitName(e.target.value)}
			/>
			<button
				style={{
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					fontSize: '100%',
					height: '2rem'
				}}
				onClick={() => {
					createUnit({ variables: { input: { gradeLevel: grade, name: newUnitName } } })
				}}>
				Add Unit
			</button>
		</div>
	)
}

export default UnitCreater
