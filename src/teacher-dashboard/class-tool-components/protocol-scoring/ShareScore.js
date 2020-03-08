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
	const [shareComments, setShareComments] = useState([])
	console.log(shareInfo.shareEarnedPoints)
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
				{shareComments.includes('Refused to answer') && (
					<button
						style={{
							backgroundColor: 'var(--blue)',
							color: 'var(--white)',
							height: '2rem',
							marginTop: '2%'
						}}
						onClick={() => {
							const commentLocation = shareComments.findIndex(
								comment => comment === 'Refused to answer'
							)

							setShareComments(list => [
								...list.slice(0, commentLocation),
								...list.slice(commentLocation + 1)
							])
						}}>
						Refused
					</button>
				)}
				{!shareComments.includes('Refused to answer') && (
					<button
						style={{
							backgroundColor: 'var(--white)',
							color: 'var(--blue)',
							height: '2rem',
							marginTop: '2%'
						}}
						onClick={() => setShareComments(list => [...list, 'Refused to answer'])}>
						Refused
					</button>
				)}
				{shareComments.includes('Good try') && (
					<button
						style={{
							backgroundColor: 'var(--blue)',
							color: 'var(--white)',
							height: '2rem',
							marginTop: '2%'
						}}
						onClick={() => {
							const commentLocation = shareComments.findIndex(comment => comment === 'Good try')

							setShareComments(list => [
								...list.slice(0, commentLocation),
								...list.slice(commentLocation + 1)
							])
						}}>
						Good Try
					</button>
				)}
				{!shareComments.includes('Good try') && (
					<button
						style={{
							backgroundColor: 'var(--white)',
							color: 'var(--blue)',
							height: '2rem',
							marginTop: '2%'
						}}
						onClick={() => setShareComments(list => [...list, 'Good try'])}>
						Good Try
					</button>
				)}
				{shareComments.includes('Well thought out') && (
					<button
						style={{
							backgroundColor: 'var(--blue)',
							color: 'var(--white)',
							height: '2rem',
							marginTop: '2%'
						}}
						onClick={() => {
							const commentLocation = shareComments.findIndex(
								comment => comment === 'Well thought out'
							)

							setShareComments(list => [
								...list.slice(0, commentLocation),
								...list.slice(commentLocation + 1)
							])
						}}>
						Well thought out
					</button>
				)}
				{!shareComments.includes('Well thought out') && (
					<button
						style={{
							backgroundColor: 'var(--white)',
							color: 'var(--blue)',
							height: '2rem',
							marginTop: '2%'
						}}
						onClick={() => setShareComments(list => [...list, 'Well thought out'])}>
						Well thought out
					</button>
				)}
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '15rem' }}>
				{shareInfo.shareEarnedPoints === 0 && (
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
								shareComments: shareComments
							}}
							buttonDisplay={'No Answer'}
							buttonColor={'red'}
							height={2}
						/>
					</>
				)}
				{shareInfo.shareEarnedPoints > 0 && (
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
