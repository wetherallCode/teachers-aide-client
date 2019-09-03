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

const CreateUnit = ({ grade }) => {
	const [createUnit] = useMutation(CREATE_UNIT, { refetchQueries: ['findUnitsByGrade'] })
	const [unitName, setUnitName] = useState('')

	return (
		<div>
			<input
				type='text'
				placeholder='Unit Name'
				value={unitName}
				onChange={e => setUnitName(e.target.value)}
			/>
			<button
				onClick={() => {
					createUnit({ variables: { input: { gradeLevel: grade, name: unitName } } })
				}}>
				Add Unit
			</button>
		</div>
	)
}

export default CreateUnit
