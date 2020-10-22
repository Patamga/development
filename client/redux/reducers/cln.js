
import {
  addMonths,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  subMonths,
  formatISO
} from 'date-fns'

const DAYS_INTERVAL = 'DAYS_INTERVAL'
const NEW_DATE = 'NEW_DATE'
const SET_EVENTS = 'SET_EVENTS'
const SET_INC_EVENTS_DATE = 'SET_INC_EVENTS_DATE'
const SET_INC_EVENTS_DTE_TIME = 'SET_INC_EVENTS_DTE_TIME'
const SET_CALENDAR_NAME = 'SET_CALENDAR_NAME'

const getEndDate = (date) => endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
const getStartDate = (date) => startOfWeek(startOfMonth(date), { weekStartsOn: 1 })
const getInterval = (startDate, endDate) => eachDayOfInterval({start: startDate, end: endDate})
const getSubMont = (date) => subMonths(date, 1)
const getAddMont = (date) => addMonths(date, 1)
const getIncEventsDate = (data) =>
  data.reduce((acc, rec) => {
    if (typeof rec.start.date !== 'undefined') {
      return [...acc, { date: rec.start.date, id: rec.id }]
    }
    return acc
  }, [])
const getIncEventsDateTime = (data) =>
  data.reduce((acc, rec) => {
    if (typeof rec.start.dateTime !== 'undefined') {
      const format = formatISO(Date.parse(rec.start.dateTime), { representation: 'date' })
      return [...acc, { date: format, id: rec.id }]
    }
    return acc
  }, [])

const initialState = {
  date: new Date(),
  daysInterval: [],
  viewType: 'month',
  events: [],
  inceventsDate: [],
  inceventsDateTime: [],
  calendarName: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'DAYS_INTERVAL':
      return {
        ...state,
        daysInterval: action.daysInterval
      }
    case 'NEW_DATE':
      return {
        ...state,
        date: action.date
      }
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.events
      }
    case 'SET_INC_EVENTS_DATE':
      return {
        ...state,
        inceventsDate: action.inceventsDate
      }
    case 'SET_INC_EVENTS_DTE_TIME':
      return {
        ...state,
        inceventsDateTime: action.inceventsDateTime
      }
    case 'SET_CALENDAR_NAME':
      return {
        ...state,
        calendarName: action.calendarName
      }
    default:
      return state
  }
}

export function setDaysInterval() {
  return (dispatch, getState) => {
    const dateCalendar = getState().cln.date
    const startDate = getStartDate(dateCalendar)
    const endDate = getEndDate(dateCalendar)
    const intrval = getInterval(startDate, endDate)
    dispatch({ type: DAYS_INTERVAL, daysInterval: intrval })
  }
}

export function substuctMonts() {
  return (dispatch, getState) => {
    const dateCalendar = getState().cln.date
    const mont = getSubMont(dateCalendar)
    dispatch({ type: NEW_DATE, date: mont })
  }
}
export function addedMonts() {
  return (dispatch, getState) => {
    const dateCalendar = getState().cln.date
    const mont = getAddMont(dateCalendar)
    dispatch({ type: NEW_DATE, date: mont })
  }
}
export function setTodayDate() {
  return (dispatch) => {
    const today = new Date()
    dispatch({ type: NEW_DATE, date: today })
  }
}

export function getEvents() {
  return (dispatch) => {
    fetch('/api/v1/google/calendar_events')
      .then((res) => res.json())
      .then((data) => {
        const events = data.items
        const eventdate = getIncEventsDate(events)
        const eventdatetime = getIncEventsDateTime(events)
        dispatch({ type: SET_EVENTS, events })
        dispatch({ type: SET_INC_EVENTS_DATE, inceventsDate: eventdate })
        dispatch({ type: SET_INC_EVENTS_DTE_TIME, inceventsDateTime: eventdatetime })
        dispatch({ type: SET_CALENDAR_NAME, calendarName: data.summary })
      })
  }
}

