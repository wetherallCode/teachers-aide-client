import React from 'react'
import { useToggle } from '../../hooks'

const SmallWebsiteDailyAgendaDisplayStudyGuide = ({ studyGuide }) => {
	const [isVisible, toggleValue] = useToggle(false)
	return (
		<div>
			<div
				onClick={toggleValue}
				style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
				Study Guide
			</div>
			{isVisible && (
				<div>
					<ol>
						{studyGuide.map(question => (
							<li key={question}>{question}</li>
						))}
					</ol>
				</div>
			)}
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplayStudyGuide
