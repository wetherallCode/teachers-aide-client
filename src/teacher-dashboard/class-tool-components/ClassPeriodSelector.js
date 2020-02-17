import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'

export const GET_PERIOD_NAMES = gql`
	query getPeriodNamesForClassPeriodSelector {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
		gradeBookToggle @client
	}
`
const ClassPeriodSelector = ({ match }) => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.log(error)

	return (
		<div
			style={{
				backgroundColor: 'var(--grey)',
				height: '100vh',
				color: 'var(--white)',
				textShadow: '2px 2px 2px #888',
				textAlign: 'center',
				display: 'grid',
				gridTemplateRows: '1fr 7fr',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div>
				<div
					style={{
						marginTop: '0px',
						alignContent: 'center',
						justifyContent: 'flex-start',
						paddingTop: '1px'
					}}>
					<h1 style={{ textDecoration: 'underline' }}>Class Period</h1>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignContent: 'center',
						fontSize: '200%'
					}}>
					<ClassPeriodItems
						match={match}
						items={data.periodName.enumValues.map(period => period.name)}
					/>
				</div>
			</div>
		</div>
	)
}

const ClassPeriodItems = ({ items, match }) => {
	return (
		<div
			style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
			{items.map((period, index) => (
				<Link
					key={period}
					to={`/dashboard/classroom/class-period-selector/${period}/${Math.floor(
						Math.random() * 24 + 1
					)}`}
					style={{
						marginTop: '4%',
						fontSize: '120%',
						textDecoration: 'none',
						color: 'white'
					}}>
					<button
						style={{
							width: '80%',
							height: '5rem',
							fontSize: '70%',
							textDecoration: 'none',
							color: 'var(--white)',
							backgroundColor: 'var(--blue)',
							boxShadow: '1px 1px 1px 1px gray',
							borderRadius: '5px'
						}}>
						Period{' '}
						{period.substring(0, 1) + ' ' + period.substring(2, 3) + '-' + period.substring(3)}
					</button>
				</Link>
			))}
		</div>
	)
}

export default ClassPeriodSelector
