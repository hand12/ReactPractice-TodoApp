import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom'

import { Board } from "./Board.jsx"
import NewTask from "./NewTask"
import TaskDetail from "./TaskDetail"
import EditTask from "./EditTask"

export const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={ () => (<Board { ...props } />) } />
      <Route path="/new" component={ () => (<NewTask { ...props } />)} />
      <Route path="/tasks/:id/edit" component={ () => (<EditTask { ...props } />)} />
      <Route path="/tasks/:id" component={ () => (<TaskDetail { ...props } />) } />
    </Switch>
  </main>
)
