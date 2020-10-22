import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../../redux/reducers/cln'

const Dummy = () => {
  const dispatch = useDispatch()
  const eventsList = useSelector((store) => store.cln.events)
  const calendarName = useSelector((store) => store.cln.calendarName)

  console.log('111111', calendarName)
  // const menu = [mikrotasks, interviewTasks, homework]
  useEffect(() => {
    dispatch(getEvents())
  }, [])
    // const nameCalendar = events.summary
    // const eventList = events.items
    // console.log('111111', eventList)

  return (
    <div>
      <span>{calendarName}</span>
      {eventsList &&
        eventsList.map((it) => {
          return <div key={it.id}>{it.summary}</div>
        })}
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
