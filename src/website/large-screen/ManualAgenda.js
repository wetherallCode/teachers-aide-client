import React, { useState } from 'react'
import AgendaItemsNavBar from './AgendaItemsNavBar'
import ProtocolDisplay from './ProtocolDisplay'
import Homework from './Homework'
import StudyGuide from './StudyGuide'
import EssentialQuestion from './EssentialQuestion'
import Readings from './Readings'
import Vocab from './Vocab'
import Protocols from './Protocols'

const ManualAgenda = ({ match, classPeriod }) => {
	const [agendaItemSelector, setAgendaItemSelector] = useState('NONE')
	return (
		<>
			<AgendaItemsNavBar
				match={match}
				lesson={classPeriod}
				setAgendaItemSelector={setAgendaItemSelector}
			/>

			{agendaItemSelector === 'STUDY_GUIDE' && <StudyGuide lesson={classPeriod.assignedLesson} />}
			{agendaItemSelector === 'ESSENTIAL_QUESTION' && (
				<EssentialQuestion lesson={classPeriod.assignedLesson} />
			)}

			{agendaItemSelector === 'READINGS' && <Readings lesson={classPeriod.assignedLesson} />}

			{agendaItemSelector === 'VOCAB' && <Vocab lesson={classPeriod.assignedLesson} />}

			{agendaItemSelector === 'PROTOCOLS' && <Protocols protocol={classPeriod.assignedProtocols} />}

			{agendaItemSelector === 'HOMEWORK' && (
				<Homework homework={classPeriod.assignedHomework} lesson={classPeriod.assignedLesson} />
			)}
		</>
	)
}

export default ManualAgenda
