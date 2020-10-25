import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from 'reactjs-popup';
import { lightFormat, getDate, getMonth, differenceInMinutes } from 'date-fns'
import { addCalendar } from '../../redux/reducers/cln'
import OneEvent from './oneEventButton'
import OneEventDascriotion from './oneEventDescription'


const Dummy = () => {
  const dispatch = useDispatch()
  const startTestData = 'amaverify@gmail.com'
  const today = getDate(new Date())
  const date = useSelector((store) => store.cln.date)
  const dateDay = true
  const currentTodayMont = getMonth(new Date())
  const currentMonth = getMonth(date)
  const getClassNameCell = (dateCell) =>
    currentMonth !== getMonth(dateCell) ? 'cell_inactive' : 'cell'
  const getClassNameDate = (dateCell) =>
    today === getDate(dateCell) && currentTodayMont === getMonth(dateCell)
      ? 'dateStyles today'
      : 'dateStyles'
  const days = useSelector((store) => store.cln.daysInterval)
  const calendars = useSelector((store) => store.cln.calendars)
  console.log('calendars', calendars)

  const getEventDuration = (event) => {
    let start
    let end
    if (event.start.date) {
      start = event.start.date
      end = event.end.date
    } else {
      start = event.start.dateTime
      end = event.end.dateTime
    }

    event.duration = differenceInMinutes(new Date(end), new Date(start))
    return event.duration
  }

  const getDayEvents = (day, calenDars) => {
    const formatDate = (d) => lightFormat(Date.parse(d), 'yyyy-MM-dd')
    if (!calenDars) return []
    const events = calenDars.reduce((dayEvents, calendar) => {
      if (!calendar.items) {
        return dayEvents
      }
      const calEventsForDay = calendar.items.reduce((acc, event) => {
        if ((typeof event.start.date !== 'undefined' &&
              formatDate(event.start.date) === formatDate(day)) ||
            (typeof event.start.dateTime !== 'undefined' &&
              formatDate(event.start.dateTime) === formatDate(day))) {
          return [...acc, event]
        }
        return acc
      }, [])
      return [...dayEvents, ...calEventsForDay]
    }, [])
    events.sort((a, b) => {
      return getEventDuration(b) - getEventDuration(a)
    })
    console.log(events)
    // console.log('differenceInMinutes', differenceInMinutes(new Date(events.start.dateTime, events.end.dateTime)))
    return events
  }

  useEffect(() => {
    dispatch(addCalendar(startTestData))
  }, [])

  return (
    <div className="flex h-full w-full">

      <div className="styleMontContainer">
        {days.map((it) => {

          return (
            <div key={lightFormat(it, 'yyyy-MM-ddh')}>
              {console.log(
                '00000000000000000',
                getDayEvents(it, calendars).sort(
                  (a, b) => new Date(a.start.dateTime) - new Date(b.start.date)
                )
              )}
              <div className={getClassNameCell(it)}>
                <div className={getClassNameDate(it)}>
                  <span>{getDate(it)}</span>
                </div>
                <div className="eventCell">
                  {getDayEvents(it, calendars).map((ev) => {
                      return (
                        <div key={ev.id} className="eventOne">
                          {typeof ev.start.date !== 'undefined'  && (
                          <Popup
                            trigger={<div role="presentation">{ev.summary}</div>}
                            position={['top center', 'bottom center']}
                          >
                            <div>
                              <OneEventDascriotion ev={ev} dateDay={dateDay} />{' '}
                            </div>
                          </Popup>
                          )}
                        </div>
                      )
                    })}
                  {getDayEvents(it, calendars).map((ev) => {
                    console.log('--',it,'-- ', ev)
                    return (
                      <div key={`${ev.id}${ev.summary}`}>


                        {typeof ev.start.dateTime !== 'undefined'  && (
                          <Popup
                            trigger={
                              <div role="presentation">
                                <OneEvent ev={ev} />
                              </div>
                            }
                            position={['top center', 'bottom center']}
                          >
                            <div>
                              <OneEventDascriotion ev={ev} />{' '}
                            </div>
                          </Popup>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)