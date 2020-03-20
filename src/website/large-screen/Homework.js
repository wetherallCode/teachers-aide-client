import React from 'react'

const Homework = ({ homework, lesson }) => {
	const [openEnded] = homework.filter(x => x.assignmentType === 'OEQ')

	const [criticalThinking] = homework.filter(x => x.assignmentType === 'THINKING_GUIDE')

	return (
		<div
			style={{
				color: 'var(--blue)',
				display: 'grid',
				gridTemplateRows: '1fr 4fr'
			}}>
			<h1
				style={{
					textDecoration: 'underline',
					fontSize: '300%',
					textAlign: 'center'
				}}>
				Assignments Due
			</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start'
				}}>
				{openEnded && (
					<ul
						style={{
							fontSize: '170%',
							paddingLeft: '4%'
							// marginBottom: '20%'
						}}>
						<li>
							<div style={{ marginBottom: '1%' }}>
								Read pages {openEnded.readingPages}: {openEnded.readingSections} and answer the
								following Open Ended Question:
							</div>
							<ul>
								<li style={{ marginBottom: '1%' }}>{lesson.essentialQuestion.question}</li>
								<li>Due on: {openEnded.dueDate.substring(5)}</li>
							</ul>
						</li>
					</ul>
				)}
				{criticalThinking && (
					<ul
						style={{
							fontSize: '170%',
							paddingLeft: '4%'
							// marginBottom: '20%'
						}}>
						<li>
							<div style={{ marginBottom: '1%' }}>
								Read pages {criticalThinking.readingPages}: {criticalThinking.readingSections} and
								complete a Critical Thinking Guide.
							</div>
							<ul>
								<li>Due on: {criticalThinking.dueDate.substring(5)}</li>
							</ul>
						</li>
					</ul>
				)}
			</div>
		</div>
	)
}

export default Homework
