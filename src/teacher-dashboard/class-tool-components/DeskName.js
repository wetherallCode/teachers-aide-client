import React, { useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const SET_ISPRESENT_FOR_PROTOCOL = gql`
	mutation setIsPresentForProtocol($input: SetSocraticQuestionProtcolIsPresentInput) {
		setSocraticQuestionProtocolIsPresent(input: $input) {
			firstName
		}
	}
`

const DeskName = ({ student, todaysDate }) => {
	const protocolIsActive = student.hasProtocols.some(protocol => protocol.isActive === true)
	const [activeProtocol] = student.hasProtocols.filter(protocol => protocol.isActive === true)
	const isAbsent = student.daysAbsent.includes(todaysDate)
	// console.log(student.firstName + ': ' + isAbsent)

	const [setIsPresent, { data }] = useMutation(SET_ISPRESENT_FOR_PROTOCOL, {
		refetchQueries: ['FindStudent']
		// onCompleted: data => console.log(data)
	})
	const studentNeverMisses = student.daysAbsent.length === 0

	// console.log(activeProtocol.socraticQuestion, activeProtocol.isActive)
	useEffect(() => {
		if (!isAbsent || studentNeverMisses) {
			if (activeProtocol) {
				setIsPresent({
					variables: {
						input: {
							_id: student._id,
							socraticQuestion: activeProtocol.socraticQuestion,
							isActive: activeProtocol.isActive,
							isPresent: true
						}
					}
				})
			}
		}
	}, [activeProtocol, isAbsent])

	return (
		<div>
			{student.nickName === null || student.nickName === '' ? student.firstName : student.nickName}
		</div>
	)
}

export default DeskName
