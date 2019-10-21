import React, { useState } from 'react'

const SocraticQuestionPicker = data => {
	const [questionPicker, setQuestionPicker] = useState(0)

	return (
		<>
			{data.data.findClassPeriod !== null ? (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						alignItems: 'center'
					}}>
					<button
						className='whiteButton'
						style={{ fontSize: '100%', textShadow: '3px 3px 3px var(--grey)' }}
						onClick={() => {
							return questionPicker && setQuestionPicker(questionPicker - 1)
						}}>
						{questionPicker !== 0 && 'Previous'}
					</button>

					<h3 style={{ color: 'var(--white)' }}>Questions</h3>

					<button
						className='whiteButton'
						style={{ fontSize: '100%', textShadow: '3px 3px 3px var(--grey)' }}
						onClick={() => {
							return (
								questionPicker <
									data.data.findClassPeriod.assignedLesson.socraticQuestions.length - 1 &&
								setQuestionPicker(questionPicker + 1)
							)
						}}>
						{questionPicker <
							data.data.findClassPeriod.assignedLesson.socraticQuestions.length - 1 && 'Next'}
					</button>
					<div
						style={{
							height: '40%',
							backgroundColor: 'var(--white)',
							width: '90%',
							fontSize: '120%',
							overflow: 'scroll',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<div style={{ color: 'var(--blue)' }}>
							{data.data.findClassPeriod.assignedLesson.socraticQuestions[questionPicker].question}
						</div>
					</div>
				</div>
			) : (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<div style={{ fontSize: '150%' }}>No Questions</div>
				</div>
			)}
		</>
	)
}

export default SocraticQuestionPicker
