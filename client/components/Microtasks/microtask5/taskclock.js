import React, { useState, useEffect } from 'react'

const Dummy = () => {
  const [counter, setCounter] = useState()
  const [enteredMinutes, setEnteredMinutes] = useState()
  const [pause, setPause] = useState(false)
  const [timerId, setTimerId] = useState()

  const buttonClass = 'button-clock text-xl'
  const classDivStart = 'clockContainer'

  const clock = (count) => {
    const minutes = Math.floor(count / 60)
    const seconds = count % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000)
      setTimerId(timer)
    }
  }, [counter])

  useEffect(() => {
    clearTimeout(timerId)
  }, [pause])

  const regular = /^([1-5]?[0-9]|60)?$/
  const onChange = (e) => {
    if (regular.test(e.target.value)) {
      const newValue = e.target.value
      setEnteredMinutes(newValue)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center text-gray-100 py-10 px-4">
      <div className="flex flex-col w-full h-full py-10 px-4 bg-gray-400 m-5 items-center justify-center">
        <div className={typeof counter === 'undefined' ? classDivStart : `${classDivStart} hidden`}>
          <div className="w-2/3 flex p-5 pl-10 text-2xl">
            <div className="w-1/2 flex items-center justify-center">
              <input
                type="number"
                min="0"
                max="60"
                step="1"
                value={enteredMinutes}
                onChange={onChange}
                className=" w-full h-full border-gray-100 bg-gray-900 text-6xl pl-5"
                onKeyDown={(e) => e.key === 'Enter' && setCounter(enteredMinutes * 60 - 1)}
              />
            </div>
            <div className="w-1/2 flex items-center justify-center">in minutes</div>
          </div>
          <div className=" w-1/3 h-full flex items-center justify-center p-5">
            <button
              type="button"
              className={buttonClass}
              onClick={() => {
                if (enteredMinutes > 0) {
                  setCounter(enteredMinutes * 60 - 1)
                }
              }}
            >
              START
            </button>
          </div>
        </div>
        <div className={typeof counter === 'undefined' ? `${classDivStart} hidden` : classDivStart}>
          <div className="w-2/3 flex p-5 pl-10 ">
            <div className="text-6xl pl-5">
              <div> {clock(counter)}</div>
            </div>
          </div>
          <div className=" w-1/3 h-full flex items-center justify-center p-5">
            <button
              type="button"
              className={pause ? buttonClass : `${buttonClass} hidden`}
              onClick={() => {
                setPause(!pause)
                setCounter(enteredMinutes - 1)
              }}
            >
              PLAY
            </button>
            <button
              type="button"
              className={pause ? `${buttonClass} hidden` : buttonClass}
              onClick={() => {
                setPause(!pause)
                setEnteredMinutes(counter)
              }}
            >
              PAUSE
            </button>
          </div>
        </div>
        <div id="finish">
          <div className="w-full h-12 flex items-center justify-center text-red-800 font-bold text-6xl">
            {counter === 0 && `FINISHED`}
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
