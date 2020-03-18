import React, { useState, useEffect } from 'react'

import SmallWebsiteDailyAgendaDisplay from './SmallWebsiteDailyAgendaDisplay'
import SmallWebsiteOldLessons from './SmallWebsiteOldLessons'
import SmallWebsiteResources from './SmallWebsiteResources'

const SmallWebsiteDailyAgenda = ({ match, setPeriodName, periodName }) => {
	const [dailyAgendaSelector, setDailyAgendaSelector] = useState('agenda')
	const { period } = match.params
	const todaysDate = new Date().toISOString().substring(0, 10)

	useEffect(() => {
		setPeriodName(
			`${period.substring(0, 1)} Day ${period.substring(2, 3)}-${period.substring(3, 4)}`
		)
	}, [period])

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					color: 'var(--blue)',
					fontSize: '110%'
				}}>
				<div
					style={
						dailyAgendaSelector === 'agenda' ? { color: 'var(--red)' } : { color: 'var(--blue)' }
					}
					onClick={() => setDailyAgendaSelector('agenda')}>
					Agenda
				</div>
				<div
					style={
						dailyAgendaSelector === 'oldLessons'
							? { color: 'var(--red)' }
							: { color: 'var(--blue)' }
					}
					onClick={() => setDailyAgendaSelector('oldLessons')}>
					Old Lessons
				</div>
				<div
					style={
						dailyAgendaSelector === 'resources' ? { color: 'var(--red)' } : { color: 'var(--blue)' }
					}
					onClick={() => setDailyAgendaSelector('resources')}>
					Resources
				</div>
			</div>
			{dailyAgendaSelector === 'agenda' && (
				<SmallWebsiteDailyAgendaDisplay todaysDate={todaysDate} period={period} />
			)}
			{dailyAgendaSelector === 'oldLessons' && (
				<SmallWebsiteOldLessons todaysDate={todaysDate} period={period} />
			)}
			{dailyAgendaSelector === 'resources' && <SmallWebsiteResources />}
		</div>
	)
}

export default SmallWebsiteDailyAgenda
