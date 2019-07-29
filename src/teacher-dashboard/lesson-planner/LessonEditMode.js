import React from 'react'
import { LessonCreatorForm } from './LessonCreator'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const EDIT_MODE_TOGGLE = gql`
	query editModeToggle {
		isEditLessonMode @client
	}
`

const LessonEditMode = ({ lesson }) => {
	const client = useApolloClient()

	const { data, loading } = useQuery(EDIT_MODE_TOGGLE)
	if (loading) return <h2>Loading</h2>
	const { isEditLessonMode } = data
	return (
		<div>
			<LessonCreatorForm lesson={lesson} isEditLessonMode={isEditLessonMode} />
		</div>
	)
}

export default LessonEditMode
