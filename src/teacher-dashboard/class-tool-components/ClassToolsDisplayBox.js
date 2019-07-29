import React from 'react'
import Timer from 'react-compound-timer'

const ClassToolsDisplayBox = ({ selector }) => {
	return (
		<>
			{selector === 0 ? (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						alignItems: 'flex-start',
					}}>
					<button className='whiteButton'>Button</button>
					<button className='whiteButton'>Button</button>
					<button className='whiteButton'>Button</button>
					<div
						style={{
							height: 'auto',
							backgroundColor: 'var(--white)',
							width: '90%',
							overflow: 'auto',
						}}>
						button
					</div>
				</div>
			) : selector === 1 ? (
				<Timer
					initialTime={0}
					startImmediately={false}
					style={{ display: 'grid', gridTemplateRows: '1fr 2fr' }}>
					{({ start, resume, pause, stop, reset }) => {
						return (
							<div>
								<div
									style={{
										fontSize: '400%',
										height: '4rem',
										backgroundColor: 'var(-white)',
										textAlign: 'center',
									}}>
									<Timer.Minutes />:
									<Timer.Seconds />
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'flex-start',
										marginTop: '3.5%',
										marginBottom: '10px',
									}}>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={start}>
										Start
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={pause}>
										Pause
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={resume}>
										Resume
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={stop}>
										Stop
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={reset}>
										Reset
									</button>
								</div>
							</div>
						)
					}}
				</Timer>
			) : selector === 2 ? (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						alignItems: 'flex-start',
					}}>
					<button className='whiteButton' style={{ backgroundColor: 'var(--grey)' }}>
						Button
					</button>
					<button className='whiteButton' style={{ backgroundColor: 'var(--grey)' }}>
						Button
					</button>
					<button className='whiteButton' style={{ backgroundColor: 'var(--grey)' }}>
						Button
					</button>
					<div
						style={{
							height: 'auto',
							backgroundColor: 'var(--white)',
							width: '90%',
							overflow: 'auto',
						}}>
						button
					</div>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						alignItems: 'flex-start',
					}}>
					<button className='whiteButton'>Button</button>
					<button className='whiteButton'>Button</button>
					<button className='whiteButton'>Button</button>
					<div
						style={{
							height: 'auto',
							backgroundColor: 'var(--white)',
							width: '90%',
							overflow: 'auto',
						}}>
						button
					</div>
				</div>
			)}
		</>
	)
}

export default ClassToolsDisplayBox
