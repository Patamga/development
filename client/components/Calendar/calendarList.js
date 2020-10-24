import React from 'react'
import { useSelector } from 'react-redux'
import AddCalendar from './inputNewCalendar'

const Dummy = () => {
  const listNames = useSelector((store) => store.cln.calendars)
  console.log('calendarList', listNames)

  const onChange = (e) => {
    console.log('checkbox', e.target.checked)
    if (e.target.checked) {
      // const newValue = e.target.value
      // setCalendarId(newValue)
      // value = false
    }
  }

  return (
    <div className="listCalendars">
      <fieldset>
        <legend className="dateTodaySmall px-2"> Calendars </legend>

        {listNames.map((calendar) => {

          return (

            <label key={calendar.summary} htmlFor={calendar.summary} id={calendar.summary}>
              {calendar.summary}
              { typeof calendar.summary !=='undefined'  &&
              <input type="checkbox" checked onChange={onChange} className=" mx-5" />
              }

            </label>
          )
        })}
        <AddCalendar />
      </fieldset>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
