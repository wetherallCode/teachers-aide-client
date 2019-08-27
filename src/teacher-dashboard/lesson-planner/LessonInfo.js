import React from 'react'

const LessonInfoDisplay = ({ lesson }) => {
	const {
		lessonName,
		essentialQuestion,
		readings,
		vocabWords,
		warmup,
		socraticQuestions,
		workDue
	} = lesson
	return (
		<div
			style={{
				backgroundColor: 'var(--white)',
				overflow: 'scroll',
				color: 'var(--blue)'
			}}>
			<div style={{ textAlign: 'center', fontSize: '250%', textDecoration: 'underline' }}>
				{lessonName}
			</div>
			<div
				style={{
					display: 'flex',
					// gridTemplateColumns: '1fr 3fr',
					// gridTemplateRows: 'repeat(1fr 6)',
					// gridGap: '3px',
					flexDirection: 'column',
					backgroundColor: 'var(--white)',
					color: 'var(--blue)'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ fontSize: '150%' }}>Essential Question: </div>
					<div style={{ fontSize: '150%' }}>{essentialQuestion.question}</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ fontSize: '150%' }}>Readings: </div>
					<div style={{ fontSize: '150%' }}>Page {readings.pages + ': ' + readings.sections}</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div>
						<div style={{ fontSize: '150%' }}>Vocabulary</div>
					</div>
					<div>
						<ul>
							{vocabWords.map((word, i) => {
								return (
									<li key={i} style={{ fontSize: '150%' }}>
										{word.word + ' - ' + word.definition}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ fontSize: '150%' }}>Warm Up Activity: </div>
					<div style={{ fontSize: '150%' }}>{warmup}</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ fontSize: '150%' }}>Socratic Questions</div>
					<ol>
						{socraticQuestions.map((question, i) => {
							return (
								<li key={i} style={{ fontSize: '150%' }}>
									{question.question}
								</li>
							)
						})}
					</ol>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ fontSize: '150%' }}>Assignment Due Dates</div>
					<ol>
						{workDue.map((assignment, i) => {
							return <li key={i}>{assignment.type + ' is due on: ' + assignment.dueDate}</li>
						})}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default LessonInfoDisplay
