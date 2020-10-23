import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from 'reactjs-popup';
import { lightFormat, getDate, getMonth, formatISO } from 'date-fns'
import { getEvents } from '../../redux/reducers/cln'
import OneEvent from './oneEventButton'
import OneEventDascriotion from './oneEventDescription'


const Dummy = () => {
  const dispatch = useDispatch()
  const calendarName = useSelector((store) => store.cln.calendarNameList)
  console.log('calendarName', calendarName)
  const date = useSelector((store) => store.cln.date)
  console.log('date', date)
  const days = useSelector((store) => store.cln.daysInterval)
  console.log('days', days)
  const eventsList = useSelector((store) => store.cln.events)
  console.log('eventsList', eventsList)
  const eventsListDate = useSelector((store) => store.cln.inceventsDate)
  console.log('eventsListDate', eventsListDate)
  const eventsListDateTime = useSelector((store) => store.cln.inceventsDateTime)
  console.log('eventsListDateTime', eventsListDateTime)
  const currentMonth = getMonth(date)
  console.log('currentMonth', currentMonth)
  const today = getDate(new Date())
  const dateDay = true
  const currentTodayMont = getMonth(new Date())
  console.log('currentTodayMont', currentTodayMont)
  const getClassNameCell = (dateCell) => currentMonth !== getMonth(dateCell) ? 'cell_inactive' : 'cell'
  const getClassNameDate = (dateCell) =>
    today === getDate(dateCell) && currentTodayMont === getMonth(dateCell)
      ? 'dateStyles today'
      : 'dateStyles'
  const getEventCell = (datecell, arr) => {

    const dateCell = formatISO(Date.parse(datecell), { representation: 'date' })
    const result = arr
      .filter((incEvent) => incEvent.date === dateCell)
      .map((incEv) => {
        return eventsList.reduce((acc, rec) => {
          if (rec.id === incEv.id) {
            return rec
          }
          return acc
        }, {})
      })
      console.log('result', result)
      return result
  }
  useEffect(() => {
    dispatch(getEvents())
  }, [])

  return (
    <div className="flex h-full w-full">
      <div className="styleMontContainer">
        {days.map((it) => {
          return (
            <div key={lightFormat(it, 'yyyy-MM-ddh')}>
              <div className={getClassNameCell(it)}>
                <div className={getClassNameDate(it)}>
                  <span>{getDate(it)}</span>
                </div>
                <div className="eventCell">
                  {getEventCell(it, eventsListDate).map((ev) => {

                    return (
                      <div key={ev.id} className="eventOne">
                        <Popup
                          trigger={<div role="presentation">{ev.summary}</div>}
                          position={['top center', 'bottom center']}
                        >
                          <div><OneEventDascriotion ev={ev} dateDay={dateDay} /> </div>
                        </Popup>
                      </div>
                    )
                  })}
                  {getEventCell(it, eventsListDateTime).map((ev) => {

                    return (
                      <div key={`${ev.id}${ev.summary}`}>
                        {typeof ev.start.dateTime !== 'undefined' && (
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