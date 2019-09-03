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
	console.log(lesson.assignedLesson.studyGuideQuestions)
	return (
		<div
			style={{
				backgroundColor: 'var(--blue)',
				color: 'var(--white)',
				fontSize: '150%',
				borderRight: '3px solid var(--white)',
				height: '85vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				paddingTop: '8%',
				overflow: 'scroll'
			}}>
			<button
				style={{
					width: '80%',
					height: '8%',
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
						onClick={() => console.log('click')}
						to={`${match.url}/warmUp`}>
						Warm Up
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						to={`${match.url}/essentialQuestion`}>
						Essential Question
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						to={`${match.url}/readings`}>
						Reading
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						to={`${match.url}/vocabWords`}>
						Vocabulary
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						to={`${match.url}/socraticQuestions`}>
						Socratic Questions
					</Link>
					<Link
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						to={`${match.url}/workDue`}>
						Homework
					</Link>
				</div>
			)}
			{lesson.assignedLesson.studyGuideQuestions && (
				<button
					style={{
						width: '80%',
						height: '8%',
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
					height: '8%',
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
					height: '8%',
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
