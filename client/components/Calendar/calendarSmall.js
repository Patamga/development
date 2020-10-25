import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { lightFormat, getDate, getMonth } from 'date-fns'
import { setDaysInterval } from '../../redux/reducers/cln'
import HeaderLeft from './headerLeft'

import CalendarList from './calendarList'


const Dummy = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  
  const date = useSelector((store) => store.cln.date)
  const days = useSelector((store) => store.cln.daysInterval)
  const currentMonth = getMonth(date)
  const currentTodayMont = getMonth(new Date())
  const today = getDate(new Date())
  const getClassNameCell = (dateCell) =>
    currentMonth !== getMonth(dateCell) ? 'cell_inactive' : 'cell'
  const getClassNameDate = (dateCell) =>
    today === getDate(dateCell) && currentTodayMont === getMonth(dateCell)
      ? 'dateStyles today'
      : 'dateStyles'
  // const currentMont = getMonth(date)
  // const currentToday = getDate(new Date())


  useEffect(() => {
    dispatch(setDaysInterval())
  }, [date])

  return (
    <div className="w-full bg-white mt-6 mb-8">
      <div className=" flex flex-col text-xs">
        <HeaderLeft />
        <div className="weekdays">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>
        <div className="flex h-full w-full">
          <div className="styleSmallMontContainer">
            {days.map((it) => {
              return (
                <div key={lightFormat(it, 'yyyy-MM-dd')}>
                  <div className={getClassNameCell(it)}>
                    <div className={getClassNameDate(it)}>
                      <span>{getDate(it)}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {location.pathname === '/calendar/' &&
      <CalendarList />
      }
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
