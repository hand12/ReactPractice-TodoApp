import React from 'react';
import { withRouter } from "react-router-dom";
import { Form } from "./Form.jsx"

const NewTask = (props) => (
  <div id="post_task">
    <div className="post_task_title">
      作成するタスクを入力してください。
    </div>
    <Form {...props} />
  </div>
)

export default withRouter(NewTask)