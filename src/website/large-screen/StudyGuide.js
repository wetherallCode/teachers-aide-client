import React from 'react'

const StudyGuide = ({ lesson }) => {
	return (
		<div
			style={{
				color: 'var(--blue)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				marginTop: '5%',
				alignItems: 'center',
				height: '90vh',
				overflow: 'scroll'
			}}>
			<h1
				style={{
					textDecoration: 'underline',
					fontSize: '300%'
				}}>
				Study Guide
			</h1>
			<div
				style={{
					fontSize: '250%',

					marginLeft: '2%'
				}}>
				{lesson.studyGuideQuestions.map((question, i) => {
					return (
						<div key={i} style={{ fontSize: '80%', marginTop: '2%' }}>
							{i + 1}. {question}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default StudyGuide
