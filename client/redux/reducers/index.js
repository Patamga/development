import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cln from './cln'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cln

  })

export default createRootReducer
