import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const GET_PERIOD_NAMES = gql`
	query getPeriodNames {
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

	return (
		<>
			<div onClick={() => setPeriodSelector(!periodSelector)}>
				{!periodSelector ? 'Select Class' : ''}
			</div>
			{periodSelector && (
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					{periods.map(period => {
						return (
							<Link
								key={period}
								to={`/website/${period}`}
								style={{
									paddingLeft: '2%',
									width: '8rem',
									color: 'var(--white)',
									textDecoration: 'none'
								}}>
								{`Period ${period}`}
							</Link>
						)
					})}
				</div>
			)}
		</>
	)
}

export default WebSitePeriodSelector
