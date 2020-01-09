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
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '100%' }}
					onClick={() =>
						setStudyGuideQuestionList(list => [...studyGuideQuestionList, studyGuideQuestion])
					}>
					Add Study Guide Question
				</button>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column'
					}}>
					<div
						style={{
							marginRight: '3%',
							fontSize: '160%',
							textAlign: 'center',
							marginBottom: '3%',
							marginTop: '2%'
						}}>
						StudyGuide
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '10%'
						}}>
						<div style={{ fontSize: '130%', marginRight: '2%' }}>Question: </div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								width: '25rem',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							placeholder=''
							onChange={e => setStudyGuideQuestion(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', marginLeft: '10%' }}>
				<ol>
					{studyGuideQuestionList.map((question, i) => (
						<li key={i}>{question}</li>
					))}
				</ol>
			</div>
		</div>
	)
}

export default StudyGuideQuestions
