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
	console.log(socraticQuestion)
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr  1fr ',
				height: '30vh',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '100%' }}
					onClick={() => setSocraticQuestionsList(list => [...list, socraticQuestion])}>
					Add Question
				</button>
				<div>
					<div
						style={{
							marginRight: '3%',
							fontSize: '160%',
							textAlign: 'center',
							marginBottom: '3%',
							marginTop: '2%'
						}}>
						Socratic Questions
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '10%'
						}}>
						<div style={{ fontSize: '130%', marginRight: '2%' }}>Question Type:</div>
						<select
							style={{
								height: '2rem',
								width: '70%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e => setSocraticQuestion({ ...socraticQuestion, type: e.target.value })}>
							{socraticQuestionsTypeEnum.map(type => (
								<option key={type} value={type.type}>
									{type}
								</option>
							))}
						</select>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<div style={{ fontSize: '130%', marginRight: '2%' }}>Question:</div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								width: '100%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e => setSocraticQuestion({ ...socraticQuestion, question: e.target.value })}
						/>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', marginLeft: '10%' }}>
				<ol>
					{socraticQuestionsList.map((question, i) => (
						<li key={i}>{question.question}</li>
					))}
				</ol>
			</div>
		</div>
	)
}

export default SocraticQuestions
