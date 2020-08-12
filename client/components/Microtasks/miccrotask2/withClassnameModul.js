import React, { useState } from 'react'
import classNames from 'classnames'
// https://github.com/JedWatson/classnames install - yarn add classnames https://github.com/JedWatson/classnames

// вопрос надо ли уберат онклик на мобильных устройствах если да то как?

const Component = () => {
  const classButtonHeader =
    'w-full h-64 flex items-center justify-center bg-blue-700 hover:bg-blue-800 xl:hover:bg-blue-700 text-white text-3xl font-thin center flex-col border border-gray-400 cursor-pointer xl:cursor-default'
  const classContentBlock = 'w-full flex flex-col h-screen border border-gray-400 bg-gray-100 p-5'
  const [toggle, setToggle] = useState(true)
  const classUsers = classNames({
    'flex flex-col': toggle,
    'hidden sm:hidden md:hidden lg:hidden xl:flex flex-col': !toggle,
    'flex-col h-screen m-2 w-full h-screen': true
  })
  const classCompanies = classNames({
    'flex flex-col': !toggle,
    'hidden sm:hidden md:hidden lg:hidden xl:flex flex-col': toggle,
    'h-screen m-2 w-full h-screen': true
  })

  return (
    <div>
      <div className="flex flex-row center p-2">
        <div className={classUsers}>
          <button type="button" className={classButtonHeader} onClick={() => setToggle(!toggle)}>
            USERS
          </button>
          <div className={classContentBlock}>
            <div className="flex">users content</div>
          </div>
        </div>
        <div className={classCompanies}>
          <button type="button" className={classButtonHeader} onClick={() => setToggle(!toggle)}>
            COMPANIES
          </button>
          <div className={classContentBlock}>
            <div className="flex"> companies content</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Component.propTypes = {}

export default Component
