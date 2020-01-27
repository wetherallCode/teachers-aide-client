import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

const GET_PERIOD_NAMES = gql`
	query getPeriodNamesgetPeriodNamesForClassSelector {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
	}
`

const ClassSelector = ({ match }) => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <div style={{ paddingLeft: '2%' }}>Loading</div>
	if (error) console.log(error)

	return (
		<ClassSelectorDisplay
			periods={data.periodName.enumValues.map(period => period.name)}
			match={match}
		/>
	)
}

const ClassSelectorDisplay = ({ periods, match }) => {
	console.log(match)
	const [periodSelector, setPeriodSelector] = useState(false)

	return (
		<>
			<div onClick={() => setPeriodSelector(!periodSelector)}>
				{!periodSelector ? 'Select Class' : ''}
			</div>
			{periodSelector && (
				<>
					{periods.sort().map(period => {
						return (
							<Link
								key={period}
								to={`${match.url}/${period}`}
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

export default ClassSelector
