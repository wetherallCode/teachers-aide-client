import React, { useEffect } from 'react'

const StudentInfoMutatorButton = ({
	mutation,
	variables,
	buttonDisplay,
	buttonColor,
	height
	// toggle,
	// setToggle
}) => {
	// console.log(toggle)
	// useEffect(() => {
	// 	if (toggle !== undefined) {
	// 		setToggle(!toggle)
	// 	}
	// }, [])
	return (
		<button
			style={{
				fontSize: '100%',
				height: `${height}rem`,
				width: '100%',
				textDecoration: 'none',
				color: 'var(--white)',
				backgroundColor: `var(--${buttonColor})`,
				borderRadius: '5px',
				boxShadow: `1px 1px 2px 1px var(--${buttonColor})`
			}}
			onClick={() => {
				mutation({
					variables: { input: variables }
				})
				// setToggle(!toggle)
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
			{buttonDisplay}
		</button>
	)
}

export default StudentInfoMutatorButton
