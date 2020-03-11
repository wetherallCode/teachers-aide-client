import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

const GET_PERIOD_NAMES = gql`
	query getPeriodNamesgetPeriodNamesForWebSitePeriodSelector {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
	}
`

const WebSitePeriodSelector = () => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <div style={{ paddingLeft: '2%' }}>Loading</div>
	if (error) console.log(error)

	return (
		<WebSitePeriodSelectorDisplay periods={data.periodName.enumValues.map(period => period.name)} />
	)
}

const WebSitePeriodSelectorDisplay = ({ periods }) => {
	const [periodSelector, setPeriodSelector] = useState(false)

	const sortByPeriod = (a, b) => a - b
	return (
		<>
			<div onClick={() => setPeriodSelector(!periodSelector)}>
				{!periodSelector ? 'Select Class' : ''}
			</div>
			{periodSelector && (
				<>
					{periods
						.slice(0, periods.length - 1)
						.sort()
						.map(period => {
							return (
								<Link
									key={period}
									to={`/website/${period}`}
									style={{
										marginLeft: '1%',
										width: '6rem',
										color: 'var(--white)',
										textDecoration: 'none'
									}}
									onClick={() => setPeriodSelector(!periodSelector)}
									onMouseOver={event => (event.target.style.fontSize = '110%')}
									onMouseOut={event => (event.target.style.fontSize = '100%')}>
									{`${period.substring(0, 1)} ${period.substring(2, 3)}-${period.substring(3, 4)}`}
								</Link>
							)
						})}
				</>
			)}
		</>
	)
}

export default WebSitePeriodSelector
