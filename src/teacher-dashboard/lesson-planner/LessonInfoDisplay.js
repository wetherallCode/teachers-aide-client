import React from 'react'

const LessonInfoDisplay = ({ lesson }) => {
	const {
		lessonName,
		essentialQuestion,
		readings,
		vocabWords,
		warmup,
		socraticQuestions,
		workDue,
	} = lesson
	return (
		<div
			style={{
				backgroundColor: 'var(--white)',
				overflow: 'scroll',
				color: 'var(--blue)',
			}}>
			<h1 style={{ textAlign: 'center' }}>{lessonName}</h1>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 3fr',
					gridTemplateRows: 'repeat(1fr 6)',
					gridGap: '3px',
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
				}}>
				<div>
					<h2>Essential Question: </h2>
					<h3>{essentialQuestion.question}</h3>
				</div>
				<div>
					<h2>Readings: </h2>
					<h2>Page {readings.pages + ': ' + readings.sections}</h2>
				</div>
				<div>
					<div>
						<h2>Vocabulary</h2>
					</div>
					<div>
						<ol>
							{vocabWords.map((word, i) => {
								return <li key={i}>{word.word + ' - ' + word.definition}</li>
							})}
						</ol>
					</div>
				</div>
				<div>
					<h2>Warm Up Activity: </h2>
					<h4>{warmup}</h4>
				</div>
				<div>
					<h2>Socratic Questions</h2>
					<ol>
						{socraticQuestions.map((question, i) => {
							return <li key={i}>{question.question}</li>
						})}
					</ol>
				</div>
				<div>
					<h2>Assignment Due Dates</h2>
					<ol>
						{workDue.map((assignment, i) => {
							return <li key={i}>{assignment.name + ' is due on: ' + assignment.dueDate}</li>
						})}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default LessonInfoDisplay
