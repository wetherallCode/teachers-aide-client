import React, { useState } from 'react'

const StudyGuideQuestions = ({ studyGuideQuestionList, setStudyGuideQuestionList }) => {
	const [studyGuideQuestion, setStudyGuideQuestion] = useState('')
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr  1fr ',
				height: '30vh',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div>
				<div>StudyGuide</div>
				<input type='text' placeholder='' onChange={e => setStudyGuideQuestion(e.target.value)} />
				<button
					onClick={() =>
						setStudyGuideQuestionList(list => [...studyGuideQuestionList, studyGuideQuestion])
					}>
					Add Study Guide Question
				</button>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				{studyGuideQuestionList.map(question => (
					<div>{question}</div>
				))}
			</div>
		</div>
	)
}

export default StudyGuideQuestions
