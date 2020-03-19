import React, { useState } from 'react'
import { useToggle } from '../../hooks'

const SmallWebsiteDailyAgendaDisplayReadings = ({ readings }) => {
	console.log(readings)
	const [isVisible, toggleValue] = useToggle(false)
	return (
		<div>
			<div
				onClick={toggleValue}
				style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
				Readings
			</div>
			{isVisible && (
				<div style={{ marginLeft: '3%', marginRight: '3%' }}>
					<div>
						Read pages {readings.pages}: {readings.sections}
					</div>
				</div>
			)}
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplayReadings
