import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { EditForm } from "./EditForm.jsx"

class EditTask extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const id = this.props.match.id
    if(this.props.allTasks.length - 1 >= id) {
      var task = this.props.allTasks[id]
      task.body = this.refs.body.value
      task.detail = this.refs.detail.value
      task.priority = this.refs.priority.value
      task.dead_line = this.refs.dead_line.value

      this.props.editTask(id, task)
    }
    this.props.history.push('/')
  }

  render() {
    return (
      <div id="post_task">
        <div className="post_task_title">
          作成するタスクを入力してください。
        </div>
        <EditForm onSubmitForm={this.handleSubmit} {...this.props} />
      </div>
    )
  }
}

export default withRouter(EditTask)