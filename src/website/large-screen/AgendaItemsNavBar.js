import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ResourceButton from '../ResourceButton'

const AgendaItemsNavBar = ({ match, lesson, setAgendaItemSelector }) => {
	const [agendaButton, setAgendaButton] = useState(false)
	const [classRoomResources, setClassRoomResources] = useState(false)

	const todaysDate = new Date().toISOString().substring(0, 10)
	const [oldLessonToggle, setOldLessonToggle] = useState(false)
	const [oldLessonDate, setOldLessonDate] = useState(todaysDate)

	return (
		<div
			style={{
				height: '100vh',
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
					<div
						onClick={() => setAgendaItemSelector('STUDY_GUIDE')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Study Guide
					</div>
					<div
						onClick={() => setAgendaItemSelector('WARMUP')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Warm Up
					</div>
					<div
						onClick={() => setAgendaItemSelector('ESSENTIAL_QUESTION')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Essential Question
					</div>
					<div
						onClick={() => setAgendaItemSelector('READINGS')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Readings
					</div>
					<div
						onClick={() => setAgendaItemSelector('VOCAB')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Vocabulary
					</div>
					<div
						onClick={() => setAgendaItemSelector('PROTOCOLS')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Socratic Questions
					</div>
					<div
						onClick={() => setAgendaItemSelector('HOMEWORK')}
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}>
						Homework
					</div>
				</div>
			)}
			{/* {lesson.assignedLesson.studyGuideQuestions && (
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
			)} */}
			{/* {studyGuideButton && (
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
						>
						Study Guide
					</Link>
				</div>
			)} */}
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
						}}>
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
