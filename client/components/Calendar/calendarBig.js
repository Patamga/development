import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { lightFormat, getDate, format, getMonth } from 'date-fns'
import { substuctMonts, addedMonts } from '../../redux/reducers/cln'

const Dummy = () => {
  const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)
  const today = format(date, 'iii, dd MMM')
  const days = useSelector((store) => store.cln.daysInterval)
  const currentMont = getMonth(date)
  const currentDay = getDate(new Date())

  return (
    <div className="h-screen w-full max-w-full">
      <div className="containerCalendar">
        <div className="headerCalendar">
          <button type="button" className="tooltip">
            Today
            <span className="tooltiptext tooltip-bottom">{today}</span>
          </button>
          <div className="flex">
            <button className="arroWButton" type="button" onClick={() => dispatch(substuctMonts())}>
              &nbsp;&#60;&nbsp;
            </button>
            <button className="arroWButton" type="button" onClick={() => dispatch(addedMonts())}>
              &nbsp;&#62;&nbsp;
            </button>
          </div>
          <div className="dateToday">{format(date, 'MMMM uuuu')}</div>
        </div>
        <div className="weekdays flex w-full ">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>
        <div className="flex h-full w-full">
          <div className="styleMontContainer">
            {days.map((it) => {
              return (
                <div key={lightFormat(it, 'yyyy-MM-dd')}>
                  {currentMont !== getMonth(it) ? (
                    <div className="inWis">
                      <div className="dateStyles">{getDate(it)}</div>
                    </div>
                  ) : (
                    <span className="wis">
                      {currentDay === getDate(it) ? (
                        <div className="styleCurrent">{getDate(it)}</div>
                      ) : (
                        <div className="dateStyles">{getDate(it)}</div>
                      )}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex h-1 w-full border-2 border-gray-600">&nbsp;</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)