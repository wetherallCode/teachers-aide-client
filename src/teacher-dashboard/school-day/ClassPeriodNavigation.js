import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

export const GET_PERIOD_NAMES = gql`
	query getPeriodNamesForClassManager {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
	}
`

const ClassPeriodNavigation = ({ match }) => {
	return <ClassManagerNavigationDisplay match={match} />
}

const ClassManagerNavigationDisplay = ({ match }) => {
	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)
	if (loading) return <h1>Loading</h1>
	if (error) console.log(error)

	return (
		<>
			<div
				style={{
					backgroundColor: 'var(--grey)',
					height: '100vh',
					color: 'var(--white)',
					textShadow: '2px 2px 2px #888',
					textAlign: 'center',
					display: 'grid',
					gridTemplateRows: '1fr 7fr',
					overflow: 'scroll'
				}}>
				<h1
					style={{
						textDecoration: 'underline'
					}}>
					Classes
				</h1>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignContent: 'center',
						fontSize: '200%'
					}}>
					<ClassManagerNavBarItems
						match={match}
						items={data.periodName.enumValues.map(period => period.name)}
					/>
				</div>
			</div>
		</>
	)
}

const ClassManagerNavBarItems = ({ match, items }) => {
	const { url } = match
	return (
		<>
			{items.sort().map((item, i) => (
				<Link
					key={i}
					to={`${url}/${item}`}
					style={{
						marginTop: '4%',
						marginBottom: '21%',
						fontSize: '120%',
						textDecoration: 'none',
						color: 'white'
					}}>
					<button
						style={{
							width: '75%',
							height: '120%',
							fontSize: '70%',
							textDecoration: 'none',
							color: 'var(--white)',
							backgroundColor: 'var(--blue)',
							boxShadow: '1px 1px 1px black',
							textShadow: '1px 3px 1px black',
							borderRadius: '5px'
						}}>
						Period {item.substring(0, 1) + ' ' + item.substring(2, 3) + '-' + item.substring(3)}
					</button>
				</Link>
			))}
		</>
	)
}

export default ClassPeriodNavigation
