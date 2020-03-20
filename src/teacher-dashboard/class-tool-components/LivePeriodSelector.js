import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useToggle } from '../../hooks'

const LIVE_PERIOD_SELECTORS = gql`
	query getLivePeriodSelectors {
		livePeriodEnums: __type(name: "livePeriodEnums") {
			enumValues {
				name
			}
		}
	}
`

const LivePeriodSelector = ({ livePeriod, classPeriodInfo, updateLivePeriod }) => {
	const [isLive, endLive] = useToggle(true)
	const { loading, error, data } = useQuery(LIVE_PERIOD_SELECTORS)
	if (loading) return null
	if (error) console.error(error)

	const livePeriodSelectors = data.livePeriodEnums.enumValues
		.map(value => value.name)
		.filter(value => value !== 'DISABLED')
		.filter(value => value !== 'PROTOCOLS')
		.slice(1)

	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<div
					style={
						window.screen.width === 1024
							? {
									display: 'grid',
									gridTemplateColumns: '1fr 1fr 1fr',
									gridTemplateAreas: '1fr 1fr 1fr ',
									gridGap: '1%',
									width: '98%'
							  }
							: {
									display: 'grid',
									gridTemplateColumns: '1fr 1fr 1fr',
									gridTemplateAreas: '1fr 1fr 1fr ',
									gridGap: '1%',
									width: '80%'
							  }
					}>
					{livePeriodSelectors.map(selector => (
						<button
							key={selector}
							style={
								livePeriod === selector
									? {
											backgroundColor: 'var(--grey)',
											color: 'var(--white)',
											height: '2rem',
											width: '10rem',
											fontSize: '90%'
									  }
									: {
											backgroundColor: 'var(--white)',
											height: '2rem',
											fontSize: '90%',
											width: '10rem'
									  }
							}
							onClick={() =>
								updateLivePeriod({
									variables: {
										input: {
											period: classPeriodInfo.period,
											assignedDate: classPeriodInfo.assignedDate,
											liveStatus: selector
										}
									}
								})
							}>
							{selector}
						</button>
					))}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				{!isLive ? (
					<button
						style={{
							backgroundColor: 'var(--red)',
							color: 'var(--white)',
							height: '2rem',
							width: '20rem',
							fontSize: '90%'
						}}
						onClick={() =>
							updateLivePeriod({
								variables: {
									input: {
										period: classPeriodInfo.period,
										assignedDate: classPeriodInfo.assignedDate,
										liveStatus: 'DISABLED'
									}
								}
							})
						}>
						Sure?
					</button>
				) : (
					<button
						style={{
							backgroundColor: 'var(--grey)',
							height: '2rem',
							width: '20rem',
							fontSize: '90%'
						}}
						onClick={endLive}>
						End Live Period
					</button>
				)}
			</div>
		</>
	)
}

export default LivePeriodSelector
