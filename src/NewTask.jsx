import React, { Component } from 'react';

import { Task } from "./Task.jsx"
import { Form } from "./Form.jsx"

export class NewTask extends Component {
  handleSubmit(e) {
    e.preventDefault();

    var task = new Task()
    task.body = this.refs.body.value
    task.detail = this.refs.detail.value
    task.priority = this.refs.priority.value
    task.dead_line = this.refs.dead_line.value

    this.props.addTask(task)
    this.props.history.push('/')
  }

  render() {
    return (
      <div id="post_task">
        <div className="post_task_title">
          作成するタスクを入力してください。
        </div>
        <Form onSubmitForm={this.handleSubmit} addTask={this.props.addTask} history={this.props.history}/>
      </div>
    )
  }
}
