
import {
  addMonths,
  // addWeeks,
  // differenceInCalendarMonths,
  // differenceInCalendarWeeks,
  differenceInWeeks,
  endOfMonth,
  endOfWeek,
  // isAfter,
  // isBefore,
  // isSameMonth,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  subMonths
} from 'date-fns'
// import { enGB } from 'date-fns/locale'

const DAYS_INTERVAL = 'DAYS_INTERVAL'
const NEW_DATE = 'NEW_DATE'
const SET_ROWS_WEEKS = 'SET_ROWS_WEEKS'

const getEndDate = (date) => endOfWeek(endOfMonth(date), { weekStartsOn: 1 })
const getStartDate = (date) => startOfWeek(startOfMonth(date), { weekStartsOn: 1 })
const getInterval = (startDate, endDate) => eachDayOfInterval({start: startDate, end: endDate})
const getSubMont = (date) => subMonths(date, 1)
const getAddMont = (date) => addMonths(date, 1)
const getRowsWeeks = (startDate, endDate) => differenceInWeeks(endDate, startDate)


const initialState = {
  date: new Date(),
  daysInterval: [],
  rowsWeeks: 4
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
    case 'SET_ROWS_WEEKS':
      return {
        ...state,
        rowsWeeks: action.rowsWeeks
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
    const rows = getRowsWeeks(startDate, endDate)
    console.log('interval', startDate, '-----', endDate)
    dispatch({ type: DAYS_INTERVAL, daysInterval: intrval })
    dispatch({ type: SET_ROWS_WEEKS, rowsWeeks: rows })

  }
}
console.log('interval2', initialState.daysInterval)

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
