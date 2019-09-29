import React from 'react'

const ResourceButton = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				paddingTop: '2%'
			}}>
			<a
				style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
				href='https://docs.google.com/document/d/1Dcw0-zzPX_saWVFGNPoHoUu8HUPmBCpP5IJ3CiI9JTw/edit?usp=sharing'>
				Class Handbook
			</a>
			<a
				style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
				href='https://docs.google.com/document/d/1qMDPpq2_rpnzhp0orQBt3fFGeKWj_8376fG-gdpJXzY/edit'>
				Open Ended Question Guide
			</a>
			<a
				style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
				href='https://docs.google.com/document/d/1DRpVrV5492Jy1khLkr5H4NOnpMnRsn5p5GctrRgW1xk/edit'>
				Open Ended Question Rubric
			</a>
			<a
				style={{ textDecoration: 'none', color: 'var(--white)', paddingTop: '10%' }}
				href='https://docs.google.com/document/d/1ljVfsZtHYIcnEdO_cjnNMvFwHpuByGW50s10gu7woKA/edit?usp=sharing'>
				Government Cheat Sheet
			</a>
		</div>
	)
}

export default ResourceButton
