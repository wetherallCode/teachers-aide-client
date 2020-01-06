import React, { useState } from 'react'

const Readings = ({ readingsValues, setReadingsValues }) => {
	return (
		<>
			<div>Readings</div>
			<div>Pages:</div>
			<input
				type='text'
				onChange={e => setReadingsValues({ ...readingsValues, pages: e.target.value })}
			/>
			<div>Sections: </div>
			<input
				type='text'
				onChange={e => setReadingsValues({ ...readingsValues, sections: e.target.value })}
			/>
		</>
	)
}

export default Readings
