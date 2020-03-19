import React from 'react'

const SmallWebsiteOldLessonsDisplay = ({ lesson }) => {
	console.log(lesson.assignedHomework)
	const [oeq] = lesson.assignedHomework.filter(assignment => assignment.assignmentType === 'OEQ')
	const [thinkingGuide] = lesson.assignedHomework.filter(
		assignment => assignment.assignmentType === 'THINKING_GUIDE'
	)
	console.log(oeq)
	return (
		<div style={{ height: '70vh', overflow: 'scroll' }}>
			<div>
				<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
					Essential Question
				</div>
				<div style={{ margin: '2%' }}>{lesson.assignedLesson.essentialQuestion.question}</div>

				<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
					Readings
				</div>
				<div style={{ margin: '2%' }}>
					{lesson.assignedLesson.readings.pages}: {lesson.assignedLesson.readings.sections}
				</div>

				<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
					Assignments Due
				</div>
				<div>
					<ul>
						<li>
							Read {oeq.readingPages}: {oeq.readingSections} and complete the following Open Ended
							Question:
							<ul>
								<li>{lesson.assignedLesson.essentialQuestion.question}</li>
							</ul>
						</li>
						<li>
							{thinkingGuide.readingPages}: {thinkingGuide.readingSections}
						</li>
					</ul>
				</div>
				<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
					Study Guide Questions
				</div>
				<ol>
					{lesson.assignedLesson.studyGuideQuestions.map((question, i) => (
						<li key={i}>{question}</li>
					))}
				</ol>
				<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
					Vocabulary
				</div>
				<div style={{ margin: '2%' }}>
					{lesson.assignedLesson.vocabWords.map((word, i) => (
						<div key={i}>
							{word.word}: {word.definition}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default SmallWebsiteOldLessonsDisplay
