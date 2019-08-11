import React from 'react'

const TodaysDate = ({ date }) => {
	const daysOfTheWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]
	const monthsOfTheYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	return (
		<div>
			{`${daysOfTheWeek[date.getDay()]}, ${
				monthsOfTheYear[date.getMonth()]
			} ${date.getDate()}, ${date.getFullYear()} `}
		</div>
	)
}

export default TodaysDate
