import React, { useState, useEffect } from 'react'
import StudentInfoMutatorButton from '../StudentInfoMutatorButton'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const SCORE_THINK_PAIR_SOCRATIC_QUESTION = gql`
	mutation scoreSocraticQuestionProtocolThinkPairGrade(
		$input: ScoreSocraticQuestionProtocolThinkPairInput
	) {
		scoreSocraticQuestionProtocolThinkPairGrade(input: $input) {
			responsibilityPoints
		}
	}
`

export const UNDO_SCORE_THINK_PAIR_SOCRATIC_QUESTION = gql`
	mutation undoScoreSocraticQuestionThinkPairGrade(
		$input: UndoScoreSocraticQuestionProtocolThinkPairInput
	) {
		undoScoreSocraticQuestionProtocolThinkPairGrade(input: $input) {
			responsibilityPoints
		}
	}
`

const ThinkPairScore = ({ student, protocol }) => {
	const [protocolInfo] = protocol
	const [thinkPairInfo] = student.hasProtocols.filter(protocol => protocol.isActive === true)

	const [thinkPairComments, setThinkPairComments] = useState(['Did not discuss question'])
	const [additionalPoints, setAdditionalPoints] = useState(0)
	useEffect(() => {
		if (thinkPairComments.includes('Discussed question')) {
			setAdditionalPoints(additionalPoints + 1)
		} else setAdditionalPoints(0)
	}, [thinkPairComments])

	const [setThinkPairScore] = useMutation(SCORE_THINK_PAIR_SOCRATIC_QUESTION, {
		refetchQueries: ['FindStudent']
	})
	const [undoThinkPairScore] = useMutation(UNDO_SCORE_THINK_PAIR_SOCRATIC_QUESTION, {
		refetchQueries: ['FindStudent']
	})
	return (
		<>
			<div>Think-Pair Grade</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					marginTop: '2%',
					marginBottom: '3%'
				}}>
				<button
					style={
						thinkPairComments.includes('Discussed question')
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
					onClick={() => setThinkPairComments(['Discussed question'])}>
					Discussion
				</button>
				<button
					style={
						thinkPairComments.includes('Did not discuss question')
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
					onClick={() => setThinkPairComments(['Did not discuss question'])}>
					No Discussion
				</button>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '15rem' }}>
				{thinkPairInfo.thinkPairEarnedPoints === 0 && (
					<>
						<StudentInfoMutatorButton
							mutation={setThinkPairScore}
							variables={{
								_id: student._id,
								socraticQuestion: protocolInfo.socraticQuestion,
								thinkPairScore: 2,
								thinkPairEarnedPoints: additionalPoints + 1,
								thinkPairComments: [...thinkPairComments, 'Written answer']
							}}
							buttonDisplay={'Answer'}
							buttonColor={'blue'}
							height={2}
						/>
						<StudentInfoMutatorButton
							mutation={setThinkPairScore}
							variables={{
								_id: student._id,
								socraticQuestion: protocolInfo.socraticQuestion,
								thinkPairScore: 1,
								thinkPairEarnedPoints: additionalPoints + 0,
								thinkPairComments: [...thinkPairComments, 'No written answer']
							}}
							buttonDisplay={'No Answer'}
							buttonColor={'red'}
							height={2}
						/>
					</>
				)}
				{thinkPairInfo.thinkPairEarnedPoints > 0 && (
					<StudentInfoMutatorButton
						mutation={undoThinkPairScore}
						variables={{
							_id: student._id,
							socraticQuestion: protocolInfo.socraticQuestion,
							thinkPairEarnedPoints: thinkPairInfo.thinkPairEarnedPoints
						}}
						buttonDisplay={'Undo'}
						buttonColor={'red'}
						height={2}
					/>
				)}
			</div>
		</>
	)
}

export default ThinkPairScore
