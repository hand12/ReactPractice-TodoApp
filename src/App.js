import React, { Component } from 'react';
import './App.css';
import {
  withRouter
} from 'react-router-dom'

import { Main } from "./Main.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
      priorityTasks: [],
      deadTasks: [],
      doneTasks: [],
    }
    this.addTask = this.addTask.bind(this)
  }
  addTask(task) {
    this.state.allTasks.push(task)
    this.setState({
      allTasks: this.state.allTasks,
      priorityTasks: this.setPriority(this.state.allTasks.slice()),
      deadTasks: this.setDeadTasks(this.state.allTasks.slice()),
    })
  }
  setPriority(tasks) {
    tasks.sort(function(a, b){
      if(a.priority < b.priority) return -1
      if(a.priority > b.priority) return 1
      return 0
    })
    return tasks
  }
  setDeadTasks(tasks) {
    var date = new Date()
    return tasks.filter(function(task) {
      var dead_line = new Date(task.dead_line)
      return (dead_line.getTime() < date.getTime())
    })
  }
  render() {
    return (
      <div>
        <Main allTasks={this.state.allTasks} priorityTasks={this.state.priorityTasks} doneTasks={this.state.doneTasks} deadTasks={this.state.deadTasks} addTask={this.addTask.bind(this)} history={this.props.history}/>
      </div>
    )
  }
}

export default withRouter(App);
