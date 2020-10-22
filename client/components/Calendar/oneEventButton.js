import React from 'react'
import { lightFormat } from 'date-fns'

const Dummy = (props) => {
  const parceDate = Date.parse(props.ev.start.dateTime)
  const getClassNameDot = (dataCell) => (dataCell.sequence !== 0 ? 'dotEvent1' : 'dotEvent')

  return (
    <div className="eventOneTime ">
      <div className="dotContainer">
        <div className={getClassNameDot(props.ev)}>&nbsp;</div>
      </div>
      <span className="eventCellTime">{lightFormat(parceDate, 'HH:mm')}</span>
      <span>&nbsp;&nbsp;{props.ev.summary}</span>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
