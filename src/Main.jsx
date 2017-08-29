import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'

import { Board } from "./Board.jsx"
import { NewTask } from "./NewTask.jsx"
import { TaskDetail } from "./TaskDetail"

export const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={ () => (<Board allTasks={props.allTasks} priorityTasks={props.priorityTasks} deadTasks={props.deadTasks} doneTasks={props.doneTasks} />) } />
      <Route path="/new" component={ () => (<NewTask addTask={props.addTask} history={props.history} />)} />
      <Route path="/tasks/:id" component={ () => (<TaskDetail />)} />
    </Switch>
  </main>
)
