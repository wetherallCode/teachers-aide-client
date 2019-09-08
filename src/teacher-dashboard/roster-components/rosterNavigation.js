import React from 'react'
// import { QueryResult } from '@apollo/react-common'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom'

// import * as ApolloTypes from './__generated__/getAllStudents'

export const GET_PERIOD_NAMES = gql`
	query getPeriodNames {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
		gradeBookToggle @client
	}
`

const RosterNavBar = ({ match }) => {
	const client = useApolloClient()

	const { data, loading, error } = useQuery(GET_PERIOD_NAMES)

	if (loading) return <h1>Loading</h1>
	if (error) console.log(error)

	const { gradeBookToggle } = data
	const toggleGradebook = () => client.writeData({ data: { gradeBookToggle: !gradeBookToggle } })

	return (
		<div
			style={{
				backgroundColor: 'var(--darkGrey)',
				height: '100vh',
				color: 'var(--white)',
				textShadow: '2px 2px 2px #888',
				textAlign: 'center',
				display: 'grid',
				gridTemplateRows: '1fr 7fr',
				// border: '1px solid var(--blue)',
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
					<h1
						style={{
							textDecoration: 'underline'
						}}>
						GradeBook
					</h1>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignContent: 'center',
						fontSize: '200%'
					}}>
					<RosterNavBarItems
						match={match}
						items={data.periodName.enumValues.map(period => period.name)}
					/>
				</div>
			</div>
		</div>
	)
}
const RosterNavBarItems = ({ items, match }) => {
	return (
		<>
			{items.sort().map((period, index) => (
				<Link
					key={period}
					to={`/dashboard/roster-view/${period}`}
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
							borderRadius: '5px'
						}}>
						Period {period}
					</button>
				</Link>
			))}
		</>
	)
}

export default RosterNavBar
