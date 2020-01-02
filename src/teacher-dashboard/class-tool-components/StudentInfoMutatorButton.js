import React from 'react'

const StudentInfoMutatorButton = ({ mutation, variables, buttonDisplay, buttonColor }) => {
	console.log(variables, mutation)
	return (
		<button
			style={{
				fontSize: '100%',
				height: '3rem',
				width: '100%',
				textDecoration: 'none',
				color: 'var(--white)',
				backgroundColor: `var(--${buttonColor})`,
				borderRadius: '5px',
				display: 'flex',
				justifyContent: 'center',
				boxShadow: `1px 1px 2px 1px var(--${buttonColor})`
			}}
			onClick={() => {
				mutation({
					variables: { input: variables }
				})
			}}
			onMouseDown={e => {
				e.target.style.backgroundColor = 'var(--white)'
				e.target.style.color = `var(--${buttonColor})`
			}}
			onTouchStart={e => {
				e.target.style.backgroundColor = 'var(--white)'
				e.target.style.color = `var(--${buttonColor})`
			}}
			onMouseUp={e => {
				e.target.style.backgroundColor = `var(--${buttonColor})`
				e.target.style.color = 'var(--white)'
			}}
			onTouchEnd={e => {
				e.target.style.backgroundColor = `var(--${buttonColor})`
				e.target.style.color = 'var(--white)'
			}}>
			<div>{buttonDisplay}</div>
		</button>
	)
}

export default StudentInfoMutatorButton
