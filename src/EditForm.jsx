import React, { Component } from 'react';
import { Task } from './Task.js';

export class EditForm extends Component {
  constructor(props){
    super(props);
    this.onChangeField = this.onChangeField.bind(this)
  }
  onChangeField(e) {
    console.log(e.target.name, e.target.value);
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    var task = {}
    const id = this.props.match.params.id
    if(this.props.allTasks.length - 1 >= id) {
      task = this.props.allTasks[id]
    } else {
      task = new Task()
    }
    return (
      <form action="new" method="post">
        <div className="task_input">
          <input type="text" name="body" ref="body" value={task.body} />
        </div>
        <div className="task_input">
          <textarea rows="5" name="detail" onChange={this.onChangeField} ref="detail" value={task.detail} />
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
          <input type="date" name="dead_line" onChange={this.onChangeField} ref="dead_line" />
        </div>
        <div className="task_submit_btn">
          <input type="submit" name="追加する" onClick={ this.props.onSubmitForm.bind(this) } />
        </div>
      </form>
    )
  }
}