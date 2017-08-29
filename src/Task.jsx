import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Task extends Component {
  priorityClass() {
    return "task_priority level" + this.props.task.priority
  }
  formUrl(url) {
    return url + this.props.index
  }
  render() {
    return (
      <div className="task">
        <div className="task_top_box">
          <div className="task_title">
            {this.props.task.body}
          </div>
          <div className={this.priorityClass()}>
            優先度
            <span className="level">{ this.props.task.priority}</span>
          </div>
        </div>
        <div className="task_bottom_box">
          <div className="task_show">
            <Link to={this.formUrl("tasks/")} >
              <button type="submit">詳細</button>
            </Link>
          </div>
          <div className="task_delete">
            <Link to={this.formUrl("delete/")} method="post">
              <button type="submit">削除</button>
            </Link>
          </div>
          <div className="task_done">
            <Link to="/tasks/1/done">
              <button type="submit">済み</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}