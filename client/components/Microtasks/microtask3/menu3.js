import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div className="flex flex-col text-sm">
      <div>
        <Link className="link pr-5" to="/microtasks/desc">
          Description
        </Link>
      </div>
      <div>
        <Link className="link pr-5" to="/microtasks/microtask3">
          task
        </Link>
        <a
          className="text-sm text-blue-500"
          href="https://gist.github.com/Patamga/371bef94c39a7cbc5fdbacc03e452b07"
        >
          (code snippet)
        </a>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
