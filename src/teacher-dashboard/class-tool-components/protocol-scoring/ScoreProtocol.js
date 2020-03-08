import React, { useState } from 'react'
import SocraticQuestionScoring from './SocraticQuestionScoring'

const ScoreProtocol = ({ protocol, student }) => {
	const [activeProtocol] = protocol
	console.log(activeProtocol.__typename)

	return (
		<div style={{ color: 'var(--blue)', fontSize: '1.5rem' }}>
			<div>
				{activeProtocol.__typename === 'SocraticQuestionProtocol' && (
					<div style={{ marginTop: '2%' }}>Socratic Question</div>
				)}
			</div>
			{activeProtocol.__typename === 'SocraticQuestionProtocol' && (
				<SocraticQuestionScoring protocol={protocol} student={student} />
			)}
		</div>
	)
}

export default ScoreProtocol
