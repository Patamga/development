import React from 'react'

const Dummy = () => {
  return (
    <div className="task-7">
      <div className="red">&nbsp;</div>
      <div className="green">&nbsp;</div>
      <div className="blue">&nbsp;</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
