import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { FIND_CLASS_PERIOD } from '../large-screen/DailyAgenda'
import SmallWebsiteDailyAgendaDisplayStudyGuide from './SmallWebsiteDailyAgendaDisplayStudyGuide'
import SmallWebsiteDailyAgendaDisplayEssentialQuestion from './SmallWebsiteDailyAgendaDisplayEssentialQuestion'
import SmallWebsiteDailyAgendaDisplayReadings from './SmallWebsiteDailyAgendaDisplayReadings'
import SmallWebsiteDailyAgendaDisplayVocab from './SmallWebsiteDailyAgendaDisplayVocab'
import SmallWebsiteDailyAgendaDisplayWorkDue from './SmallWebsiteDailyAgendaDisplayWorkDue'

const SmallWebsiteDailyAgendaDisplay = ({ todaysDate, period }) => {
	const { loading, error, data } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: todaysDate, period: period }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<>
			{data.findClassPeriod !== null ? (
				<div style={{ height: '80vh', color: 'var(--blue)' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '130%',
							height: '10vh',
							borderBottom: '3px solid var(--blue)'
						}}>
						<div>Today's Agenda </div>
					</div>
					<div style={{ height: '70vh', overflow: 'scroll' }}>
						<div style={{ marginTop: '3%' }}>
							<SmallWebsiteDailyAgendaDisplayStudyGuide
								studyGuide={data.findClassPeriod.assignedLesson.studyGuideQuestions}
							/>
						</div>
						<div style={{ marginTop: '3%' }}>
							<SmallWebsiteDailyAgendaDisplayEssentialQuestion
								essentialQuestion={data.findClassPeriod.assignedLesson.essentialQuestion.question}
							/>
						</div>
						<div style={{ marginTop: '3%' }}>
							<SmallWebsiteDailyAgendaDisplayReadings
								readings={data.findClassPeriod.assignedLesson.readings}
							/>
						</div>
						<div style={{ marginTop: '3%' }}>
							<SmallWebsiteDailyAgendaDisplayVocab
								vocab={data.findClassPeriod.assignedLesson.vocabWords}
							/>
						</div>
						<div style={{ marginTop: '3%' }}>
							<SmallWebsiteDailyAgendaDisplayWorkDue
								essentialQuestion={data.findClassPeriod.assignedLesson.essentialQuestion.question}
								assignments={data.findClassPeriod.assignedHomework}
							/>
						</div>
						{/* <div style={{ marginTop: '3%' }}></div> */}
					</div>
				</div>
			) : (
				<div style={{ height: '80vh', color: 'var(--blue)' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '41vh',
							fontSize: '130%'
						}}>
						<div>No Lesson today</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SmallWebsiteDailyAgendaDisplay
