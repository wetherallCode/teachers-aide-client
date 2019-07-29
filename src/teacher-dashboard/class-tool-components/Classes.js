import React from 'react'
import { Route } from 'react-router-dom'
import ClassPeriodSelector from './ClassPeriodSelector'
import ClassRoom from './ClassRoom'

const Classes = ({ match }) => {
	return (
		<div>
			<Route exact path={`${match.url}/class-period-selector`} component={ClassPeriodSelector} />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '3fr 1fr',
					gridGap: '1px',
					backgroundColor: 'var(--white)',
					color: 'var(--white)',
				}}>
				<Route path={`${match.url}/class-period-selector/:periodName`} component={ClassRoom} />
			</div>
		</div>
	)
}

export default Classes
