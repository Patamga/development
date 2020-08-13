import React from 'react'

const Dummy = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full w-full bg-red-200 p-2">
        <div className="flex h-32 w-full border-2 border-gray-600">&nbsp;</div>
        <div className="flex h-full w-full">
          <div className="w-64  my-2 mr-2 box-border border-2 border-gray-600">&nbsp;</div>
          <div className="w-full  my-2 box-border border-2 border-gray-600">&nbsp;</div>
        </div>
        <div className="flex h-32 w-full border-2 border-gray-600">&nbsp;</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
