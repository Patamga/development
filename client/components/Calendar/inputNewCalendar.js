import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCalendar } from '../../redux/reducers/cln'


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
    <div className="flex flex-col">
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
          onClick={() => dispatch(addCalendar(calendarId), setCalendarId(''))}
        >
          +
        </button>
      </div>

      <span className="text-red-400 text-xs pl-2">the calendar must be public</span>
      <span className="text-xs text-gray-400 pl-2"> testdata for input</span>
      <span className="text-xs text-blue-400 break-words break-all pl-2">
        <b>pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com</b>
      </span>
      <span>&nbsp;</span>
      <span className=" text-xs text-blue-400 break-words break-all pl-2">
        <b>amaverify@gmail.com</b>
      </span>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
