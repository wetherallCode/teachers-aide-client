import React from 'react'
import {
	topicSentenceCommentList,
	conclusionCommentList,
	organizerCommentList
} from './OEQCommentList'

const OEQCompletedDisplay = ({ assignment }) => {
	const topicSentenceComments = assignment.comments.filter(comment =>
		comment.includes(...topicSentenceCommentList)
	)
	const conclusionComments = assignment.comments.filter(comment =>
		comment.includes(...conclusionCommentList)
	)
	const organizerComments = assignment.comments.filter(comment =>
		comment.includes(...organizerCommentList)
	)

	const answerComments = assignment.comments.filter(
		comment =>
			!comment.includes(...organizerCommentList) &&
			!comment.includes(...conclusionCommentList) &&
			!comment.includes(...topicSentenceCommentList)
	)
	return (
		<div style={{ fontSize: '120%', display: 'grid', gridTemplateRows: '1fr 3fr' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '150%'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
						// marginBottom: '5%'
					}}>
					<div>Score: </div>
					<div>
						{assignment.score}/{assignment.maxScore}
					</div>
				</div>
			</div>

			<div style={{ marginLeft: '5%' }}>
				<div>
					<div>
						<div>
							<div>Organizer Comments</div>
							<ul>
								{organizerComments.map((comment, i) => (
									<li key={i}>{comment}</li>
								))}
							</ul>
						</div>
						<div>Topic Sentence Comments</div>
						<ul>
							{topicSentenceComments.map((comment, i) => (
								<li key={i}>{comment}</li>
							))}
						</ul>
					</div>
					<div>
						<div>Answer Comments</div>
						<ul>
							{answerComments.map((comment, i) => (
								<li key={i}>{comment}</li>
							))}
						</ul>
					</div>
					<div>
						<div>Conclusion Comments</div>
						<ul>
							{conclusionComments.map((comment, i) => (
								<li key={i}>{comment}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OEQCompletedDisplay
