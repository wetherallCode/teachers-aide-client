import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

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
	console.log(data)

	return (
		<WebSitePeriodSelectorDisplay periods={data.periodName.enumValues.map(period => period.name)} />
	)
}

const WebSitePeriodSelectorDisplay = ({ periods }) => {
	console.log(periods)
	return <div style={{ paddingLeft: '2%' }}>Period </div>
}

export default WebSitePeriodSelector
