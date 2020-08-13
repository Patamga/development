import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = (props) => {
  const textMicrotask2 =
    'из реакта надо использовать useState. Сделать две колонки по центру страницы - в каждой колонке есть заголовок - высотой 16rem. Users Companies Задача , сделать так, чтобы для экрана xl показывались оба столбца, для экрана меньше только один. Но по клику на заголовке, экран переключился в противоположный Users - Companies Companies - Users'

  return (
    <div className="flex flex-col text-sm">
      <div>
        <Link className="link pr-2" to="/microtasks/microtask2_1">
          без мoдуля
        </Link>
        <a
          className="text-sm text-blue-500"
          href="https://gist.github.com/Patamga/e299385f2331afd073f519dc2ef3a921"
        >
          (code snippet)
        </a>
      </div>
      <div>
        <Link className="link pr-2" to="/microtasks/microtask2_2">
          c мoдулем
        </Link>
        <a
          className="text-sm text-blue-500"
          href="https://gist.github.com/Patamga/6c51ba3b6c392b2ef336c2214e13ee11"
        >
          (code snippet)
        </a>
      </div>
      {props.params[0] === 'microtask2_1' && textMicrotask2}
      {props.params[0] === 'microtask2_2' && textMicrotask2}
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
