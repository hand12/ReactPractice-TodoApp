import React from 'react';

export const TaskDetail = (props) => (
  <div className="wrapper">
    <div className="task_show">
      <div className="task_title">
        タスクタイトル
      </div>
      <div className="task_detail">
        タスク詳細
      </div>
      <div className="task_dead_line task_detail_bottom_box">
        締め切り
        <span>2017/8/25</span>
      </div>
      <div className="task_bottons">
        <div className="task_btn">
          <a href="/tasks/1/edit">編集する</a>
        </div>
        <div className="task_btn">
          <a href="/">一覧へ</a>
        </div>
      </div>
    </div>
  </div>
)

