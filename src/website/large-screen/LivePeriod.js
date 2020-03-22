import React, { useState } from 'react'
import AgendaItemsNavBar from './AgendaItemsNavBar'
import ProtocolDisplay from './ProtocolDisplay'
import Homework from './Homework'
import StudyGuide from './StudyGuide'
import EssentialQuestion from './EssentialQuestion'
import Readings from './Readings'
import Vocab from './Vocab'
import Protocols from './Protocols'

const LivePeriod = ({ classPeriod, livePeriod, match }) => {
	console.log(classPeriod.assignedProtocols)

	return (
		<>
			<div
				style={{
					height: '89vh',
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					fontSize: '150%',
					borderRight: '3px solid var(--white)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'center',
					paddingTop: '8%',
					overflow: 'scroll'
				}}>
				<div style={{ fontSize: '130%', marginBottom: '10%', textDecoration: 'underline' }}>
					{match.params.courseName.substring(0, 1)} Day{' '}
					{/* <div style={{ fontSize: '120%', marginTop: '3%', marginBottom: '6%' }}> */}
					Period {match.params.courseName.substring(2, 3)}-{match.params.courseName.substring(3, 4)}{' '}
				</div>
				<div>Live Period</div>
			</div>
			{livePeriod === 'STUDY_GUIDE' && <StudyGuide lesson={classPeriod.assignedLesson} />}
			{livePeriod === 'ESSENTIAL_QUESTION' && (
				<EssentialQuestion lesson={classPeriod.assignedLesson} />
			)}

			{livePeriod === 'READINGS' && <Readings lesson={classPeriod.assignedLesson} />}

			{livePeriod === 'VOCAB' && <Vocab lesson={classPeriod.assignedLesson} />}

			{livePeriod === 'PROTOCOLS' && <Protocols protocol={classPeriod.assignedProtocols} />}

			{livePeriod === 'HOMEWORK' && (
				<Homework homework={classPeriod.assignedHomework} lesson={classPeriod.assignedLesson} />
			)}
		</>
	)
}

export default LivePeriod
