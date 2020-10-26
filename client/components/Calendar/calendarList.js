import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import AddCalendar from './inputNewCalendar'
import { passivateCalendar, activateCalendar, remuveCalendar } from '../../redux/reducers/cln'

const Dummy = () => {
  const dispatch = useDispatch()
  const calendars = useSelector((store) => store.cln.calendars)
  const onChange = (e) => {
    if (!e.target.checked) {
      return(
      dispatch(passivateCalendar(e.target.id))
      )
    }
    return dispatch(activateCalendar(e.target.id))
  }
  return (
    <div className="listCalendars">
      <fieldset>
        <legend className="dateTodaySmall px-2"> Calendars </legend>
        <div className="flex flex-col">
          {calendars.map((calendar) => {
            return (
              <label
                key={calendar.summary}
                htmlFor={calendar.id}
                className="flex box-border justify-between content-between"
              >
                <div className=" text-base text-gray-600 ml-2 w-2">
                  <button
                    type="button"
                    className=""
                    onClick={() => dispatch(remuveCalendar(calendar.id))}
                  >
                    <span>&#10005;</span>
                  </button>
                </div>
                <div className=" text-xs text-gray-700 ml-2 truncate " alt="{calendar.summary}">
                  {calendar.summary}
                </div>
                {typeof calendar.summary !== 'undefined' && (
                  <div className=" text-base text-gray-600 mr-2 w-2">
                    <input
                      type="checkbox"
                      id={calendar.id}
                      checked={calendar.active}
                      onChange={onChange}
                      className="pr-2"
                    />
                  </div>
                )}
              </label>
            )
          })}
        </div>
        <AddCalendar />
      </fieldset>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
