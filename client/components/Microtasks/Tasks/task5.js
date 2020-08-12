import React from 'react'

const Dummy = () => {
  return (
    <div className="task-5">
      <div className="red">
        <div className="col1">1</div>
        <div className="col2">2</div>
      </div>
      <div className="green">
        <div>1</div>
        <div> 2</div>
        <div> 3</div>
      </div>
      <div className="yellow">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
