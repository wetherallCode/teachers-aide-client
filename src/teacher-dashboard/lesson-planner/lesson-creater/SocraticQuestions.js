import React, { useState } from 'react'

const SocraticQuestions = ({
	socraticQuestionsList,
	setSocraticQuestionsList,
	socraticQuestionsTypeEnum
}) => {
	const [socraticQuestion, setSocraticQuestion] = useState({
		type: socraticQuestionsTypeEnum[0],
		question: ''
	})
	return (
		<>
			<div>Socratic Questions</div>
			<div>Socratic Question Type:</div>
			<select>
				{socraticQuestionsTypeEnum.map(type => (
					<option
						key={type}
						onChange={e => setSocraticQuestion({ ...socraticQuestion, type: e.target.value })}>
						{type}
					</option>
				))}
			</select>
			<div>Question:</div>
			<input
				type='text'
				onChange={e => setSocraticQuestion({ ...socraticQuestion, question: e.target.value })}
			/>
			<button onClick={() => setSocraticQuestionsList(list => [...list, socraticQuestion])}>
				Add Socratic Question
			</button>
		</>
	)
}

export default SocraticQuestions
