import React from 'react'
import { Route } from 'react-router'
import DeskSelector from './DeskSelector'
import ClassRoomTools from './ClassRoomTools'
import StudentInfo from './StudentInfo'

const ClassRoom = ({ match }) => {
	const { url } = match
	const { periodName } = match.params

	return (
		<>
			<div
				style={{
					backgroundColor: 'var(--white)',
					display: 'grid',
					gridTemplateRows: '3fr 1fr',
					gridGap: '1px',
					height: '100vh'
				}}>
				<DeskSelector match={match} periodName={periodName} />
				<ClassRoomTools period={periodName} match={match} />
			</div>
			<Route
				path={`${url}/:deskNumber`}
				render={props => <StudentInfo {...props} periodName={periodName} />}
			/>
		</>
	)
}
export default ClassRoom
