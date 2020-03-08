import React, { useState, useEffect } from 'react'
import StudentInfoMutatorButton from '../StudentInfoMutatorButton'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import ThinkPairScore from './ThinkPairScore'
import ShareScore from './ShareScore'

const SocraticQuestionScoring = ({ student, protocol }) => {
	return (
		<div style={{ fontSize: '1rem' }}>
			<ThinkPairScore student={student} protocol={protocol} />
			<ShareScore student={student} protocol={protocol} />
		</div>
	)
}

export default SocraticQuestionScoring
