import React from 'react'
import Desk from './Desk'

const DeskSelector = ({ match, periodName, todaysDate, setPresentStudents }) => {
	return (
		<div
			style={{
				backgroundColor: 'var(--white)',
				display: 'grid',
				gridGap: '1px',
				gridTemplateRows: '1fr 1fr 1fr 1fr',
				gridTemplateColumns: '1fr 1fr 1fr',
				paddingBottom: '4%',
				border: '1px solid var(--blue)'
			}}>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={1}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={2}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={3}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={4}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={5}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={6}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={7}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={8}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={9}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={10}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={11}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={12}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={13}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={14}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={15}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={16}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={17}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={18}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={19}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={20}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={21}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={22}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div className='class-room-desk-pair'>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={23}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
				<Desk
					todaysDate={todaysDate}
					match={match}
					deskNumber={24}
					periodName={periodName}
					setPresentStudents={setPresentStudents}
				/>
			</div>
			<div>{}</div>
		</div>
	)
}

export default DeskSelector
