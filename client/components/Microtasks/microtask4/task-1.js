import React from 'react'

const Dummy = () => {

  return (
    <div className="flex flex-col h-full w-full bg-white p-2 it">
      <div className="flex h-32 w-full border-2 border-gray-600">&nbsp;</div>
      <div className="flex flex-col  w-full">
        <div className="flex flex-row w-full h-1/3">
          <div className="w-1/3 h-64 mt-2 border-2 border-gray-600">&nbsp;</div>
          <div className="w-1/3 h-64 mt-2 mx-2 border-2 border-gray-600">&nbsp;</div>
          <div className="w-1/3 h-64 mt-2 border-2 border-gray-600">&nbsp;</div>
        </div>
        <div className="flex flex-row w-full h-1/3">
          <div className="w-1/3 h-64 mt-2 border-2 border-gray-600">&nbsp;</div>
          <div className="w-1/3 h-64 mt-2 mx-2 border-2 border-gray-600">&nbsp;</div>
          <div className="w-1/3 h-64 mt-2 border-2 border-gray-600">&nbsp;</div>
        </div>
        <div className="flex flex-row w-full h-1/3">
          <div className="w-1/3 h-64 mt-2 border-2 border-gray-600">&nbsp;</div>
          <div className="w-1/3 h-64 mt-2 mx-2 border-2 border-gray-600">&nbsp;</div>
          <div className="w-1/3 h-64 mt-2 border-2 border-gray-600">&nbsp;</div>
        </div>
      </div>
      <div className="flex h-32 w-full mt-2 border-2 border-gray-600">&nbsp;</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
