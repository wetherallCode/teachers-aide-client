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
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr  1fr ',
				height: '30vh',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div>
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
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				{socraticQuestionsList.map(question => (
					<div>{question.question}</div>
				))}
			</div>
		</div>
	)
}

export default SocraticQuestions
