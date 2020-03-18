import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_PERIOD_NAMES } from '../WebSitePeriodSelector'
import { useQuery } from '@apollo/react-hooks'

const SmallWebsitePeriodSelector = ({ match, periodName }) => {
	const [periodSelector, setPeriodSelector] = useState(false)

	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading)
		return (
			<div
				style={{
					paddingLeft: '2%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '5vh'
				}}>
				<div>Loading</div>
			</div>
		)
	if (error) console.log(error)
	const periodNames = data.periodName.enumValues.map(period => period.name)

	return (
		<>
			{!periodSelector ? (
				<div
					onClick={() => setPeriodSelector(!periodSelector)}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '5vh'
					}}>
					{periodName === '' ? <div>Select Period</div> : <div>{periodName}</div>}
				</div>
			) : (
				<div
					onClick={() => setPeriodSelector(!periodSelector)}
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						height: '5vh'
					}}>
					{periodNames
						.slice(0, periodNames.length - 1)
						.sort()
						.map(period => (
							<div key={period}>
								<Link
									to={`/website/${period}`}
									style={{ color: 'var(--white)', textDecoration: 'none' }}>
									{`${period.substring(0, 1)} ${period.substring(2, 3)}-${period.substring(3, 4)}`}
								</Link>
							</div>
						))}
				</div>
			)}
		</>
	)
}

export default SmallWebsitePeriodSelector
