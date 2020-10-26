import React from 'react'
import HeaderRight from './headerRight'
import WeekDays from './weekDays'
import BigCalendar from './calendarBig'

const Dummy = () => {

  return (
    <div className="h-screen w-full max-w-full">
      <div className="containerCalendar">
        <HeaderRight />
        <WeekDays />
        <BigCalendar />
        <div className="flex h-1 ">&nbsp;</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
