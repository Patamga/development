import React from 'react'
import { Link, Switch, Route, useParams } from 'react-router-dom'
import Task1 from './Microtasks/Tasks/task1'
import Task2 from './Microtasks/Tasks/task2'
import Task3 from './Microtasks/Tasks/task3'
// import Task4 from './Microtasks/Tasks/task4'
// import Task5 from './Microtasks/Tasks/task5'
// import Task6 from './Microtasks/Tasks/task6'
// import Task7 from './Microtasks/Tasks/task7'
// import Task8 from './Microtasks/Tasks/task8'
// import Task9 from './Microtasks/Tasks/task9'



const Dummy = () => {
  const tasks = {
    task1: {desc:'3 колонки разных цветов красный зеленый и синий во весь размер страницы', url:'https://gist.github.com/Patamga/6e776a14e31fb4b457b171e1c3992d18'},
    task2: {desc:'4 строки разных цветов красный зеленый желтый и синий  во весь размер страницы', url:'https://gist.github.com/Patamga/1b9cb9e6dfe3095a6447bd21733041d3'},
    task3: {desc:'4 строки с 4 столбцами с центрированными надписями 1 - 16', url:'https://gist.github.com/Patamga/e999ae7204182733c344911a7b6d970a'},
    task4: '4 столбца с 4 строками с центрированными надписями 1 - 16',
    task5: '3 строки 2 и 3 строка имеет по три столбца. первая строка имеет столбец с шириной 100px  и второй столбец, который занимает все места на экране',
    task6: '6 карточек шириной 100 пикселей и высотой 100 пикселей, которые перестраиваются в зависимости от ширины страницы с параметром flex-wrap . отступ между карточками два процента марджина. текст внутри каждого элемента должен быть центрирован, как по вертикали, так и по горизонтали',
    task7: '3 строки высотой и шириной - экран  разных цветов красный зеленый и синий. Пользователь должен способен проскролить три экрана независимо от того это мобильный телефон иди десктоп',
    task8: 'Черный квадрат 100 на 100 в центре экрана',
    task9: 'Квадрат в центре экрана с тремя невидимыми строками. В каждой строке по квадрату. В первой слева. Во второй по центру. В третьей справа'
  }

  const params = useParams()
  return (
    <div className="w-screen h-screen flex-col bg-gray-100">
      <div className="flex items-center justify-center h-12 w-full bg-teal-700 text-white font-thin   ">
        MICROTASKS
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-col w-screen h-auto  bg-white md:h-screen md:w-64 p-5 ">
          <div className="">
            mikrotask 1
            {Object.entries(tasks).map(([task, value], index) => {
              console.log(task, value)
              return (
                <div key={index}>
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

                  {params[0] === task && <div className="text-sm"> {value.desc}</div>}
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-screen h-screen  bg-gray-300">
          <Switch>
            <Route exact path="/microtasks/task1" component={() => <Task1 />} />
            <Route exact path="/microtasks/task2" component={() => <Task2 />} />
            <Route exact path="/microtasks/task3" component={() => <Task3 />} />
            {/* <Route exact path="/microtasks/task4" component={() => <Task4 />} /> */}
            {/* <Route exact path="/microtasks/task5" component={() => <Task5 />} /> */}
            {/* <Route exact path="/microtasks/task6" component={() => <Task6 />} /> */}
            {/* <Route exact path="/microtasks/task7" component={() => <Task7 />} /> */}
            {/* <Route exact path="/microtasks/task8" component={() => <Task8 />} /> */}
            {/* <Route exact path="/microtasks/task9" component={() => <Task9 />} /> */}
          </Switch>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
