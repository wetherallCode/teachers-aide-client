import React from 'react'
import {
	topicSentenceCommentList,
	answerCommentList,
	organizerCommentList,
	conclusionCommentList
} from './OEQCommentList'

const OEQGradeSubmitDisplayComments = ({
	commentList,
	paragraphScore,
	organizerScore,
	overallScore,
	assignment
}) => {
	const topicSentenceComments = commentList.filter(comment =>
		comment.includes(...topicSentenceCommentList)
	)
	const conclusionComments = commentList.filter(comment =>
		comment.includes(...conclusionCommentList)
	)
	const organizerComments = commentList.filter(comment => comment.includes(...organizerCommentList))

	const answerComments = commentList.filter(
		comment =>
			!comment.includes(...organizerCommentList) &&
			!comment.includes(...conclusionCommentList) &&
			!comment.includes(...topicSentenceCommentList)
	)

	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					fontSize: '150%',
					marginTop: '5%',
					marginBottom: '5%'
				}}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div>Organizer Score: </div>
					<div>{organizerScore}</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div>Paragraph Score: </div>
					<div>{paragraphScore}</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div>Overall Score: </div>
					<div>
						{overallScore}/ {assignment.maxScore ? assignment.maxScore : 5}
					</div>
				</div>
			</div>
			<div>
				<div style={{ textAlign: 'center', fontSize: '130%', textDecoration: 'underline' }}>
					Comments
				</div>
				<div style={{ marginLeft: '5%' }}>
					<div>
						<div>
							<div>
								<div style={{ fontSize: '110%' }}>Organizer Comments</div>
								<ul>
									{organizerComments.map((comment, i) => (
										<li key={i}>{comment}</li>
									))}
								</ul>
							</div>
							<div style={{ fontSize: '110%' }}>Topic Sentence Comments</div>
							<ul>
								{topicSentenceComments.map((comment, i) => (
									<li key={i}>{comment}</li>
								))}
							</ul>
						</div>
						<div>
							<div style={{ fontSize: '110%' }}>Answer Comments</div>
							<ul>
								{answerComments.map((comment, i) => (
									<li key={i}>{comment}</li>
								))}
							</ul>
						</div>
						<div>
							<div style={{ fontSize: '110%' }}>Conclusion Comments</div>
							<ul>
								{conclusionComments.map((comment, i) => (
									<li key={i}>{comment}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OEQGradeSubmitDisplayComments
