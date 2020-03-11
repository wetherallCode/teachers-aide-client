import React, { useState, useEffect } from 'react'
import StudentInfoMutatorButton from '../StudentInfoMutatorButton'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const SCORE_SHARE_SOCRATIC_QUESTION = gql`
	mutation scoreSocraticQuestionProtocolShareGrade(
		$input: ScoreSocraticQuestionProtocolShareInput
	) {
		scoreSocraticQuestionProtocolShareGrade(input: $input) {
			responsibilityPoints
		}
	}
`

export const UNDO_SCORE_SHARE_SOCRATIC_QUESTION = gql`
	mutation undoScoreSocraticQuestionProtocolShareGrade(
		$input: UndoScoreSocraticQuestionProtocolShareInput
	) {
		undoScoreSocraticQuestionProtocolShareGrade(input: $input) {
			responsibilityPoints
		}
	}
`
const ShareScore = ({ student, protocol }) => {
	const [protocolInfo] = protocol
	const [shareInfo] = student.hasProtocols.filter(protocol => protocol.isActive === true)
	const [shareComments, setShareComments] = useState(['Good try'])

	console.log(shareInfo.shareEarnedPoints)
	useEffect(() => {
		setShareComments(['Good try'])
	}, [student])

	const [setShareScore, { data }] = useMutation(SCORE_SHARE_SOCRATIC_QUESTION, {
		refetchQueries: ['FindStudent'],
		onCompleted: data => console.log(data)
	})
	const [undoShareScore] = useMutation(UNDO_SCORE_SHARE_SOCRATIC_QUESTION, {
		refetchQueries: ['FindStudent']
	})
	return (
		<div style={{ marginTop: '3%' }}>
			<div>Share Grade</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					marginTop: '2%',
					marginBottom: '3%'
				}}>
				{/* <button
					style={
						shareComments.includes('Refused to answer')
							? {
									backgroundColor: 'var(--blue)',
									color: 'var(--white)',
									height: '2rem',
									marginTop: '2%'
							  }
							: {
									backgroundColor: 'var(--white)',
									color: 'var(--blue)',
									height: '2rem',
									marginTop: '2%'
							  }
					}
					onClick={() => setShareComments(['Refused to answer'])}>
					Refused
				</button> */}
				<button
					style={
						shareComments.includes('Good try')
							? {
									backgroundColor: 'var(--blue)',
									color: 'var(--white)',
									height: '2rem',
									marginTop: '2%'
							  }
							: {
									backgroundColor: 'var(--white)',
									color: 'var(--blue)',
									height: '2rem',
									marginTop: '2%'
							  }
					}
					onClick={() => setShareComments(['Good try'])}>
					Good Try
				</button>
				<button
					style={
						shareComments.includes('Well thought out')
							? {
									backgroundColor: 'var(--blue)',
									color: 'var(--white)',
									height: '2rem',
									marginTop: '2%'
							  }
							: {
									backgroundColor: 'var(--white)',
									color: 'var(--blue)',
									height: '2rem',
									marginTop: '2%'
							  }
					}
					onClick={() => setShareComments(['Well thought out'])}>
					Well thought out
				</button>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '15rem' }}>
				{shareInfo.shareScore === 0 && (
					<>
						<StudentInfoMutatorButton
							mutation={setShareScore}
							variables={{
								_id: student._id,
								socraticQuestion: protocolInfo.socraticQuestion,
								shareScore: 2,
								shareEarnedPoints: 2,
								shareComments: shareComments
							}}
							buttonDisplay={'Answer'}
							buttonColor={'blue'}
							height={2}
						/>
						<StudentInfoMutatorButton
							mutation={setShareScore}
							variables={{
								_id: student._id,
								socraticQuestion: protocolInfo.socraticQuestion,
								shareScore: 1,
								shareEarnedPoints: 0,
								shareComments: ['Refused to answer']
							}}
							buttonDisplay={'No Answer'}
							buttonColor={'red'}
							height={2}
						/>
					</>
				)}
				{shareInfo.shareScore > 0 && (
					<StudentInfoMutatorButton
						mutation={undoShareScore}
						variables={{
							_id: student._id,
							socraticQuestion: protocolInfo.socraticQuestion,
							shareEarnedPoints: shareInfo.shareEarnedPoints
						}}
						buttonDisplay={'Undo'}
						buttonColor={'red'}
						height={2}
					/>
				)}
			</div>
		</div>
	)
}

export default ShareScore
