import React, { useState, useEffect } from 'react'

const CommentListDisplayCheckBoxes = ({ comment, commentList, setCommentList }) => {
	const [isChecked, setIsChecked] = useState(false)

	useEffect(() => {
		if (commentList.includes(comment)) {
			setIsChecked(true)
		}
	}, [setIsChecked])

	const handleChange = e => {
		const eventValue = e.target.value
		const comment = commentList.findIndex(i => i === eventValue)

		if (comment > -1) {
			setCommentList(list => [...list.slice(0, comment), ...list.slice(comment + 1)])
			setIsChecked(false)
		} else {
			setCommentList(list => [...list, eventValue])
			setIsChecked(true)
		}
	}

	return (
		<div
			key={comment}
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
				marginBottom: '1%'
			}}>
			<input type='checkbox' value={comment} checked={isChecked} onChange={handleChange} />
			<div style={{}}>{comment}</div>
		</div>
	)
}

export default CommentListDisplayCheckBoxes
