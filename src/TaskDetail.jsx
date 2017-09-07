import React, { Component } from 'react';
import { Task } from './Task.js';
import { withRouter, Link } from "react-router-dom";

class TaskDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      task: ''
    }
  }
  render(){
    var task = {}
    const id = this.props.match.params.id
    if(this.props.allTasks.length - 1 >= id) {
      task = this.props.allTasks[id]
    } else {
      task = new Task()
    }
    return(
      <div className="wrapper">
        <div className="task_show">
          <div className="task_title">
            { task.body }
          </div>
          <div className="task_detail">
            { task.detail }
          </div>
          <div className="task_dead_line task_detail_bottom_box">
            締め切り
            <span>{ task.dead_line }</span>
          </div>
          <div className="task_bottons">
            <div className="task_btn">
              <Link to={`/tasks/${id}/edit`}>編集する</Link>
            </div>
            <div className="task_btn">
              <Link to="/">一覧へ</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TaskDetail)

