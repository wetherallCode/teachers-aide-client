import React, { useState } from 'react'
import { Route } from 'react-router'
import DeskSelector from './DeskSelector'
import ClassRoomTools from './ClassRoomTools'
import StudentInfo from './StudentInfo'

const ClassRoom = ({ match }) => {
	const [teacherOptions, setTeacherOptions] = useState({
		behaviorPointsToggle: false,
		criticalThinkingToggle: true
	})
	const todaysDate = new Date().toISOString().substring(0, 10)
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
				<ClassRoomTools
					period={periodName}
					match={match}
					teacherOptions={teacherOptions}
					setTeacherOptions={setTeacherOptions}
				/>
			</div>
			<Route
				path={`${url}/:deskNumber`}
				render={props => (
					<StudentInfo
						{...props}
						periodName={periodName}
						teacherOptions={teacherOptions}
						setTeacherOptions={setTeacherOptions}
						todaysDate={todaysDate}
					/>
				)}
			/>
		</>
	)
}
export default ClassRoom
