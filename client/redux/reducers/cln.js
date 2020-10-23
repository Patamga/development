
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
const LIST_CALENDAR_IDS = 'LIST_CALENDAR_IDS'
const LIST_CALENDAR_NAME = 'LIST_CALENDAR_NAME'

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
// 'amaverify@gmail.com',  'pfutdblf1gi8jmfsvroh76f6jg@group.calendar.google.com'
const initialState = {
  date: new Date(),
  daysInterval: [],
  viewType: 'month',
  events: [],
  inceventsDate: [],
  inceventsDateTime: [],
  nameCaledars: ['IAmA Schedule'],
  idCalendars: ['amaverify@gmail.com'],
  calendarNameList: []
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
        events: [...state.events, ...action.events]
      }
    case 'SET_INC_EVENTS_DATE':
      return {
        ...state,
        inceventsDate: [...state.inceventsDate, ...action.inceventsDate]
      }
    case 'SET_INC_EVENTS_DTE_TIME':
      return {
        ...state,
        inceventsDateTime: [...state.inceventsDateTime, ...action.inceventsDateTime]
      }
    case 'LIST_CALENDAR_NAME':{
      const result = [...state.nameCaledars, action.nameCaledars]
      return {
        ...state,
        nameCaledars: result
      }
    }
    case 'LIST_CALENDAR_IDS': {
      const result = [...state.idCalendars, action.idCalendars]
      return {
        ...state,
        idCalendars: result
      }
    }
    case 'ADD_CALENDARS_LIST_NAME':
      return {
        ...state,
        state,
        calendarNameList: action.calendarNameList
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
  return (dispatch, getState) => {
    const  calendarId  = getState().cln.idCalendars
    console.log('vvvv',  calendarId )
    calendarId.map((id) => {
      console.log('fech', id)
      return fetch(`/api/v1/google/calendar_events/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const events = data.items
          console.log('Events', events)
          const eventdate = getIncEventsDate(events)
          console.log('AllDay Events', eventdate)
          const eventdatetime = getIncEventsDateTime(events)
          console.log('IncEvtDT', eventdatetime)
          dispatch({ type: SET_EVENTS, events })
          dispatch({ type: SET_INC_EVENTS_DATE, inceventsDate: eventdate })
          dispatch({ type: SET_INC_EVENTS_DTE_TIME, inceventsDateTime: eventdatetime })
          // dispatch({ type: SET_CALENDAR_NAME, calendarName: data.summary })
          // dispatch({ type: ADD_CALENDARS_LIST_NAME, calendarNameList: data.summary })
        })
    })
  }
}
export function addNewCalendar(id) {
  return (dispatch) => {
    return fetch(`/api/v1/google/calendar_events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const events = data.items
        const name = data.summary
        console.log('name', name, data.items)
        const eventdate = getIncEventsDate(events)
        const eventdatetime = getIncEventsDateTime(events)
        dispatch({ type: SET_EVENTS, events })
        dispatch({ type: SET_INC_EVENTS_DATE, inceventsDate: eventdate })
        dispatch({ type: SET_INC_EVENTS_DTE_TIME, inceventsDateTime: eventdatetime })
        dispatch({ type: LIST_CALENDAR_NAME, nameCaledars: name })
      })
  }
}

export function updateListCalendars(calendarIds) {
  return (dispatch, getState) => {
    const arrayIdcalendars = getState().cln.idCalendars
    if (!arrayIdcalendars.includes(calendarIds)) {
      dispatch({ type: LIST_CALENDAR_IDS, idCalendars: calendarIds })

      dispatch(addNewCalendar(calendarIds))
    }

  }
  // return { type: ID_CALENDARS_LIST, idCalendars }
  }


