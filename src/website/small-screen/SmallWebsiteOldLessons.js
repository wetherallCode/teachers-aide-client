import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { FIND_CLASS_PERIOD } from '../DailyAgenda'
import SmallWebsiteOldLessonsDisplay from './SmallWebsiteOldLessonsDisplay'

const SmallWebsiteOldLessons = ({ todaysDate, period }) => {
	const [lessonDate, setLessonDate] = useState(todaysDate)
	const [isVisible, setIsVisible] = useState(false)

	const { loading, error, data } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: lessonDate, period: period }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<div style={{ height: '80vh', color: 'var(--blue)' }}>
			<div
				style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
				<div>Lesson Date: </div>
				<input
					type='date'
					value={lessonDate}
					onChange={e => {
						setLessonDate(e.target.value)
						setIsVisible(true)
					}}
					style={{ backgroundColor: 'transparent', marginLeft: '1em' }}
				/>
				<>{isVisible && 'changing'}</>
			</div>
			{data.findClassPeriod !== null ? (
				<SmallWebsiteOldLessonsDisplay lesson={data.findClassPeriod} />
			) : (
				<div
					style={{
						height: '70vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
						// backgroundColor: 'var(--grey)'
					}}>
					<div>No Lesson Scheduled</div>
				</div>
			)}
		</div>
	)
}

export default SmallWebsiteOldLessons