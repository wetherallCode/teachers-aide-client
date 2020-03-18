import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { FIND_CLASS_PERIOD } from '../DailyAgenda'
const SmallWebsiteDailyAgendaDisplay = ({ todaysDate, period }) => {
	const { loading, error, data } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: todaysDate, period: period }
	})
	if (loading) return null
	if (error) console.error(error)
	console.log(data.findClassPeriod)
	return (
		<div>
			<div>Agenda</div>
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplay
