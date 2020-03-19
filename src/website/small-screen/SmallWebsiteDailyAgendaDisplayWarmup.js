import React, { useState } from 'react'
import { useToggle } from '../../hooks'

const SmallWebsiteDailyAgendaDisplayWarmup = ({ warmup }) => {
	const [isVisible, toggleValue] = useToggle(false)
	return (
		<div style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
			Warm Up
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplayWarmup
