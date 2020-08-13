import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {

  return (
    <div className="flex flex-col text-sm">
      <div>
        <Link className="link pr-5" to="/microtasks/microtask4-1">
          task-1
        </Link>
        <a
          className="text-sm text-blue-500"
          href="https://gist.github.com/Patamga/ae3c705ee70f13cec7c535bed2a6c64b"
        >
          (code snippet)
        </a>
      </div>
      <div>
        <Link className="link pr-5" to="/microtasks/microtask4-2">
          task-2
        </Link>
        <a
          className="text-sm text-blue-500"
          href="https://gist.github.com/Patamga/96e26fcafa4cfed3e1910c6d34c7fd4b"
        >
          (code snippet)
        </a>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
