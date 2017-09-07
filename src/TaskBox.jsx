import React from 'react';
import { Task } from "./Task.jsx"

export const TaskBox = (props) => (
  <div className="task_box">
    { 
      props.tasks.map((task, index) => {
        return <Task task={task} key={index} index={index} />
      })
    }
  </div>
)
