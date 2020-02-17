import React from 'react'
import { sortByLastName } from '../../../utils'
import ResponsibilityPointsRows from './ResponsibilityPointsRows'

const ResponsibilityPointsGrid = ({ roster, setRosterList, csvToggle }) => {
	return (
		<div
			style={{
				height: '80%',
				fontSize: '120%',
				borderBottom: '3px solid var(--blue)',
				borderLeft: '3px solid var(--blue)',
				borderRight: '3px solid var(--blue)'
			}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 4fr',
					borderBottom: '1px solid var(--blue)'
				}}>
				<div>Last Name</div>
				<div>First Name</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div>Responsibility Points</div>
				</div>
			</div>
			{roster.sort(sortByLastName).map((student, i) => (
				<ResponsibilityPointsRows
					key={student._id}
					index={i}
					student={student}
					setRosterList={setRosterList}
					csvToggle={csvToggle}
				/>
			))}
		</div>
	)
}

export default ResponsibilityPointsGrid
