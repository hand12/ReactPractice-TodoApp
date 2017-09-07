import React from 'react';
import { Link } from 'react-router-dom'
import { TaskBar } from "./TaskBar.jsx"

export const Board = (props) => (
  <div className="wrapper">
    <div className="task_post_box">
      <Link to='/new'>タスクを追加する</Link>
    </div>
    <TaskBar tasks={props.allTasks} title={"全てのタスク"} />
    <TaskBar tasks={props.priorityTasks} title={"優先度降順"} />
    <TaskBar tasks={props.deadTasks} title={"締め切り過ぎた"} />
    <TaskBar tasks={props.doneTasks} title={"完了した"} />
  </div>
)