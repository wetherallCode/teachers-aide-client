import React, { useState } from 'react'
import { useToggle } from '../../hooks'

const SmallWebsiteDailyAgendaDisplayWorkDue = ({ assignments, essentialQuestion }) => {
	const [isVisible, toggleValue] = useToggle(false)
	const [oeq] = assignments.filter(assignment => assignment.assignmentType === 'OEQ')
	const [criticalThinkingGuide] = assignments.filter(
		assignment => assignment.assignmentType === 'THINKING_GUIDE'
	)

	return (
		<div>
			<div
				onClick={toggleValue}
				style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
				Homework
			</div>
			<div style={{ marginRight: '3%' }}>
				{isVisible && oeq !== undefined && (
					<ul>
						<li>
							Read page {oeq.readingPages}: {oeq.readingSections} and answer the following Open
							Ended Question:
						</li>
						<ul>
							<li>{essentialQuestion}</li>
							<li>Due on{oeq.dueDate}</li>
						</ul>
					</ul>
				)}
				{isVisible && criticalThinkingGuide !== undefined && (
					<ul>
						<li>
							Read pages {criticalThinkingGuide.readingPages}:{' '}
							{criticalThinkingGuide.readingSections} and complete a Critical Thinking Guide.
						</li>
						<ul>
							<li>Due on: {criticalThinkingGuide.dueDate}</li>
						</ul>
					</ul>
				)}
			</div>
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplayWorkDue
