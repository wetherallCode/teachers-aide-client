import React from 'react'
import { Route } from 'react-router'
import DeskSelector from './DeskSelector'
import ClassRoomTools from './ClassRoomTools'
import StudentInfo from './StudentInfo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

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
					height: '100vh',
				}}>
				<DeskSelector match={match} periodName={periodName} />
				<ClassRoomTools period={periodName} />
			</div>
			<Route
				path={`${url}/:deskNumber`}
				render={(props) => <StudentInfo {...props} periodName={periodName} />}
			/>
		</>
	)
}
export default ClassRoom
