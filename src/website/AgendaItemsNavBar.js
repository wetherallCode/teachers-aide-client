import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AgendaItemsNavBar = ({ match }) => {
	const [agendaButton, setAgendaButton] = useState(false)

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
						paddingTop: '8%'
					}}>
					<div
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}

						// to={`${match.url}/`}
					>
						Warm Up
					</div>
					<div
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						// to={`${match.url}/`}
					>
						Essential Question
					</div>
					<div
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						// to={`${match.url}/`}
					>
						Reading
					</div>
					<div
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						// to={`${match.url}/`}
					>
						Vocabulary
					</div>
					<div
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}
						// to={`${match.url}/`}
					>
						Questions
					</div>
					<div
						style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
						onClick={() => console.log('click')}

						// to={`${match.url}/`}
					>
						Homework
					</div>
				</div>
			)}
		</div>
	)
}

export default AgendaItemsNavBar
