import React from 'react'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom'
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
const LessonLoader = () => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <div style={{ paddingLeft: '2%' }}>Loading</div>
	if (error) console.log(error)

	return <LessonLoaderDisplay periods={data.periodName.enumValues.map(period => period.name)} />
}

const LessonLoaderDisplay = ({ periods }) => {
	return (
		<div
			style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
			{periods.map((period, i) => (
				<Link
					style={{
						border: '2px solid var(--blue)',
						margin: '1%',
						color: 'var(--blue)',
						height: '45vh'
					}}
					key={i}>
					<div style={{ fontSize: '160%' }}>Class Period {period}</div>
					<form />
				</Link>
			))}
		</div>
	)
}

export default LessonLoader
