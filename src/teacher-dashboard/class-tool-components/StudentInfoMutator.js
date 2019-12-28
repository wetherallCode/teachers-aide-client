import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { FIND_STUDENT_QUERY } from './StudentInfo'
import BehaviorPointsMutator from './BehviorPointsMutator'

// const UPDATE_RESPONSIBILITY_POINTS = gql`
// 	mutation updateResponsibilityPoints($_id: ID!, $responsibilityPoints: Int!) {
// 		updateResponsibilityPoints(_id: $_id, responsibilityPoints: $responsibilityPoints) {
// 			_id
// 			responsibilityPoints
// 		}
// 	}
// `

const StudentInfoMutator = ({ match, periodName, student }) => {
	return <BehaviorPointsMutator match={match} periodName={periodName} student={student} />
}

export default StudentInfoMutator
