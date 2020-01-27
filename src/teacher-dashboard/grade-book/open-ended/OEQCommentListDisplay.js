import React, { useState } from 'react'
import { organizerCommentList } from './OEQCommentList'
import { generalCommentList } from './OEQCommentList'
import { topicSentenceCommentList } from './OEQCommentList'
import { answerCommentList } from './OEQCommentList'
import { conclusionCommentList } from './OEQCommentList'
import CommentListDisplayCheckBoxes from './CommentListDisplayCheckBoxes'

const CommentListDisplay = ({ commentCategories, commentList, setCommentList }) => {
	return (
		<div style={{ overflow: 'scroll', marginTop: '2%' }}>
			{commentCategories === 'organizerCommentList' && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						flexWrap: 'wrap'
					}}>
					{organizerCommentList.map(comment => (
						<CommentListDisplayCheckBoxes
							key={comment}
							comment={comment}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					))}
				</div>
			)}
			{/* {commentCategories === 'generalCommentList' && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							flexWrap: 'wrap'
						}}>
						{generalCommentList.map(comment => (
							<CommentListDisplayCheckBoxes
								key={comment}
								comment={comment}
								commentList={commentList}
								setCommentList={setCommentList}
							/>
						))}
					</div>
				)} */}
			{commentCategories === 'topicSentenceCommentList' && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						flexWrap: 'wrap',
						justifyContent: 'flex-start'
					}}>
					{topicSentenceCommentList.map(comment => (
						<CommentListDisplayCheckBoxes
							key={comment}
							comment={comment}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					))}
				</div>
			)}
			{commentCategories === 'answerCommentList' && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						flexWrap: 'wrap',
						height: '38vh'
					}}>
					{answerCommentList.map(comment => (
						<CommentListDisplayCheckBoxes
							key={comment}
							comment={comment}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					))}
				</div>
			)}
			{commentCategories === 'conclusionCommentList' && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						flexWrap: 'wrap'
					}}>
					{conclusionCommentList.map(comment => (
						<CommentListDisplayCheckBoxes
							key={comment}
							comment={comment}
							commentList={commentList}
							setCommentList={setCommentList}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default CommentListDisplay
