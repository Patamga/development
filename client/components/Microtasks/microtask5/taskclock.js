import React, { useState, useEffect } from 'react'


const Dummy = () => {
  const [counter, setCounter] = useState()
  const [min, setMin] = useState()
  const [pause, setPause] = useState()
  console.log(pause)


  const [toggleButton, setToggleBatton] = useState(true)
  const [toggltDiv, setToggleDiv] = useState(true)
  const buttonClass = 'button-clock text-xl'
  const imputClass = 'w-2/3 flex p-5 text-2xl'

  const clock = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter])



  const onChange = (e) => {
      const newValue = e.target.value
      setMin(newValue)
  }
  // /^60|[0-5]?\d$/

  return (
    <div className="flex flex-col h-screen w-fuul items-center justify-center text-gray-100">
      <div className=" clockContainer">
        <div className={toggltDiv ? imputClass : `${imputClass} hidden`}>
          <div className="w-1/2 flex items-center justify-center">
            {/* <input type="number" placeholder="x10" step="10" min="0" max="100" id="number"></input> */}
            <input
              type="number"
              min="0"
              max="60"
              className=" w-full h-full border-gray-100 bg-gray-900 text-6xl pl-5"
              onChange={onChange}
              value={min}
            />
          </div>
          <div className="w-1/2 flex items-center justify-center"> min</div>
        </div>
        <div className={toggleButton ? `${imputClass} hidden` : imputClass}>
          <div className="text-6xl pl-5">
            <div> {clock(counter)}</div>
            {/* {counter === 0 ? 'Time over' : <div> {clock(counter)}</div>} */}
          </div>
        </div>
        <div className=" w-1/3 h-full flex items-center justify-center p-5">
          <button
            type="button"
            className={toggleButton ? buttonClass : `${buttonClass} hidden`}
            onClick={() => {
              setToggleBatton(!toggleButton)
              setToggleDiv(!toggltDiv)
              setCounter(min * 60 - 1)
            }}
          >
            START
          </button>
          <button
            type="button"
            className={toggleButton ? `${buttonClass} hidden` : buttonClass}
            onClick={() => {
              
              setPause(counter)
            }}
          >
            PAUSE
          </button>
        </div>
      </div>
      <div className="w-full h-12 flex items-center justify-center text-red-800 test-5xl">
        {counter === 0 && `FINISHED`}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
