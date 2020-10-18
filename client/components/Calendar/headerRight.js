import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format} from 'date-fns'
import { substuctMonts, addedMonts, setTodayDate } from '../../redux/reducers/cln'

const Dummy = () => {
  const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)
  const today = format(date, 'iii, dd MMM')

  return (
    <div className="headerCalendar">
      <button type="button" className="tooltip" onClick={() => dispatch(setTodayDate())}>
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
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)