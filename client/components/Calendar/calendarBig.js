import React from 'react'
import { useSelector } from 'react-redux'
import { lightFormat, getDate, getMonth } from 'date-fns'


const Dummy = () => {
  // const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)
  const days = useSelector((store) => store.cln.daysInterval)
  const currentMont = getMonth(date)
  const currentToday = getDate(new Date())
  const currentTodayMont = getMonth(new Date())

  return (

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
                      {currentToday === getDate(it) && currentTodayMont === getMonth(it) ? (
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

  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)