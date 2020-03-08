import React from 'react'
import SocraticQuestionPicker from './SocraticQuestionPicker'
import ProtocolManager from './ProtocolManager'

const ProtocolDisplay = ({ classPeriodInfo, period, date, markingPeriod }) => {
	const activeProtocol = classPeriodInfo.assignedProtocols.filter(
		protocol => protocol.isActive === true
	)
	console.log(classPeriodInfo)
	return (
		<>
			{activeProtocol.length !== 0 ? (
				<ProtocolManager
					classPeriodInfo={classPeriodInfo}
					period={period}
					date={date}
					// protocolToggle={protocolToggle}
					// setProtocolToggle={setProtocolToggle}
					// protocolQuestionForProtocolManager={protocolQuestionForProtocolManager}
					// eligibleStudentList={eligibleStudentList}
					activeProtocol={activeProtocol}
					protocolList={classPeriodInfo.assignedProtocols}
				/>
			) : (
				<SocraticQuestionPicker
					classPeriodInfo={classPeriodInfo}
					period={period}
					date={date}
					markingPeriod={markingPeriod}
					activeProtocol={activeProtocol}
					protocolList={classPeriodInfo.assignedProtocols}
					// protocolToggle={protocolToggle}
					// setProtocolToggle={setProtocolToggle}
					// setProtocolQuestionForProtocolManager={setProtocolQuestionForProtocolManager}
					// eligibleStudentList={eligibleStudentList}
				/>
			)}
		</>
	)
}

export default ProtocolDisplay
