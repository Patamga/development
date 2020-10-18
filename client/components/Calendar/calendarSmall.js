import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { lightFormat, getDate, getMonth } from 'date-fns'
import { setDaysInterval } from '../../redux/reducers/cln'
import HeaderLeft from './headerLeft'

const Dummy = () => {
  const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)
  const days = useSelector((store) => store.cln.daysInterval)

  const currentMont = getMonth(date)
  const currentDay = getDate(new Date())

  // const today = format(date, 'iii, dd MMM')

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
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
