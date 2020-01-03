import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Attendance from './Attendance'
import ClassPeriodCreator from './ClassPeriodCreator'
import AssignmentRemover from './AssignmentRemover'
import Modal from 'react-responsive-modal'

const FIND_CLASS_PERIOD = gql`
	query findClassPeriodForClassManagerDisplay($assignedDate: Date, $period: periodName) {
		periodName: __type(name: "periodName") {
			enumValues {
				name
			}
		}
		findClassPeriod(assignedDate: $assignedDate, period: $period) {
			_id
			assignedLesson {
				_id
				lessonName
				inUnit {
					name
				}
				warmup
				essentialQuestion {
					question
				}
				readings {
					pages
					sections
				}
				socraticQuestions {
					question
				}
				vocabWords {
					word
					partOfSpeech
					definition
				}
				studyGuideQuestions
			}
			period
			assignedDate
			assignedHomework {
				assignedDate
				dueDate
				assignmentType
				readingPages
				readingSections
			}
		}
	}
`

const ClassManagerDisplay = ({ match }) => {
	const [lessonPlanDate, setLessonPlanDate] = useState(new Date().toISOString().substring(0, 10))
	const [createClassPeriod, setCreateClassPeriod] = useState(true)
	const [removeLesson, setRemoveLesson] = useState(false)

	const { periods } = match.params

	const { data, loading, error } = useQuery(FIND_CLASS_PERIOD, {
		variables: { assignedDate: lessonPlanDate, period: periods }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<div style={{ overflow: 'scroll', height: '100vh' }}>
			<div
				style={{
					color: 'var(--blue)',
					fontSize: '250%',
					marginBottom: '2%',
					marginTop: '2%',
					textDecoration: 'underline',
					textAlign: 'center'
				}}>
				Scheduled Lesson for{' '}
				{lessonPlanDate.substring(5, 7) +
					'/' +
					lessonPlanDate.substring(8, 10) +
					'/' +
					lessonPlanDate.substring(0, 4)}
			</div>
			<div
				style={{
					color: 'var(--blue)',
					fontSize: '200%',
					marginBottom: '2%',
					// textDecoration: 'underline',
					textAlign: 'center'
				}}>
				Period {periods}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<div style={{ fontSize: '130%', color: 'var(--blue)' }}>Select Date: </div>
				<input
					style={{
						width: '20%',
						alignContent: 'center',
						height: '1.5rem',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '150%',
						marginLeft: '2%'
					}}
					type='date'
					value={lessonPlanDate}
					placeholder={lessonPlanDate}
					onChange={e => setLessonPlanDate(e.target.value)}
				/>
			</div>

			{data.findClassPeriod !== null ? (
				<div>
					<div
						style={{
							color: 'var(--white)',
							backgroundColor: 'var(--blue)',
							height: '3rem',
							fontSize: '150%',
							display: 'grid',
							gridTemplateColumns: '1fr 4fr',
							margin: '5%'
							// justifyContent: 'flex-start',
							// alignItems: 'center'
						}}>
						{/* <TodaysDate date={lessonPlanDate} /> */}
						<div
							style={{
								marginLeft: '10%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center'
							}}>
							Lesson Plan
						</div>
						<div
							style={{
								backgroundColor: 'var(--white)',
								color: 'var(--blue)',
								border: '3px solid var(--blue)',
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
								paddingRight: '2%'
							}}>
							<div>{data.findClassPeriod.assignedLesson.lessonName} </div>
							<Modal
								style={{
									overlay: {
										backgroundColor: 'var(--darkGrey)'
									},
									content: {
										// marginTop: '10%',
										marginLeft: '20%',
										width: '40rem',
										height: '25rem'
									}
								}}
								isOpen={removeLesson}
								open={removeLesson}
								onClose={() => setRemoveLesson(false)}
								onRequestClose={() => setRemoveLesson(false)}>
								<div style={{ width: '30rem', height: '20rem' }}>
									<AssignmentRemover
										_id={data.findClassPeriod._id}
										date={lessonPlanDate}
										removeLesson={removeLesson}
										setRemoveLesson={setRemoveLesson}
									/>
								</div>
							</Modal>
							<div
								style={{ color: 'var(--red)', marginLeft: '2%' }}
								onClick={() => {
									setRemoveLesson(true)
								}}>
								Remove
							</div>
						</div>
					</div>
				</div>
			) : (
				<div
					style={{
						color: 'var(--white)',
						backgroundColor: 'var(--blue)',
						height: '3rem',
						fontSize: '150%',
						display: 'grid',
						gridTemplateColumns: '1fr 4fr',
						margin: '5%'
						// justifyContent: 'flex-start',
						// alignItems: 'center'
					}}>
					{/* <TodaysDate date={lessonPlanDate} /> */}
					<div
						style={{
							marginLeft: '10%',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center'
						}}>
						Lesson Plan
					</div>
					<div
						style={{
							backgroundColor: 'var(--white)',
							color: 'var(--blue)',
							border: '3px solid var(--blue)',
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							paddingRight: '2%'
						}}>
						{/* <div onClick={() => setCreateClassPeriod(true)}>
							No Lesson Scheduled - Click to Create
						</div> */}
						<div>No Lesson Scheduled</div>
					</div>
				</div>
			)}
			<div>
				{createClassPeriod && data.findClassPeriod === null && (
					<div style={{ margin: '5%', border: '3px solid var(--blue)', height: '30%' }}>
						<div
							style={{
								fontSize: '150%',
								display: 'grid',
								gridTemplateRows: '1fr 2fr'
							}}>
							<div
								style={{
									color: 'var(--white)',
									backgroundColor: 'var(--blue)',
									display: 'grid',
									gridTemplateColumns: '2fr 5fr',
									height: '3rem',
									paddingLeft: '1.5%'
								}}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center'
									}}>
									Create Class Period
								</div>
							</div>
							<ClassPeriodCreator
								period={periods}
								date={lessonPlanDate}
								allClassperiods={data.periodName.enumValues.map(period => period.name)}
							/>
						</div>
					</div>
				)}
			</div>
			<Attendance date={lessonPlanDate} period={periods}></Attendance>
		</div>
	)
}

export default ClassManagerDisplay
