import React, { useState, useEffect } from 'react'
import { sortByLastName } from '../../../utils'
import RosterRows from './RosterRows'

const RosterManager = ({ roster }) => {
	return (
		<div style={{ marginTop: '2%', marginRight: '5%', marginLeft: '5%', marginBottom: '5%' }}>
			<div
				style={{
					color: 'var(--white)',
					backgroundColor: 'var(--blue)',
					height: '3rem',
					fontSize: '150%',
					display: 'grid',
					gridTemplateColumns: '1fr 2fr'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ marginLeft: '2%' }}>Roster</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						marginRight: '2%'
					}}>
					<div style={{ marginLeft: '2%' }}>Add Student</div>
				</div>
			</div>
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
						gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
						borderBottom: '1px solid var(--blue)'
					}}>
					<div style={{ marginLeft: '4%' }}>Last Name</div>
					<div style={{ marginLeft: '2%' }}>First Name</div>
					<div style={{ marginLeft: '2%' }}>School Id</div>
					<div>Desk</div>
					<div>Days Absent</div>
				</div>
				{roster.sort(sortByLastName).map((student, i) => (
					<RosterRows key={i} index={i} student={student} />
				))}
			</div>
		</div>
	)
}

export default RosterManager
