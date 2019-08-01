import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'

const GET_PERIOD_NAMES = gql`
	query getPeriodNames {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
	}
`
const ClassPeriodSelector = ({ match }) => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	console.log(data)
	if (loading) return <h1>Loading</h1>
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
				borderBottom: '1px solid black',
				overflow: 'scroll'
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
			{/* <h3>A Day</h3>
			<h3>B Day</h3> */}
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
							boxShadow: '3px 3px 3px var(--darkgray)',
							overflow: 'scroll'
						}}>
						Period {period}
					</button>
				</Link>
			))}
		</div>
	)
}

export default ClassPeriodSelector
