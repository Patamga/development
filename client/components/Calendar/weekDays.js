import React from 'react'

const Dummy = () => {
  return (
        <div className="weekdays flex w-full ">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
