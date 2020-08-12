import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import Task1 from './Microtasks/Tasks/task1'
import Task2 from './Microtasks/Tasks/task2'
import Task3 from './Microtasks/Tasks/task3'
import Task4 from './Microtasks/Tasks/task4'
import Task5 from './Microtasks/Tasks/task5'
import Task6 from './Microtasks/Tasks/task6'
import Task7 from './Microtasks/Tasks/task7'
import Task8 from './Microtasks/Tasks/task8'
import Task9 from './Microtasks/Tasks/task9'
import TaskMenu from './Microtasks/Tasks/taskMenu'
import WithOutClassnameModul from './Microtasks/miccrotask2/withOutClassnameModul'
import WithClassnameModul from './Microtasks/miccrotask2/withClassnameModul'
import MenuComponent from './Microtasks/miccrotask2/menu'




const Dummy = () => {
  const params = useParams()
  return (
    <div className="w-screen h-screen flex-col bg-gray-100">
      <div className="flex items-center justify-center h-12 w-full bg-teal-700 text-white font-thin   ">
        MICROTASKS
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-col w-screen h-auto  bg-white md:h-screen md:w-64 p-5 ">
          <div className="flex flex-col text-sm">
            <h1>mikrotask 1</h1>
            <TaskMenu params={params} />
            <h1>microtask 2</h1>
            <MenuComponent params={params} />
            <h1>microtask 3</h1>

          </div>
        </div>
        <div className="w-screen h-screen  bg-gray-300">
          <Switch>
            <Route exact path="/microtasks/task1" component={() => <Task1 />} />
            <Route exact path="/microtasks/task2" component={() => <Task2 />} />
            <Route exact path="/microtasks/task3" component={() => <Task3 />} />
            <Route exact path="/microtasks/task4" component={() => <Task4 />} />
            <Route exact path="/microtasks/task5" component={() => <Task5 />} />
            <Route exact path="/microtasks/task6" component={() => <Task6 />} />
            <Route exact path="/microtasks/task7" component={() => <Task7 />} />
            <Route exact path="/microtasks/task8" component={() => <Task8 />} />
            <Route exact path="/microtasks/task9" component={() => <Task9 />} />
            <Route
              exact
              path="/microtasks/microtask2_1"
              component={() => <WithOutClassnameModul />}
            />
            <Route exact path="/microtasks/microtask2_2" component={() => <WithClassnameModul />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
