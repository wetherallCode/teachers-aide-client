import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import TodaysDate from '../TodaysDate'
import SmallWebsitePeriodSelector from './SmallWebsitePeriodSelector'
import SmallWebsiteDailyAgenda from './SmallWebsiteDailyAgenda'

const SmallWebsiteDisplay = ({ match }) => {
	const [periodName, setPeriodName] = useState('')
	return (
		<>
			<div
				style={{
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '5vh',
					borderBottom: '3px solid var(--white)'
				}}>
				<TodaysDate date={new Date()} />
			</div>
			<div
				style={{
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					height: '5vh',
					borderBottom: '3px solid var(--white)'
				}}>
				<SmallWebsitePeriodSelector periodName={periodName} />
			</div>
			<Route
				path='/website/:period'
				render={props => (
					<SmallWebsiteDailyAgenda
						{...props}
						setPeriodName={setPeriodName}
						periodName={periodName}
					/>
				)}
			/>
		</>
	)
}

export default SmallWebsiteDisplay
