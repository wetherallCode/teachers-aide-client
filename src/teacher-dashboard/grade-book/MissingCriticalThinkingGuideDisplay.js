import React from 'react'

const MissingCriticalThinkingGuideDisplay = ({ assignment }) => {
	return (
		<div style={{ marginLeft: '5%' }}>
			<ul>
				<li>
					Read pages: {assignment.readingPages}: {assignment.readingSections} and complete a
					Critical Thinking Guide.
				</li>
			</ul>
		</div>
	)
}

export default MissingCriticalThinkingGuideDisplay
