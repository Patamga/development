
import {
  addMonths,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  subMonths

} from 'date-fns'

const DAYS_INTERVAL = 'DAYS_INTERVAL'
const NEW_DATE = 'NEW_DATE'
const CALENDAR_IDS = 'CALENDAR_IDS'
const ADD_CALENDAR = 'ADD_CALENDAR'
const ACTIVATE_CALENDAR = 'ACTIVATE_CALENDAR'
const PASSIVATE_CALENDAR = 'PASSIVATE_CALENDAR'
const UPDATE_CALENDAR_IDS = 'UPDATE_CALENDAR_IDS'
const REMUVE_CAlENDAR = 'RENDEREMUVE_CAlENDARR_CAlENDARS'

const getEndDate = (date) => endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
const getStartDate = (date) => startOfWeek(startOfMonth(date), { weekStartsOn: 1 })
const getInterval = (startDate, endDate) => eachDayOfInterval({start: startDate, end: endDate})
const getSubMont = (date) => subMonths(date, 1)
const getAddMont = (date) => addMonths(date, 1)

const initialState = {
  date: new Date(),
  daysInterval: [],
  viewType: 'month',
  calendarIds: [
    {
      id: 'amaverify@gmail.com',
      active: true
    },
    {
      id: 'pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com',
      active: true
    }
  ],
  calendars: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case DAYS_INTERVAL:
      return {
        ...state,
        daysInterval: action.daysInterval
      }
    case NEW_DATE:
      return {
        ...state,
        date: action.date
      }
    case CALENDAR_IDS:
      if (!state.calendarIds.includes(action.calendarIds)) {
        return {
          ...state,
          calendarIds: [...state.calendarIds, action.calendarIds]
        }
      }
      return state
    case ADD_CALENDAR: {
      const exist = state.calendars.reduce((result, cal) => result || cal.id === action.id, false)
      if (exist) return state
      console.log('Cal:', action.id, "doesn't exist")
      const calendar = { ...action.calendar, active: true, id: action.id }
      return { ...state, calendars: [...state.calendars, calendar] }
    }
    case PASSIVATE_CALENDAR: {
      const calendar = state.calendars.find((cal) => cal.id === action.id)
      console.log('found', calendar)
      if (calendar) {
        calendar.active = false
        return { ...state, calendars: [...state.calendars] }
      }
      return state
    }
    case ACTIVATE_CALENDAR: {
      const calendar = state.calendars.find((cal) => cal.id === action.id)
      console.log('found active', calendar)
      if (calendar) {
        calendar.active = true
        return { ...state, calendars: [...state.calendars] }
      }
      return state
    }
    case UPDATE_CALENDAR_IDS: {
      const obj = state.calendarIds.find((cal) => cal.id === action.id)
      if (obj) {
        obj.active = action.active
        console.log('jbj', obj)
        return { ...state, calendarIds: [...state.calendarIds] }
      }

      const calendarIds = { ...action.calendarIds, active: action.active, id: action.id }
      console.log('update calendarIds', calendarIds)
      return {
        ...state,
        calendarIds: [...state.calendarIds, calendarIds]
      }
    }
    case REMUVE_CAlENDAR: {
      const newCalendarsView = state.calendars.reduce((acc, rec) => {
        if (rec.id !== action.id) {
          return [...acc, rec]
        }
        return acc
      }, [])
      return { ...state, calendars: newCalendarsView }
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

export function addCalendar(id) {
  return (dispatch) => {
    return fetch(`/api/v1/google/calendar_events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ADD_CALENDAR, id, calendar: data })
        dispatch({ type: UPDATE_CALENDAR_IDS, id, active: true })
      })
  }
}

export function passivateCalendar(id) {
  return (dispatch, getState) => {
    const exist = getState().cln.calendars.reduce((result, cal) => result || (cal.id === id), false)
    if (exist) {
      dispatch({ type: PASSIVATE_CALENDAR, id})
      dispatch({ type: UPDATE_CALENDAR_IDS, id, active: false})
    }
  }
}

export function activateCalendar(id) {
  return (dispatch, getState) => {
    const exist = getState().cln.calendars.reduce((result, cal) => result || cal.id === id, false)
    if (exist) {
      dispatch({ type: ACTIVATE_CALENDAR, id })
      dispatch({ type: UPDATE_CALENDAR_IDS, id, active: true })
    }
  }
}

export function remuveCalendar(id) {
  return (dispatch) => dispatch({ type: REMUVE_CAlENDAR, id })
}

export function startCalendar() {
  return (dispatch, getState) => {
    const calendarId = getState().cln.calendarIds
    calendarId.map((obj) => {
      if (obj.active) {
        fetch(`/api/v1/google/calendar_events/${obj.id}`)
          .then((res) => res.json())
          .then((data) => {
            dispatch({ type: ADD_CALENDAR, id: obj.id, calendar: data })
          })
        }
      return {}
    })
  }
}


