import React, { useState } from 'react'

const OEQCommentSelector = ({ commentCategories, setCommentCategories }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-evenly',
				marginBottom: '2%',
				marginTop: '2%'
			}}>
			<div
				onMouseOver={event => (event.target.style.color = 'var(--white)')}
				onMouseOut={event => (event.target.style.color = 'var(--blue)')}
				style={{ cursor: 'pointer' }}
				onClick={() => setCommentCategories('organizerCommentList')}>
				Organizer
			</div>
			{/* <div
				onMouseOver={event => (event.target.style.color = 'var(--white)')}
				onMouseOut={event => (event.target.style.color = 'var(--blue)')}
				style={{ cursor: 'pointer' }}
				onClick={() => setCommentCategories('generalCommentList')}>
				Overall
			</div> */}
			<div
				onMouseOver={event => (event.target.style.color = 'var(--white)')}
				onMouseOut={event => (event.target.style.color = 'var(--blue)')}
				style={{ cursor: 'pointer' }}
				onClick={() => setCommentCategories('topicSentenceCommentList')}>
				Topic Sentence
			</div>
			<div
				onMouseOver={event => (event.target.style.color = 'var(--white)')}
				onMouseOut={event => (event.target.style.color = 'var(--blue)')}
				style={{ cursor: 'pointer' }}
				onClick={() => setCommentCategories('answerCommentList')}>
				Answer
			</div>
			<div
				onMouseOver={event => (event.target.style.color = 'var(--white)')}
				onMouseOut={event => (event.target.style.color = 'var(--blue)')}
				style={{ cursor: 'pointer' }}
				onClick={() => setCommentCategories('conclusionCommentList')}>
				Conclusion
			</div>
		</div>
	)
}

export default OEQCommentSelector
