import React from 'react'

const Dummy = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full w-full bg-red-200 p-2">
        <div className="flex h-32 w-full border-2 border-gray-600">&nbsp;</div>
          <div className="flex h-full w-full">
            <div className="w-64  m-2 box-border border-2 border-gray-600">&nbsp;</div>
            <div className="w-full  m-2 box-border border-2 border-gray-600">&nbsp;</div>
        </div>
        <div className="flex h-32 w-full border-2 border-gray-600">&nbsp;</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
