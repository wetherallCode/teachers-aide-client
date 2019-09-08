import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ResourceButton from './ResourceButton'

const AgendaItemsNavBar = ({ match, lesson }) => {
	const [agendaButton, setAgendaButton] = useState(false)

	const [studyGuideButton, setStudyGuideButton] = useState(false)

	const [classRoomResources, setClassRoomResources] = useState(false)

	const todaysDate = new Date().toISOString().substring(0, 10)
	const [oldLessonToggle, setOldLessonToggle] = useState(false)
	const [oldLessonDate, setOldLessonDate] = useState(todaysDate)

	return (
		<div
			style={{
				height: '120vh',
				backgroundColor: 'var(--blue)',
				color: 'var(--white)',
				fontSize: '150%',
				borderRight: '3px solid var(--white)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				paddingTop: '8%',
				overflow: 'scroll'
			}}>
			<div style={{ fontSize: '130%', marginBottom: '10%', textDecoration: 'underline' }}>
				{match.params.courseName.substring(0, 1)} Day{' '}
				{/* <div style={{ fontSize: '120%', marginTop: '3%', marginBottom: '6%' }}> */}
				Period {match.params.courseName.substring(2, 3)}-{match.params.courseName.substring(3, 4)}{' '}
			</div>
			<button
				style={{
					width: '80%',
					height: '6%',
					textDecoration: 'underline',
					fontSize: '130%',
					color: 'var(--blue)',
					backgroundColor: 'var(--grey)',
					textShadow: '1px 1px 8px var(--darkGrey)',
					borderRadius: '5px',
					boxShadow: '1px 1px 1px black'
				}}
				onClick={() => {
					setAgendaButton(!agendaButton)
					setOldLessonToggle(false)
				}}>
				Agenda
			</button>
			{agendaButton && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingTop: '2%'
					}}>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/warmUp`}>
						Warm Up
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/essentialQuestion`}>
						Essential Question
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/readings`}>
						Reading
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/vocabWords`}>
						Vocabulary
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/socraticQuestions`}>
						Socratic Questions
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/workDue`}>
						Homework
					</Link>
				</div>
			)}
			{lesson.assignedLesson.studyGuideQuestions && (
				<button
					style={{
						width: '80%',
						height: '6%',
						textDecoration: 'underline',
						fontSize: '130%',
						color: 'var(--blue)',
						backgroundColor: 'var(--grey)',
						textShadow: '1px 1px 8px var(--darkGrey)',
						borderRadius: '5px',
						boxShadow: '1px 1px 1px black',
						marginTop: '10%'
					}}
					onClick={() => {
						setStudyGuideButton(!studyGuideButton)
					}}>
					Study Guide
				</button>
			)}
			{studyGuideButton && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingTop: '2%'
					}}>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						to={`${match.url}/studyGuideQuestions`}>
						Study Guide
					</Link>
				</div>
			)}
			<button
				style={{
					width: '80%',
					height: '6%',
					textDecoration: 'underline',
					fontSize: '130%',
					color: 'var(--blue)',
					backgroundColor: 'var(--grey)',
					textShadow: '1px 1px 8px var(--darkGrey)',
					borderRadius: '5px',
					boxShadow: '1px 1px 1px black',
					marginTop: '10%'
				}}
				onClick={() => {
					setOldLessonToggle(!oldLessonToggle)
					setAgendaButton(false)
				}}>
				Old Lessons
			</button>
			{oldLessonToggle && (
				<>
					<input
						style={{
							width: '70%',
							height: '5%',
							marginTop: '10%',
							fontSize: '100%',
							color: 'var(--blue)'
						}}
						type='date'
						value={oldLessonDate}
						onChange={e => setOldLessonDate(e.target.value)}></input>
					<Link
						style={{
							marginRight: '1%',
							marginTop: '10%',
							// fontSize: '150%',
							color: 'var(--white)',
							textDecoration: 'none'
						}}
						to={`${match.url}/oldLesson/${oldLessonDate}`}>
						Get Lesson
					</Link>
				</>
			)}
			<button
				style={{
					width: '80%',
					height: '6%',
					textDecoration: 'underline',
					fontSize: '130%',
					color: 'var(--blue)',
					backgroundColor: 'var(--grey)',
					textShadow: '1px 1px 8px var(--darkGrey)',
					borderRadius: '5px',
					boxShadow: '1px 1px 1px black',
					marginTop: '10%'
				}}
				onClick={() => {
					setClassRoomResources(!classRoomResources)
				}}>
				Resources
			</button>
			{classRoomResources && <ResourceButton></ResourceButton>}
		</div>
	)
}

export default AgendaItemsNavBar
