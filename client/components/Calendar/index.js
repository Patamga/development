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
        <div className="flex h-1 w-full border-2 border-gray-600">&nbsp;</div>
        {/* <iframe
          title="1222"
          src="https://calendar.google.com/calendar/embed?src=q7gba3q71v66v7mhkbd12rgp2c%40group.calendar.google.com&ctz=Europe%2FKiev"

          width="800"
          height="600"

          scrolling="no"
        > </iframe> */}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
