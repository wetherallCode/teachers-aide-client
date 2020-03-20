import React from 'react'

const EssentialQuestion = ({ lesson }) => {
	return (
		<div
			style={{
				color: 'var(--blue)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				marginTop: '5%',
				alignItems: 'center',
				overflow: 'auto'
			}}>
			<h1
				style={{
					textDecoration: 'underline',
					fontSize: '300%'
				}}>
				Essential Question
			</h1>
			<div
				style={{
					textAlign: 'center',
					fontSize: '250%',
					marginTop: '2%',
					marginBottom: '25%'
				}}>
				{lesson.essentialQuestion.question}
			</div>
		</div>
	)
}

export default EssentialQuestion
