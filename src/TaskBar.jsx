import React from 'react';
import { TaskBox } from "./TaskBox.jsx"

export const TaskBar = (props) => (
  <div className="task_bar">
    <div className="task_bar_title">
      { props.title }
    </div>
    <TaskBox tasks={props.tasks} />
  </div>
)