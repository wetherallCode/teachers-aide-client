import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AgendaItemsNavBar from './AgendaItemsNavBar'

const DailyAgenda = ({ match }) => {
	console.log(match)
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
			<AgendaItemsNavBar match={match} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'var(--blue)'
				}}>
				{/* {dailyAgendaDisplayItem === 2} */}
			</div>
		</div>
	)
}

export default DailyAgenda
