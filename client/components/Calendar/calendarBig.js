import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from 'reactjs-popup'
import { lightFormat, getDate, getMonth } from 'date-fns'
import { startCalendar } from '../../redux/reducers/cln'
import OneEvent from './oneEventButton'
import OneEventDascriotion from './oneEventDescription'
import OneEventDay from './oneEvendAllDay'

const Dummy = () => {
  const dispatch = useDispatch()
  const today = getDate(new Date())
  const date = useSelector((store) => store.cln.date)
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

  // const getEventDuration = (event) => {
  //   let start
  //   let end
  //   if (event.start.date) {
  //     start = event.start.date
  //     end = event.end.date
  //   } else {
  //     start = event.start.dateTime
  //     end = event.end.dateTime
  //   }
  //   event.duration = differenceInMinutes(new Date(end), new Date(start))
  //   return event.duration
  // }
  const getDayEvents = (day, calenDars) => {
    const formatDate = (d) => lightFormat(new Date(d), 'yyyy-MM-dd')
    if (!calenDars) return []
    const events = calenDars.reduce((dayEvents, calendar) => {
      if (!calendar.items) {
        return dayEvents
      }
      if (calendar.active) {
        const calEventsForDay = calendar.items.reduce((acc, event) => {
          if (
            (typeof event.start.date !== 'undefined' &&
              formatDate(event.start.date) === formatDate(day)) ||
            (typeof event.start.dateTime !== 'undefined' &&
              formatDate(event.start.dateTime) === formatDate(day))
          ) {
            return [...acc, event]
          }
          return acc
        }, [])
        return [...dayEvents, ...calEventsForDay]
      }
      return dayEvents
    }, [])
    // events.sort((a, b) => {
    //   return getEventDuration(b) - getEventDuration(a)
    // })
    return events
  }

  useEffect(() => {
    dispatch(startCalendar())
  }, [])
  return (
    <div className="flex h-full w-full">
      <div className="styleMontContainer">
        {days.map((it) => {
          return (
            <div key={new Date(it)}>
              <div className={getClassNameCell(it)}>
                <div className={getClassNameDate(it)}>
                  <span>{getDate(it)}</span>
                </div>
                <div className="eventCell">
                  {getDayEvents(it, calendars).map((ev) => {
                    return (
                      <div key={ev.id}>
                        {typeof ev.start.date !== 'undefined' && (
                          <Popup
                            trigger={
                              <div role="presentation">
                                <OneEventDay ev={ev} />
                              </div>
                            }
                            position={[
                              'top center',
                              'bottom center',
                              'top center',
                              'bottom center'
                            ]}
                          >
                            <div>
                              <OneEventDascriotion ev={ev} />
                            </div>
                          </Popup>
                        )}
                        {typeof ev.start.dateTime !== 'undefined' && (
                          <Popup
                            trigger={
                              <div role="presentation">
                                <OneEvent ev={ev} />
                              </div>
                            }
                            position={[
                              'top center',
                              'bottom center',
                              'top center',
                              'bottom center'
                            ]}
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
