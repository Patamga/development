import React from 'react'
import { useSelector } from 'react-redux'

const Dummy = () => {
  const listNames = useSelector((store) => store.cln.nameCaledars)
  console.log('calendarList', listNames)

  return (
    <div>
      {typeof listNames !== 'undefined' &&
        listNames.map((calendar) => {
          return <li key={calendar}>{calendar}</li>
        })}
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
