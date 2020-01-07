import React, { useState } from 'react'

const Readings = ({ readingsValues, setReadingsValues }) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column'
					}}>
					<div
						style={{
							marginRight: '3%',
							fontSize: '160%',
							textAlign: 'center',
							marginBottom: '3%',
							marginTop: '2%'
						}}>
						Readings
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginBottom: '5%'
						}}>
						<div style={{ marginRight: '3%', fontSize: '160%' }}>Pages:</div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								width: '100%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e => setReadingsValues({ ...readingsValues, pages: e.target.value })}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginBottom: '5%'
						}}>
						<div style={{ marginRight: '3%', fontSize: '160%' }}>Sections: </div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								width: '100%',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '100%'
							}}
							onChange={e => setReadingsValues({ ...readingsValues, sections: e.target.value })}
						/>
					</div>
				</div>
			</div>
			<div
				style={{
					fontSize: '160%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				{readingsValues.pages && <div>Pages: {readingsValues.pages}</div>}
				{readingsValues.sections && <div>Sections: {readingsValues.sections}</div>}
			</div>
		</div>
	)
}

export default Readings
