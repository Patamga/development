import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateListCalendars } from '../../redux/reducers/cln'


const Dummy = () => {
  const dispatch = useDispatch()
  const [calendarId, setCalendarId] = useState('')
  const re = /^[ -~а-яА-Я]*$/
  const onChange = (e) => {
    if (re.test(e.target.value)) {
      const newValue = e.target.value
      setCalendarId(newValue)
    }
  }

  return (
    <div>
      <div className=" flex w-full">
        <input
          className="inputCalendar"
          type="text"
          placeholder="Calendar ID"
          value={calendarId}
          onChange={onChange}
        />
        <button
          className=" w-2 text-3xl text-gray-600 mx-3"
          type="button"
          onClick={() => dispatch(updateListCalendars(calendarId))}
        >
          +
        </button>
      </div>
      <span>the calendar must be public</span>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
