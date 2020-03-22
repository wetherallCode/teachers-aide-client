import React, { useEffect } from 'react'
import LivePeriodEnabler from './LivePeriodEnabler'
import LivePeriodSelector from './LivePeriodSelector'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const UPDATE_LIVE_PERIOD = gql`
	mutation updateLivePeriod($input: LivePeriodInput) {
		updateLivePeriod(input: $input) {
			livePeriod
		}
	}
`
const LivePeriodDisplay = ({ classPeriodInfo, startPolling, stopPolling }) => {
	const [updateLivePeriod] = useMutation(UPDATE_LIVE_PERIOD)
	console.log(classPeriodInfo.livePeriod)
	useEffect(() => {
		if (classPeriodInfo.livePeriod == 'DISABLED') {
			stopPolling()
		} else console.log('polling')
	}, [classPeriodInfo.livePeriod])
	return (
		<>
			{classPeriodInfo.livePeriod !== 'DISABLED' ? (
				<LivePeriodSelector
					livePeriod={classPeriodInfo.livePeriod}
					updateLivePeriod={updateLivePeriod}
					classPeriodInfo={classPeriodInfo}
				/>
			) : (
				<LivePeriodEnabler
					updateLivePeriod={updateLivePeriod}
					classPeriodInfo={classPeriodInfo}
					startPolling={startPolling}
				/>
			)}
		</>
	)
}

export default LivePeriodDisplay
