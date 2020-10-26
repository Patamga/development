import React from 'react'

const Dummy = (props) => {
  return (
    <div className="eventOne ">
      <div>&nbsp;&nbsp;{props.ev.summary}</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
