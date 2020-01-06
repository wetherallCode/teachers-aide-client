import React, { useState } from 'react'

const StudyGuideQuestions = ({ studyGuideQuestionList, setStudyGuideQuestionList }) => {
	const [studyGuideQuestion, setStudyGuideQuestion] = useState('')
	return (
		<>
			<div>StudyGuide</div>
			<input type='text' placeholder='' onChange={e => setStudyGuideQuestion(e.target.value)} />
			<button
				onClick={() =>
					setStudyGuideQuestionList(list => [...studyGuideQuestionList, studyGuideQuestion])
				}>
				Add Study Guide Question
			</button>
		</>
	)
}

export default StudyGuideQuestions
