import React from 'react'
import { useToggle } from '../../hooks'

const SmallWebsiteDailyAgendaDisplayEssentialQuestion = ({ essentialQuestion }) => {
	const [isVisible, toggleValue] = useToggle(false)
	return (
		<div>
			<div
				onClick={toggleValue}
				style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
				Essential Question
			</div>
			{isVisible && <div style={{ marginLeft: '3%', marginRight: '3%' }}>{essentialQuestion}</div>}
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplayEssentialQuestion
