import * as taskActions from '../actions/task'

const initialState = {
  allTasks: [],
  priorityTasks: [],
  deadTasks: [],
  doneTasks: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case taskActions.ADD_TASK:
      const allTasks = [...state.allTasks, action.task]
      return {
        allTasks: allTasks,
        priorityTasks: setPriority(allTasks.slice()),
        deadTasks: setDeadTasks(allTasks.slice()),
        doneTasks: [],
      }
    default:
      return state
  }
}

const setPriority = (tasks) => {
  tasks.sort(function(a, b){
    if(a.priority < b.priority) return -1
    if(a.priority > b.priority) return 1
    return 0
  })
  return tasks
}

const setDeadTasks = (tasks) => {
  var date = new Date()
  return tasks.filter(function(task) {
    var dead_line = new Date(task.dead_line)
    return (dead_line.getTime() < date.getTime())
  })
}
