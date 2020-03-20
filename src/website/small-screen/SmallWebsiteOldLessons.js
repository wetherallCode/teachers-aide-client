import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { FIND_CLASS_PERIOD } from '../large-screen/DailyAgenda'
import SmallWebsiteOldLessonsDisplay from './SmallWebsiteOldLessonsDisplay'

const SmallWebsiteOldLessons = ({ todaysDate, period }) => {
	const [lessonDate, setLessonDate] = useState(todaysDate)

	const { loading, error, data } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: lessonDate, period: period }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<div style={{ height: '80vh', color: 'var(--blue)' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '10vh',
					fontSize: '130%',
					borderBottom: '3px solid var(--blue)'
				}}>
				<div>Lesson Date: </div>
				<input
					type='date'
					value={lessonDate}
					onChange={e => {
						setLessonDate(e.target.value)
					}}
					style={{ backgroundColor: 'transparent', marginLeft: '1em' }}
				/>
			</div>
			{data.findClassPeriod !== null ? (
				<div style={{ marginTop: '2%' }}>
					<SmallWebsiteOldLessonsDisplay lesson={data.findClassPeriod} />
				</div>
			) : (
				<div
					style={{
						height: '20vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '130%'
						// backgroundColor: 'var(--grey)'
					}}>
					<div>No Lesson for This Day</div>
				</div>
			)}
		</div>
	)
}

export default SmallWebsiteOldLessons
