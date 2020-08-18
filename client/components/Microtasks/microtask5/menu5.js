import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="flex flex-col text-sm">
      <div>
        <Link className="link pr-5" to="/microtasks/microtask5/desc5">
          Description
        </Link>
      </div>
      <div>
        <Link className="link pr-5" to="/microtasks/microtask5">
          clock
        </Link>
        <a className="text-sm text-blue-500" href="">
          (code snippet)
        </a>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
