import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { lightFormat, getDate, format, getMonth } from 'date-fns'
// import { enGB } from 'date-fns/locale'
// import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { setDaysInterval, substuctMonts, addedMonts } from '../../redux/reducers/cln'




const Dummy = () => {
  const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)
  const days = useSelector((store) => store.cln.daysInterval)
  const rows = useSelector((store) => store.cln.rowsWeeks)
  const currentMont = getMonth(date)
  const currentDay = getDate(new Date())
  const styleHeight = (row) => {
    if (row === 3){
      return 'heightstileF'
    }
    if (row === 4){
      return 'heightstileFF'
    }
    return 'heightstileFFF'
  }

  console.log('000', currentDay)
  const today = format(date, 'iii, dd MMM')


  useEffect(() => {
    dispatch(setDaysInterval())
  }, [date])

  return (
    <div className="relative h-screen w-full bg-white">
      {/* <DatePickerCalendar locale={enGB} /> */}
      <header className="flex header h-16">
        <div className="flex p-2 pl-8 w-full text-center">
          <div className="flex pr-8 ">Calendar</div>
          <div className="flex w-full h-full align-middle text-center">
            <button type="button" className="tooltip">
              Todey
              <span className="tooltiptext tooltip-bottom">{today}</span>
            </button>

            <div className="pr-8 ml-8 flex">
              <button className="px-4" type="button" onClick={() => dispatch(substuctMonts())}>
                &nbsp;&#60;&nbsp;
              </button>
              <div className="">{format(date, 'MMMM uuuu')}</div>
              <button className="px-4" type="button" onClick={() => dispatch(addedMonts())}>
                &nbsp;&#62;&nbsp;
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex h-full w-full">

        <div>
          <div className="weekdays flex w-full h-12">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            <span>Su</span>
          </div>
          <div className="w-full h-full">
            <div className="day">
              {days.map((it) => {
                console.log('it', it)
                return (
                  <span className={styleHeight(rows)} key={lightFormat(it, 'yyyy-MM-dd')}>
                    {currentMont !== getMonth(it) ? (
                      <span className="inWis">
                        <span className="dateStyle">{getDate(it)}</span>
                      </span>
                    ) : (
                      <span className="">
                        {currentDay === getDate(it) ? (
                          <span className="dateStyleCurrent">{getDate(it)}</span>
                        ) : (
                          <span className="dateStyle">{getDate(it)}</span>
                        )}
                      </span>
                    )}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
