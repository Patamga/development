import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from 'reactjs-popup';
import { lightFormat, getDate, getMonth, formatISO } from 'date-fns'
import { getEvents } from '../../redux/reducers/cln'
import OneEvent from './oneEventButton'
import OneEventDascriotion from './oneEventDescription'


const Dummy = () => {
  const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)
  const days = useSelector((store) => store.cln.daysInterval)
  const eventsList = useSelector((store) => store.cln.events)
  const eventsListDate = useSelector((store) => store.cln.inceventsDate)
  const eventsListDateTime = useSelector((store) => store.cln.inceventsDateTime)
  const currentMonth = getMonth(date)
  const today = getDate(new Date())
  const dateDay = true
  const currentTodayMont = getMonth(new Date())
  const getClassNameCell = (dateCell) => currentMonth !== getMonth(dateCell) ? 'cell_inactive' : 'cell'
  const getClassNameDate = (dateCell) =>
    today === getDate(dateCell) && currentTodayMont === getMonth(dateCell)
      ? 'dateStyles today'
      : 'dateStyles'
  const getEventCell = (datecell, arr) => {
    const dateCell = formatISO(Date.parse(datecell), { representation: 'date' })
    return arr
      .filter((incEvent) => incEvent.date === dateCell)
      .map((incEv) => {
        return eventsList.reduce((acc, rec) => {
          if (rec.id === incEv.id) {
            return rec
          }
          return acc
        }, {})
      })
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
                          position={['top center', 'bottom right', 'bottom left']}
                        >
                          <div>
                            <OneEventDascriotion ev={ev} dateDay={dateDay}/>
                          </div>
                        </Popup>
                      </div>
                    )
                  })}
                  {getEventCell(it, eventsListDateTime).map((ev) => {
                    return (
                      <div key={ev.id}>
                        <Popup
                          trigger={<div role="presentation"><OneEvent ev={ev} /></div>}
                          position={['top center', 'bottom center']}
                        >
                          <div><OneEventDascriotion ev={ev} /> </div>
                        </Popup>
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