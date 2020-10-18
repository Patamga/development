import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { substuctMonts, addedMonts } from '../../redux/reducers/cln'

const HeaderLeft = () => {
  const dispatch = useDispatch()
  const date = useSelector((store) => store.cln.date)

  return (
    <div className="leftHeader">
      <div className="dateTodaySmall">{format(date, 'MMMM uuuu')}</div>
      <button className="arroWButton" type="button" onClick={() => dispatch(substuctMonts())}>
        &nbsp;&#60;&nbsp;
      </button>
      <button className="arroWButton" type="button" onClick={() => dispatch(addedMonts())}>
        &nbsp;&#62;&nbsp;
      </button>
    </div>
  )
}

HeaderLeft.propTypes = {}

export default React.memo(HeaderLeft)
