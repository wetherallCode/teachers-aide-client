import React from 'react'
const SmallWebsiteResources = () => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '130%',
					height: '10vh',
					borderBottom: '3px solid var(--blue)'
				}}>
				<div>Resource Links</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'center',
					paddingTop: '2%'
				}}>
				<a
					style={{ textDecoration: 'none', color: 'var(--blue)', paddingTop: '10%' }}
					href='https://docs.google.com/document/d/1Dcw0-zzPX_saWVFGNPoHoUu8HUPmBCpP5IJ3CiI9JTw/edit?usp=sharing'>
					Class Handbook
				</a>
				<a
					style={{ textDecoration: 'none', color: 'var(--blue)', paddingTop: '10%' }}
					href='https://docs.google.com/document/d/1_EwSsZ7xSSV7IyernvOo37cLprtueQYV2Ph-A4LXwLw/edit?usp=sharing'>
					Critical Thinking Question Template
				</a>
				<a
					style={{ textDecoration: 'none', color: 'var(--blue)', paddingTop: '10%' }}
					href='https://docs.google.com/document/d/1GanTjd_XtTH0HlprMNIAU6XxX-JFKKAimAbBD4L4NHk/edit?usp=sharing'>
					Open Ended Question Template
				</a>
				<a
					style={{ textDecoration: 'none', color: 'var(--blue)', paddingTop: '10%' }}
					href='https://docs.google.com/document/d/1qMDPpq2_rpnzhp0orQBt3fFGeKWj_8376fG-gdpJXzY/edit'>
					Open Ended Question Guide
				</a>
				<a
					style={{ textDecoration: 'none', color: 'var(--blue)', paddingTop: '10%' }}
					href='https://docs.google.com/document/d/1DRpVrV5492Jy1khLkr5H4NOnpMnRsn5p5GctrRgW1xk/edit'>
					Open Ended Question Rubric
				</a>
				<a
					style={{ textDecoration: 'none', color: 'var(--blue)', paddingTop: '10%' }}
					href='https://docs.google.com/document/d/1ljVfsZtHYIcnEdO_cjnNMvFwHpuByGW50s10gu7woKA/edit?usp=sharing'>
					Government Cheat Sheet
				</a>
			</div>
		</div>
	)
}

export default SmallWebsiteResources
