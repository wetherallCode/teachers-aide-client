import React, { useState, useEffect } from 'react'
import SocraticQuestionPickerDisplay from './SocraticQuestionPickerDisplay'
import SocraticQuestionProtocolCreator from './SocraticQuestionProtocolCreator'

const SocraticQuestionPicker = ({
	classPeriodInfo,
	period,
	date,
	markingPeriod,
	protocolToggle,
	setProtocolToggle,
	setProtocolQuestionForProtocolManager,
	eligibleStudentList,
	activeProtocol,
	protocolList
}) => {
	const [questionPicker, setQuestionPicker] = useState(0)
	const [errorDisplay, setErrorDisplay] = useState('')

	return (
		<>
			{classPeriodInfo !== null ? (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						alignItems: 'center'
					}}>
					<button
						className='whiteButton'
						style={
							questionPicker !== 0
								? { fontSize: '100%', textShadow: '3px 3px 3px var(--grey)' }
								: { fontSize: '100%', textShadow: '3px 3px 3px var(--grey)', color: 'var(--grey)' }
						}
						onClick={() => {
							return questionPicker && setQuestionPicker(questionPicker - 1)
						}}>
						{/* {questionPicker !== 0 && 'Previous'} */}
						Previous
					</button>

					<SocraticQuestionProtocolCreator
						period={period}
						date={date}
						markingPeriod={markingPeriod}
						protocolToggle={protocolToggle}
						setProtocolToggle={setProtocolToggle}
						classPeriodInfo={classPeriodInfo}
						questionInfo={classPeriodInfo.assignedLesson.socraticQuestions[questionPicker]}
						eligibleStudentList={eligibleStudentList}
						setErrorDisplay={setErrorDisplay}
						protocolList={protocolList}
					/>

					<button
						className='whiteButton'
						style={
							questionPicker < classPeriodInfo.assignedLesson.socraticQuestions.length - 1
								? { fontSize: '100%', textShadow: '3px 3px 3px var(--grey)' }
								: { fontSize: '100%', textShadow: '3px 3px 3px var(--grey)', color: 'var(--grey)' }
						}
						onClick={() => {
							return (
								questionPicker < classPeriodInfo.assignedLesson.socraticQuestions.length - 1 &&
								setQuestionPicker(questionPicker + 1)
							)
						}}>
						{/* {questionPicker < classPeriodInfo.assignedLesson.socraticQuestions.length - 1 && 'Next'} */}
						Next
					</button>
					<div
						style={{
							height: '8vh',
							backgroundColor: 'var(--white)',
							width: '90%',
							fontSize: '120%',
							overflow: 'scroll',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<SocraticQuestionPickerDisplay
							error={errorDisplay}
							question={classPeriodInfo.assignedLesson.socraticQuestions[questionPicker].question}
						/>
					</div>
				</div>
			) : (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<div style={{ fontSize: '150%' }}>No Questions</div>
				</div>
			)}
		</>
	)
}

export default SocraticQuestionPicker
