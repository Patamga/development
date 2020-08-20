import React, { useState, useEffect } from 'react'
import SvgPlay from './svgPlay'
import SvgPause from './svgPause'

const Timer = () => {
  const [counter, setCounter] = useState()
  const [enteredMinutes, setEnteredMinutes] = useState()
  const [timerId, setTimerId] = useState()

  const clock = (count) => {
    const minutes = Math.floor(count / 60)
    const seconds = count % 60
    return (
      <div className="text-6xl">
        <div className="w-20">{String(minutes).padStart(2, '0')}</div>
        <div className="mb-2 ">:</div>
        <div className="w-20">{String(seconds).padStart(2, '0')}</div>
      </div>
    )
  }

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000)
      setTimerId(timer)
    }
  }, [counter])

  const re = /^([1-5]?[0-9]|60)?$/
  const onChange = (e) => {
    if (re.test(e.target.value)) {
      const newValue = e.target.value
      setEnteredMinutes(newValue)
    }
  }

  const start = () => {
    if (enteredMinutes > 0) {
      setCounter(enteredMinutes * 60 - 1)
      setEnteredMinutes('')
    }
  }

  const pause = () => {
    clearTimeout(timerId)
    setTimerId(0)
    setEnteredMinutes(counter - 1)
  }

  const play = () => {
    setCounter(enteredMinutes)
    setEnteredMinutes('')
  }

  return (
    <div className="microtask-clock ">
      <div className="clock-body ">
        <div
          className={`clockContainer ${
            typeof counter === 'undefined' || counter <= 0 ? '' : 'hidden'
          }`}
        >
          <div className=" flex">
            <div className="w-full flex">
              <input
                type="number"
                min="0"
                max="60"
                step="1"
                value={enteredMinutes}
                onChange={onChange}
                className=" w-full h-full border-gray-100 bg-gray-900 text-6xl pl-5"
                onKeyDown={(e) => e.key === 'Enter' && start()}
              />
            </div>
          </div>
          <div className=" h-full flex items-center">
            <button type="button" className="button-clock" onClick={() => start()}>
              <SvgPlay />
            </button>
          </div>
        </div>
        <div
          className={`clockContainer ${
            typeof counter === 'undefined' || counter <= 0 ? 'hidden' : ''
          }`}
        >
          <div className="clock flex">{clock(counter)}</div>
          <div className=" w-40 flex items-center justify-center p-5">
            <button
              type="button"
              className={`button-clock ${timerId !== 0 && 'hidden'}`}
              onClick={() => play()}
            >
              <SvgPlay />
            </button>
            <button
              type="button"
              className={`button-clock ${timerId === 0 && 'hidden'}`}
              onClick={() => pause()}
            >
              <SvgPause />
            </button>
          </div>
        </div>
        <div id="finish ">
          <div className="w-full p-5 h-20 flex items-center justify-center text-red-800 font-bold text-6xl">
            {counter === 0 && `FINISHED`}
          </div>
        </div>
      </div>
    </div>
  )
}

Timer.propTypes = {}

export default React.memo(Timer)
