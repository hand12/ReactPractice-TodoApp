import React, { Component } from 'react';
import { Task } from "./Task.jsx"

export class Form extends Component {
  constructor(props){
    super(props);
    this.onChangeField = this.onChangeField.bind(this)
  }
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
  onChangeField(e) {
    console.log(e.target.name, e.target.value);
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <form action="new" method="post">
        <div className="task_input">
          <input type="text" name="body" placeholder="タスクのタイトルを入力してください" onChange={this.onChangeField} ref="body" />
        </div>
        <div className="task_input">
          <textarea rows="5" name="detail" placeholder="タスクのタイトルを詳細を入力してください" onChange={this.onChangeField} ref="detail" />
        </div>
        <div className="task_input priority">
          <label htmlFor="priority">優先度を決めてください</label>
          <select name="priority" onChange={this.onChangeField} ref="priority" >
            <option value="1">最低</option>
            <option value="2">低</option>
            <option value="3">普通</option>
            <option value="4">高</option>
            <option value="5">最高</option>
          </select>
        </div>
        <div className="task_input dead_line">
          <label htmlFor="dead_line">締め切りを入力してください</label>
          <input type="date" name="dead_line" onChange={ this.onChangeField } ref="dead_line" />
        </div>
        <div className="task_submit_btn">
          <input type="submit" name="追加する" onClick={ this.handleSubmit.bind(this) } />
        </div>
      </form>
    )
  }
}