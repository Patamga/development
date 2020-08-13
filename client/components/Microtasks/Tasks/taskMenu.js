import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = (props) => {
  const tasks = {
    task1: {desc:'3 колонки разных цветов красный зеленый и синий во весь размер страницы', url:'https://gist.github.com/Patamga/6e776a14e31fb4b457b171e1c3992d18'},
    task2: {desc:'4 строки разных цветов красный зеленый желтый и синий  во весь размер страницы', url:'https://gist.github.com/Patamga/1b9cb9e6dfe3095a6447bd21733041d3'},
    task3: {desc:'4 строки с 4 столбцами с центрированными надписями 1 - 16', url:'https://gist.github.com/Patamga/e999ae7204182733c344911a7b6d970a'},
    task4: {desc:'4 столбца с 4 строками с центрированными надписями 1 - 16', url:'https://gist.github.com/Patamga/ae2c2890671c0a1f8ae8e48d1b81eb77'},
    task5: {desc:'3 строки 2 и 3 строка имеет по три столбца. первая строка имеет столбец с шириной 100px  и второй столбец, который занимает все места на экране', url:'https://gist.github.com/Patamga/6b3286da04f63e2276c216d0b518de76'},
    task6: {desc:'6 карточек шириной 100 пикселей и высотой 100 пикселей, которые перестраиваются в зависимости от ширины страницы с параметром flex-wrap . отступ между карточками два процента марджина. текст внутри каждого элемента должен быть центрирован, как по вертикали, так и по горизонтали', url:'https://gist.github.com/Patamga/e85c96a0d1262b8236a3064996981f78'},
    task7: {desc:'3 строки высотой и шириной - экран  разных цветов красный зеленый и синий. Пользователь должен способен проскролить три экрана независимо от того это мобильный телефон иди десктоп', url:'https://gist.github.com/Patamga/0ac337ee45fec9b7c2e40c4dd89a18a7'},
    task8: {desc:'Черный квадрат 100 на 100 в центре экрана', url:'https://gist.github.com/Patamga/967fd9acf100c21adc924876312c151a'},
    task9: {desc:'Квадрат в центре экрана с тремя невидимыми строками. В каждой строке по квадрату. В первой слева. Во второй по центру. В третьей справа', url:'https://gist.github.com/Patamga/6f347ea5d88b7b1b6637beceb7dcd293'}
  }
  console.log(props)
  return (
  Object.entries(tasks).map(([task, value], index) => {
    console.log(task, value)
    return (
      <div key={index} className="break-all">
        <ul>
          <li>
            <Link className="link pr-5" to={`/microtasks/${task}`}>
              {task}
            </Link>
            <a className="text-sm text-blue-500" href={value.url}>
              (code snippet)
            </a>
          </li>
        </ul>

        {props.params[0] === task && <div className="text-sm"> {value.desc}</div>}
      </div>
    )
  }))
}

Dummy.propTypes = {}

export default React.memo(Dummy)
